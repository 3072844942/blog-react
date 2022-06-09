import * as React from 'react'
import { useEffect, useRef } from 'react';
import styles from './style.css';
interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    width?: string | number;
    height?: string | number;
    spin?: boolean;
    rtl?: boolean;
    color?: string;
    fill?: string;
    stroke?: string;
}

export default function Camera(props: IconProps) {
    const root = useRef<SVGSVGElement>(null)
    const { size = '1em', width, height, spin, rtl, color, fill, stroke, className, ...rest } = props;
    const _width = width || size;
    const _height = height || size;
    const _stroke = stroke || color;
    const _fill = fill || color;
    useEffect(() => {
      if (!_fill) {
        (root.current as SVGSVGElement)?.querySelectorAll('[data-follow-fill]').forEach(item => {
          item.setAttribute('fill', item.getAttribute('data-follow-fill') || '')
        })
      }
      if (!_stroke) {
        (root.current as SVGSVGElement)?.querySelectorAll('[data-follow-stroke]').forEach(item => {
          item.setAttribute('stroke', item.getAttribute('data-follow-stroke') || '')
        })
      }
    }, [stroke, color, fill])
    return (
        <svg
          ref={root}
          width={_width} 
          height={_height}
          viewBox="0 0 48 48"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className || ''} ${spin ? styles.spin : ''} ${rtl ? styles.rtl : ''}`.trim()}
          {...rest}
        >
          <g><path fillOpacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path strokeLinejoin="round" strokeWidth="4" d="m15 12 3-6h12l3 6H15Z" data-follow-stroke="currentColor" stroke={_stroke}/><rect strokeLinejoin="round" strokeWidth="4" rx="3" height="30" width="40" y="12" x="4" data-follow-stroke="currentColor" stroke={_stroke}/><path strokeLinejoin="round" strokeWidth="4" d="M24 35a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" data-follow-stroke="currentColor" stroke={_stroke}/></g>
        </svg>
    )
}
