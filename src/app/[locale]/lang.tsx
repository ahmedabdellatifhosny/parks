export const language =
  typeof window !== "undefined"
    ? localStorage.getItem("lang") !== null
      ? localStorage.getItem("lang")
      : "ar"
    : "ar";
