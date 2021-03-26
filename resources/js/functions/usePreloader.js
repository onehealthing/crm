import { ref, provide } from 'vue';

export function usePreloader() {

    const ids = ref([]);

    const hide = id => _.remove(ids.value, k => k == id);

    const isActive = id => _.some(ids.value, k => k == id);

    const push = id => ids.value.push(id);

    provide('preloader', {
        isActive
    });

    return {
        hide,
        push
    };
}