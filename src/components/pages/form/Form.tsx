import styles from "./Form.module.css";

type Props = {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
};

export const Form = ({ onSubmit, children }: Props) => {
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      {children}
    </form>
  );
};
