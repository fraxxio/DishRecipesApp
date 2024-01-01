import { getUserTimezoneOffset } from "../GetTimezone/GetUserTimezone";

export default async function useFetchTrending(page) {
  const timeZone = encodeURIComponent(getUserTimezoneOffset());
  const pageOffset = page * 20;
  const url = `https://tasty.p.rapidapi.com/feeds/list?size=5&timezone=${timeZone}&vegetarian=false&from=0`;
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
