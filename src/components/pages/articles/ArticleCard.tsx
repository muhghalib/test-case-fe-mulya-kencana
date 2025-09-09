import { Article } from "@/types/data/article";

import { Card, CardHeader } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";

import styles from "./ArticleCard.module.css";

type Props = Article;

export const ArticleCard = ({ title, body }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Typography size="xl" weight="600" className={styles.title}>
          {title}
        </Typography>
        <Typography size="sm" className={styles.description}>
          {body}
        </Typography>
      </CardHeader>
    </Card>
  );
};
