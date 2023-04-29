import Register from '../views/Register';


export default {

    data(){
        return {
            onboardData: [
                {color: "white", title: "Backdoor to your dream company", desc: "Top indo companies entrusts us to choose curated candidates for them.", img: "res://a" },
                {color: "white", title: "Get your CV analyzed", desc: "Our AI is trained on 735+ CVs to match your experiences with the right companies - the ones that you have the highest chance to get accepted", img: "res://b" },
                {color: "white", title: "Apply with confidence", desc: "Once you've been ranked, companies will treat you as priority candidates. Hear back within 14 days, no matter the result.", img: "res://c" },
            ],
        }
    },
    methods: {
        register (){
            this.$navigateTo(Register);
        }
    },
    computed: {
        hasItems() {
          return this.onboardData.length > 0;
        }
      },
    watch: {
        async onboardData(to) {
            await this.$nextTick()
            this.$refs.myCarousel.nativeView.refresh();
        },
    },

}