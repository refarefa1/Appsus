

export default {
  name: `note-todo-edit`,
  props: ['note'],
  template: `
     <section class="note-todo-add">
          <div class="title flex">
              <input type="text" v-model="note.info.label" placeholder="Label">
          </div>
          <ul v-if="newTodos" class="clean-list">
              <li class="flex justify-between" v-for="(todo, index) in newTodos">
                <input type="text" v-model="todo.txt" placeholder="Item in todos list...">
                <button class="fa add" v-if="!todo.txt || newTodos.length===1" @click.stop="addTodoItem"></button> 
                <button class="fa remove" v-if="todo.txt && newTodos.length>1" @click.stop="removeTodoItemtodo(index)"></button>
              </li>
          </ul>
      </section>
  
  `,
  components: {},
  created() {
    this.newTodos = this.note.info.todos
  },
  data() {
    return {
      currentTodoIdx: 0,
      newTodos: null,
      notePin: false,

    }
  },
  methods: {
    addTodoItem() {
      console.log(`addingLine:`,)
      const newTodo = { txt: "", doneAt: null }
      this.newTodos.push(newTodo)

    },
    removeTodoItemtodo(todoIdx) {
      this.newTodos.splice(todoIdx, 1)
    },
    pinNote() {
      console.log(`pining note...:`)
      this.notePin = !this.notePin

    },
  },
  computed: {},
}
