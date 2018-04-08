new Vue({
    el: '#app',
    data: {
        name: 'Guest'
    },
    methods: {
        clear: function() {
            this.name = '';
        }
    }
});
