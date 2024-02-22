const getTasks = async (store) => {
  console.log('Getting tasks: ')
  if (shouldUpdateActiveTasks(store)) {
    console.log('\tUpdating active tasks...')
    checkForCompletion(store)

    const tasks = getTasksFromSchedule(store)
    store.commit('setActiveTasks', tasks)
    store.dispatch('uploadActiveTasks')
  } else {
    console.log('\tUsing Firestore active tasks...')
    store.commit('setActiveTasks', store.state.userData.active_tasks)
  }
  
}

const shouldUpdateActiveTasks = (store) => {
  const lastUpdated = new Date(store.state.userData.last_updated_tasks)
  const now = new Date()

  // Check if the last update was today
  return lastUpdated.getDate() !== now.getDate()
}

const getTasksFromSchedule = (store) => {
  const schedule = store.state.schedule
  let tasks = []
  const today = new Date()
  const dayInWeek = today.getDay()
  const dayInMonth = today.getDate()
  const month = today.getMonth()

  // Daily tasks
  tasks = tasks.concat(schedule.daily)

  // Weekly tasks
  tasks = tasks.concat(schedule.weekly[dayInWeek] || [])

  // Monthly tasks
  tasks = tasks.concat(schedule.monthly[dayInMonth] || [])

  // Yearly tasks
  tasks = tasks.concat(schedule.yearly[month]?.[dayInMonth] || [])

  // Sort tasks by priority
  tasks = tasks.sort((a, b) => a.priority - b.priority)

  return tasks
}

const checkForCompletion = (store) => {
  // TODO: Implement this function
}

export { shouldUpdateActiveTasks, getTasksFromSchedule, getTasks }