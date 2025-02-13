import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe',
  }),
  getters: {
    greet: (state) => `Welcome, ${state.name}!`,
  },
  actions: {
    setName(name: string) {
      this.name = name
    },
  },
})
