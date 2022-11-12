export default {
    props: ['editedMail'],
    emits: ['save-draft', 'remove-draft', 'sent'],
    template: `
            <form @submit.prevent class="mail-modal">
                <section class="mail-modal-header">
                    <h2 class="add-mail-title">New message</h2>
                    <div>
                    <button @click="send" class="send-mail-query"></button>
                    <button class="save-draft-btn" @click="saveDraft" title="Save draft"></button>
                    </div>
                </section>
                <input v-model="mail.to" type="email" placeholder="To"/>
                <input v-model="mail.subject" type="text" placeholder="Topic"/>
                <textarea class="mail-body" v-model="mail.body" cols="30" rows="25"></textarea>
                <section class="mail-modal-footer">
                    <button @click="send" title="Send" class="send-mail-btn">Send</button>
                    <button @click="removeDraft" title="Remove draft" class="remove-draft-btn"></button>
                </section>
            </form>

        `,
    data() {
        return {
            mail: {
                to: '',
                subject: '',
                body: '',
                isDraft: false
            }
        }
    },
    methods: {
        send() {
            const { to, subject, body } = this.mail
            if (!to || !subject || !body) return
            this.$emit('sent', { ...this.mail })
            this.mail = {
                to: '',
                subject: '',
                body: '',
            }
        },
        saveDraft() {
            this.$emit('save-draft', this.mail)
        },
        removeDraft() {
            this.$emit('remove-draft', this.mail)
        }
    },
    created() {
        if (this.editedMail) this.mail = { ... this.editedMail }
    }
}