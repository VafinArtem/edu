import {getCoursesPage} from "@/api/courses-page";
import {getDirections} from "@/api/directions";
import {getSpeakersPage} from "@/api/speakers-page";
import {CourseShort, SpeakerShortCard} from "@/interfaces/course";
import MainPage from "@/views/main-page/main-page";
import {Metadata} from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Стоматологический учебный центр Amrita — дополнительное обучение для стоматологов`,
    description: `Семинары, курсы, мастер-классы для стоматологов, врачей общей практики, имплантологов, хирургов, ортопедов, терапевтов, техников, ассистентов и руководителей клиник. Семинары и курсы от лучших лекторов проводим в Санкт-Петербурге и по всей России. Записывайтесь на обучение на сайте или по телефону 8-800-550-05-24`,
    verification: {
      yandex: "4e28bd7c5073ac84",
      google: "XKkwoE429ZX7oXo7NnT_FrNnHS52wIX4cizFdKV7E_U",
    },
  };
}

const MainLayout = async () => {
  const directions = await getDirections();
  const speakersData = await getSpeakersPage({
    limit: 6,
    searchParams: {
      sort: "RAND",
    },
  });
  const coursesData = await getCoursesPage(undefined, undefined, 8);

  let courses: CourseShort[] = [];
  let speakers: SpeakerShortCard[] = [];

  if (coursesData && coursesData.code === 200) {
    courses = coursesData.data.courses;
  }

  if (speakersData && speakersData.code === 200) {
    speakers = speakersData.answer.data;
  }

  return (
    <>
      <MainPage
        directions={directions?.answer.data ?? []}
        speakers={speakers}
        courses={courses}
      />
    </>
  );
};

export default MainLayout;
