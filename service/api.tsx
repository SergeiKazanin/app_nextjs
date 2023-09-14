import { Values } from "@/models/models";

export const getAllProjects = async () => {
  const response = await fetch(
    "https://backend.cyberia.studio/api/v1/projects"
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const sendFeedback = async (feedback: FormData) => {
  const response = await fetch(
    "https://backend.cyberia.studio/api/v1/feedbacks",
    {
      method: "POST",
      body: feedback,
    }
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response;
};
