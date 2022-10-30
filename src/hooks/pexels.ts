// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

import { Collection, createClient, ErrorResponse } from 'pexels';
import { useCallback, useMemo } from 'react';
import { pexelsConfigs } from '~configs/pexels';

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

/** Pexels client. */
export type PexelsClient = ReturnType<typeof createClient>;

/** Pexels hook. */
export type PexelsHook = () => {
  getCollection: (id: string) => Promise<Collection | null | ErrorResponse>;
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

  const getCollection = useCallback(async (id: string) => await searchCollection(client, id), [client]);

  return {
    getCollection,
  };
};

const searchCollection = async function (client: PexelsClient, id: string, page: number = 1): Promise<Collection | null | ErrorResponse> {
  const result = await client.collections.all({ page, per_page: 50 });
  if (client.typeCheckers.isError(result)) {
    return result;
  }
  console.log(result);

  const collections = result.collections;
  const collection = collections.find((collection) => collection.id === id);
  if (collection) {
    return collection;
  }

  if (result.total_results === page) {
    return null;
  }

  return await searchCollection(client, id, page + 1);
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
