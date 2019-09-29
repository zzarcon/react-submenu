import { TriggerEvent, Position } from "./types";

export const getMousePosition = (e: TriggerEvent): Position => {
  const pos = {
    x: e.clientX,
    y: e.clientY
  };

  if (
    e.type === 'touchend' &&
    (!pos.x || !pos.y) &&
    (e.changedTouches && e.changedTouches.length > 0)
  ) {
    pos.x = e.changedTouches[0].clientX;
    pos.y = e.changedTouches[0].clientY;
  }

  if (!pos.x || pos.x < 0) {
    pos.x = 0;
  }

  if (!pos.y || pos.y < 0) {
    pos.y = 0;
  }

  return pos;
}