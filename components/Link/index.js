import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({
  children,
  setPageType,
  pageType,
  href,
  as,
  className,
}) => (
  <NextLink href={href} as={as}>
    <a tabIndex="0" role="link" className={className} onKeyPress={() => setPageType(pageType)} onClick={() => setPageType(pageType)}>
      {children}
    </a>
  </NextLink>
);

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  setPageType: PropTypes.func,
  pageType: PropTypes.string,
  href: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  setPageType: () => {},
  pageType: null,
  href: null,
  as: null,
  className: null,
};

export default Link;
