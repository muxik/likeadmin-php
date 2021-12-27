/**
 * 工具方法
 * 请谨慎操作，影响全局
 */

/**
 * 深拷贝
 * @param {any} target 需要深拷贝的对象
 * @returns {Object}
 */
 export function deepClone(target) {
    if (typeof target !== 'object' || target === null) {
        return target
    }

    const cloneResult = Array.isArray(target) ? [] : {}

    for (const key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            const value = target[key]

            if (typeof value === 'object' && value !== null) {
                cloneResult[key] = deepClone(value)
            } else {
                cloneResult[key] = value
            }
        }
    }

    return cloneResult
}

/**
 * 过滤对象属性
 * @param { Object } target
 * @param { Array } filters
 * @return { Object } 过滤后的对象
 */
export function filterObject(target, filters) {
    const _target = deepClone(target)
    filters.map((key) => delete _target[key])
    return _target
}

/**
 * 节流
 * @param { Function } func
 * @param { Number } time
 * @param context
 * @return { Function }
 */
export function throttle(func, time = 1000, context) {
    let previous = new Date(0).getTime()
    return function (...args) {
        let now = new Date().getTime()
        if (now - previous > time) {
            func.apply(context, args)
            previous = now
        }
    }
}

/**
 * 防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result

    const later = function () {
        // 据上一次触发时间间隔
        const last = +new Date() - timestamp

        // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }

    return function (...args) {
        context = this
        timestamp = +new Date()
        const callNow = immediate && !timeout
        // 如果延时不存在，重新设定延时
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }

        return result
    }
}

/**
 * Query语法格式化为对象
 * @param { String } str
 * @return { Object }
 */
export function queryToObject(str) {
    const params = {}
    for (let item of str.split('&')) {
        params[item.split('=')[0]] = item.split('=')[1]
    }
    return params
}

/**
 * 对象格式化为Query语法
 * @param { Object } params
 * @return {string} Query语法
 */
export function objectToQuery(params) {
    let p = ''
    if (typeof params == 'object') {
        p = '?'
        for (let props in params) {
            p += `${props}=${params[props]}&`
        }
        p = p.slice(0, -1)
    }
    return p
}

/**
 * 复制到剪切板
 * @param value { String } 复制内容
 * @return { Promise } resolve | reject
 */
export function copyClipboard(value) {
    const elInput = document.createElement('input')

    elInput.setAttribute('value', value)
    document.body.appendChild(elInput)
    elInput.select()

    try {
        if (document.execCommand('copy')) return Promise.resolve()
        else new Error('复制失败')
    } catch (err) {
        return Promise.reject(err)
    } finally {
        document.body.removeChild(elInput)
    }
}

/**
 * @description 获取不重复的id
 * @param length { Number } id的长度
 * @return { String } id
 */
export const getNonDuplicateID = (length = 8) => {
    let idStr = Date.now().toString(36)
    idStr += Math.random().toString(36).substr(3, length)
    return idStr
}

/**
 * @description 时间格式化
 * @param dateTime { number } 时间戳
 * @param fmt { string } 时间格式
 * @return { string }
 */
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
export const timeFormat = (dateTime, fmt = 'yyyy-mm-dd') => {
    // 如果为null,则格式化当前时间
    if (!dateTime) dateTime = Number(new Date())
    // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
    if (dateTime.toString().length == 10) dateTime *= 1000
    let date = new Date(dateTime)
    let ret
    let opt = {
        'y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'h+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        's+': date.getSeconds().toString(), // 秒
    }
    for (let k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt)
        if (ret) {
            fmt = fmt.replace(
                ret[1],
                ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
            )
        }
    }
    return fmt
}

/**
 *
 * @param {*} tree
 * @param {*} arr
 * @returns
 */
export function flatten(tree = [], arr = []) {
    tree.forEach((item) => {
        const { children } = item
        arr.push(item)
        if (children) flatten(children, arr)
    })
    return arr
}