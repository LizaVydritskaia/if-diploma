import React from 'react';

//config
import { configInstagram } from './configInstagram';

//images
import blouse from '../../../assets/images/blouse.jpg';

//components
import { Container } from '../../Container';
import { Icon } from '../../Icon';

//styles
import { useInstagramStyles } from './Instagram.styles';

export const Instagram = () => {
  const classes = useInstagramStyles();

  return (
    <section className={classes.root}>
      <Container>
        <div className={classes.shopTextBlock}>
          <span className={classes.text}>SHOP INSTAGRAM</span>
          <div className={classes.shop}>
            <span className={classes.text}>SHOP</span>
            <Icon
              className={classes.nextArrowIcon}
              hrefIconName="#next-arrow"
            />
          </div>
        </div>
        <div className={classes.images}>
          <img src={blouse} alt="blouse" className={classes.bigImage} />
          <div className={classes.imageList}>
            {configInstagram.map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.id}
                  className={classes.image}
                />
              );
            })}
          </div>
        </div>
        <span className={classes.text}>#MODNIKKY</span>
      </Container>
    </section>
  );
};
