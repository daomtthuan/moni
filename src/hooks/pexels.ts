// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

import { Collection, createClient, ErrorResponse, Photo } from 'pexels';
import { useCallback, useMemo } from 'react';
import { pexelsConfigs } from '~configs/pexels';

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

/** Pexels client. */
export type PexelsClient = ReturnType<typeof createClient>;

/** Collection response. */
export type CollectionResponse = ErrorResponse | { collection: Collection };

/** Photo response. */
export type PhotoResponse = ErrorResponse | { photo: Photo };

/** Pexels hook. */
export type PexelsHook = () => {
  /** Check result is error or not. */

  isError: PexelsClient['typeCheckers']['isError'];

  /**
   * Get collection by id.
   *
   * @param id The collection id to search.
   *
   * @returns The collection.
   */
  getCollectionById: (id: string) => Promise<CollectionResponse>;

  /**
   * Get photo in collection by index.
   *
   * @param collectionId The collection id.
   * @param index The index of photo in collection.
   *
   * @returns The photo.
   */
  getPhotoByIndex: (collectionId: string, index: number) => Promise<PhotoResponse>;
};

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a Pexels client.
 *
 * @returns The Pexels client.
 */
export const usePexels: PexelsHook = function () {
  const client = useMemo(() => createClient(pexelsConfigs.apiKey), []);

  return {
    isError: client.typeCheckers.isError,

    getCollectionById: useCallback(async (id: string) => await searchCollectionById(client, id), [client]),

    getPhotoByIndex: useCallback(async (collectionId: string, index: number) => await searchPhotoByIndex(client, collectionId, index), [client]),
  };
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Modules
// --------------------------------------------------------------------------------

/**
 * Search collection by id.
 *
 * @param client The Pexels client.
 * @param id The collection id to search.
 * @param page The current page.
 *
 * @returns The collection.
 */
const searchCollectionById = async function (client: PexelsClient, id: string, page: number = 1): Promise<CollectionResponse> {
  const result = await client.collections.all({
    page,
    per_page: pexelsConfigs.perPage,
    date: Date.now(),
  });
  if (client.typeCheckers.isError(result)) {
    return result;
  }

  const collections = result.collections;
  const collection = collections.find((collection) => collection.id === id);
  if (collection) {
    return { collection };
  }

  if (result.total_results === page) {
    return {
      error: 'Collection not found.',
    } as ErrorResponse;
  }

  return await searchCollectionById(client, id, page + 1);
};

const searchPhotoByIndex = async function (client: PexelsClient, collectionId: string, index: number) {
  const result = await client.collections.media({
    id: collectionId,
    page: Math.ceil(index / pexelsConfigs.perPage),
    per_page: pexelsConfigs.perPage,
    type: 'photos',
    date: Date.now(),
  });
  if (client.typeCheckers.isError(result)) {
    return result;
  }

  const photo = result.media[index % pexelsConfigs.perPage] as Photo;

  return { photo };
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
