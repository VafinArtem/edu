export const API = {
  course: {
    byAlias: process.env.BACKEND_API + "/course/",
  },
  courses: {
    byType: process.env.BACKEND_API + "/courses/",
    similar: process.env.BACKEND_API + "/similar-courses/",
    filters: process.env.BACKEND_API + "/filters",
    courseTypes: process.env.BACKEND_API + "/courseTypes",
    directions: process.env.BACKEND_API + "/directions",
  },
  speakers: {
    byAlias: process.env.BACKEND_API + "/speakers/",
  },
};
