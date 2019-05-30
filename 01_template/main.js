new Vue({
    el: '#app',
    data: {
        title: 'Hello '
    },
    template: `
        <div>
            <div>{{title}} jonas! </div>
            <div>
                {{ getTime() }}
            </div>
        </div>
        
    `,
    created: function () {
        console.log("");
        console.log("created");
        console.log(`msg=${this.title}`);
    },
    beforeCreate: function () {
        console.log("");
        console.log("beforeCreate");
        console.log(`msg=${this.title}`);
    },
    methods: {
        getTime(){
            return new Date();
        }
    }
});