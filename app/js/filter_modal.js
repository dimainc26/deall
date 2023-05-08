import ForYou from "../components/ForYou"

export default {

    components: {
        ForYou,
    },

    data(){
        return {
            sortList: ["Most Relevant", "Near distance", "Best Price" ,"All" ],
            
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