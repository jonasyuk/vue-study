
// 定义三个新的组件
const FirstItem = {
    data: () => {
        return {
            title: 'first'
        }
    },
    template: `
    <div>
        <h1>{{title}}</h1>
        <div><input v-model="title" /></div>
        <button @click="onclick">First Item</button>
    </div>
    `,
    methods: {
        onclick() {
            alert(this.title);
        }
    }
}

const SecondItem = {
    data: () => {
        return {
            title: 'second'
        }
    },
    template: `
    <div>
        <h1>{{title}}</h1>
        <div><input v-model="title" /></div>
        <button @click="onclick">Second Item</button>
    </div>
    `,
    methods: {
        onclick() {
            alert(this.title);
        }
    }
}

const LastItem = {
    data: () => {
        return {
            title: 'Last'
        }
    },
    template: `
    <div>
        <h1>{{title}}</h1>
        <div><input v-model="title" /></div>
        <button @click="onclick">Last Item</button>
    </div>
    `,
    methods: {
        onclick() {
            alert(this.title);
        }
    }
}

new Vue({
    el: "#app",
    data: {
        baiduUrl: 'http://www.baidu.com'
    },
    template: `
    <div>
        <FirstItem></FirstItem>
        <SecondItem v-if=false></SecondItem>
        <LastItem></LastItem>
        <a :href="baiduUrl">baidu.com</a>
    </div>
    `,
    components: {
        FirstItem,
        SecondItem,
        LastItem
    }
})