import http from '@/api/http';

interface GetDogsResponse {
  status: string;
  message: Array<string>;
}

type DogsList = Array<string>;

interface BreedsResponse {
  status: string;
  message: Record<string, Array<unknown>>;
}

type BreedsList = Array<string>;

async function getDogs(breed: string, num = 40): Promise<DogsList | null> {
  const res = await http.get<GetDogsResponse>(
    breed !== 'random'
      ? `breed/${breed}/images/random/${num}`
      : `breeds/image/random/${num}`
  );
  return res.data.status === 'success' ? res.data.message : null;
}

async function getBreeds(): Promise<BreedsList | null> {
  const res = (await http.get(`breeds/list/all`)) as { data: BreedsResponse };
  const data = res.data;

  return data.status === 'success'
    ? Object.keys(data.message).filter((key: keyof typeof data.message) => {
        return data.message[key].length === 0;
      })
    : null;
}

export { getDogs, getBreeds };
