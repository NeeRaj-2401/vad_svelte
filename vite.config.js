import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{	src: "node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js",	dest: ".", },
				{	src: "node_modules/@ricky0123/vad-web/dist/*.onnx",	dest: ".", },
				{ src: "node_modules/onnxruntime-web/dist/*.wasm", dest: "." },
			]
		})
	],

	resolve: {
		alias: {
			$utils: path.resolve('./src/utils')
		}
	}
});
