import { reactive, readonly, provide } from 'vue';

export function useAlert() {

    const alert = reactive({
        message: ''
    });

    const setMessage = message => alert.message = message;

    const clearMessage = () => alert.message = '';

    provide('alert', readonly(alert));

    return {
        setMessage,
        clearMessage
    };
}