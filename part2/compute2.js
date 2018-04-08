// 1. Vue.jsの機能を有効化
new Vue({
    el: '#app',
    data: {
        email: 'Wada@example.com'
    },
    // emailプロパティの値を加工するlocalEmailメソッドを定義
    // computed, methodsで異なる点は、更新のタイミング → 理解するのは method.html参照
    methods: {
        localEmail: function() {
            // 本来のプロパティ（ここではemail）に「this.プロパティ名」でアクセスできる
            return this.email.split('@')[0].toLowerCase();
        }
    }
});
