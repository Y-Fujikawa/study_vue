new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        // 入力値の前後から空白を除いた上でログ出力
        onchange: function() {
            console.log('入力値は「' + this.message +'」です。');
        }
    }
});