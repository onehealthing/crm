const TOKEN_NAME = 'token';

const set = token => localStorage.setItem(TOKEN_NAME, token);

const get = () => localStorage.getItem(TOKEN_NAME);

const remove = () => localStorage.removeItem(TOKEN_NAME);

const exists = () => !!get();

export default {
    set,
    get,
    remove,
    exists
};