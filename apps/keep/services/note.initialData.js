export default {getNotes}

const notes = [
    { id: "n101", type: "note-text", isPinned: false, info: { title: "My note", txt: "Fullstack Me Baby!" }, style: { color: "#0c0c0c", backgroundColor: "#32a852" } },
    { id: "n102", type: "note-img", isPinned: false, info: { url: "assets/img/cat.jpg", title: "Cat" }, style: { color: "#0c0c0c", backgroundColor: "#673ab7" } },
    { id: "n103", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Driving liscence", doneAt: null }, { txt: "Coding power", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#32a852" } },
    { id: "n104", type: "note-text", isPinned: false, info: { title: "My note", txt: "Hell Yeahhhhhhh!" }, style: { color: "#0c0c0c", backgroundColor: "#9e9e9e" } },
    { id: "n105", type: "note-img", isPinned: false, info: { url: "assets/img/dog.jpg", title: "Dog" }, style: { color: "#0c0c0c", backgroundColor: "#ad9d26" } },
    { id: "n106", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Passport", doneAt: null }, { txt: "Make a playlist", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#6b8bef" } },
    { id: "n107", type: "note-text", isPinned: false, info: { title: "My note", txt: "Vamos Madrid!" }, style: { color: "#0c0c0c", backgroundColor: "#8a86d9" } },
    { id: "n108", type: "note-img", isPinned: false, info: { url: "assets/img/car.jpg", title: "Car" }, style: { color: "#0c0c0c", backgroundColor: "#b7563b" } },
    { id: "n109", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Make A Todo List", doneAt: null }, { txt: "Sign up for the course", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#454362" } },
    { id: "n110", type: "note-text", isPinned: false, info: { title: "My note", txt: "Let's kill it!" }, style: { color: "#0c0c0c", backgroundColor: "#6b8bef" } },
    { id: "n111", type: "note-img", isPinned: false, info: { url: "assets/img/rainbow.jpg", title: "Rainbow" }, style: { color: "#0c0c0c", backgroundColor: "#b7563b" } },
    { id: "n112", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Fix My Car", doneAt: null }, { txt: "Hang out", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#32a852" } },
    { id: "n113", type: "note-text", isPinned: false, info: { title: "My note", txt: "Work Hard Gain Much!" }, style: { color: "#0c0c0c", backgroundColor: "#32a852" } },
    { id: "n114", type: "note-img", isPinned: false, info: { url: "assets/img/mountain.jpg", title: "Mountain" }, style: { color: "#0c0c0c", backgroundColor: "#32a852" } },
    { id: "n115", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Help My Friend", doneAt: null }, { txt: "Work out", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#32a852" } },
    { id: "n116", type: "note-text", isPinned: false, info: { title: "My note", txt: "Going To Make It Different!" }, style: { color: "#0c0c0c", backgroundColor: "#32a852" } },
    { id: "n117", type: "note-img", isPinned: false, info: { url: "assets/img/river.jpg", title: "River" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n118", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Stay Focused!", doneAt: null }, { txt: "Sleeeeep", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n119", type: "note-text", isPinned: false, info: { title: "My note", txt: "I Need 2 Take This Down!!!" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n120", type: "note-img", isPinned: false, info: { url: "assets/img/snow.jpg", title: "Snow" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n121", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Finsih The Assignment", doneAt: null }, { txt: "Warn my alies", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n122", type: "note-text", isPinned: false, info: { title: "My note", txt: "Bye Bye, You've Been The One :-(" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n123", type: "note-img", isPinned: false, info: { url: "assets/img/summer.jpg", title: "Summer" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n124", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Skip The Dynamic Componnet Challenge", doneAt: null }, { txt: "Write a song", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n125", type: "note-text", isPinned: false, info: { title: "My note", txt: "Each Time It Becomes Easier!" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n126", type: "note-img", isPinned: false, info: { url: "assets/img/winter.jpg", title: "Winter" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n127", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Buy Food", doneAt: null }, { txt: "Fix the computer", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n128", type: "note-text", isPinned: false, info: { title: "My note", txt: "Try To Keep UPPP" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n129", type: "note-img", isPinned: false, info: { url: "assets/img/spring.jpg", title: "Spring" }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
    { id: "n130", type: "note-todo", isPinned: false, info: { label: "Get my stuff together", todos: [{ txt: "Talk with my teacher", doneAt: null }, { txt: "Code the game", doneAt: 187111111 }] }, style: { color: "#0c0c0c", backgroundColor: "#ffffff" } },
]

function getNotes() {
    return notes
}