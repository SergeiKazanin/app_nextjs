export const getAllProjects = async () => {
  const response = await fetch(
    "https://backend.cyberia.studio/api/v1/projects"
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

// export const getProjectByName = async (search: string) => {
//   const response = await fetch(`/api/posts?q=${search}`);

//   if (!response.ok) throw new Error("Unable to fetch posts.");

//   return response.json();
// };
