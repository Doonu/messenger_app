import { useMediaQuery } from 'react-responsive';

import { breakpoints } from '../shared/styles/breakpoints';

const useDevice = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.mobile})` });
  const isTablets = useMediaQuery({ query: `(max-width: ${breakpoints.tablet})` });
  const isLaptops = useMediaQuery({ query: `(max-width: ${breakpoints.oldDesktop})` });
  const isOldDesktop = useMediaQuery({ query: `(max-width: ${breakpoints.desktop})` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${breakpoints.bigDesktop})` });

  return { isMobile, isTablets, isLaptops, isOldDesktop, isDesktop };
};

export default useDevice;
