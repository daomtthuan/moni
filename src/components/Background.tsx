import { Box, IBoxProps } from 'native-base';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { ImageBackground, ImageBackgroundProps, StyleSheet } from 'react-native';
import { getDayInYear } from '~common/date';
import { pexelsCollections } from '~configs/pexels';
import { usePexels } from '~hooks/pexels';
import { useBackgroundColor } from '~hooks/theme';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Background props. */
export type BackgroundProps = IBoxProps & {
  overlay?: boolean;
  overlayOpacity?: IBoxProps['opacity'];
  resizeMode?: ImageBackgroundProps['resizeMode'];
};

/** Background component. */
export type BackgroundComponent = FunctionComponent<BackgroundProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * Background component.
 *
 * @returns The Background app component.
 */
export const Background: BackgroundComponent = function (props) {
  const { overlay = true, overlayOpacity = 0.85, resizeMode = 'cover', ...boxProps } = props;

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
      console.error('Could NOT get background image from Pexels.', error);
    }
  }, [getCollectionById]);

  useEffect(() => {
    getBackgroundImage();
  }, [getBackgroundImage]);

  const backgroundColor = useBackgroundColor();

  return (
    <ImageBackground source={{ uri: imageBackgroundUrl }} resizeMode={resizeMode} style={[styles.imageBackground, { backgroundColor: backgroundColor }]}>
      {overlay && (
        <Box backgroundColor={backgroundColor} opacity={overlayOpacity} flex={1} position="absolute" zIndex={1} top={0} right={0} bottom={0} left={0} />
      )}
      <Box {...boxProps} height="100%" width="100%" position="relative" zIndex={1} top={0} right={0} bottom={0} left={0}>
        {props.children}
      </Box>
    </ImageBackground>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Stylesheet
// --------------------------------------------------------------------------------

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
});
