import React from 'react';

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

  return (
    <footer>
      <Container>
        <Updates />
        <div className={classes.footerList}>
          {customerConfig.map((item) => {
            return (
              <ul key={item.id}>
                <li className={classes.headLink}>{item.headLink}</li>
                {item.linkText.map((link, index) => {
                  return (
                    <li key={index} className={classes.link}>
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
          {infoConfig.map((item) => {
            return (
              <ul key={item.id}>
                <li className={classes.headLink}>{item.headLink}</li>
                {item.linkText.map((link, index) => {
                  return (
                    <li key={index} className={classes.link}>
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
          {followConfig.map((item) => {
            return (
              <ul key={item.id}>
                <li className={classes.headLink}>{item.headLink}</li>
                {item.linkText.map((link, index) => {
                  return (
                    <div key={index} className={classes.socialMediaBlock}>
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
          {contactConfig.map((item) => {
            return (
              <ul key={item.id}>
                <li className={classes.headLink}>{item.headLink}</li>
                {item.linkText.map((link, index) => {
                  return (
                    <li key={index} className={classes.link}>
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};
