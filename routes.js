import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

import keepApp from './apps/keep/pages/keep-app.cmp.js'
import noteList from './apps/keep/cmps/note-list.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js'
import emailList from './apps/mail/pages/email-list.cmp.js'
import emailDetails from './apps/mail/pages/email-details.cmp.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/about',
			component: aboutPage,
		},
		{
			path: '/keep',
			component: keepApp,
			children: [
				{
					path: 'notes',
					component: noteList,
				},
				{
					path: 'archive',
					component: noteList,
				},
			]
		},
		{
			path: '/email',
			component: emailApp,
			children: [
				{
					path: 'inbox',
					component: emailList,
				},
				{
					path: 'sent',
					component: emailList,
				},
				{
					path: 'starred',
					component: emailList,
				},
				{
					path: 'trash',
					component: emailList,
				},
				{
					path: 'draft',
					component: emailList,
				},
				{
					path: ':id',
					component: emailDetails
				}
			]
		},
	],
}

export const router = createRouter(routerOptions)

