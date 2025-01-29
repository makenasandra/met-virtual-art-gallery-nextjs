import { cache } from "react";
import "server-only";

const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1";

// Using Met Museum of Art API: https://metmuseum.github.io/
export const fetchObjectIDs = cache(async (term: string) => {
  const response = await fetch(`${baseUrl}/search?hasImages=true&q=${term}`, {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch!");
  }

  return response.json();
});

export const fetchObject = cache(async (objectID: number) => {
  const response = await fetch(`${baseUrl}/objects/${objectID}`, {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    return { 
      data: null, 
      error: "Failed to fetch data!" };
  }

  const data = await response.json();
  return { 
    data, 
    error: null };

});
