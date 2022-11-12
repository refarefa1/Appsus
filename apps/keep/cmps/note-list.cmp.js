import notePreview from './note-preview.cmp.js'

export default {
    name: `note-list`,
    props: ['notes'],
    template: `
        <section class="note-list">

            <h1 v-if="pinnedNotesToShow.length">Pinned notes</h1>
            <ul v-if="pinnedNotesToShow.length" class="non-pinned clean-list">
                <li class="note-container" :class="{hovering: noteHoveredIdx===index}" v-for="(note, index) in pinnedNotesToShow"  :style="note.style"  :key="note.id" @click="editNote(note)" @mouseover="noteHoveredIdx = index" @mouseout="noteHoveredIdx = null">
                    <note-preview :note="note" />
                    <div class="control-btns">
                        <button class="remove fa" @click.stop="remove(note.id)"></button>
                        <button class="archive fa" @click.stop=""></button>
                        <button class="bg-img fa" @click.stop=""></button>
                        
                        <button class="bg-color fa"><input type="color" @click.stop="" v-model="note.style.backgroundColor"></button>  
                        <button class="font-color fa" @click.stop=""><input type="color" @click.stop="" v-model="note.style.color"></button>
                    </div>
                </li>
            </ul>

            <h1 v-if="pinnedNotesToShow.length">Other notes</h1>
            <ul class="non-pinned clean-list">
                <li class="note-container" :class="{hovering: noteHoveredIdx===index}" v-for="(note, index) in nonPinnedNoteToShow" :style="note.style"  :key="note.id" @click="editNote(note)" @mouseover="noteHoveredIdx = index" @mouseout="noteHoveredIdx = null">
                    <note-preview :note="note" />
                    <div class="control-btns">
                        <button class="remove fa" @click.stop="remove(note.id)"></button>
                        <button class="archive fa" @click.stop=""></button>
                        <button class="bg-img fa" @click.stop=""></button>
                        
                        <button class="bg-color fa"><input type="color" @click.stop="" v-model="note.style.backgroundColor"></button>  
                        <button class="font-color fa" @click.stop=""><input type="color" @click.stop="" v-model="note.style.color"></button>
                    </div>
                </li>
            </ul>
     
        </section>
    `,
    data() {
        return {
            styleObject: {
                backgroundColor: null,
            },

            backgroundColor: '',
            backgroundImg: null,
            noteHoveredIdx: null,
            pinnedNotes: null,
            pinnedNotesToShow: null,
            nonPinnedNoteToShow: null

        }
    },
    methods: {
        remove(noteId) {
            console.log(`removing...` + ' note:' + noteId)
            this.$emit('remove', noteId)
        },
        editNote(clickedNote) {
            console.log('noteClicked...')
            const noteToEdit = JSON.parse(JSON.stringify(clickedNote))
            this.$emit('noteClicked', noteToEdit)
        },

    },
    created() {
        this.pinnedNotesToShow = this.notes.filter(note => note.isPinned)
        this.nonPinnedNoteToShow = this.notes.filter(note => !note.isPinned)
    },
    components: {
        notePreview
    },
}
