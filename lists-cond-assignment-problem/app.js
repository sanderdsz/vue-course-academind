const app = Vue.createApp({
  data() {
      return {
          enteredTask: '',
          tasks: [],
          tasksVisible: true,
      }
  }, 
  computed: {
      buttonCaption() {
          return this.tasksVisible ? 'Hide List' : 'Show List';
          }
  },
  methods: {
      addTask() {
          this.tasks.push(this.enteredTask)
      },
      hideShowTasks() {
          this.tasksVisible = !this.tasksVisible;
      },
  }
});

app.mount('#assignment');