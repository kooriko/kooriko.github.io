import Vue from 'vue';
import Router from 'vue-router';

import Header from '@/vue/components/Header';
import Footer from '@/vue/components/Footer';

import BodyView from '@/vue/view/homeView/BodyView';
import VideoView from '@/vue/view/VideoView/VideoView';

import Recommand from '@/vue/view/homeView/Recommand';
import Daily from '@/vue/view/homeView/Daily';
import Discovery from '@/vue/view/homeView/Discovery';


Vue.use(Router);

export default new Router({
	mode: 'history',
  routes: [
    {
			path: '/',
			components: {
				header: Header,
				default: BodyView,
				footer: Footer
			},
			children: [
				{
					path: '/discovery',
					name: 'home-discovery',
					component: Discovery
				},
				{
					path: '/',
					name: 'home-recommand',
					component: Recommand
				},
				{
					path: '/daily',
					name: 'home-daily',
					component: Daily
				}
			]
    }, {
			path: '/subscription',
			name: 'subscription',
		}, {
			path: '/notification',
			name: 'notification'
		}, {
			path: '/me',
			name: 'me'
		}, {
			path: '/video',
			name: 'video',
			component: VideoView
		}
  ]
})
