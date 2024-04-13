'use client'

// REACT IMPORTS
import { useRef } from 'react'

// REACT-REXUX IMPORTS
import { Provider } from 'react-redux'

// STORE IMPORTS
import { makeStore, AppStore } from '@/lib/store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
