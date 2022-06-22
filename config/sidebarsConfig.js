/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebarsConfig can be generated from the filesystem, or explicitly defined here.

 Create as many sidebarsConfig as you want.
 */

// @ts-check
const path = require("path");
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsConfig = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	JS: [
		{
			type: 'category',
			label: '源码笔记',
			items: ['js/webpack/index']
		}
	],
	JSWebpack5: [
		{
			type: 'category',
			label: 'WebPack',
			items: ['js/webpack/index']
		},
	],
	JSVue: [
		{
			type: 'category',
			label: 'VUE',
			items: ['js/vue/vue2'],
		}
	],
	RN: [
		{
			type: 'category',
			label: 'React Native',
			items: ['js/rn/base', 'js/rn/rnenv','js/rn/flexbox','js/rn/font', 'js/rn/codepush'],
		}
	],
	JSReact: [
		{
			type: 'category',
			label: 'React',
			items: ['js/react/base', 'js/react/normal', 'js/react/life' ,'js/react/extension', 'js/react/reactRouter6'],
		}
	],
	JSTypeScript: [
		{
			type: "category",
			label: "TypeScript",
			items: ['js/typescript/base', 'js/typescript/object']
		}
	],
	JSCodeDesign: [
		{
			type: "category",
			label: '前端工具库设计',
			items: ['js/design/package', 'js/design/package-ts', 'js/design/package-doc', 'js/design/package-test']
		}
	],

	JSNormal: [
		{
			type: 'autogenerated',
			dirName: "js/normal"
		}
	],
	// JS视频直播
	JSVideo: [
		{
			type: 'autogenerated',
			dirName: "js/video"
		}
	],
	JSWebpack3: [
		{
			type: 'autogenerated',
			dirName: "js/webpack3"
		}
	],
	Structure: [
		{
			type: "doc",
			id: 'structure/analyse',
			label: '算法分析',
		},
		{
			type: "doc",
			id: 'structure/linear04',
			label: '跳跃表效率分析',
		},
		{
			type: 'category',
			label: "线性结构",
			collapsed: true,
			items: [{
				type: 'category',
				label: "栈",
				collapsed: true,
				items: ['structure/linear01', 'structure/arrayStackImpl', 'structure/linkedListStackImpl']
			},
				{
					type: "category",
					label: "链表",
					collapsed: true,
					items: ['structure/linear02', 'structure/lineOneWayLinkedListImpl', 'structure/lineTwoWayLinkedListImpl', 'structure/algorithmLineCircleLinkedListImpl']
				},
				{
					type: "category",
					label: '稀疏数组',
					collapsed: true,
					items: ['structure/sparseArray'],
				},

				{
					type: "category",
					label: '队列',
					collapsed: true,
					items: ['structure/linear03', 'structure/queueArrayImpl', 'structure/queueLinkedImpl'],
				},
			],


		},
		// {
		// 	type: 'category',
		// 	label: "非线性结构",
		// 	items: []
		// }
	],
	// StructureStack: [
	// 	{
	// 		type: 'category',
	// 		label: "栈",
	// 		items: ['structure/linear01', 'structure/arrayStackImpl']
	// 	}
	// ],
	Java: [
		{
			type: 'category',
			label: 'ORM',
			items: ['orm/mybatis/index'],
		},
	],
	Redis2: [
		{
			type: 'category',
			label: 'redis应用问题',
			items: [
				'redis/cachepenetration',
				'redis/cachebreakdown',
				'redis/cacheavalanche',
				'redis/distributedlock'
			]
		}
	],
	Redis: [
		{
			type: 'category',
			label: 'redis',
			items: [
				'redis/base',
				'redis/structure',
				'redis/structure2',
				'redis/transaction',
				'redis/pubandsub',
				'redis/rdb',
				'redis/aof',
				'redis/rdbaof',
				'redis/masterslave',
				'redis/sentinel',
				'redis/cluster'
			],
		},
	],
	WordPress: [
		{
			type: 'category',
			label: 'redis',
			items: [
				'wordpress/base'
			]
		}
	]
};

module.exports = sidebarsConfig;
