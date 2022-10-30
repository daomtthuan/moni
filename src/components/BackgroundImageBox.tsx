import { Box, IBoxProps } from 'native-base';
import { FunctionComponent } from 'react';
import { ImageBackground, ImageBackgroundProps, StyleSheet } from 'react-native';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** BackgroundImageBox props. */
export type BackgroundImageBoxProps = IBoxProps & {
  source: ImageBackgroundProps['source'];
  resizeMode?: ImageBackgroundProps['resizeMode'];
};

/** BackgroundImageBox component. */
export type BackgroundImageBoxComponent = FunctionComponent<BackgroundImageBoxProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * BackgroundImageBox component.
 *
 * @returns The Boư with background image component.
 */
export const BackgroundImageBox: BackgroundImageBoxComponent = function (props) {
  const { source, resizeMode = 'cover', ...boxProps } = props;

  return (
    <Box {...boxProps}>
      <ImageBackground source={source} resizeMode={resizeMode} style={styles.imageBackground}>
        {props.children}
      </ImageBackground>
    </Box>
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
    width: '100%',
    height: '100%',
  },
});

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
