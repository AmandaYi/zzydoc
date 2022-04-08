/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebarsConfig can be generated from the filesystem, or explicitly defined here.

 Create as many sidebarsConfig as you want.
 */

// @ts-check

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsConfig = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	JS: [
		{
			type: 'category',
			label: 'VUE',
			items: ['js/vue/vue2', 'js/vue/vue3'],
		},
		{
			type: 'category',
			label: 'WebPack',
			items: ['js/webpack/index']
		},
		{
			type: "category",
			label: "TypeScript",
			items: ['js/typescript/base', 'js/typescript/object']
		},
		{
			type: 'category',
			label: '源码笔记',
			items: ['js/webpack/index']
		}
	],

	JSCodeDesign: [
		{
			type: "category",
			label: '前端工具库设计',
			items: ['js/design/package', 'js/design/package-ts', 'js/design/package-doc', 'js/design/package-test']
		}
	],


	Java: [
		{
			type: 'category',
			label: 'ORM',
			items: ['orm/mybatis/index'],
		},
	],
};

module.exports = sidebarsConfig;
