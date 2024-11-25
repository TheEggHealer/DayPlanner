import { createStore } from 'vuex'

import { auth, db } from '../firebase/config.js';

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  collection,
  getDoc,
  doc,
  updateDoc
} from 'firebase/firestore'

import {
  getTasks
} from './backend'

const store = createStore({
  state: {
    user: null,
    userData: {},
    isAuthReady: false,
    schedule: {},
    active_tasks: [],
    history: [],
  },
  mutations: {
    // ============================================ Auth
    setUser(state, payload) {
      state.user = payload;
      console.log('User updated: ', state.user);
    },
    setIsAuthReady(state, payload) {
      state.isAuthReady = payload
      console.log('Auth is now ready')
    },

    // ============================================ Firestore
    setUserData(state, payload) {
      state.userData = payload
      console.log('User data updated: ', state.userData)

      calculateStreak(store)
    },
    setSchedule(state, payload) {
      state.schedule = payload
      console.log('Schedule updated: ', state.schedule)

      getTasks(store)
    },
    setActiveTasks(state, payload) {
      state.active_tasks = payload
      console.log('Active tasks updated: ', state.active_tasks)
    }
  },
  actions: {
    // ============================================ Auth
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
    },

    // ============================================ Firestore
    async getUserData(context) {
      const docRef = doc(db, 'data', context.state.user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        context.commit('setUserData', docSnap.data())
      } else {
        console.log('Failed to get user data')
      }
    },
    async getSchedule(context) {
      const docRef = doc(db, 'schedule', context.state.user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        context.commit('setSchedule', docSnap.data())
      } else {
        console.log('Failed to get schedule')
      }
    },
    async uploadActiveTasks(context) {
      const docRef = doc(db, 'data', context.state.user.uid)
      await updateDoc(docRef, {
        active_tasks: context.state.active_tasks,
        last_updated_tasks: Date.now()
      })
      console.log('New active tasks uploaded to Firestore')
    },
  },
  modules: {
  }
})

const unsub = onAuthStateChanged(auth, async (user) => {
  // user = null

  store.commit('setIsAuthReady', true)
  store.commit('setUser', user)
  await store.dispatch('getUserData')
  await store.dispatch('getSchedule')
  
  unsub()
})

export default store
