import axios from "axios"
import { Photo } from "../types/types"

const pixabayApiKey =
  process.env.PIXABAY_API_KEY || "45640711-3b2c9c3e0dd9ac6e6a5b798be"

export const fetchPhotos = async (count: number): Promise<Photo[]> => {
  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: pixabayApiKey,
        per_page: count,
      },
    })

    const photos: Photo[] = response.data.hits.map((hit: any) => ({
      id: hit.id.toString(),
      url: hit.webformatURL,
    }))

    return photos
  } catch (error) {
    console.error("Error fetching photos from Pixabay:", error)
    throw new Error("Failed to fetch photos from Pixabay")
  }
}
