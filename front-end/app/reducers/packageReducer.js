import { GET_PACKAGES, ADD_PACKAGE, DELETE_PACKAGE } from '../actions/types'

const initialState = {
  packages: [
    {id: 1, name: "NVM", description: "Node Version Manager", home_page: "https://github.com/creationix/nvm"},
    {id: 2, name: "AVN", description: "Automatic Version Switching for Node.js", home_page: "https://github.com/wbyoung/avn",},
    {id: 3, name: "RVM", description: "RVM is a command-line tool which allows you to easily install, manage, and work with multiple ruby environments from interpreters to sets of gems.", home_page: "https://rvm.io/"}
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PACKAGES:
        return state
    default:
      return state
  }
}
