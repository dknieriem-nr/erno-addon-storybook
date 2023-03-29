export const parameters = {
  layout: "fullscreen",
  actions: { disable: true },
  backgrounds: { disable: true },
  toolbars: { disable: true },
  previewTabs: { "storybook/docs/panel": { hidden: true } },
  server: {
    // Replace this with your Drupal site URL, or an environment variable.
    url: 'https://newrelic.ddev.site:9443',
  },
  drupalTheme: 'erno',
  supportedDrupalThemes: {
    erno: { title: 'Erno' },
    gin: { title: 'Gin' },
  },
  // columns: {
  //   active: true,
  //   gridColor: "tomato",
  //   opacity: 50,
  //   breakpoints: [
  //     {
  //       breakpoint: 0,
  //       columns: 4,
  //       gap: 8,
  //     },
  //     {
  //       breakpoint: 768,
  //       columns: 8,
  //       gap: 16,
  //     },
  //     {
  //       breakpoint: 1024,
  //       columns: 12,
  //       gap: 16,
  //       maxWidth: 1224,
  //       gutter: 24,
  //     },
  //   ],
  // },
};
