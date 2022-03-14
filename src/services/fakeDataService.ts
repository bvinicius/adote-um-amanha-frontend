import { AxiosResponse } from "axios";
import { HTTP } from "../api/http-common";

export async function getAllFakeData(): Promise<FakeUser[]> {
  const response: AxiosResponse<FakeUser[]> = await HTTP.get("todos");
  return response.data;
}

export async function getFakeDataByID(id: number): Promise<FakeUser> {
  const response: AxiosResponse<FakeUser> = await HTTP.get(`todos/${id}`);
  return response.data;
}

export type FakeUser = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
