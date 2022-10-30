import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef, useCallback, useEffect, useState } from 'react';
import { debug } from '~common/debug';
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
  const { getCollection } = usePexels();

  const [imageBackgroundUrl, setImageBackgroundUrl] = useState<string | undefined>();

  const getBackgroundImage = useCallback(async () => {
    try {
      const collection = await getCollection(pexelsCollections.background);

      debug.log(collection);
    } catch (error) {
      console.error("Couldn't get random image from Pexels.", error);
    }
  }, [getCollection]);

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
