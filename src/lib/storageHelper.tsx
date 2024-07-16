'use client'

export function getLocalStorage(key: string, defaultValue: any) {
    const stickyValue = localStorage.getItem(key);

    // console.log('stickyval: ' + stickyValue)

    return (stickyValue !== null && stickyValue !== 'undefined')
        ? JSON.parse(stickyValue)
        : defaultValue;
}

export function setLocalStorage(key: string, value: any) {
    // console.log(value)
    localStorage.setItem(key, JSON.stringify(value));
    // console.log(getLocalStorage('cookie_consent', null))
}