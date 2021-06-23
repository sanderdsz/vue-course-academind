const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: "",
      fullName: "",
      confirmedname: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedname = this.fullName;
    },
    submitForm() {
      alert('test')
    },
    setName(event) {
      this.name = event.target.value;
    },
    setFullName(event, lastName) {
      this.fullName = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce() {
      this.counter--
    }
  }
});

app.mount('#events');
