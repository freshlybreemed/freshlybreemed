import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

import { initGA, logPageView } from '../lib/helpers';
import { styles } from '../constants/styles';

export default class Wrapper extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  renderHeader() {
    if (this.props.data.header) {
      return (
        <header className="pv6 cf">
          <div className="measure-wide mt5 mb4">
            <h2 className="f3 f2-ns mv0 near-black mb0">
              {this.props.data.header}
            </h2>
          </div>
        </header>
      );
    }
    return null;
  }

  render() {
    const { data, className, children: content } = this.props;

    const title = data.title ? `Ebrima Jobe | ${data.title}` : `Ebrima Jobe`;
    const cls = className ? `${className}` : '';
    const description = data.description ? data.description : 'Freshly Breemed';

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta name="twitter:title" content={`Freshly Breemed`} />
          <meta name="twitter:description" content={description} />
        </Head>
        {/* {this.renderHeader()} */}
        <div>
          <main>
            <Navigation />
            {content}
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

Wrapper.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  children: PropTypes.node,
};
