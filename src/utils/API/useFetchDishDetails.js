export default async function useFetchDishDetails(id) {
  const url = `${import.meta.env.VITE_BASE_URL}/recipes/get-more-info?id=${id}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (response.status !== 200) {
      console.error("SERVER ERROR: ", response.status);
    } else {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
