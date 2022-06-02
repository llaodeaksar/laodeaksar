import { createStitches, CSS as StitchesCSS } from '@stitches/react';

import { radii } from './tokens/radii';
import { spaces } from './tokens/spaces';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './tokens/typography';
import { zIndices } from './tokens/zIndices';

const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      fonts: {
        ...fonts
      },
      space: {
        ...spaces,
        auto: 'auto'
      },
      sizes: {
        ...spaces,
        full: '100%',
        'w-screen': '100vw',
        'h-screen': '100vh',
        max: 'max-content',
        min: 'min-content'
      },
      fontSizes: {
        ...fontSizes
      },
      lineHeights: {
        ...lineHeights
      },
      letterSpacings: {
        ...letterSpacings
      },
      fontWeights: {
        ...fontWeights
      },
      radii: {
        ...radii
      },
      zIndices: {
        ...zIndices
      }
    }
  });

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from '@stitches/react';

export { getVariant } from './tokens/getVariant';
export { Shadows } from './tokens/shadows';
export { config, css, getCssText, globalCss, keyframes, styled, theme };