export default {
    template: `
            <form @submit.prevent class="mail-modal">
                <section class="mail-modal-header">
                    <h2 class="add-mail-title">New message</h2>
                    <button title="Save draft"></button>
                </section>
                <input v-model="mail.to" type="email" placeholder="To" required/>
                <input v-model="mail.title" type="text" placeholder="Topic" required/>
                <textarea class="mail-body" v-model="mail.body" cols="30" rows="25" required></textarea>
                <section class="mail-modal-footer">
                    <button @click="send" title="Send" class="send-mail-btn">Send</button>
                    <button @click="$emit('remove-draft')" title="Remove draft" class="remove-draft-btn"></button>
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
            const { to, title, body } = this.mail
            if (!to || !title || body) return
                this.$emit('sent', { ...this.mail })
            this.mail = {
                to: '',
                title: '',
                body: '',
            }
        }
    }
}