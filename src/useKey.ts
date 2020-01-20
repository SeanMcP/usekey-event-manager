import React from 'react'

const KEYDOWN_EVENT_TYPE = 'keydown'

const windowIsAvailable = typeof window !== 'undefined'

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
        if (windowIsAvailable) {
            window.addEventListener(KEYDOWN_EVENT_TYPE, keyboardEventListener)
        }
        
        return () => {
            if (windowIsAvailable) {
                window.removeEventListener(KEYDOWN_EVENT_TYPE, keyboardEventListener)
            }
        }
    }, [keyboardEventMap])
}

export default useKey