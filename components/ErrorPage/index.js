import styles from './styles.scss';

const ErrorPage = () => (
  <div className={styles.error}>
    <h1>Whoops something went wrong!</h1>
    <h2>
      Click
      {' '}
      <a href="/">here</a>
      {' '}
      to go home
    </h2>
  </div>
);

export default ErrorPage;
