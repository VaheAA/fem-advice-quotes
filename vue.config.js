const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/style.scss"; @import "@/assets/scss/colors.scss"; @import "@/assets/scss/reset.scss"; @import "@/assets/scss/breakpoints.scss";  @import "@/assets/scss/transitions.scss";`
      }
    }
  }
});
