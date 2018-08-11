import { GET_PACKAGES, ADD_PACKAGE, DELETE_PACKAGE } from './types'

export const getPackages = () => {
  return {
    type: GET_PACKAGES
  }
}
