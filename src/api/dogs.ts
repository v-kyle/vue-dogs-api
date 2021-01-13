import http from '@/api/http';

interface GetDogsResponse {
  status: string;
  message: Array<string>;
}

interface BreedsResponse {
  status: string;
  message: Record<string, Array<unknown>>;
}

async function getDogs(breed: string, num = 40): Promise<Array<string> | null> {
  const urlRandom = `breed/${breed}/images/random/${num}`;
  const urlBreed = `breeds/image/random/${num}`;
  const url = breed === 'random' ? urlBreed : urlRandom;

  const res = await http.get<GetDogsResponse>(url);
  return res.data.status === 'success' ? res.data.message : null;
}

async function getBreeds(): Promise<Array<string> | null> {
  const res = await http.get<BreedsResponse>(`breeds/list/all`);
  const data = res.data;

  return data.status === 'success'
    ? Object.keys(data.message).filter((key: keyof typeof data.message) => {
        return data.message[key].length === 0;
      })
    : null;
}

export { getDogs, getBreeds };
