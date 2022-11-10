import notePreview from './note-preview.cmp.js'

export default {
    name: `note-list`,
    props: ['notes'],
    template: `
        <ul class="note-list clean-list">
            <li class="note-container" :class="{hovering: noteHoveredIdx===index}" v-for="(note, index) in notes" :style="note.style"  :key="note.id" @click="editNote(note)" @mouseover="noteHoveredIdx = index" @mouseout="noteHoveredIdx = null">
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
    `,
    data() {
        return {

            styleObject: {
                backgroundColor: null,
            },

            backgroundColor: '',
            backgroundImg: null,
            noteHoveredIdx: null
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
    // computed: {
    //     // styleObject() {
    //     //     return {
    //     //         color: (this.backgrounImg) ? '' : `${this.backgroundColor}`,
    //     //     }
    //     }
    // },
    components: {
        notePreview
    },
}
