import { ArticleList } from "./ArticleList";
import { Article } from "@/types/data/article";

import { Box } from "@/components/atoms/Box";
import { Typography } from "@/components/atoms/Typography";

export const ArticlesPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const articles: Article[] = await res.json();

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Typography as="h1" size="3xl" weight="600">
        Articles
      </Typography>
      {articles.length === 0 ? (
        <Typography style={{ margin: "0 auto" }}>Article could not be found.</Typography>
      ) : (
        <ArticleList articles={articles} />
      )}
    </Box>
  );
};
