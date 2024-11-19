export const API = {
  course: {
    byAlias: process.env.BACKEND_API + "/course/",
    orderWithTariff: process.env.BACKEND_API + "/order-with-tariff",
  },
  speaker: {
    byAlias: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/speaker/" : "/react-api/teachers/view"),
  },
  courses: {
    byType: process.env.BACKEND_API + "/courses/",
    similar: process.env.BACKEND_API + "/similar-courses/",
    filters: process.env.BACKEND_API + "/filters",
    courseTypes: process.env.BACKEND_API + "/courseTypes",
    directions: process.env.BACKEND_API + "/directions",
  },
  speakers: {
    byAlias: process.env.BACKEND_API + (process.env.NODE_ENV === "development" ? "/speakers/" : "/react-api/teachers/index"),
  },
  common: {
    promoRegistration: process.env.BACKEND_API + "/promo-registration/",
    becomeSpeaker: process.env.BACKEND_API + "/become-speaker/",
    sendComment: process.env.BACKEND_API + "/send-comment/",
  },
};
