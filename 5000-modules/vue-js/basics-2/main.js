var app = new Vue({
    el: '#app',
    data: {
        greetings: ['Hello', 'Hey', 'Greetings', 'Hola', 'Hoi'],
        names: ['Nikola', 'Veljko', 'Harry', 'Jia', 'Yongxin', 'Sava'],
        display: {
            greeting: 'Hello',
            name: 'Nikola'
        }
    },

    methods: {
        randomize: function() {
            this.display.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length - 1)];
            this.display.name = this.names[Math.floor(Math.random() * this.names.length - 1)];
        },
    }
});

