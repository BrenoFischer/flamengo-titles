/*
0 - 600px: Phone
600 - 800px: Tablet
800 - 1800px: laptop
1800px+: desktop
*/

const sizes = {
  phone: '37.5em', // 600px
  tablet: '50em', // 800px
  laptop: '75em', // 1200px
  desktop: '112.5em',
}

export const devices = {
  phone: `(max-width: ${sizes.phone})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
}
