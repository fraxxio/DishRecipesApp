import { getUserTimezoneOffset } from "../GetTimezone/GetUserTimezone";

export default async function useFetchTrending() {
  //   const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
  //   const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
  // 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  // 	}
  // };

  // try {
  // 	const response = await fetch(url, options);
  // 	const result = await response.text();
  // 	console.log(result);
  // } catch (error) {
  // 	console.error(error);
  // }
  const url = "http://localhost:4000/results";

  try {
    const response = await fetch(url);
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
