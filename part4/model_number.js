new Vue({
    el: '#app',
    data: {
        time: ''
    },
    methods: {
        // 入力値を小数点第1位に丸めたものをログ表示
        onchange: function() {
            console.log(this.time.toFixed(1));
        }
    }
});