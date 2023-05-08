

export default {


    data(){
        return {
            jobs: [
                {title: "", img: "res://a", bg: ""},
                {title: "", img: "res://a", bg: ""},
                {title: "", img: "res://a", bg: ""},
                {title: "", img: "res://a", bg: ""},
                {title: "", img: "res://a", bg: ""},
                {title: "", img: "res://a", bg: ""},
                {title: "", img: "res://a", bg: ""},
                {title: "", img: "res://a", bg: ""},
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