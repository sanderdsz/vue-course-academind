const App = {
  data() {
    return {
      inputClass: '',
      paragraphIsVisible: true,
      inlineStyle: '',
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible
      }
    }
  },
  methods: {
    toggleParagraphVisible() {
      this.paragraphIsVisible = !this.paragraphIsVisible
    }
  },
} 

Vue.createApp(App).mount("#assignment")