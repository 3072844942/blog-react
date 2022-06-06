import {useEffect, useState} from "react";
import * as React from "react";
import './Typewriter.scss'
/**
 * 打字机效果
 * @param srcString 传入需要打印的字符串
 * @constructor
 */
const Typewriter = (props) => {

    const [{content,carriage}, setContent] = useState({content:'',carriage:1})

    useEffect(() => {
        if(carriage === props.srcString.length) return
        const delay = setTimeout(() => {
            setContent({content:props.srcString.substring(0, carriage), carriage: carriage+1})
            clearTimeout(delay)
        }, (Math.random()*100+250))
    }, [content])

    return <span>{content}<span className="TypewriterCursor">|</span></span>
}

export default Typewriter