import { cache } from 'react'
import 'server-only'

const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1'

// Using Met Museum of Art API: https://metmuseum.github.io/
export const fetchObjectIDs = cache(async (term: string) => {
  const res = await fetch(`${baseUrl}/search?hasImages=true&q=${term}`, {
    next: {
      revalidate: 10,
    },
  })
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return res.json()
})

export const fetchObject = cache(async (objectID: number) => {
  const res = await fetch(`${baseUrl}/objects/${objectID}`, {
    next: {
      revalidate: 10,
    },
  })

  if (res.status !== 200) {
    return { data: null, error: `${res.status}: ${res.statusText}` }
  }

  const data = await res.json()

  return { data, error: null }
})
