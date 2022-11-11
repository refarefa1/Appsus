import noteService from "../services/note.service.js"

export default {
    name: `note-add`,
    template: `
        <section class="note-add-folded flex justify-between" @click="setNoteType('note-text')">
            <div class="title flex">
                <input type="text" placeholder="Write a note...">
            </div>
            <div class="control-panel flex justify-between">
                <div class="control-btns">
                    <button class="todos fa" @click.stop="setNoteType('note-todo')"></button>
                    <button class="img fa" @click.stop="setNoteType('note-img')"></button>
                    <button class="video fa" @click.stop="setNoteType('note-video')"></button>     
                </div>
                
            </div>

        </section>
    `,
    components: {},
    data() {
        return {
        }
    },
    methods: {
        setNoteType(noteType) {
            this.$emit('noteTypeSelected', noteType)
        }

    }

}
