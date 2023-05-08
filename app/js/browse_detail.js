import ForYou from "../components/ForYou"
import SaveFilter from "../components/SaveFilters"
import FilterModal from "../components/FilterModal"
import BottomSheetPlugin from "@nativescript-community/ui-material-bottomsheet/vue"


export default {

    components: {
        ForYou,
    },

    data() {
        return {
        }
    },
    methods: {
        filterModal() {
            this.$showBottomSheet(FilterModal, {
                closeCallback: ()=>{
                    this.$showBottomSheet(SaveFilter, {
                        closeCallback: ()=>{
                            
                        }
                       
                    });
                }
               
            });
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