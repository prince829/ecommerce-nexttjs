import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() //When we want to send data on store
export const useAppSelector = useSelector.withTypes<RootState>()  // When we want to get data from store
export const useAppStore = useStore.withTypes<AppStore>()