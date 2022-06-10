var app = new Vue({
    el: '#app',
    data() {
        return {
            newTodoItem: "",
            todoList: []
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodoItem != "" && this.newTodoItem != null) {
                this.todoList.push(this.newTodoItem)
                this.newTodoItem = "";
            }

        },
        removeTodo: function(index) {
            this.todoList.splice(index, 1)
        }
    },
    mounted() {
        document.querySelector('#newTodoInput').focus();
    }
})