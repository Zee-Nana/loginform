new Vue({
    el:"#app",
    data() {
        return{
        username:'',
        password:'',
        user:'',
        user1:''
    }
    },
    methods:{
        result () {
            this.user = this.username;
            this.user1 = this.password;
            this.username = '';
            this.password = ''
        }
    }
})