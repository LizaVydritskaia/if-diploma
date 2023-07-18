import React from 'react';

//components
import { Header } from '../Header';

//styles
import { useTopSectionStyles } from './TopSection.styles';

export const TopSection = () => {
  const classes = useTopSectionStyles();

  return (
    <section className={classes.root}>
      <Header />
      <div className={classes.collectionBlock}>
        <h3 className={classes.collectionTitle}>NEW COLLECTION</h3>
        <p className={classes.collectionText}>
          Our easiest chuck-on-and-go staples come with a serious style heritage
          that’s liberating, sexy, comfy and supremely cool.
        </p>
        <button className={classes.button}>SHOP NEW ARRIVALS</button>
      </div>
    </section>
  );
};
