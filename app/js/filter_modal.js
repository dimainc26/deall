import ForYou from "../components/ForYou"
import SaveFilter from "../components/SaveFilters"


export default {

    components: {
        ForYou,
    },

    data() {
        return {
            sortList: ["Most Relevant", "Near distance", "Best Price", "All"],

        }
    },
    methods: {
        saveFilter(){
            this.$showBottomSheet(SaveFilter, {
                props: {
                    someProp: true,
                    anotherProp: false
                },
                // listeners to be connected to MyComponent
                on: {
                    someEvent: (value) => { console.log(value) }
                }
            });
        }
    },
    mounted() {
    },

    watch: {
        async onboardData(to) {
            await this.$nextTick()
            this.$refs.myCarousel.nativeView.refresh();
        },
    },

}