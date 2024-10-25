module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            "@api": "./api",
            "@app": "./app",
            "@assets": "./assets",
            "@components": "./components",
            "@constants": "./constants",
            "@hooks": "./hooks",
            "@services": "./services",
            "@stores": "./stores",
            "@styles": "./styles",
            "@utils": "./utils",
            "@@types": "./types",
          },
        },
      ],
    ],
  };
};
