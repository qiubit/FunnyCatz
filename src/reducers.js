import { combineReducers } from 'redux';
import { HEART_CLICK, PHOTO_CLICK, MODAL_CLOSE } from './actions';

const initialAppState = {
  catLikes: [100, 423, 7, 731, 72, 752, 0, 0, 0],
  catLiked: [false, false, false, false, false, false, false, false, false],
  catDisplayed: false,
}

export function reducer(state=initialAppState, action) {
  switch (action.type) {
    case HEART_CLICK:
      // Copy arrays, as we treat them as immutable
      let catLikes = state.catLikes.slice()
      let catLiked = state.catLiked.slice()
      let catId = state.catDisplayed
      // Like/unlike cat
      catLiked[catId] = !catLiked[catId]
      // Depending on whether cat was liked/unliked, increase/decrease like count
      if (catLiked[catId]) {
        catLikes[catId] += 1
      } else {
        catLikes[catId] -= 1
      }
      return Object.assign({}, state, {
        catLikes: catLikes,
        catLiked: catLiked,
      })
    case PHOTO_CLICK:
      return Object.assign({}, state, {
        catDisplayed: action.catId,
      })
    case MODAL_CLOSE:
      return Object.assign({}, state, {
        catDisplayed: false,
      })
    default:
      return state
  }
}

export const appReducer = combineReducers({
  app: reducer,
})
