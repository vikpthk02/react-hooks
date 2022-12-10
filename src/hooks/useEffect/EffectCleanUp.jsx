import React, { useState, useEffect } from 'react'

export default function EffectCleanUp() {
    const [sizeCount, setSizeCount] = useState(window.screen.width)

    const screenWidthCount = () => {
        setSizeCount(() => window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', screenWidthCount);
        return () => {
            window.removeEventListener('resize', screenWidthCount);
        }
    })

    return (
        <div>
            <h2 style={{ display: 'center', justifyContent: 'center', textAlign: 'center' }}>The size of the window  {sizeCount}</h2>
        </div>
    )
}
