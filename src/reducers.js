import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { HEART_CLICK, PHOTO_CLICK, MODAL_CLOSE } from './actions';

const initialAppState = fromJS({
  catLikes: [100, 423, 7, 731, 72, 752, 0, 0, 0],
  catLiked: [false, false, false, false, false, false, false, false, false],
  catDisplayed: false,
})

export function reducer(state=initialAppState, action) {
  switch (action.type) {
    case HEART_CLICK:
      // Copy arrays, as we treat them as immutable
      let catLikes = state.get('catLikes')
      let catLiked = state.get('catLiked')
      let catId = state.get('catDisplayed')
      // Like/unlike cat
      catLiked = catLiked.set(catId, !catLiked.get(catId))
      // Depending on whether cat was liked/unliked, increase/decrease like count
      if (catLiked.get(catId)) {
        catLikes = catLikes.set(catId, catLikes.get(catId) + 1)
      } else {
        catLikes = catLikes.set(catId, catLikes.get(catId) - 1)
      }
      return state
        .set('catLikes', catLikes)
        .set('catLiked', catLiked)
    case PHOTO_CLICK:
      return state
        .set('catDisplayed', action.catId)
    case MODAL_CLOSE:
      return state
        .set('catDisplayed', false)
    default:
      return state
  }
}

export const appReducer = combineReducers({
  app: reducer,
})
