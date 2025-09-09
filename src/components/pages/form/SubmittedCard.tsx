import { Card, CardContent, CardHeader } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";

import styles from "./SubmittedCard.module.css";

type Props = {
  data: { [key: string]: string };
};

export const SubmittedCard = ({ data }: Props) => (
  <Card className={styles.container}>
    <CardHeader>
      <Typography size="xl" weight="600">
        Data Pendaftaran
      </Typography>
    </CardHeader>
    <CardContent>
      <ul>
        {Object.entries(data).map(([key, value], idx) => (
          <li key={idx} style={{ listStylePosition: "inside" }}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
