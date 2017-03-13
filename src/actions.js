export const HEART_CLICK = 'HEART_CLICK';
export const PHOTO_CLICK = 'PHOTO_CLICK';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export function heartClick() {
  return { type: HEART_CLICK }
}

export function photoClick(catId) {
  return { type: PHOTO_CLICK, catId }
}

export function modalClose() {
  return { type: MODAL_CLOSE }
}
