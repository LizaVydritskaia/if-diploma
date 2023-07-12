import React from 'react';

//styles
import { useSpriteStyles } from './Sprite.styles';

export const Sprite = () => {
  const classes = useSpriteStyles();

  return (
    <svg className={classes.svgSprite} xmlns="http://www.w3.org/2000/svg">
      <symbol id="logo" viewBox="0 0 471 54">
        <path
          fill="#fff"
          d="M35.55 38 20.71 2.02H.76V52h13.16V11.96h.14L29.88 52h11.34l15.82-40.04h.14V52h13.16V2.02H50.39L35.55 38Zm41.502-10.99c0 10.43 4.2 26.39 31.08 26.39s31.08-15.96 31.08-26.39-4.2-26.39-31.08-26.39-31.08 15.96-31.08 26.39Zm14.42 0c0-7.77 4.34-16.87 16.66-16.87s16.66 9.1 16.66 16.87c0 7.77-4.34 16.87-16.66 16.87s-16.66-9.1-16.66-16.87Zm68.063-15.47h13.86c10.36 0 14.28 5.74 14.28 14.98 0 10.57-4.06 15.96-13.02 15.96h-15.12V11.54ZM145.955 52h32.34c15.68 0 23.38-9.94 23.38-24.99 0-15.05-7.42-24.99-24.57-24.99h-31.15V52Zm105.646-15.12h-.14l-26.25-34.86h-15.75V52h13.16V17.14h.14L249.991 52h14.77V2.02h-13.16v34.86ZM274.266 52h13.58V2.02h-13.58V52Zm36.685-28.49V2.02h-13.58V52h13.58V37.16l7.91-6.79L335.871 52h18.34l-24.71-29.89 22.96-20.09h-18.27l-23.24 21.49Zm60.909 0V2.02h-13.58V52h13.58V37.16l7.91-6.79L396.78 52h18.34l-24.71-29.89 22.96-20.09H395.1l-23.24 21.49ZM434.868 52h13.58V34.57l22.12-32.55h-15.96l-12.95 21.77-12.95-21.77h-15.96l22.12 32.55V52Z"
        />
      </symbol>
      <symbol id="search" viewBox="0 0 24 25">
        <path
          fill="#fff"
          d="m23.706 22.557-5.77-5.79a10.135 10.135 0 0 0 2.293-6.433c0-5.604-4.531-10.15-10.115-10.15C4.526.184 0 4.73 0 10.334c0 5.603 4.526 10.149 10.114 10.149 2.435 0 4.663-.86 6.407-2.295l5.77 5.785a.997.997 0 0 0 1.415 0 1 1 0 0 0 0-1.416Zm-13.592-4.094c-4.472 0-8.106-3.647-8.106-8.13 0-4.482 3.634-8.134 8.106-8.134 4.467 0 8.106 3.652 8.106 8.135 0 4.482-3.639 8.129-8.106 8.129Z"
        />
      </symbol>
      <symbol id="wish-list" viewBox="0 0 28 25">
        <path
          fill="#fff"
          d="M25.094 2.42A7.48 7.48 0 0 0 19.752.202c-2.02 0-3.918.79-5.347 2.224l-.747.749-.758-.76A7.518 7.518 0 0 0 7.547.184 7.49 7.49 0 0 0 2.21 2.402 7.522 7.522 0 0 0 0 7.769c0 2.026.793 3.925 2.222 5.36l10.869 10.906a.778.778 0 0 0 1.1.006l10.891-10.889A7.552 7.552 0 0 0 27.3 7.786a7.516 7.516 0 0 0-2.205-5.366Zm-1.111 9.623L13.64 22.38 3.32 12.025A5.99 5.99 0 0 1 1.564 7.77a5.96 5.96 0 0 1 1.753-4.251 5.94 5.94 0 0 1 4.23-1.76c1.604 0 3.114.627 4.249 1.765l1.307 1.313a.777.777 0 0 0 1.106 0l1.296-1.301a5.958 5.958 0 0 1 4.242-1.766c1.598 0 3.102.628 4.237 1.76a5.984 5.984 0 0 1 1.753 4.257 5.96 5.96 0 0 1-1.753 4.257Z"
        />
      </symbol>
    </svg>
  );
};
