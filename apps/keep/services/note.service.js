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
            { id: "n101", type: "note-text", isPinned: false, info: { txt: "Fullstack Me Baby!" } }, 
            { id: "n102", type: "note-img", info: { url: "http://some-img/me", title: "Cat" }, style: { backgroundColor: "#00d" } }, 
            { id: "n103", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Driving liscence", doneAt: null }, { txt: "Coding power", doneAt: 187111111 } ] } },
            { id: "n104", type: "note-text", isPinned: false, info: { txt: "Hell Yeahhhhhhh!" } }, 
            { id: "n105", type: "note-img", info: { url: "http://some-img/me", title: "Dog" }, style: { backgroundColor: "#00d" } }, 
            { id: "n106", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Passport", doneAt: null }, { txt: "Make a playlist", doneAt: 187111111 } ] } },
            { id: "n107", type: "note-text", isPinned: false, info: { txt: "Vamos Madrid!" } }, 
            { id: "n108", type: "note-img", info: { url: "http://some-img/me", title: "Car" }, style: { backgroundColor: "#00d" } }, 
            { id: "n109", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Make A Todo List", doneAt: null }, { txt: "Sign up for the course", doneAt: 187111111 } ] } },
            { id: "n110", type: "note-text", isPinned: false, info: { txt: "Let's kill it!" } }, 
            { id: "n111", type: "note-img", info: { url: "http://some-img/me", title: "Rainbow" }, style: { backgroundColor: "#00d" } }, 
            { id: "n112", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Fix My Car", doneAt: null }, { txt: "Hang out", doneAt: 187111111 } ] } },
            { id: "n113", type: "note-text", isPinned: false, info: { txt: "Work Hard Gain Much!" } }, 
            { id: "n114", type: "note-img", info: { url: "http://some-img/me", title: "Mountain" }, style: { backgroundColor: "#00d" } }, 
            { id: "n115", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Help My Friend", doneAt: null }, { txt: "Work out", doneAt: 187111111 } ] } },
            { id: "n116", type: "note-text", isPinned: false, info: { txt: "Going To Make It Different!" } }, 
            { id: "n117", type: "note-img", info: { url: "http://some-img/me", title: "River" }, style: { backgroundColor: "#00d" } }, 
            { id: "n118", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Stay Focused!", doneAt: null }, { txt: "Sleeeeep", doneAt: 187111111 } ] } },
            { id: "n119", type: "note-text", isPinned: false, info: { txt: "I Need 2 Take This Down!!!" } }, 
            { id: "n120", type: "note-img", info: { url: "http://some-img/me", title: "Snow" }, style: { backgroundColor: "#00d" } }, 
            { id: "n121", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Finsih The Assignment", doneAt: null }, { txt: "Warn my alies", doneAt: 187111111 } ] } },
            { id: "n122", type: "note-text", isPinned: false, info: { txt: "Bye Bye, You've Been The One :-(" } }, 
            { id: "n123", type: "note-img", info: { url: "http://some-img/me", title: "Summer" }, style: { backgroundColor: "#00d" } }, 
            { id: "n124", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Skip The Dynamic Componnet Challenge", doneAt: null }, { txt: "Write a song", doneAt: 187111111 } ] } },
            { id: "n125", type: "note-text", isPinned: false, info: { txt: "Each Time It Becomes Easier!" } }, 
            { id: "n126", type: "note-img", info: { url: "http://some-img/me", title: "Winter" }, style: { backgroundColor: "#00d" } }, 
            { id: "n127", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Buy Food", doneAt: null }, { txt: "Fix the computer", doneAt: 187111111 } ] } },
            { id: "n128", type: "note-text", isPinned: false, info: { txt: "Try To Keep UPPP" } }, 
            { id: "n129", type: "note-img", info: { url: "http://some-img/me", title: "Spring" }, style: { backgroundColor: "#00d" } }, 
            { id: "n130", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Talk with my teacher", doneAt: null }, { txt: "Code the game", doneAt: 187111111 } ] } },
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