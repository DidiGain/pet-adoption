export type Animal = "dog" | "cat" | "reptile" |  "rabbit" | "bird";

export interface Pet {
  id: number
  name: string
  animal: Animal
  breed: string
  images: string[]
  city: string
  state: string
}

export interface PetAPIResponse {
  numberOfResults: number
  startIndex: number
  endIndex: number
  hasNext: boolean
  pets: Pet[]
}

export interface BreedListAPIResponse {
  animal: Animal;
  breeds: string[];
}