import { clsx } from "clsx";

import styles from "./Divider.module.css";

export const Divider = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.divider, className)} {...props} />;
};
