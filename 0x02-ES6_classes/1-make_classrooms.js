// eslint-disable-next-line import/extensions
import ClassRoom from './0-classroom.js';

export default function initiializeRoooms() {
  const firstClass = new ClassRoom(19);
  const secondClass = new ClassRoom(20);
  const thirdClass = new ClassRoom(34);
  return [firstClass, secondClass, thirdClass];
}
