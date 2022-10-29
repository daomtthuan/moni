module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },

  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^~(.+)': './src/\\1',
        },
      },
    ],

    //
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: './src/envs/.env',
        safe: true,
        allowUndefined: false,
      },
    ],
  ],
};
