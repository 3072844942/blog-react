import {useEffect, useState} from "react";
import * as React from "react";
import './Typewriter.scss'

interface TypewriterInterface {
    srcString: string
}
/**
 * 打字机效果
 * @constructor
 * @param props
 */
const Typewriter = (props:TypewriterInterface) => {

    const [{content,carriage}, setContent] = useState({content:'',carriage:1})

    useEffect(() => {
        if (props.srcString === null || props.srcString === undefined || props.srcString.length === 0) return
        const delay = setTimeout(() => {
            setContent({content:props.srcString.substring(0, carriage), carriage: carriage+1})
            clearTimeout(delay)
        }, (Math.random()*100+250))
        if(carriage === props.srcString.length) return
    }, [content])

    return <span>{content}<span className="TypewriterCursor">|</span></span>
}

export default Typewriter