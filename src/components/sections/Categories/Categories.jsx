import React from 'react';
import { useDispatch } from 'react-redux';

//config
import { configCategories } from './configCategories';

//slices
import {
  filterProducts,
  setCategory,
  setShowCategory,
} from '../../../store/slices/filter.slice';

//components
import { Container } from '../../Container';
import { Icon } from '../../Icon';
import { Title } from '../../Title';

//styles
import { useCategoriesStyles } from './Categories.styles';

export const Categories = () => {
  const classes = useCategoriesStyles();

  const dispatch = useDispatch();

  const chooseCategory = (id) => {
    dispatch(filterProducts(id));
    dispatch(setCategory(id));
    dispatch(setShowCategory(true));
  };

  return (
    <section>
      <Container>
        <Title contentText="Shop by the" boldText=" Category" />
        <div className={classes.root}>
          {configCategories.map((category) => {
            return (
              <div
                key={category.id}
                className={classes.categoryBlock}
                onClick={() => chooseCategory(category.id)}
              >
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
