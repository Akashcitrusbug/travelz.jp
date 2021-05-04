import { SET_CURRENT_PAGE, SET_PREVIOUS_PAGE } from './types'

export const setCurrentPage = payload => {
    return {
        type:SET_CURRENT_PAGE,
        payload
    }
}

export const setPreviousPage = payload => {
    return {
        type: SET_PREVIOUS_PAGE,
        payload
    }
}