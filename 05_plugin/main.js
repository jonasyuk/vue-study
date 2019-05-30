
Vue.use({
    install: (Vue) => {
        Vue.sayHello = (name) => {
            return `Hello ${name}`;
        }

        Vue.mixin({
            methods: {
                hi: function (name) {
                  return `hi ${name}`;
                }
              }
          }
          );
    }
})

const rootVm = new Vue({
    el: "#app",
    data: {
        name: 'jonas'
    },
    template: `
    <div>
        {{hi(name)}}
    </div>
    `,
    methods: {
    },
    computed: {

    }
})

console.log(Vue.sayHello('jonas'));