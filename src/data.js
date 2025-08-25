import Nigerianflag from "./assets/nigerianflag.jpg";
import Ghanaflag from "./assets/ghanaflag.jpg";
import SouthAfrica from "./assets/southAfrica.jpg";
import candidate1 from "./assets/candidate1.jpg";
import candidate2 from "./assets/candidate2.jpg";
import candidate3 from "./assets/candidate3.jpg";
import candidate4 from "./assets/candidate4.jpg";
import candidate5 from "./assets/candidate5.jpg";
import candidate6 from "./assets/candidate6.jpg";
import candidate7 from "./assets/candidate7.jpg";
import { LuFolderMinus } from "react-icons/lu";

export const elections = [
  {
    id: "e1",
    title: "PluralCode Scholarship Award 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    candidates: ["c1", "c2", "c3", "c4"],
    voters: [],
    flag: Nigerianflag,
  },
  {
    id: "e2",
    title: "PluralCode Scholarship Award 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    candidates: ["c1", "c2", "c3", "c4"],
    voters: [],
    flag: Ghanaflag,
  },
  {
    id: "e3",
    title: "PluralCode Scholarship Award 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    candidates: ["c5", "c6", "c7"],
    voters: [],
    flag: SouthAfrica,
  },
];
export const candidates = [
  {
    id: "c1",
    fullName: "Moffi Joseph",
    image: candidate1,
    Motto: "In God we trust for life and happiness over our family.",
    voteCount: 23,
    election: "e1",
  },

  {
    id: "c2",
    fullName: "Eniola Joseph",
    image: candidate2,
    Motto: "In God we trust for life and happiness over our family.",
    voteCount: 23,
    election: "e1",
  },
  {
    id: "c3",
    fullName: "Miracle Emmanuel",
    image: candidate3,
    Motto: "In God we trust for life and happiness over our family.",
    voteCount: 63,
    election: "e1",
  },
  {
    id: "c4",
    fullName: "Chidimma Alozie",
    image: candidate4,
    Motto: "In God we trust for life and happiness over our family.",
    voteCount: 43,
    election: "e1",
  },
  {
    id: "c5",
    fullName: "Mercy John",
    image: candidate5,
    Motto: "In God we trust for life and happiness over our family.",
    voteCount: 23,
    election: "e2",
  },
  {
    id: "c6",
    fullName: "David Solomon",
    image: candidate6,
    Motto: "In God we trust for life and happiness over our family.",
    voteCount: 63,
    election: "e2",
  },
  {
    id: "c7",
    fullName: "Haruna Mazi",
    image: candidate7,
    Motto: "In God we trust for life and happiness over our family.",
    voteCount: 13,
    election: "e2",
  },
];

export const voters = [
  {
    id: "v1",
    fullName: "Peace Emmanuel",
    email: "Emma23@gmail.com",
    password: "emma1234",
    isAdmin: true,
    votedElections: ["e2"],
  },
  {
    id: "v2",
    fullName: " Cherish Hena",
    email: "Cherish23@gmail.com",
    password: "Cheri1234",
    isAdmin: false,
    votedElections: ["e1", "e2"],
  },
  {
    id: "v3",
    fullName: "Nathaniel Matt",
    email: "Matt23@gmail.com",
    password: "Matt1234",
    isAdmin: false,
    votedElections: ["e1", "e2"],
  },
  {
    id: "v4",
    fullName: "Ola Yinka",
    email: "Ola23@gmail.com",
    password: "Ola1234",
    isAdmin: true,
    votedElections: [],
  },
];
