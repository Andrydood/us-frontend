import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import Head from 'next/head';
import App from 'next/app';
import { Provider } from 'react-redux';
import makeStore from '~store';
import '~lib/shared.scss';

if (process.env.NODE_ENV !== 'production') {
  Router.events.on('routeChangeComplete', () => {
    const path = '/_next/static/css/styles.chunk.css';
    // eslint-disable-next-line no-undef
    const chunksNodes = document.querySelectorAll(`link[href*="${path}"]:not([rel=preload])`);
    if (chunksNodes.length) {
      const timestamp = new Date().valueOf();
      chunksNodes[0].href = `${path}?ts=${timestamp}`;
    }
  });
}

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
          {/* INSERT_GOOGLE_KEY_HERE */}
          <script src="https://maps.googleapis.com/maps/api/js?key=INSERT_GOOGLE_KEY_HERE&libraries=places" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
