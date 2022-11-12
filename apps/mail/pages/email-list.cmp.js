import emailPreview from '../cmps/email-preview.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'

export default {
    emits: ['read', 'sort', 'filterRead', 'remove', 'mark', 'star', 'save-draft', 'remove-draft', 'sent'],
    props: ['mailsToShow'],
    template: `

        <ul class="mail-list-container">

            <li class="sort-preview">
                <select @change="select" class="filter-select">
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">Unread</option>
                    <option value="title">Title</option>
                    <option value="date">Date</option>
                </select>
                <h3>Sort by:</h3>
                <h4 @click="sort('title')">Title</h4>
                <h4 @click="sort('date')">Date</h4>
                <email-filter @filterRead="filterRead"/>
            </li>

            <li v-for="mail in mailsToShow" @click="read(mail)" :key="mail.id" class="mail-preview">
                <section className="mail-hover">
                    <button @click="" title="Make note" class="note-btn"></button>
                    <button @click.stop="mark(mail)" title="Mark as read/unread" class="toggle-btn"></button>
                    <button @click.stop="remove(mail)" title="Delete mail" class="remove-btn"></button>
                </section>

                <router-link v-if="!mail.isDraft" :to="'/email/' + mail.id">
                    <button @click.stop.prevent="toggleStar(mail)" class="star-btn" :class="{ 'starred-mail': mail.isStar }"></button>
                    <h2 class="mail-fullname" :class="{ read: mail.isRead }">{{ mail.fullname }}</h2>
                    <email-preview :mail="mail" />
                </router-link>

                <section v-if="mail.isDraft" @click="edit(mail)" class="draft-mail">
                <button @click.stop.prevent="toggleStar(mail)" class="star-btn" :class="{ 'starred-mail': mail.isStar }"></button>
                    <h2 class="mail-fullname" :class="{ read: mail.isRead }">{{ mail.fullname }}</h2>
                    <email-preview :mail="mail" />
                </section>

            </li>
            <email-compose @save-draft="saveDraft" @remove-draft="removeDraft" @sent="sent" :editedMail="editedMail" v-if="isEditing"/>
        </ul>

        `,
    data() {
        return {
            isEditing: false,
            editedMail: null
        }
    },
    methods: {
        select(ev) {
            const value = ev.target.value
            if (value === 'all' || value === 'read' || value === 'unread') {
                this.filterRead(value)
            } else {
                this.sort(value)
            }
        },
        read(mail) {
            this.$emit('read', mail)
        },
        sort(type) {
            this.$emit('sort', type)
        },
        filterRead(type) {
            this.$emit('filterRead', type)
        },
        remove(mail) {
            this.$emit('remove', mail)
        },
        mark(mail) {
            this.$emit('mark', mail)
        },
        toggleStar(mail) {
            this.$emit('star', mail)
        },
        edit(mail) {
            this.editedMail = mail
            this.isEditing = true
        },
        removeDraft(mail) {
            this.isEditing = false
            this.$emit('remove-draft', mail)
        },
        saveDraft(mail) {
            this.isEditing = false
            this.$emit('save-draft', mail)
        },
        sent(mail) {
            this.isEditing = false
            this.$emit('sent', mail)
        }
    },
    components: {
        emailPreview,
        emailFilter,
        emailCompose
    },

}