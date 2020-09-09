import Vue from 'vue'
import VueRouter from 'vue-router'
import Dl from '../components/Dl.vue'
import Sy from '../components/Sy.vue'
import xtsy from '../components/level2/xtsy3.vue'
import khgl from '../components/level2/khgl3.vue'
import qbdd from '../components/level2/qbdd3.vue'
import qbsj from '../components/level2/qbsj3.vue'
import zs from '../components/level2/zs.vue'
import tw from '../components/level2/tw.vue'
import zj from '../components/level2/zj.vue'
import zsg from '../components/level2/zsg.vue'
import add from '../components/level2/add.vue'
import update from '../components/level2/update.vue'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/Dl',
			component: Dl
		},
		{
			path: '/Sy',
			component: Sy,
			redirect: '/sy/xtsy',
			children: [{
					path: 'xtsy',
					component: xtsy
				},
				{
					path: 'khgl',
					component: khgl
				},
				{
					path: 'qbdd',
					component: qbdd
				},
				{
					path: 'qbsj',
					component: qbsj
				},
				{
					path: 'zs',
					component: zs
				},
				{
					path: 'tw',
					component: tw
				},
				{
					path: 'zj',
					component: zj
				},
				{
					path: 'zsg',
					component: zsg
				},
				{
					path: 'add',
					component: add
				},
				{
					path: 'update',
					component: update
				}
			]

		},

	]
})

export default router