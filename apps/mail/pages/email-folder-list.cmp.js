import mailService from "../services/mail.service.js"

export default {
    props: ['unRead'],
    template: `
        <aside className="folder-list-container">
        <section className="inbox">
            <button>Icon</button>
            <h2>Inbox</h2>
            <h3>{{ unRead }}</h3>
        </section>
        </aside>
        `,
    data() {
        return {

        }
    },
    created() {

    }
}