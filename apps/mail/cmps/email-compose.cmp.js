export default {
    template: `
            <form @submit.prevent="send" class="mail-modal">
                <section>
                    <h2 class="add-mail-title">New message</h2>
                    <button>Close</button>
                </section>
                <input v-model="mail.to" type="email" placeholder="To"/>
                <input v-model="mail.title" type="text" placeholder="Topic"/>
                <textarea v-model="mail.body" cols="30" rows="25"></textarea>
                <section>
                    <button>Send</button>
                    <button>Save as draft</button>
                </section>
            </form>

        `,
    data() {
        return {
            mail: {
                to: '',
                title: '',
                body: '',
            }
        }
    },
    methods: {
        send() {
            this.$emit('sent', { ...this.mail })
            this.mail = {
                to: '',
                title: '',
                body: '',
            }
        }
    }
}