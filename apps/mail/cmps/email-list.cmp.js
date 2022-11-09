import emailPreview from './email-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
        <h1>Email List</h1>  
        <ul class="mail-list-container">
            <li v-for="mail in mails" :key="mail.id" class="mail-preview">
                <button>R/UNR</button>
                <button>STAR</button>
                <button>MARK</button>
                <email-preview :mail="mail"/>
            </li>
        </ul>
        `,

    components: {
        emailPreview
    }
}