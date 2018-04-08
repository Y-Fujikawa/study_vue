// 1. Vue.jsの機能を有効化
new Vue({
    el: '#app',
    data: {
        email: 'Yamada@example.com'
    },
    // 算出プロパティとは既存プロパティを取得（算出）した結果を取得するためのゲッター
    // ここでは演算した結果を取得する
    computed: {
        localEmail: function() {
            // 本来のプロパティ（ここではemail）に「this.プロパティ名」でアクセスできる
            return this.email.split('@')[0].toLowerCase();
        }
    }
});
