/** 获取URL参数列表 */
export const GetRequest = () => {
    let url = location.search;
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
        if (/=/.test(param)) { // 处理有 value 的参数
            let [key, val] = param.split('='); // 分割 key 和 value
            val = decodeURIComponent(val); // 解码
            val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
            if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else { // 如果对象没有这个 key，创建 key 并设置值
                paramsObj[key] = val;
            }
        } else { // 处理没有 value 的参数
            paramsObj[param] = true;
        }
    })
    return paramsObj;
};

/** 检测URL是否有效 */
export const getUrlState = (URL) => {
    let xmlhttp = new ActiveXObject("microsoft.xmlhttp");
    xmlhttp.Open("GET", URL, false);
    try {
        xmlhttp.Send();
    } catch (e) {
    } finally {
        let result = xmlhttp.responseText;
        if (result) {
            if (xmlhttp.Status == 200) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

/** 键值对拼接成URL参数 */
export const params2Url = (obj) => {
    let params = []
    for (let key in obj) {
        params.push(`${key}=${obj[key]}`);
    }
    return encodeURIComponent(params.join('&'))
}

/** 修改URL中的参数 */
export const replaceParamVal = (paramName, replaceWith) => {
    const oUrl = location.href.toString();
    const re = eval('/(' + paramName + '=)([^&]*)/gi');
    location.href = oUrl.replace(re, paramName + '=' + replaceWith);
    return location.href;
}

/** 删除URL中指定参数 */
export const funcUrlDel = (name) => {
    const baseUrl = location.origin + location.pathname + "?";
    const query = location.search.substr(1);
    if (query.indexOf(name) > -1) {
        const obj = {};
        const arr = query.split("&");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        }
        delete obj[name];
        return baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
    }
}

