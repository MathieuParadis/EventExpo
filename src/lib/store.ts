// RTK IMPORTS
import { configureStore } from '@reduxjs/toolkit'

// SLICES IMPORTS
import { eventModalsSlice } from '@/lib/features/eventModals/eventModalsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [eventModalsSlice.reducerPath]: eventModalsSlice.reducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
