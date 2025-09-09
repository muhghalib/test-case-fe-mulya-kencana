import { User } from "@/types/data/user";

import { Box } from "@/components/atoms/Box";
import { Typography } from "@/components/atoms/Typography";

import styles from "./Header.module.css";

type Props = Pick<User, "name" | "username">;

export const Header = ({ name, username }: Props) => {
  return (
    <Box className={styles.container}>
      <Typography size="xl" weight="600">
        {name}
      </Typography>
      <Typography className={styles.usernameInfo}>@{username}</Typography>
    </Box>
  );
};
