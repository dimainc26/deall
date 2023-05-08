import ForYou from "../components/ForYou"
import FilterModal from "../components/FilterModal"


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

    computed: {

    },
    watch: {
        async onboardData(to) {
            await this.$nextTick()
            this.$refs.myCarousel.nativeView.refresh();
        },
    },

}