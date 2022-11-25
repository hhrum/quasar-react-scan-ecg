const path = require("path");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "@Assets/styles/main.scss";'
      }
    }
  },
  webpack: {
    alias: {
      "@Assets": path.resolve(__dirname, "src/assets/"),
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Constants": path.resolve(__dirname, "src/constants/"),
      "@Hooks": path.resolve(__dirname, "src/hooks/"),
      "@Layouts": path.resolve(__dirname, "src/layouts/"),
      "@Pages": path.resolve(__dirname, "src/pages/"),
      "@Types": path.resolve(__dirname, "src/types/"),
      "@UIkit": path.resolve(__dirname, "src/UIkit/"),
      "@Utils": path.resolve(__dirname, "src/utils/")
    }
  }
};
