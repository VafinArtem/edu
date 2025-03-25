import {getNewsPage} from "@/api/news-page";
import {getTypes} from "@/api/news-types";
import NewsPage from "@/views/news-page/news-page";
import {notFound} from "next/navigation";
import {ReactElement} from "react";

const NewsLayout = async (props: {searchParams?: Promise<Record<string, string>>;}): Promise<ReactElement | null> => {
  const search = await props.searchParams;
  const page = await getNewsPage(search);
  const types = await getTypes();

  if (!page || page.code !== 200) {
    notFound();
  }

  return (
    <NewsPage
      cards={page.answer.data.cards ?? []}
      pages={page.answer.data.pages}
      types={types?.answer.data ?? []}
    />
  );
};

export default NewsLayout;
