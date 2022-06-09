// 对象到数组
const ObjectToArray = (objects) => {
    let tmp = []
    for (const item in objects) {
        tmp.push(objects[item])
    }
    return tmp
}

// 数组到对象
const ArrayToObject = (arrays) => {
    let tmp = {};
    for (let i = 0; i < arrays.length; i ++ )
        tmp[i] = arrays[i]
    return tmp;
}

// 数组中是否包含某个对象
const ArrayIndexOf = (array, object) => {
    for (let i in array) {
        if (array[i] === object)
            return true
    }
    return false
}

export {ObjectToArray, ArrayToObject, ArrayIndexOf}