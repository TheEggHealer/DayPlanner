import { createStore } from 'vuex'

import { auth, db } from '../firebase/config.js';

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  collection,
  getDocs,
} from 'firebase/firestore'

const store = createStore({
  state: {
    user: null,
    isAuthReady: false,
    active_tasks: [],
    history: [],
    last_entry_date: '',
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('User updated: ', state.user);
    },
    setIsAuthReady(state, payload) {
      state.isAuthReady = payload
      console.log('Auth is now ready')
    },
  },
  actions: {
    async signInUser(context, { email, password }) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        context.commit('setUser', user.user);
      } catch (error) {
        console.log(error);
      }
    },
    async signOutUser(context) {
      try {
        await signOut(auth);
        context.commit('setUser', null);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})

const unsub = onAuthStateChanged(auth, (user) => {
  user = null

  store.commit('setIsAuthReady', true)
  store.commit('setUser', user)
  unsub()
})

export default store
