import { eventBus } from "../services/event-bus.service.js"

export default {
	template: `
            <section v-if="msg.txt" className="user-msg">
                <section className="msg">
                    <h2>{{ msg.txt }}</h2>
                </section>
            </section>
        `,
	data() {
		return {
			msg: {
				txt: '',
				type: 'success'
			},
			params: null
		}
	},
	methods: {
		showMsg(payload) {
			this.msg.txt = payload
			setTimeout(() => this.msg.txt = '', 2000)
		}
	},
	created() {
		eventBus.on('user-msg', this.showMsg)
	}
}