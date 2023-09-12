import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts"],
	format: ["cjs", "esm"],
	dts: true,
	target: 'node16',
	splitting: false,
	minify:true,
	treeshake:true,
	clean: true,
	bundle:true,
});