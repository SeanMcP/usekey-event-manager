import React from 'react'

interface KeyboardEventMap {
    [key: string]: (e: KeyboardEvent) => any
}

function useKey(keyboardEventMap: KeyboardEventMap): void {
    function keyboardEventListener(e: KeyboardEvent): void {
        if (keyboardEventMap.hasOwnProperty(e.key)) {
            keyboardEventMap[e.key](e)
        }
    }
    React.useEffect(() => {
        window.addEventListener('keydown', keyboardEventListener)
        return () => window.removeEventListener('keydown', keyboardEventListener)
    }, [keyboardEventMap])
}

export default useKey