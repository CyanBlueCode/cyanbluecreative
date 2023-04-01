export const isMobile = () => {
  const userAgent = window?.navigator?.userAgent;
  return !!(
    (!!userAgent &&
      userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) ||
    window.outerWidth <= 776 ||
    window.innerWidth <= 776
  );
};
