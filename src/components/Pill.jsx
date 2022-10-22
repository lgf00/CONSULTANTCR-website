import React, { useState, useEffect } from 'react'

export default function Pill(props) {
    const {rotation, top, right, bottom, left, children} = props
    const [isPassed, setIsPassed] = useState(false);
    const [rot, setRot] = useState(rotation)
    const nR = rot + 720

    const style = {
        transform: isPassed
        ? `rotate(${nR}deg)`
        : `rotate(${rot}deg)`,
        transition: `transform 1000ms`,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
    }

    useEffect(() => {
        if (!isPassed) {
            return;
        }
        const timeoutId = window.setTimeout(() => {
            setIsPassed(false);
            setRot(nR)
        }, 1000);
        
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isPassed, nR])

    const trigger = () => {
        setIsPassed(true);
    }

    return (
        <div className='pill' onMouseEnter={trigger} style={style}>
            {children}
        </div>
    );
}
