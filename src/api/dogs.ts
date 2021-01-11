import http from "@/api/http";

interface RandomDogsResponse {
  status: string;
  message: Array<string>;
}

type DogsList = Array<string>;

interface BreedsResponse {
  status: string;
  message: Record<string, Array<unknown>>;
}

type BreedsList = Array<string>;

async function getDogs(num: number): Promise<DogsList | null> {
  const res = await http.get<RandomDogsResponse>(`image/random/${num}`);
  return res.data.status === "success" ? res.data.message : null;
}

async function getBreeds(): Promise<BreedsList | null> {
  const res = (await http.get(`list/all`)) as { data: BreedsResponse };
  const data = res.data;

  return data.status === "success"
    ? Object.keys(data.message).filter((key: keyof typeof data.message) => {
        return data.message[key].length === 0;
      })
    : null;
}

export { getDogs, getBreeds };
