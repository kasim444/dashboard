const size = {
  mobile: '639p',
  laptop: '1367px',
  desktop: '1440px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
