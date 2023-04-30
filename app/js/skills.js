

export default {

    data() {
        return {
            opportunities: [
                { icon: String.fromCharCode(0xf002), title: "Yes, actively looking", desc: " Receive exclusive job invites and get contacted by employers. " },
                { icon: String.fromCharCode(0xf0f2), title: "I'm open", desc: "Choose this to occasionally receive exclusive jop invites. " },
                { icon: String.fromCharCode(0xf00d), title: "Not open", desc: "You can change this later by the time you need to find new jobs. " },
            ],
            competences: [
                {title: "Product Designer, UI/UX Designer", check: true},
                {title: "Admin Production", check: false},
                {title: "Assistant Production", check: false},
                {title: "Admin Production", check: false},
                {title: "Developper", check: false},
                {title: "Behavioral Designer", check: false},
            ],
            works: [
                {title: "E-commerce", check: true},
                {title: "FinTech", check: true},
                {title: "Consulting", check: true},
                {title: "3D Design", check: false},
                {title: "Arts & Creative Design", check: false},
                {title: "Associate Product Manager", check: false},
                {title: "Web", check: true},
            ],
        }
    },
    methods: {
        skills() {
            this.$navigateTo(Skills);
        },

        myChangePageEvent(args) {
            // console.dir(args);
        },
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