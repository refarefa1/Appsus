import utilService from '../../../services/util.service.js'
import storageService from '../../../services/async-storage.service.js'
import notesData from '../services/note.initialData.js'

const NOTES_KEY = 'notesDB'

export default {
    query,
    remove,
    save,
    getEmptyNote,
    edit
}

_createNotes()

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = notesData.getNotes()
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}

function query() {
    return storageService.query(NOTES_KEY)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
    return storageService.post(NOTES_KEY, note)
}

function edit(note) {
    return storageService.put(NOTES_KEY, note)
}

function getEmptyNote(type = 'note-text') {
    switch (type) {
        case 'note-text':
            return { id: undefined, type: "note-text", isPinned: false, isArchived: false, info: { title: "", txt: "" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } }
        case 'note-todo':
            return { id: undefined, type: "note-todo", isPinned: false, isArchived: false, info: { label: "", todos: [{ txt: "", doneAt: null }] }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } }
        case 'note-img':
            return { id: undefined, type: "note-img", isPinned: false, isArchived: false, info: { url: "", title: "" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } }
        case 'note-video':
            return { id: "n101", type: "note-text", isPinned: false, isArchived: false, info: { title: "My note", txt: "Fullstack Me Baby!" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } }
        default:
            return { id: "n101", type: "note-text", isPinned: false, isArchived: false, info: { title: "My note", txt: "Fullstack Me Baby!" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } }
    }
}