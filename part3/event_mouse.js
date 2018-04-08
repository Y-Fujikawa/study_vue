new Vue({
    el: '#app',
    methods: {
        onclick: function(e) {
            window.alert(
                '右クリックした座標：' + e.clientX + ',' + e.clientY
            );
        }
    }
});
