export default async function useFetchSearchQuery(page, searchParams) {
  const pageOffset = (page - 1) * 20;
  const query = searchParams.get("q") || "";
  const tags = searchParams.getAll("tags").join(encodeURIComponent(",")) || "";
  const url = `${
    import.meta.env.VITE_BASE_URL
  }/recipes/list?from=${pageOffset}&size=20&tags=${tags}&q=${query}`;

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
