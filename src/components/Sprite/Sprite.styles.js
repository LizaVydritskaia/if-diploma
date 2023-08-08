import { createUseStyles } from 'react-jss';

const spriteStyles = {
  svgSprite: {
    position: 'absolute',
    visibility: 'hidden',
    width: 0,
    height: 0,
  },
};

export const useSpriteStyles = createUseStyles(spriteStyles, {
  name: 'Sprite',
});
