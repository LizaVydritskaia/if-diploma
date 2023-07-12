import React from 'react';
import { Container } from '../../Container';
import { configCategories } from './configCategories';
import { Icon } from '../../Icon';
import { useCategoriesStyles } from './Categories.styles';
import { Title } from '../../Title';

export const Categories = () => {
  const classes = useCategoriesStyles();

  return (
    <section>
      <Container>
        <Title contentText="Shop by the" boldText=" Category" />
        <div className={classes.root}>
          {configCategories.map((category) => {
            return (
              <div key={category.id} className={classes.categoryBlock}>
                <Icon className={classes[category.class]} hrefIconName={category.hrefIconName} />
                <span className={classes.text}>{category.text}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
