// RTK IMPORTS
import { configureStore } from '@reduxjs/toolkit'

// SLICES IMPORTS
import { eventModalsSlice } from '@/lib/features/eventModals/eventModalsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [eventModalsSlice.reducerPath]: eventModalsSlice.reducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
