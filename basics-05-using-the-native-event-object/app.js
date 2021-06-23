const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  computed: {
    fullname() {
      console.log('Running...')
      if (this.name === '') {
        return '';
      }
      return this.name+ ' ' + this.lastName;
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
      this.lastName = ''
    },
    
  }
});

app.mount('#events');
