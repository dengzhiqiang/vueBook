var app = new Vue({
    el: '#app',
    data: {

        list: [
            {
                id: 1,
                name: 'apple',
                price: 100,
                count: 5
            },
            {
                id: 2,
                name: 'apple',
                price: 15,
                count: 10
            },
            {
                id: 3,
                name: 'apple',
                price: 25,
                count: 21
            },
            {
                id: 4,
                name: 'apple',
                price: 30,
                count: 25
            }
        ]
    },
    methods: {
        reduce: function (id) {
            var i = 0,
                lists = this.list,
                len = lists.length;
            for (; i < len; i++) {
                if (lists[i]['id'] === id) {
                    if (lists[i].count === 1) return;
                    lists[i].count--;
                    break;
                }
            }
        },
        plus: function (id) {
            var i = 0,
                lists = this.list,
                len = lists.length;
            for (; i < len; i++) {


                if (lists[i]['id'] === id) {
                    lists[i].count++;
                    break;
                }
            }
        },
        remove: function (id) {
            this.list.splice(id, 1)
        }

    },
    computed: {
        totalPrice: function () {
            var total = 0;
            var i = 0,
                lists = this.list,
                len = lists.length;

            for (; i < len; i++) {
                total += lists[i]['price'] * lists[i]['count'];
            }
            // 千位分割符号
            return total
                .toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        }
    }

});

















