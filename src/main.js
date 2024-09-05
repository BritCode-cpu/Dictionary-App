import { createApp } from 'vue'
import App from './App.vue'
import UserInput from './Components/UserInput.vue';

const app = createApp(App);

app.component('user-input', UserInput)
app.mount('#app');
