// REDUX TOOLKIT IMPORTS
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// STATE IMPORT
import type { RootState } from '@/lib/store'

// TYPES IMPORTS
import type { Event } from '@prisma/client'

export interface EventModalsType {
  isAddEvent: boolean
	isEditEvent: boolean
	isDeleteEvent: boolean
	event?: Event | null
}

// Initial state
const initialState: EventModalsType = {
  isAddEvent: false,
  isEditEvent: false,
  isDeleteEvent: false,
  event: null
}

// Actual Slice
export const eventModalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openDeleteEventModal(state, action: PayloadAction<Event>) {
      state.isDeleteEvent = true
      state.event = action.payload
    },
    closeDeleteEventModal(state) {
      state.isDeleteEvent = false
      state.event = null
    },
    openAddEventModal(state) {
      state.isAddEvent = true
    },
    openEditEventModal(state, action: PayloadAction<Event>) {
      state.isEditEvent = true
      state.event = action.payload
    },
    closeAddEditEventModal(state) {
      state.isAddEvent = false
      state.isEditEvent = false
      state.event = null
    }
  }
})

export const {
  openDeleteEventModal,
  closeDeleteEventModal,
  openAddEventModal,
  openEditEventModal,
  closeAddEditEventModal
} = eventModalsSlice.actions

export const selectmodalsState = (state: RootState): EventModalsType => state.modals

export default eventModalsSlice.reducer
