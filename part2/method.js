new Vue({
    el: '#app',
    data: {
        current: new Date().toLocaleString()
    },
    // メソッドが再描画に対して、常に再評価される
    // 算出プロパティはそれが依存するプロパティ（this.XXXで表される値）が変更された場合のみ評価される
    // 今回の場合、算出プロパティrandomcは、他のプロパティに依存しないので、初回に呼び出される後は
    // 2度と呼びされることがない。
    computed: {
        // 算出プロパティ経由で乱数を取得
        randomc: function() {
            return Math.random();
        }
    },
    methods: {
        // クリック時に処理を実行（詳細はPart 3）
        onclick: function() {
            this.current = new Date().toLocaleString();
        },
        // メソッド経由で乱数を取得
        randomm: function() {
            return Math.random();
        }
    }
});
