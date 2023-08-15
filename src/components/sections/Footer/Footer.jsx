import React, { useState } from 'react';
import classNames from 'classnames';

//configs
import {
  contactConfig,
  customerConfig,
  followConfig,
  infoConfig,
} from './footerConfig';

//components
import { Container } from '../../Container';
import { Icon } from '../../Icon';
import { Updates } from '../../Updates';

//styles
import { useFooterStyles } from './Footer.styles';

export const Footer = () => {
  const classes = useFooterStyles();

  const [showCustomerInfo, setShowCustomerInfo] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showFollowInfo, setShowFollowInfo] = useState(true);
  const [showContactInfo, setShowContactInfo] = useState(true);

  const toggleCustomerInfo = () => {
    setShowCustomerInfo(!showCustomerInfo);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const toggleFollowInfo = () => {
    setShowFollowInfo(!showFollowInfo);
  };

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <footer>
      <Container>
        <Updates />
        <div className={classes.footerList}>
          <hr className={classes.footerLine} />
          {customerConfig.map((item) => {
            return (
              <ul key={item.id}>
                <div
                  className={classes.headLinkBlock}
                  onClick={toggleCustomerInfo}
                >
                  {showCustomerInfo ? (
                    <Icon
                      className={classes.expandCollapseIcon}
                      hrefIconName="#expand-icon"
                    />
                  ) : (
                    <Icon
                      className={classes.expandCollapseIcon}
                      hrefIconName="#collapse-icon"
                    />
                  )}
                  <li className={classes.headLink}>{item.headLink}</li>
                </div>
                {item.linkText.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(
                        classes.link,
                        showCustomerInfo ? classes.hideLinkInfo : null,
                      )}
                    >
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
          <hr className={classes.footerLine} />
          {infoConfig.map((item) => {
            return (
              <ul key={item.id}>
                <div className={classes.headLinkBlock} onClick={toggleInfo}>
                  {showInfo ? (
                    <Icon
                      className={classes.expandCollapseIcon}
                      hrefIconName="#expand-icon"
                    />
                  ) : (
                    <Icon
                      className={classes.expandCollapseIcon}
                      hrefIconName="#collapse-icon"
                    />
                  )}
                  <li className={classes.headLink}>{item.headLink}</li>
                </div>
                {item.linkText.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(
                        classes.link,
                        showInfo ? classes.hideLinkInfo : null,
                      )}
                    >
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
          <hr className={classes.footerLine} />
          {followConfig.map((item) => {
            return (
              <ul key={item.id}>
                <div
                  className={classes.headLinkBlock}
                  onClick={toggleFollowInfo}
                >
                  {showFollowInfo ? (
                    <Icon
                      className={classes.expandCollapseIcon}
                      hrefIconName="#expand-icon"
                    />
                  ) : (
                    <Icon
                      className={classes.expandCollapseIcon}
                      hrefIconName="#collapse-icon"
                    />
                  )}
                  <li className={classes.headLink}>{item.headLink}</li>
                </div>
                {item.linkText.map((link, index) => {
                  return (
                    <div
                      key={index}
                      className={classNames(
                        classes.socialMediaBlock,
                        showFollowInfo ? classes.hideLinkInfo : null,
                      )}
                    >
                      <Icon className={classes.icon} hrefIconName={link.icon} />
                      <li className={classes.link}>
                        <a href="#">{link.text}</a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            );
          })}
          <hr className={classes.footerLine} />
          {contactConfig.map((item) => {
            return (
              <ul key={item.id}>
                <div
                  className={classes.headLinkBlock}
                  onClick={toggleContactInfo}
                >
                  {showContactInfo ? (
                    <Icon
                      className={classes.expandCollapseIcon}
                      hrefIconName="#expand-icon"
                    />
                  ) : (
                    <Icon
                      className={classes.expandCollapseIcon}
                      hrefIconName="#collapse-icon"
                    />
                  )}
                  <li className={classes.headLink}>{item.headLink}</li>
                </div>
                {item.linkText.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(
                        classes.link,
                        showContactInfo ? classes.hideLinkInfo : null,
                      )}
                    >
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
          <hr className={classes.footerLine} />
        </div>
      </Container>
    </footer>
  );
};
