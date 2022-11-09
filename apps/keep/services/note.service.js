import utilService from '../../../services/util.service.js'
import storageService from '../../../services/async-storage.service.js'

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
        notes = [
            { id: "n101", type: "note-txt", isPinned: true, info: { txt: "Fullstack Me Baby!" } },
            { id: "n102", type: "note-img", info: { url: "http://some-img/me", title: "Bobi and Me" }, style: { backgroundColor: "#00d" } },
            { id: "n103", type: "note-todos", info: { label: "Get my stuff together", todos: [{ txt: "Driving liscence", doneAt: null }, { txt: "Coding power", doneAt: 187111111 }] } }
        ]
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
    return storageService.post(NOTES_KEY,note)
}

function edit(note) {
    return storageService.put(NOTES_KEY, note)
}

function getEmptyNote(type = 'note-text') {
    switch (type) {
        case 'note-text':
            return { type: 'note-text', isPinned: 'false', info: { title: '' } }
        default:
            return { type: 'note-text', isPinned: 'false', info: { title: '' } }
    }
}