import { MainHeader } from "./MainHeader";
import { MainSidebar } from "./MainSidebar";
import { MainSidebarProvider } from "./MainSidebarProvider";

import { Box } from "@/components/atoms/Box";

import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className={styles.wrapper}>
      <MainSidebarProvider>
        <MainSidebar />
        <Box as="main" className={styles.mainContainer}>
          <MainHeader />
          <Box className={styles.mainInnerWrapper}>{children}</Box>
        </Box>
      </MainSidebarProvider>
    </Box>
  );
};
