new Vue({
    el: '#app',
    methods: {
        onclick: function(message) {
            // 第1引数の内容を見れるが、埋もれてしまうためイベントオブジェクトを参照することができない
            console.log(message)
        }
    }
});a
