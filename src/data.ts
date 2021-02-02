import { Task } from "./types";

export const tasks: Task[] = [
  {
    title: "UI Design",
    timer: "00:42:00",
    categories: [
      { name: "work", color: "pink" },
      { name: "rasion project", color: "purple", icon: "desktop" },
    ],
    selected: false,
    play: false,
  },
  {
    title: "100x Sit-Up",
    timer: "00:14:06",
    categories: [
      { name: "personal", color: "gray" },
      { name: "workout", color: "orange", icon: "barbell" },
    ],
    selected: false,
    play: false,
  },
  {
    title: "Learn HTML & CSS",
    timer: "00:24:52",
    categories: [
      { name: "personal", color: "gray" },
      { name: "coding", color: "pink", icon: "code-slash" },
    ],
    selected: false,
    play: false,
  },
  {
    title: "Read 10 pages of book",
    timer: "00:21:09",
    categories: [
      { name: "personal", color: "gray" },
      { name: "reading", color: "green", icon: "book" },
    ],
    selected: false,
    play: false,
  },
];
