import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
	hostname: "https://lxl66566.github.io/python-quiz/zh",
	author: {
		name: "lxl66566",
		url: "https://github.com/lxl66566",
	},

	iconAssets: "fontawesome-with-brands",
	logo: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
	repo: "lxl66566/python-quiz",
	docsDir: "src",
	locales: {
		"/": {
			navbar: enNavbar,
			// sidebar: enSidebar,
			metaLocales: {
				editLink: "Edit this page on GitHub",
			},
		},

		"/zh/": {
			navbar: zhNavbar,
			// sidebar: zhSidebar,
			metaLocales: {
				editLink: "在 GitHub 上编辑此页",
			},
		},
	},

	plugins: {
		components: {
			components: ["Badge", "VPCard"],
		},
		markdownImage: {
			figure: true,
			lazyload: true,
			size: true,
		},
		markdownTab: true,
		mdEnhance: {
			align: true,
			attrs: true,
			component: true,
			demo: true,
			include: true,
			mark: true,
			plantuml: true,
			spoiler: true,
			stylize: [
				{
					matcher: "Recommended",
					replacer: ({ tag }) => {
						if (tag === "em")
							return {
								tag: "Badge",
								attrs: { type: "tip" },
								content: "Recommended",
							};
					},
				},
			],
			sub: true,
			sup: true,
			tasklist: true,
			vPre: true,

			// Install chart.js before enabling it
			// chart: true,

			// insert component easily

			// Install echarts before enabling it
			// echarts: true,

			// Install flowchart.ts before enabling it
			// flowchart: true,

			// gfm requires mathjax-full to provide tex support
			// gfm: true,

			// Install mermaid before enabling it
			// mermaid: true,

			// playground: {
			//   presets: ["ts", "vue"],
			// },

			// Install @vue/repl before enabling it
			// vuePlayground: true,

			// Install sandpack-vue3 before enabling it
			// sandpack: true,
		},

		// Install @vuepress/plugin-pwa and uncomment these if you want a PWA
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cacheImage: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },

		shiki: {
			theme: "nord",
		},
	},
});
