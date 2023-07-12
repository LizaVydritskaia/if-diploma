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
      <symbol id="dresses" viewBox="0 0 64 100">
        <path
          fill="#000F08"
          d="M10.915 50.547.57 100h62.86L53.086 50.547a15.645 15.645 0 0 0-.714-2.417l-5.075-13.164 1.76-12.284 4.456.433 2.57-11.067a9.07 9.07 0 0 0-1.275-7.04A9.071 9.071 0 0 0 48.815 1.1L42.418 0l-.738 2.01A10.345 10.345 0 0 1 32 8.768a10.345 10.345 0 0 1-9.679-6.756L21.584 0l-6.397 1.1a9.071 9.071 0 0 0-5.994 3.907 9.07 9.07 0 0 0-1.274 7.04l2.568 11.067 4.457-.433 1.76 12.284-5.075 13.164a15.66 15.66 0 0 0-.714 2.418Zm3.56-32.983-1.55-6.678a3.858 3.858 0 0 1 .55-3.036 3.86 3.86 0 0 1 2.584-1.684l2.33-.401c2.662 4.945 7.892 8.142 13.612 8.142s10.95-3.197 13.612-8.142l2.33.401a3.859 3.859 0 0 1 2.584 1.684c.6.903.795 1.981.55 3.036l-1.55 6.678-4.86-.473-1.9 13.27h-21.53l-1.901-13.27-4.861.473Zm1.949 32.414 4.492-11.651h22.17l4.492 11.651c.201.524.363 1.07.478 1.621l9.049 43.262H6.897L15.945 51.6c.116-.552.277-1.098.479-1.622Z"
        />
      </symbol>
      <symbol id="tees" viewBox="0 0 100 92">
        <path
          fill="#000F08"
          d="M99.163 34.832 90.91 13.519a12.45 12.45 0 0 0-8.245-7.469L60.872 0v12.277c0 5.995-4.877 10.872-10.872 10.872S39.128 18.27 39.128 12.277V0L17.334 6.05a12.451 12.451 0 0 0-8.245 7.47L.837 34.831a12.392 12.392 0 0 0 1.334 11.483 12.392 12.392 0 0 0 10.227 5.39h6.343l-4.022 39.338h70.738l-4.136-39.338h6.281c4.092 0 7.915-2.015 10.227-5.39a12.391 12.391 0 0 0 1.334-11.483Zm-6.455 7.974a6.107 6.107 0 0 1-5.106 2.692H81.68l-1.427-17.55H72.58l5.981 56.887H21.594l5.815-56.887h-7.688l-1.261 17.55h-6.062a6.106 6.106 0 0 1-5.106-2.691 6.107 6.107 0 0 1-.666-5.734l8.252-21.312a6.217 6.217 0 0 1 4.116-3.73L32.92 8.167v4.11c0 9.418 7.662 17.08 17.08 17.08 9.417 0 17.08-7.662 17.08-17.08v-4.11l13.925 3.866a6.217 6.217 0 0 1 4.117 3.729l8.252 21.313a6.105 6.105 0 0 1-.666 5.733Z"
        />
      </symbol>
      <symbol id="swimwear" viewBox="0 0 58 100">
        <path
          fill="#000F08"
          d="M53.662 59.726c-1.9-4.14-4-7.781-5.083-9.583 1.459-3.107 5.213-11.164 6.426-14.352 2.252-5.92-1.645-20.929-2.45-23.878l-.79-2.9-.13.06V0h-5.03v11.466l-13.13 6.244a10.433 10.433 0 0 1-8.998 0l-13.083-6.222V0h-5.03v9.096l-.175-.084-.791 2.901c-.805 2.95-4.703 17.959-2.45 23.878 1.213 3.19 4.97 11.252 6.428 14.356-1.074 1.798-3.157 5.43-5.044 9.564C.518 68.067-.47 73.94 1.307 77.665c2.11 4.42 10.667 8.47 13.536 9.727 1.457 1.856 6.572 8.4 8.721 11.52l.75 1.088h9.225l.747-1.124c2.132-3.215 7.344-9.944 8.853-11.883 2.908-1.186 11.366-4.942 13.515-9.299 1.831-3.713.853-9.59-2.992-17.968ZM29 24.85a5.036 5.036 0 0 1 5.03 5.03A5.036 5.036 0 0 1 29 34.91a5.036 5.036 0 0 1-5.03-5.03A5.036 5.036 0 0 1 29 24.85Zm23.143 50.62c-1.09 2.207-7.495 5.54-11.481 7.097l-.642.25-.424.542c-.256.327-5.79 7.395-8.733 11.611H26.94c-2.915-4.059-8.292-10.877-8.54-11.193l-.402-.508-.595-.251c-4.024-1.699-10.479-5.264-11.556-7.52-1.942-4.07 3.807-16.4 8.509-23.855l.738-1.168-.591-1.25c-.055-.115-5.438-11.502-6.853-15.222C6.537 31.079 8 22.474 9.507 16.16l12.81 6.093c.03.014.06.025.09.04a10.037 10.037 0 0 0-3.466 7.587c0 5.547 4.512 10.06 10.06 10.06 5.547 0 10.06-4.513 10.06-10.06 0-3.034-1.352-5.756-3.482-7.602l.058-.025 12.81-6.093c1.508 6.314 2.97 14.918 1.858 17.843-1.416 3.72-6.8 15.107-6.853 15.222l-.593 1.254.743 1.17c.03.047 2.983 4.712 5.49 10.175 4.254 9.273 3.55 12.632 3.05 13.645Z"
        />
      </symbol>
      <symbol id="denim" viewBox="0 0 46 100">
        <path
          fill="#000F08"
          d="M41.977 6.577V1.195c0-.66-.535-1.195-1.195-1.195H5.218c-.66 0-1.195.535-1.195 1.195v5.383C3.673 8.108.79 21.334.79 41.702v57.103c0 .66.535 1.195 1.195 1.195h18.14c.66 0 1.195-.535 1.195-1.195 0-.409.024-34.38 1.68-56.4 1.655 22.02 1.678 55.991 1.678 56.4 0 .66.535 1.195 1.195 1.195h18.14c.66 0 1.195-.535 1.195-1.195V41.7c0-20.371-2.883-33.6-3.232-35.124ZM6.413 2.39h6.673v3.125H6.413V2.39ZM6.18 7.905h4.218v3.186c0 .142-.028.302-.23.5-.667.655-2.51 1.089-4.868 1.179.361-2.281.683-3.927.88-4.865ZM18.934 97.61H3.18v-2.914h15.767a914.76 914.76 0 0 0-.014 2.915Zm2.87-66.756c-2.214 14.694-2.722 47.486-2.839 61.452H7.891l-.002-.25a1.196 1.196 0 0 0-1.195-1.184h-.012c-.66.007-1.19.547-1.184 1.207l.002.227H3.181V41.7c0-11.394.91-20.503 1.76-26.526.376-.007.762-.023 1.151-.048.018 1.292 1.162 1.284 1.193 1.284.618 0 1.142-.476 1.19-1.103l.04-.494c1.34-.279 2.546-.749 3.329-1.518.618-.607.945-1.37.945-2.205V7.905h9.016v22.948Zm0-25.338h-6.327V2.39h6.328v3.125Zm18.897 7.255c-2.359-.09-4.203-.524-4.87-1.179-.201-.198-.229-.357-.229-.5V7.905h4.218c.197.938.519 2.584.88 4.865ZM32.914 2.39h6.672v3.125h-6.672V2.39Zm-8.719 0h6.329v3.125h-6.329V2.39Zm0 5.515h2.002v9.507c0 1.84-.42 3.19-1.212 3.9-.257.23-.532.376-.79.469V7.905ZM42.82 97.61H27.066c-.002-.697-.006-1.686-.014-2.914h15.767v2.915Zm0-5.304h-2.32l.003-.227c.006-.66-.524-1.2-1.184-1.207h-.011c-.655 0-1.19.528-1.196 1.184l-.002.25H27.034c-.116-13.967-.624-46.758-2.839-61.452v-6.605a4.812 4.812 0 0 0 2.338-1.114c1.363-1.19 2.054-3.115 2.054-5.722V7.905h4.625v3.186c0 .835.326 1.598.944 2.205.784.77 1.991 1.24 3.331 1.519.013.15.026.303.038.464a1.195 1.195 0 0 0 1.19 1.103c.29 0 1.18-.09 1.192-1.255.39.025.776.04 1.153.048.85 6.023 1.758 15.132 1.758 26.526v50.604Z"
        />
      </symbol>
      <symbol id="tops" viewBox="0 0 72 100">
        <path
          fill="#000F08"
          d="M71.138 90.274C66.328 78.098 56.707 62.98 54.976 60.3l2.527-18.757c4.34-4.71 3.388-11.772 2.992-13.832l2.3-3.62c.093-.148.157-.312.187-.484L65.983 6.2a1.322 1.322 0 0 0-.98-1.506C59.07 3.203 52.943.169 52.882.139a1.322 1.322 0 0 0-1.768.585c-3.33 6.562-14.956 6.295-15.074 6.29-.015 0-.029.004-.044.004-.013 0-.024-.004-.037-.004-.116.004-11.743.272-15.074-6.29a1.322 1.322 0 0 0-1.767-.585c-.061.03-6.179 3.062-12.121 4.555a1.322 1.322 0 0 0-.98 1.506l3 17.407c.03.172.094.336.187.484l2.306 3.63c-.366 2.056-1.254 9.2 2.987 13.821L17.023 60.3C15.293 62.98 5.672 78.098.862 90.274c-.157.397-.112.845.12 1.203.29.45 2.87 4.015 11.5 4.015.41 0 .834-.01 1.271-.027-.143.587-.285 1.155-.423 1.7a1.321 1.321 0 0 0 .87 1.582c.23.075 3.895 1.253 8.266 1.253 2.286 0 4.766-.323 7.046-1.293a1.32 1.32 0 0 0 .802-1.232h11.372a1.32 1.32 0 0 0 .801 1.232c2.281.97 4.76 1.293 7.046 1.293 4.37 0 8.037-1.178 8.267-1.253.661-.217 1.041-.908.87-1.581-.138-.545-.28-1.113-.424-1.7.437.017.862.026 1.272.026 8.63 0 11.21-3.566 11.5-4.015.232-.358.276-.806.12-1.203Zm-54.454-50.27c-3.12-3.12-3.007-8.223-2.72-10.743l1.589.592a1.32 1.32 0 0 0 1.7-.778 1.322 1.322 0 0 0-.777-1.7l-2.689-1-2.21-3.479-2.75-15.954c4.322-1.212 8.44-3.017 10.357-3.906 4.573 6.792 15.917 6.645 16.817 6.621.916.023 12.246.166 16.815-6.621 1.916.89 6.035 2.694 10.357 3.906l-2.75 15.954-2.21 3.478-2.689 1.001a1.322 1.322 0 1 0 .923 2.478l1.614-.601c.316 2.481.474 7.534-2.745 10.753a1.322 1.322 0 0 0-.375.758l-2.495 18.524h-1.054V44.841a1.322 1.322 0 1 0-2.644 0v14.446H23.252V44.841a1.322 1.322 0 0 0-2.644 0v14.446h-1.053l-2.496-18.524a1.323 1.323 0 0 0-.375-.758ZM3.632 90.47c4.706-11.546 13.537-25.512 15.485-28.54h1.491v1.63c-.314 1.591-3.514 17.752-6.212 29.227-6.745.404-9.735-1.433-10.764-2.317Zm40.737 6.126 1.17-25.9a1.322 1.322 0 0 0-2.64-.12l-1.097 24.255H30.198L29.1 70.577a1.322 1.322 0 0 0-2.641.12l1.171 25.899c-4.216 1.415-9.194.507-11.425-.038 2.955-11.953 6.979-32.402 7.02-32.614.017-.084.025-.17.025-.255V61.93h25.497v1.758c0 .085.008.17.025.255.041.212 4.066 20.663 7.02 32.616-2.228.547-7.198 1.457-11.424.036Zm13.235-3.81c-2.698-11.473-5.898-27.635-6.213-29.226v-1.63h1.492c1.948 3.028 10.78 16.995 15.485 28.54-1.029.883-4.019 2.721-10.764 2.317Z"
        />
      </symbol>
      <symbol id="beauty" viewBox="0 0 70 100">
        <path
          fill="#000F08"
          d="M67.401 55.644h-2.688v-3.82a2.201 2.201 0 0 0-2.202-2.201H44.588a2.201 2.201 0 0 0-2.201 2.201v3.82h-2.69a2.201 2.201 0 0 0-2.2 2.201v34.506c0 4.218 3.43 7.649 7.649 7.649h16.808c4.218 0 7.65-3.431 7.65-7.65V57.846a2.202 2.202 0 0 0-2.203-2.201ZM46.79 54.026h13.52v1.618H46.79v-1.618ZM65.2 92.351a3.25 3.25 0 0 1-3.246 3.246H45.145a3.25 3.25 0 0 1-3.246-3.246V60.046h23.3l.001 32.305ZM29.905 60.845h-2.689V28.43a2.201 2.201 0 0 0-2.2-2.201h-.288V10.242c0-.093-.006-2.314-.583-4.567C22.88.738 20.01 0 18.41 0c-2.011 0-4.178 1.81-7.246 6.051-1.898 2.624-3.419 5.206-3.483 5.315a2.2 2.2 0 0 0-.303 1.115v13.747h-.287a2.201 2.201 0 0 0-2.201 2.202v32.415h-2.69A2.201 2.201 0 0 0 0 63.044V92.35C0 96.568 3.431 100 7.65 100h16.807c4.218 0 7.65-3.432 7.65-7.65V63.046a2.202 2.202 0 0 0-2.202-2.201Zm-18.123-47.76c2.51-4.175 5.545-8.074 6.754-8.668 1.07.244 1.782 3.59 1.79 5.826v15.986h-8.544V13.085ZM9.293 30.632h13.52v30.214H9.294V30.63Zm18.41 61.72a3.25 3.25 0 0 1-3.246 3.246H7.65a3.25 3.25 0 0 1-3.246-3.246V65.248h23.3V92.35Z"
        />
      </symbol>
    </svg>
  );
};
