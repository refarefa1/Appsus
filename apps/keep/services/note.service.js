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
            { id: "n101", type: "note-text", isPinned: false, info: { txt: "Fullstack Me Baby!" }, style: { backgroundColor: "#fff"} }, 
            { id: "n102", type: "note-img", info: { url: "http://some-img/me", title: "Cat" }, style: { backgroundColor: "blue" } }, 
            { id: "n103", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Driving liscence", doneAt: null }, { txt: "Coding power", doneAt: 187111111 } ] } , style: { backgroundColor: "#fff" }},
            { id: "n104", type: "note-text", isPinned: false, info: { txt: "Hell Yeahhhhhhh!" } , style: { backgroundColor: "gray" }}, 
            { id: "n105", type: "note-img", info: { url: "http://some-img/me", title: "Dog" }, style: { backgroundColor: "orange" } }, 
            { id: "n106", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Passport", doneAt: null }, { txt: "Make a playlist", doneAt: 187111111 } ] } , style: { backgroundColor: "green" }},
            { id: "n107", type: "note-text", isPinned: false, info: { txt: "Vamos Madrid!" } , style: { backgroundColor: "dark-gray" }}, 
            { id: "n108", type: "note-img", info: { url: "http://some-img/me", title: "Car" }, style: { backgroundColor: "lime" } }, 
            { id: "n109", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Make A Todo List", doneAt: null }, { txt: "Sign up for the course", doneAt: 187111111 } ] } , style: { backgroundColor: "var(--clr4)" }},
            { id: "n110", type: "note-text", isPinned: false, info: { txt: "Let's kill it!" } , style: { backgroundColor: "var(--clr7)" }}, 
            { id: "n111", type: "note-img", info: { url: "http://some-img/me", title: "Rainbow" }, style: { backgroundColor: "var(--clr8)" } }, 
            { id: "n112", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Fix My Car", doneAt: null }, { txt: "Hang out", doneAt: 187111111 } ] } , style: { backgroundColor: "#fff" }},
            { id: "n113", type: "note-text", isPinned: false, info: { txt: "Work Hard Gain Much!" } , style: { backgroundColor: "#fff" }}, 
            { id: "n114", type: "note-img", info: { url: "http://some-img/me", title: "Mountain" }, style: { backgroundColor: "#fff" } }, 
            { id: "n115", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Help My Friend", doneAt: null }, { txt: "Work out", doneAt: 187111111 } ] } , style: { backgroundColor: "#fff" }},
            { id: "n116", type: "note-text", isPinned: false, info: { txt: "Going To Make It Different!" } , style: { backgroundColor: "#fff" }}, 
            { id: "n117", type: "note-img", info: { url: "http://some-img/me", title: "River" }, style: { backgroundColor: "#fff" } }, 
            { id: "n118", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Stay Focused!", doneAt: null }, { txt: "Sleeeeep", doneAt: 187111111 } ] } , style: { backgroundColor: "#fff" }},
            { id: "n119", type: "note-text", isPinned: false, info: { txt: "I Need 2 Take This Down!!!" } , style: { backgroundColor: "#fff" }}, 
            { id: "n120", type: "note-img", info: { url: "http://some-img/me", title: "Snow" }, style: { backgroundColor: "#fff" } }, 
            { id: "n121", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Finsih The Assignment", doneAt: null }, { txt: "Warn my alies", doneAt: 187111111 } ] } , style: { backgroundColor: "#fff" }},
            { id: "n122", type: "note-text", isPinned: false, info: { txt: "Bye Bye, You've Been The One :-(" } , style: { backgroundColor: "#fff" }}, 
            { id: "n123", type: "note-img", info: { url: "http://some-img/me", title: "Summer" }, style: { backgroundColor: "#fff" } }, 
            { id: "n124", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Skip The Dynamic Componnet Challenge", doneAt: null }, { txt: "Write a song", doneAt: 187111111 } ] } , style: { backgroundColor: "#fff" }},
            { id: "n125", type: "note-text", isPinned: false, info: { txt: "Each Time It Becomes Easier!" } , style: { backgroundColor: "#fff" }}, 
            { id: "n126", type: "note-img", info: { url: "http://some-img/me", title: "Winter" }, style: { backgroundColor: "#fff" } }, 
            { id: "n127", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Buy Food", doneAt: null }, { txt: "Fix the computer", doneAt: 187111111 } ] } , style: { backgroundColor: "#fff" }},
            { id: "n128", type: "note-text", isPinned: false, info: { txt: "Try To Keep UPPP" } , style: { backgroundColor: "#fff" }}, 
            { id: "n129", type: "note-img", info: { url: "http://some-img/me", title: "Spring" }, style: { backgroundColor: "#fff" } }, 
            { id: "n130", type: "note-todo", info: { label: "Get my stuff together", todos: [ { txt: "Talk with my teacher", doneAt: null }, { txt: "Code the game", doneAt: 187111111 } ] } , style: { backgroundColor: "#fff" }},
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