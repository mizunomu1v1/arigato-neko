// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	site: 'https://mizunomu1v1.github.io/arigato-neko/',
	base: '/arigato-neko/',
	integrations: [
		starlight({
			title: 'ありがとネコライフ',
			favicon: './src/assets/favicon_20260102.png',
			customCss: ['./src/styles/custom.css'],
			pagination: false, 
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'ホーム', slug: '' },
			 	{ label: 'ゆる技術', autogenerate: { directory: 'yuru-tech' } },
			 	{ label: 'ゲーム', 
					items: [
						// { label: 'ゲームのたなおろし', slug: 'games' }, 
						{ label: 'プレイ日記', autogenerate: { directory: 'games/diary' } },
						{ label: 'ゲームを語る', autogenerate: { directory: 'games/talk' } },
					], 
				},
			 	{ label: '記録', 
					items: [
						{ label: 'ライブ年表', autogenerate: { directory: 'record/live' } },
						{ label: '日々', autogenerate: { directory: 'record/day' } },
					], 
				},
			 ],
		}),
	],
});
