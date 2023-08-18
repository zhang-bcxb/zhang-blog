import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "编程细胞的博客",
  description: "编程细胞的博客",

  theme,
  plugins: [
    // 注册全局组件的插件
    // registerComponentsPlugin({
    //   componentsDir: path.resolve(__dirname, "./components"),
    // }),
    // 搜索插件
    searchPlugin({
      //多语言支持
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      // 最大推荐个数
      maxSuggestions: 7,
      // 排除首页
      isSearchable: (page) => page.path !== "/",
    }),
  ],

  shouldPrefetch: false,
});
