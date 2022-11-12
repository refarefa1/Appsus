import notePreview from './note-preview.cmp.js'

export default {
    name: `note-list`,
    props: ['notes'],
    template: `
        <section class="note-list flex flex-column">

            <section class="pinned-notes" v-if="pinnedNotes.length">
                <h1>Pinned notes</h1>
                <ul class="pinned-notes-list clean-list">
                    <li :class="{hovering: noteHoveredIdx===index}" v-for="(note, index) in pinnedNotes" :key="note.id" @click="editNote(note)" @mouseover="noteHoveredIdx = index" @mouseout="noteHoveredIdx = null">
                        <section class="note-container" v-if="note.isPinned" :style="note.style">
                            <note-preview :note="note"/>
                            <div class="control-btns">
                                <button class="remove fa" @click.stop="remove(note.id)"></button>
                                <button class="archive fa" @click.stop="archive(note)"></button>
                                <!-- <button class="bg-img fa" @click.stop=""></button> -->
                                <button class="bg-color fa"><input type="color" @click.stop="" v-model="note.style.backgroundColor"></button>  
                                <button class="font-color fa" @click.stop=""><input type="color" @click.stop="" v-model="note.style.color"></button>
                            </div>
                        </section>
                    </li>
                </ul>
            </section>

            <section class="unpinned-notes">
                <h1 v-if="pinnedNotes.length">Other notes</h1>
                <ul class="unpinned-notes-list clean-list">
                    <li :class="{hovering: noteHoveredIdx===index}" v-for="(note, index) in unpinnedNotes" :key="note.id" @click="editNote(note)" @mouseover="noteHoveredIdx = index" @mouseout="noteHoveredIdx = null" >
                        <section class="note-container" v-if="!note.isPinned" :style="note.style">
                            <note-preview :note="note" @pin="pin"/>
                            <div class="control-btns">
                                <button class="remove fa" @click.stop="remove(note.id)"></button>
                                <button class="archive fa" @click.stop="archive(note)"></button>
                                <!-- <button class="bg-img fa" @click.stop=""></button> -->
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
        }
    },
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        archive(note) {
            this.$emit('archive', note)
        },
        editNote(clickedNote) {
            const noteToEdit = JSON.parse(JSON.stringify(clickedNote))
            this.$emit('noteClicked', noteToEdit)
        },
        pin(note) {
            this.$emit('pin', note)
        }

    },
    computed:{
        pinnedNotes(){
            return this.notes.filter(note=>note.isPinned)
        },
        unpinnedNotes(){
            return this.notes.filter(note=>!note.isPinned)
        }
    },
    created() {
        const pinnedNotes = this.notes.filter(note => note.isPinned)
        this.isTherePinnedNotes = (pinnedNotes.length) ? true : false
    },
    components: {
        notePreview
    },
}
