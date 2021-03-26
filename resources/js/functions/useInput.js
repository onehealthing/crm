import { computed, onMounted } from 'vue';
import { useField } from 'vee-validate';

const INVALID_CLASS = 'is-invalid';
const VALID_CLASS = 'is-valid';

export function useInput({ props }) {

    const {
        errorMessage,
        value,
        meta,
        handleChange,
        resetField
    } = useField(props.name, props.rules, {
        initialValue: props.value,
    });

    const error = computed(() => _.replace(errorMessage.value, props.name, props.label));

    const isInvalid = computed(() => !!errorMessage.value);

    const isValid = computed(() => meta.valid);

    const validationClass = computed(() => {
        return {
            [INVALID_CLASS]: isInvalid.value,
            [VALID_CLASS]: isValid.value,
        };
    });

    onMounted(() => {
        resetField();
    });

    return {
        validationClass,
        isInvalid,
        isValid,
        value,
        error,
        handleChange
    };
}