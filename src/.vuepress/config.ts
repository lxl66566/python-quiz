import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	locales: {
		"/": {
			lang: "en-US",
			title: "Python quiz",
			description: "Python questions",
		},
		"/zh/": {
			lang: "zh-CN",
			title: "Python 小测",
			description: "Python 问题",
		},
	},

	theme,
});
