import React, { createContext, useState, useEffect } from 'react'
import { ContextTypes } from '@/types/video-repo'

export const GlobalContext = createContext({
    titleCase: () => "",
    logged: false,
    setLogged: () => { },
    user: '',
    setUser: () => { }
} as ContextTypes)

const GlobalState = ({ children }: { children: React.ReactNode }) => {
    const [logged, setLogged] = useState<boolean>(false)
    const [user, setUser] = useState<string>("")

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const retrieved = localStorage.getItem("logged");
            if (retrieved) {
                const storedJson = JSON.parse(retrieved)
                const savedSession = parseInt(storedJson)
                const asBoolean = Boolean(savedSession)
                setLogged(asBoolean)
            } else {
                setLogged(false)
            }
        }
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedSession = localStorage.getItem("user");
            if (savedSession) {
                console.log(savedSession)
                setUser(savedSession)
            } else {
                setUser("")
            }
        }
    }, [])

    const titleCase = (name:string) => {
        let intialised = ""
        if (name) {
            const copy = name
            let arr =  copy.split(" ")
            let joined = []

            for (let i = 0; i <= arr.length; i++) {
                const initials = (typeof arr[i] === "string" ? arr[i].charAt(0).toUpperCase() + arr[i].slice(1) : "")
                joined.push(initials)
            }
            intialised = joined.join(" ")
        }
        return intialised
    }

    const contextValue: ContextTypes = {
        titleCase,
        logged,
        setLogged,
        user,
        setUser
    }
    return (
        <GlobalContext.Provider value={contextValue} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState