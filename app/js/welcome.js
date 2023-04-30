
import Skills from '../views/Skills';

export default {

    data(){
        return {
            
        }
    },
    methods: {
        skills(){
            this.$navigateTo(Skills);
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