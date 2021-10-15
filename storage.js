/** 存储loalStorage */
export const loalStorageSet = (key, value) => {
    if (!key) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
};

/** 获取localStorage */
export const loalStorageGet = (key) => {
    if (!key) return;
    return window.localStorage.getItem(key);
};

/** 删除localStorage */
export const loalStorageRemove = (key) => {
    if (!key) return;
    window.localStorage.removeItem(key);
};


/** 存储sessionStorage */
export const sessionStorageSet = (key, value) => {
    if (!key) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.sessionStorage.setItem(key, value)
};

/* 获取sessionStorage **/
export const sessionStorageGet = (key) => {
    if (!key) return;
    return window.sessionStorage.getItem(key)
};

/** 删除sessionStorage */
export const sessionStorageRemove = (key) => {
    if (!key) return;
    window.sessionStorage.removeItem(key)
};


