import { GET_TECHNOLOGIES, ADD_TECHNOLOGY, DELETE_TECHNOLOGY } from './types'

export const getTechnologies = () => {
  return {
    type: GET_TECHNOLOGIES
  }
}
