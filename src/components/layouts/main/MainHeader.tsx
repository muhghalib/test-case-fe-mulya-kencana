"use client";

import { useMainSidebar } from "./MainSidebarProvider";
import { PanelLeft } from "lucide-react";

import { Box } from "@/components/atoms/Box";

import styles from "./MainHeader.module.css";

export const MainHeader = () => {
  const { isOpen, setIsOpen } = useMainSidebar();

  const handleOnClickToggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="header" className={styles.container}>
      <Box className={styles.innerWrapper}>
        <button onClick={handleOnClickToggleButton} className={styles.toggleButton}>
          <PanelLeft size={16} />
        </button>
      </Box>
    </Box>
  );
};
