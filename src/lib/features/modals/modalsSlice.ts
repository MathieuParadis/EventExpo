// REDUX TOOLKIT IMPORTS
import { createSlice } from '@reduxjs/toolkit'

// STATE IMPORT
import type { RootState } from '@/lib/store'

// TYPES IMPORTS
// import type { Event } from '@prisma/client'
// import type { GameModeType } from '../../types/gameModeTypes'

interface modals {
  isDeleteEvent: boolean
}

// Initial state
const initialState: any = {
  isDeleteEvent: false
//   event: Event
}

// Actual Slice
export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    // handleStartGame(state) {
    //   state.isPlayMode = true
    //   state.isRankingMode = false
    // },
    // handleOpenRanking(state) {
    //   state.isPlayMode = false
    //   state.isRankingMode = true
    // },
    // handleBackToMainMenu(state) {
    //   state.isPlayMode = false
    //   state.isRankingMode = false
    // }
  }
})

// export const { handleStartGame, handleOpenRanking, handleBackToMainMenu } = modalsSlice.actions

export const selectmodalsState = (state: RootState): modals => state.modals

export default modalsSlice.reducer
