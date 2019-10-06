import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import { Provider } from 'react-redux';

import makeStore from '~store';

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
