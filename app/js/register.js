
import Welcome from '../views/Welcome';

export default {

    data(){
        return {
            
        }
    },
    methods: {
         welcome(){
            this.$navigateTo(Welcome, {clearHistory: true});
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