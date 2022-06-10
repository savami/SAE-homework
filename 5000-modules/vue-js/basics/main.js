var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello!',
        name: 'Sava',
        number: 123,
        boolean: true,
        todos: ['Do this', 'Do that', 'Do nothing'],
        objects: {
            obj1: 'object 1',
            obj2: 'object 2'
        }
    },

    methods: {
        state1: function() {
            this.message = "Goodbye";
            this.name = "Jelica"
            this.number = 1337
            this.boolean = false
            this.todos[2] = "Do everything"
            this.objects.obj1 = "Not an object"
        },
        state2: function() {
            this.message = "Hello!";
            this.name = "Sava"
            this.number = 123
            this.boolean = true,
            this.todos[2] = "Do nothing"
            this.objects.obj1 = "object 1"
        }
    }
});

