import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
}

export default GlobalStyle;
