import { emitUpdated } from "../../../../services/event-bus.service.js"

export default {
    name: `note-todo`,
    props: ['note'],
    template: `
        <section class="note-todo">
            <div class="title flex justify-between align-center" :class="{'justify-right': !note.info.label}">
                <h1 v-if="note.info.label" class="label">{{ note.info.label }}</h1>
                <button :class="{'pinned': notePin}" class="fa pin-note" @click.stop="pin"></button>

            </div>
            <ul class="clean-list flex flex-column">
                <li v-for="todo in note.info.todos" class="flex justify-between">
                    <p class="todo-txt" :class="{'isnt-done': !todo.doneAt}">{{ todo.txt }}</p>
                    <input class="isDone" :checked="isChecked(todo)" type="checkbox" @click.stop="isTodoDone(todo)" />
                </li>
            </ul>
            <!-- <pre>{{note}}</pre> -->
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            notePin: this.note.isPinned

        }
    },
    methods: {
        isTodoDone(todo) {
            if (!todo.doneAt) todo.doneAt = Date.now()
            else todo.doneAt = null
        },
        isChecked(todo) {
            if (!todo.doneAt) return false
            return true
        },
        pin() {
            const note = JSON.parse(JSON.stringify(this.note))
            note.isPinned = !note.isPinned
            emitUpdated(note)
        }
    },
    computed: {},
}

