import { Request, Response } from "express"
import { fetchPhotos } from "../services/photoService"
import { getCache, setCache } from "../services/cacheService"
import { Photo } from "../types/types"

export const getPhotos = async (req: Request, res: Response): Promise<void> => {
  const count = parseInt(req.params.count, 10)
  const cacheKey = `photos_${count}`

  try {
    const cachedPhotos = getCache<Photo[]>(cacheKey)

    if (cachedPhotos) {
      res.json(cachedPhotos)
      return
    }

    const photos = await fetchPhotos(count)

    setCache<Photo[]>(cacheKey, photos)

    res.json(photos)
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch photos",
      details: error instanceof Error ? error.message : "",
    })
  }
}
