import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const globalStyle = css`
  ${emotionNormalize}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    font-family: NanumSquareRound, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
    font-size: 62.5%;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }

  textarea:focus {
    outline: none;
  }
`;

export default globalStyle;
