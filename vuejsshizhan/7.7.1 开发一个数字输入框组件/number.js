Vue.component('input-number', {
    template: '#my-component',
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            // 默认引用v-model='value'的值
            type: Number,
            default: 0
        }
    },
    data: function () {
        return {
            currentData: this.value
        };
    },
    watch: {
        // 里面的函数都有两个参数，第一个是新的值，第二个是旧的值
        currentData: function (val, old) {
            // 监听 currentData的值是否发生变化
            console.log(val, old, Date.now());
            this.$emit('input', val);
            // this.$emit('on-change', val);
        },
        value: function (val) {
            // 监听 value的值是否发生变化
            // Vue代理了prop data computed methods所以可以直接this调用
            this.updateValue(val);
        }
    },
    methods: {
        updateValue: function (val) {
            this.currentData = val;
        },
        handChange: function (event) {
            this.currentData = parseFloat(event.target.value);
        }
    },
    mounted: function () {
        // 挂载的时候，初始化

    }
});

