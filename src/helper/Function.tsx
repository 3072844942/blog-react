const ObjectToArray = (objects) => {
    let tmp = []
    for (const item in objects) {
        tmp.push(objects[item])
    }
    return tmp
}

const ArrayToObject = (arrays) => {
    let tmp = {};
    for (let i = 0; i < arrays.length; i ++ )
        tmp[i] = arrays[i]
    return tmp;
}

export {ObjectToArray, ArrayToObject}