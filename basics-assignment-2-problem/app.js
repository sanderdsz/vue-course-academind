const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      inputValueEnter: "",
      outputValue: "",
    };
  },
  methods: {
    registerInputEnter() {
      this.inputValueEnter = this.outputValue;
    },
    registerInput() {
      this.inputValue = this.outputValue;
    },
    setOutput(event) {
      this.outputValue = event.target.value;
    },
    alert() {
      alert('This is an Alert!')
    },
  }
});

app.mount('#assignment');
