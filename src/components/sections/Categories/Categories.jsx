import React from 'react';

//config
import { configCategories } from './configCategories';

//components
import { Container } from '../../Container';
import { Icon } from '../../Icon';
import { Title } from '../../Title';

//styles
import { useCategoriesStyles } from './Categories.styles';

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
                <Icon
                  className={classes[category.class]}
                  hrefIconName={category.hrefIconName}
                />
                <span className={classes.text}>{category.text}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
