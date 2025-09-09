"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMainSidebar } from "./MainSidebarProvider";
import { clsx } from "clsx";
import { Images, LucideFormInput, Newspaper, Users, X } from "lucide-react";

import { Box } from "@/components/atoms/Box";
import { Typography } from "@/components/atoms/Typography";

import styles from "./MainSidebar.module.css";

export const MainSidebar = () => {
  const pathname = usePathname();

  const { isOpen: mainSidebarIsOpen, setIsOpen: setMainSidebarIsOpen } = useMainSidebar();

  return (
    <Box as="aside" className={clsx(styles.container, mainSidebarIsOpen ? styles.active : null)}>
      <Box className={styles.innerWrapper}>
        <button className={styles.toggleClose} onClick={() => setMainSidebarIsOpen(false)}>
          <X size={20} />
        </button>
        <Box className={styles.logoWrapper}>
          <Typography size="lg" weight="600">
            Test Case Frontend
          </Typography>
        </Box>
        <Box className={styles.linksWrapper}>
          {SIDEBAR_LINKS.map(({ label, href, icon }, idx) => {
            const Icon = icon;

            return (
              <Typography
                key={idx}
                className={clsx(styles.linksItem, pathname === href ? styles.active : null)}
                asChild
              >
                <Link href={href}>
                  <Icon size={20} style={{ marginRight: "0.5rem" }} />
                  {label}
                </Link>
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

const SIDEBAR_LINKS = [
  { label: "Users", href: "/", icon: Users },
  { label: "Articles", href: "/articles", icon: Newspaper },
  { label: "Form", href: "/form", icon: LucideFormInput },
  { label: "Gallery", href: "/gallery", icon: Images },
];
