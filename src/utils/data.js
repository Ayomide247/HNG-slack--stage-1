export const GameColors = [
  {
    id: 0,
    name: "Orange",
    color_code: "#FF5733",
  },
  {
    id: 1,
    name: "Green",
    color_code: "#33FF57",
  },
  {
    id: 2,
    name: "Blue",
    color_code: "#3357FF",
  },
  {
    id: 3,
    name: "Yellow",
    color_code: "#F4D03F",
  },
  {
    id: 4,
    name: "Purple",
    color_code: "#8E44AD",
  },
  {
    id: 5,
    name: "Coral",
    color_code: "#EC7063",
  },
];

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
