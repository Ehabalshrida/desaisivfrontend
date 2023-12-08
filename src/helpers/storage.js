export const setLocalStorageKey = (key, value) => {
    const content = JSON.stringify(value)
    return localStorage.setItem(key, content);

}
export const getLocalStorageKey = (key) => {
    return JSON.parse(localStorage.getItem(key));


}
export const removeLocalStorageKey = (key) => {
    localStorage.removeItem(key);


}
export const clearLocalStorage = () => {
    localStorage.clear();
};