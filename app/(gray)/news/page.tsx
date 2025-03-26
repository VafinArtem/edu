import {getNewsPage} from "@/api/news-page";
import {getTypes} from "@/api/news-types";
import {getOneNewsPage} from "@/api/one-news-page";
import NewsPage from "@/views/news-page/news-page";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import {ReactElement} from "react";

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
  const page = await getOneNewsPage(params.slug);

  if (!page || page.code !== 200) {
    return {
      title: `404`,
    };
  }

  return {
    title: `Новости стоматологического учебного центра Амрита`,
    description: `Как проходили обучения по направлениям, что было на наших мероприятиях и другие полезные новости о нашем учебном стоматологическом центре Амрита, записывайтесь на курсы для стоматологов на сайте или по телефону 8-800-550-05-24`,
  };
}

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
