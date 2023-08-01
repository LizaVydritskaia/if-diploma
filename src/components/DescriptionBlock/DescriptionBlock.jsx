import React, { Fragment, useState } from 'react';

//components
import { Icon } from '../Icon';

//styles
import { useDescriptionBlockStyles } from './DescriptionBlock.styles';

export const DescriptionBlock = ({ description, elementId, title, itemId }) => {
  const classes = useDescriptionBlockStyles();

  const [showDescription, setShowDescription] = useState(false);

  const toggleShowDescription = (id) => {
    if (elementId === id) {
      setShowDescription(!showDescription);
    }
  };

  return (
    <Fragment>
      <div
        className={classes.titleBlock}
        onClick={() => toggleShowDescription(itemId)}
      >
        {showDescription ? (
          <Icon
            className={classes.expandCollapseIcon}
            hrefIconName="#collapse-icon"
          />
        ) : (
          <Icon
            className={classes.expandCollapseIcon}
            hrefIconName="#expand-icon"
          />
        )}
        <p className={classes.title} id={elementId}>
          {title}
        </p>
      </div>
      {showDescription && <p className={classes.description}>{description}</p>}
    </Fragment>
  );
};
