import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

//components
import { Container } from '../../Container';
import { Product } from '../../Product';
import { TextMessage } from '../../TextMessage';
import { Title } from '../../Title';

//styles
import { useSearchResultsStyles } from './SearchResults.styles';

export const SearchResults = () => {
  const classes = useSearchResultsStyles();

  const showSearchResults = useSelector(
    (state) => state.search.showSearchResults,
  );
  const searchResults = useSelector((state) => state.search.searchResultList);

  return (
    <>
      {showSearchResults && (
        <section>
          <Container>
            {searchResults.length < 1 ? (
              <TextMessage
                className={classes.messageBlock}
                contentText="No beauty products found"
              />
            ) : (
              <>
                <Title contentText="Search results" />
                <div className={classes.productsList}>
                  {searchResults?.map((product) => {
                    return (
                      <Fragment key={product.id}>
                        <Product
                          imageUrl={product.images[0]}
                          alt={product.name}
                          price={product.price.value}
                          productState={product}
                          path={product.id}
                          linkState={{ ...product }}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </>
            )}
          </Container>
        </section>
      )}
    </>
  );
};
