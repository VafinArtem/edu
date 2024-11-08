import React, {ReactElement} from "react";
import SpeakersPage from "@/views/speakers-page/speakers-page";
import {notFound} from "next/navigation";
import {getSpeakersPage} from "@/api/speakers-page";
import {getDirections} from "@/api/directions";

const SpeakersLayout = async ({params}: {
  params: Promise<{
    slug?: string[],
    searchParams?: Record<string, string>;
  }>
}): Promise<ReactElement | null> => {
  const fetchedParams = await params;
  const slugs = fetchedParams.slug;

  const lastSlug = slugs && (slugs.length > 1 ? slugs[slugs.length - 1] : slugs[0]);

  const page = await getSpeakersPage(lastSlug, fetchedParams.searchParams);

  if (!page) {
    notFound();
  }

  const directions = await getDirections();

  return (<SpeakersPage directions={directions ?? []} pages={page.pages} speakers={page.speakers} />);
};

export default SpeakersLayout;
