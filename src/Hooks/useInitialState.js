import { useState } from "react";

const useInitialState = () => {
    const [data, setData] = useState('')
    
    const validation = event => {
        const form = Object.values(payload).some( item => item === '')
        if(!form){
            event.preventDefault()
        }
        console.log(validation)
    }

    return {
        data,
        setData,
        validation
    }
}

export default useInitialState;