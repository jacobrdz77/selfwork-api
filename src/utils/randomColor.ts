import { Color } from "@prisma/client";
import getRandomInt from "./getRandomInt";
const projectIconColors = [
  "Classic",
  "Maroon",
  "OrangeYellow",
  "YellowGreen",
  "Forest",
  "BlueGreen",
  "Aqua",
  "Blue",
  "Purple",
  "PinkPurple",
  "Pink",
  "Oat",
];
export default function randomColor() {
  return projectIconColors[getRandomInt(0, 11)] as Color;
}
