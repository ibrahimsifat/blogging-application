import { Pagination } from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import { useGetPublishedArticlesQuery } from "../../../features/articles/articlesApi";
import Error from "../../shared/ui/Error";
import ArticleCard from "./articleCard/ArticleCard";
const Articles = () => {
  // pagination change control
  const [pageTable, setPageTable] = useState(1);
  const [articles, setArticles] = useState([]);
  function onPageChangeTable(p) {
    setPageTable(p);
  }
  // fetching articles
  const {
    data: publishedArticles,
    isLoading,
    isError,
    error,
  } = useGetPublishedArticlesQuery(pageTable);

  useEffect(() => {
    setArticles(publishedArticles?.articles);
  }, [publishedArticles]);
  console.log(articles);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = publishedArticles?.articleCount;

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <p>Loading... </p>;
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && articles?.length === 0) {
    content = <p>No Teams found!</p>;
  } else if (!isLoading && !isError && articles?.length > 0) {
    content = articles?.map((article) => (
      <ArticleCard key={article._id} article={article} />
    ));
  }

  return (
    <>
      <div>{content}</div>
      <Pagination
        totalResults={totalResults}
        resultsPerPage={resultsPerPage}
        onChange={onPageChangeTable}
        label="Table navigation"
      />
    </>
  );
};

export default Articles;
