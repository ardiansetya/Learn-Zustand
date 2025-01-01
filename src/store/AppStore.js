import { create } from "zustand"

export const useAppStore = create((set) => ({
    count: 0,
    increase: () => {
        set((state) => ({
            count: state.count + 1
        }))
    },
    decrease: () => {
        set((state) => ({
            count: state.count - 1
        }))
    },

    userName: 'ardian',
    setUsername: (newUsername) => {
        set({
            userName: newUsername
        })
    }
}))
