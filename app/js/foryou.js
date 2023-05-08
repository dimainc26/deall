
import Job from '../views/BrowseDetail';

export default {

    data(){
        return {
            priorities: [
                {img: "res://a", fav: false, title: "", mandatory: "AI Rudder", link: "https://facebook.com", time: "Full Time", pay: "$ 2 600 " },
                {img: "res://b", fav: false, title: "", mandatory: "AI Rudder", link: "https://facebook.com", time: "Full Time", pay: "$ 1 900 " },
                {img: "res://c", fav: false, title: "", mandatory: "AI Rudder", link: "https://facebook.com", time: "Full Time", pay: "$ 5 000 " },
            ],
            
        }
    },
    methods: {
        viewJob(){
            console.log("go to job ")
            this.$navigateTo(Job);
        }
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