import PropTypes from 'prop-types';
import { forwardRef, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

const Link = forwardRef(({ href, children, ...other }, ref) => {
  const routerLinkRef = useRef(null);

  return (
    <RouterLink
      ref={ref || routerLinkRef}
      to={href}
      {...other}
    >
      {children}
    </RouterLink>
  );
});

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  children: null,
};

export default Link;
