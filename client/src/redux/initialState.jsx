const initState = {
  projects: [],
  project: null,
  user: null,
  loader: false,
  error: null,
  AnotherUser: null
}

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'))
  return stateFromLS ? stateFromLS : initState;
}

export default getInitState;
