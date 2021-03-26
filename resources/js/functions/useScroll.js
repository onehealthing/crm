import { ref } from 'vue';

export function useScroll() {

    const scrollRef = ref(null);

    const handleScroll = (behavior = 'smooth') => {
        if (!canScroll()) return;

        scrollRef.value.$el.scrollIntoView({
            behavior: behavior
        });
    };

    const canScroll = () => {
        return typeof scrollRef.value.$el.scrollIntoView === 'function';
    };

    return {
        scrollRef,
        handleScroll
    };
}