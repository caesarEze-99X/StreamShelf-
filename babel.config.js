module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'babel-plugin-react-compiler',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './src/assets',
          features: './src/features',
          services: './src/services',
          shared: './src/shared',
          tailwind: './tailwind',
          menuAsset: './src/features/menu/assets/icons',
          tailwindConfig: './tailwind.config.js',
          reusableTypes: './src/types',
          reusableHooks: './src/hooks',
          navigation: './src/navigation',
        },
      },
    ],
    'react-native-worklets/plugin',
  ],
};
