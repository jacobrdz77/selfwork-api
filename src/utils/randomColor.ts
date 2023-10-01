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

export const transformColor = (color: string) => {
  switch (color) {
    case "orange-yellow":
      return "OrangeYellow";
    case "yellow-green":
      return "YellowGreen";

    case "forest":
      return "Forest";

    case "blue-green":
      return "BlueGreen";

    case "aqua":
      return "Aqua";

    case "blue":
      return "Blue";

    case "purple":
      return "Purple";

    case "pink-purple":
      return "PinkPurple";

    case "pink":
      return "Pink";

    case "oat":
      return "Oat";
    case "maroon":
      return "Maroon";
  }
};
