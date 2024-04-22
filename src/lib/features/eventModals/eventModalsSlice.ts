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
	isReadEvent: boolean
	event: Omit<Event, 'createdAt' | 'updatedAt'> | null
}

// Initial state
const initialState: EventModalsType = {
  isAddEvent: false,
  isEditEvent: false,
  isDeleteEvent: false,
  isReadEvent: false,
  event: null
}

// Actual Slice
export const eventModalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openDeleteEventModal(state, action: PayloadAction<Omit<Event, 'createdAt' | 'updatedAt'>>) {
      state.isDeleteEvent = true
      state.event = action.payload
    },
    closeDeleteEventModal(state) {
      state.isDeleteEvent = false
      state.event = (state.isDeleteEvent || state.isEditEvent || state.isReadEvent) ? state.event : null
    },
    openAddEventModal(state) {
      state.isAddEvent = true
    },
    openEditEventModal(state, action: PayloadAction<Omit<Event, 'createdAt' | 'updatedAt'>>) {
      state.isEditEvent = true
      state.event = action.payload
    },
    closeAddEditEventModal(state) {
      state.isAddEvent = false
      state.isEditEvent = false
      state.event = (state.isDeleteEvent || state.isEditEvent || state.isReadEvent) ? state.event : null
    },
    openReadEventModal(state, action: PayloadAction<Omit<Event, 'createdAt' | 'updatedAt'>>) {
      state.isReadEvent = true
      state.event = action.payload
    },
    closeReadEventModal(state) {
      state.isReadEvent = false
      state.event = (state.isDeleteEvent || state.isEditEvent || state.isReadEvent) ? state.event : null
    },
    editEvent(state, action: PayloadAction<Omit<Event, 'createdAt' | 'updatedAt'>>) {
      state.event = action.payload
    }
  }
})

export const {
  openDeleteEventModal,
  closeDeleteEventModal,
  openAddEventModal,
  openEditEventModal,
  closeAddEditEventModal,
  openReadEventModal,
  closeReadEventModal,
  editEvent
} = eventModalsSlice.actions

export const selectmodalsState = (state: RootState): EventModalsType => state.modals

export default eventModalsSlice.reducer
