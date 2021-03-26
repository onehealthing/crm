import { createStore } from 'vuex';
import { auth } from './modules';

export default createStore({
    modules: {
        auth
    }
});
