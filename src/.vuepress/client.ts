import runner from "./components/runner.vue";
import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
	enhance: ({ app }) => {
		app.component("runner", runner);
	},
});
