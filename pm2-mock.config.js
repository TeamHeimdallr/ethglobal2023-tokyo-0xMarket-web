module.exports = {
  apps: [
    {
      name: '[react server]',
      script: 'dotenv -e .env.local -- craco start',
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
