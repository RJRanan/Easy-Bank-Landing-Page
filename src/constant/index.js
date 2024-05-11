import {
  iconApi,
  iconBudgeting,
  iconOnBoarding,
  iconOnline,
} from "../assets/images";

export const navLinks = [
  {
    id: "0",
    href: "#home",
    label: "Home",
  },
  {
    id: "1",
    href: "#about",
    label: "About",
  },
  {
    id: "2",
    href: "#contact",
    label: "Contact",
  },
  {
    id: "3",
    href: "#blog",
    label: "Blog",
  },
  {
    id: "4",
    href: "#careers",
    label: "Careers",
  },
];

export const services = [
  {
    id: "0",
    iconURL: iconOnline,
    label: "Online Banking",
    caption:
      "Our modern web and mobile applications allow you to  keep track of your finances wherever you are in the world.",
  },

  {
    id: "1",
    iconURL: iconBudgeting,
    label: "Simple Budgeting",
    caption:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },

  {
    id: "2",
    iconURL: iconOnBoarding,
    label: "Fast Onboarding",
    caption:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },

  {
    id: "3",
    iconURL: iconApi,
    label: "Open API",
    caption:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
