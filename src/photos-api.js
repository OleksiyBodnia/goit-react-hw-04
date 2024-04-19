import axios from "axios";

export async function searchPhotos(query, page) {

  try{
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        per_page: 12,
        client_id: "2AN79GUf2H2IOW6wtQwhn-dGW-PxDjr6IY3aCLPcZ7E",
      },
    });
    return response.data.results;

  } catch (erro){
    throw new Error();
  }
    
}