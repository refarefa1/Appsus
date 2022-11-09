export default {
    template: `
            <form @submit.prevent="send" class="mail-modal">
                <section class="mail-modal-header">
                    <h2 class="add-mail-title">New message</h2>
                    <button title="Save draft"></button>
                </section>
                <input v-model="mail.to" type="email" placeholder="To"/>
                <input v-model="mail.title" type="text" placeholder="Topic"/>
                <textarea v-model="mail.body" cols="30" rows="25"></textarea>
                <section class="mail-modal-footer">
                    <button title="Send" class="send-mail-btn">Send</button>
                    <button title="Remove draft" class="remove-draft-btn"></button>
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