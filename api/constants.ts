export const API = {
  news: {
    all: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/news/" : "/react-api/news/view"),
    types: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/types/" : "/react-api/news/view"),
    byAlias: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/one-news/" : "/react-api/news/view"),
  },
  course: {
    byAlias: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/course/" : "/react-api/educations/view"),
    orderWithTariff: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/order-with-tariff" : "/react-api/send-form/education"),
  },
  speaker: {
    byAlias: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/speaker/" : "/react-api/teachers/view"),
  },
  courses: {
    byType: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/courses/" : "/react-api/educations/index"),
    similar: process.env.BACKEND_API + "/similar-courses/",
    filters: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/filters" : "/react-api/filters/index"),
    courseTypes: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/courseTypes" : "/react-api/educations/type"),
    directions: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/directions" : "/react-api/directions/index"),
  },
  speakers: {
    byAlias: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/speakers/" : "/react-api/teachers/index"),
  },
  common: {
    promoRegistration: process.env.BACKEND_API + "/promo-registration/",
    becomeSpeaker: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/become-speaker" : "/react-api/send-form/speakers"),
    becomePartner: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/become-speaker" : "/react-api/send-form/become-partner"),
    sendComment: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/send-comment" : "/react-api/send-form/education-not"),
  },
};
