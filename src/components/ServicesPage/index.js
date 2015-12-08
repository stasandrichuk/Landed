import React, { Component } from 'react';

/* components */
import { IntroImage } from '../IntroImage';
import { Lease } from './_lease';

/* component styles */
import styles from './styles';

export class ServicesPage extends Component {
  render() {
    const intro = {
      title: 'How can Landed help?',
      text: 'We make sharing your home investment delightfully simple.',
      image: 'top-about.png',
    };

    return (
      <section className={ `${styles}` }>
        <IntroImage { ...intro } />
        <Lease />
      </section>
    );
  }
}