import React, {useState, useEffect } from 'react'
import PopUp from './PopUp'

export const Show = () => {
    const [modalState, setModalState] = useState(false)

    const handleclose = () => {
        setModalState(true)
    }

    useEffect(() => {
        if (modalState === false)
        return () => {
             setModalState(true);
        }
    }, [modalState])

    return (
        <div>
            {modalState ?  null : <PopUp toggle={ handleclose}/>}
        </div>
    )
}


export default Show