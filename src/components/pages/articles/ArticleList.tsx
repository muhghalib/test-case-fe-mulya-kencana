import { ArticleCard } from "./ArticleCard";
import { Article } from "@/types/data/article";

import { Box } from "@/components/atoms/Box";

import styles from "./ArticleList.module.css";

type Props = {
  articles: Article[];
};

export const ArticleList = ({ articles }: Props) => {
  return (
    <Box className={styles.container}>
      {articles.map(article => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </Box>
  );
};
