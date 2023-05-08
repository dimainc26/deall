

export default {


    data(){
        return {
            all: [
                {img: "res://a", fav: false, title: "", mandatory: "AI Rudder", link: "https://facebook.com", time: "Full Time", pay: "$ 2 600 " },
                {img: "res://b", fav: false, title: "", mandatory: "AI Rudder", link: "https://facebook.com", time: "Full Time", pay: "$ 1 900 " },
                {img: "res://c", fav: false, title: "", mandatory: "AI Rudder", link: "https://facebook.com", time: "Full Time", pay: "$ 5 000 " },
            ],
            
        }
    },
    methods: {
    },
    computed: {
       
      },
    watch: {
        async onboardData(to) {
            await this.$nextTick()
            this.$refs.myCarousel.nativeView.refresh();
        },
    },

}