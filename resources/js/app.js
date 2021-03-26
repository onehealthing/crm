import { createApp } from 'vue';
import { App } from './views';
import router from './router';
import store from './store';
import './validation';
import './bootstrap';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');