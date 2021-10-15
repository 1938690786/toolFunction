/** 生成随机字符串 */
export const randomString = (len) => {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
    let strLen = chars.length;
    let randomStr = '';
    for (let i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * strLen));
    }
    return randomStr;
};

/** 字符串首字母大写 */
export const fistLetterUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/** 手机号中间四位变成 */
export const telFormat = (tel) => {
    tel = String(tel);
    return tel.substr(0, 3) + "****" + tel.substr(7);
};

/** 短横线命名转换成骆驼命名 */
export const getCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (i, item) => item.toUpperCase())
}

/** 全角转换为半角 */
export const toCDB = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (code >= 65281 && code <= 65374) {
            result += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else if (code == 12288) {
            result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

/** 半角转换为全角 */
export const toDBC = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (code >= 33 && code <= 126) {
            result += String.fromCharCode(str.charCodeAt(i) + 65248);
        } else if (code == 32) {
            result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}





