
import BrowseJobs from '../views/BrowseJobs.vue';
import BrowseDetail from '../views/BrowseDetail';
import ForYou from '../components/ForYou';
import Jobs from '../components/Jobs';
import Filters from '../components/Filters';

export default {

    components: {
        ForYou,
        Jobs,
        Filters
    },

    data(){
        return {
            
        }
    },
    methods: {
        curatedJobs(){
            this.$navigateTo(BrowseJobs);
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