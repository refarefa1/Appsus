const { createApp } = Vue

import { router } from './routes.js'

import { eventBus } from './services/event-bus.service.js'
import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
    template: `
        <section>
            <app-header v-if="!isApp"/>
            <router-view @hideMainHeader="isApp = true" @showMainHeader="isApp = false"/>
            <user-msg />
        </section>
    `,
    data() {
        return {
            isApp: false
        }
    },
    components: {
        appHeader,
        appFooter,
        userMsg,
    },
    created() {
        eventBus.on('draft-saved', (msg) => {
        })
    }
}

const app = createApp(options)
app.use(router)
app.mount('#app')
