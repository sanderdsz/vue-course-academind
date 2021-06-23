const app = Vue.createApp({
  data() {
    return {
      sander: {
        name: 'Sander Zuchinalli',
        age: '28',
        image: 'https://picsum.photos/400/300'
      }
    }
  },
  methods: {
    randomNumberMath() {
      const randomNumber = Math.random();
      const number = randomNumber.toFixed(2);
      return number;
    },
    ageInFiveYears() {
      const age = 28;
      return age + 5;
    }
  }
});
app.mount('#assignment');