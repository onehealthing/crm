import { reactive, provide, readonly } from 'vue';

export function usePaginator() {

    const paginator = reactive({
        totalPages: 0,
        currPage: 0,
        url: ''
    });

    const init = ({ total_pages, curr_page, url }) => {
        paginator.totalPages = total_pages;
        paginator.currPage = curr_page;
        paginator.url = generateCorrectUrl(url);
    };

    const generateCorrectUrl = url => {
        const pagePos = url.indexOf('?page=');

        return pagePos > -1 ? url.substr(0, pagePos) : url;
    };

    provide('paginator', readonly(paginator));

    return {
        init
    };
}