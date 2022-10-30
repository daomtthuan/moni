import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef, useCallback, useEffect, useState } from 'react';
import { getDayInYear } from '~common/date';
import { BackgroundImageBox } from '~components/BackgroundImageBox';
import { pexelsCollections } from '~configs/pexels';
import { usePexels } from '~hooks/pexels';
import { GuestScreenProps } from '~routers/Guest';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** WelcomeScreen props. */
export type WelcomeScreenProps = PropsWithoutRef<GuestScreenProps<'Welcome'>>;

/** WelcomeScreen component. */
export type WelcomeScreenComponent = FunctionComponent<WelcomeScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * WelcomeScreen component.
 *
 * @returns The Welcome screen component.
 */
export const WelcomeScreen: WelcomeScreenComponent = function () {
  const { getCollectionById, getPhotoByIndex, isError } = usePexels();

  const [imageBackgroundUrl, setImageBackgroundUrl] = useState<string | undefined>();

  const getBackgroundImage = useCallback(async () => {
    try {
      const collectionResult = await getCollectionById(pexelsCollections.background);
      if (isError(collectionResult)) {
        throw collectionResult.error;
      }
      const collection = collectionResult.collection;

      // Get image by day in year
      const photoIndex = getDayInYear() % collection.photos_count;
      const photoResult = await getPhotoByIndex(collection.id, photoIndex);
      if (isError(photoResult)) {
        throw photoResult.error;
      }

      const photo = photoResult.photo;
      setImageBackgroundUrl(photo.src.large);
    } catch (error) {
      console.error("Couldn't get background image from Pexels.", error, JSON.stringify({ collectionId: pexelsCollections.background }, null, 2));
    }
  }, [getCollectionById]);

  useEffect(() => {
    getBackgroundImage();
  }, [getBackgroundImage]);

  return (
    <BackgroundImageBox flex={1} source={{ uri: imageBackgroundUrl }} resizeMode="cover">
      <VStack flex={1}>
        <Text>{imageBackgroundUrl}</Text>
      </VStack>
    </BackgroundImageBox>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
