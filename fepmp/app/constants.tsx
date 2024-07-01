import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/projects" },
      { title: "Notion", path: "/projects/Notion" },
      { title: "Todo", path: "/projects/Todo" },
    ],
  },
  {
    title: "Components",
    path: "/components",
    icon: <Icon icon="lucide:component" width="24" height="24" />,
  },
  {
    title: "FEEval",
    path: "/frontendeval",
    icon: <Icon icon="lucide:cat" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Easy", path: "/frontendeval/easy/" },
      { title: "Medium", path: "/frontendeval/medium" },
      { title: "Hard", path: "/frontendeval/hard" },
    ],
  },
];
