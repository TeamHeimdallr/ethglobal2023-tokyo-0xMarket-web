module.exports = {
  apps: [
    {
      name: '[storybook server]',
      script: 'sb dev -p 6006 --quiet',
      ignore_watch: ['.'],
      env: {
        REACT_APP_ENABLE_MOCK: true,
      },
    },
    {
      name: '[build tailwind]',
      script: 'postcss ./src/styles/base/index.css --output ./src/styles/build/index.css',
      autorestart: false,
      watch: ['./tailwind.config.js', '.src/styles/base/**/*.css'],
    },
  ],
};
