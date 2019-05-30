

new Vue({
    el: "#app",
    data: {
        todoList: [
            '吃饭',
            '健身',
            '学习',
            '睡觉'
        ],
        taskName:'',
        lastUpdateTime:new Date()
    },
    template: `
    <div>
        <h1>TODO List</h1>
        <h3>Task Count: {{count}}</h3>
        <h3>LastUpdateTime: {{lastUpdateTime}}</h3>
        <div v-for="item in todoList">{{item}}</div>
        <div><input v-model="taskName" /><button @click="addClick">add</button></div>

    </div>
    `,
    methods:{
        addClick(){
            this.todoList.push(this.taskName);
            this.taskName = '';
        }
    },
    computed:{
        count(){
            return this.todoList.length;
        }
    },
    watch:{
        todoList: (newValue, oldValue) => {
            this.lastUpdateTime = new Date();
          }
    }
})