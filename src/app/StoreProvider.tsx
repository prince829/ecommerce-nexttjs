'use client'
import {Provider} from 'react-redux'
import { AppStore, makeStore } from './lib/store/store'
import { ReactNode, useRef } from 'react'
import { signin } from './lib/store/features/login/loginSlice'
export const StoreProvider=({children}:{children:ReactNode})=>{
    const storeRef = useRef<AppStore>(undefined);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
        storeRef.current.dispatch(signin({
            first_name: 'prince',
            last_name: 'kumar',
            email: 'prince@yopmail.com'
        }))
      }
    return(
      <Provider store={storeRef.current}>{children}</Provider>
    )
}