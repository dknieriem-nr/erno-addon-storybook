function config(entry = []) {
  return [
    ...entry, 
    require.resolve("@newrelic/erno-addon-storybook/preview")
  ];
}

function managerEntries(entry = []) {
  return [
    ...entry, 
    require.resolve("@newrelic/erno-addon-storybook/manager")
  ];
}

module.exports = {
  managerEntries,
  config,
};
