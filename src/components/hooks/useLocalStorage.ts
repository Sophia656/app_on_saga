import { useEffect, useState } from "react"

export const useLocalStorage = (key: string , defaultValue: string) => {
    const [ state, setState ] = useState(()=>JSON.parse(localStorage.getItem(key)||defaultValue))
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    },[state])
    return [ state, setState ]
}