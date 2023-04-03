function config(entry = []) {
  return [
    ...entry, 
    require.resolve('@lullabot/storybook-drupal-addon/preview'), // <-- library's preview preset
    require.resolve("./dist/esm/preset/preview")
  ];
}

function managerEntries(entry = []) {
  return [
    ...entry, 
    require.resolve('@lullabot/storybook-drupal-addon/manager'),
    require.resolve("./dist/esm/preset/manager")
  ];
}

module.exports = {
  managerEntries,
  config,
};
