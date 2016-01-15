import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { JoinUs } from 'components/JoinUs';

/* component styles */
import styles from './styles';

const metaData = {
  title: 'Join',
  description: 'I\'m a description. I can to create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class Join extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <DocumentMeta { ...metaData } />
        <div className="header-green-layer" />
        <JoinUs />
      </section>
    );
  }
}
