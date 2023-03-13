import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
  );
}

export default GlobalStyle;
