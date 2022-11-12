import notePreview from './note-preview.cmp.js'

export default {
    name: `note-list`,
    props: ['notes'],
    template: `
        <section class="note-list flex flex-column">

        <section class="pinned-notes" v-if="isTherePinnedNotes">
            <h1>Pinned notes</h1>
            <ul class="pinned-notes clean-list">
                <li :class="{hovering: noteHoveredIdx===index}" v-for="(note, index) in notes" :key="note.id" @click="editNote(note)" @mouseover="noteHoveredIdx = index" @mouseout="noteHoveredIdx = null" >
                    <section class="note-container" v-if="note.isPinned" :style="note.style">
                        <note-preview :note="note" @pin="pin(note,index)"/>
                        <div class="control-btns">
                            <button class="remove fa" @click.stop="remove(note.id)"></button>
                            <button class="archive fa" @click.stop=""></button>
                            <button class="bg-img fa" @click.stop=""></button>
                            <button class="bg-color fa"><input type="color" @click.stop="" v-model="note.style.backgroundColor"></button>  
                            <button class="font-color fa" @click.stop=""><input type="color" @click.stop="" v-model="note.style.color"></button>
                        </div>
                    </section>
                </li>
            </ul>
        </section>

        <section class="unpinned-notes">
            <h1 v-if="isTherePinnedNotes">Other notes</h1>
            <ul class="clean-list">
                <li :class="{hovering: noteHoveredIdx===index}" v-for="(note, index) in notes" :key="note.id" @click="editNote(note)" @mouseover="noteHoveredIdx = index" @mouseout="noteHoveredIdx = null" >
                    <section class="note-container" v-if="!note.isPinned" :style="note.style">
                        <note-preview :note="note" @pin="pin(note,index)"/>
                        <div class="control-btns">
                            <button class="remove fa" @click.stop="remove(note.id)"></button>
                            <button class="archive fa" @click.stop=""></button>
                            <button class="bg-img fa" @click.stop=""></button>
                            <button class="bg-color fa"><input type="color" @click.stop="" v-model="note.style.backgroundColor"></button>  
                            <button class="font-color fa" @click.stop=""><input type="color" @click.stop="" v-model="note.style.color"></button>
                        </div>
                    </section>
                </li>
            </ul>
        </section>

        

            
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
            isTherePinnedNotes: null,
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
        pin(note, index) {
            console.log(`note:`, note)
            console.log(`index:`, index)
            const currentIdx = this.notes.findIndex(note => note)
        }

    },
    created() {
        const pinnedNotes = this.notes.filter(note=>note.isPinned)
        this.isTherePinnedNotes = (pinnedNotes.length) ? true:false
    },
    components: {
        notePreview
    },
}
