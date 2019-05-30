

new Vue({
    el: "#app",
    data: {
        title: 'Foo'
    },
    template: `
    <div>
        <input v-model="title" v-render.a.b.aa="title"/> 
    </div>
    `,
    methods: {

    },
    computed: {

    },
    directives: {
        // 注册局部命令
        render: {
            bind: (el, binding) => {
                console.log('bind');
                console.log(binding);
            },
            inserted: (el, binding) => {
                console.log('inserted');
                console.log(binding);
            },
            update: (el, binding) => {
                console.log('update');
                console.log(binding);
            }
        }
    }
})