import { Box } from "@/components/atoms/Box";
import { Input } from "@/components/atoms/Input";

import styles from "./FormField.module.css";

type FormFieldProps = {
  id: string;
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormField = ({ id, label, type, name, value, onChange }: FormFieldProps) => (
  <Box className={styles.wrapper}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <Input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className={styles.input}
    />
  </Box>
);
