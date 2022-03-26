import { AxiosResponse } from "axios";
import { HTTP } from "../../api/http-common";
import { Category } from "../shared/enums/Category";
import { Subcategory } from "../shared/enums/Subcategory";
import { NecessityEntity } from "./models/NecessityEntity";

export async function getNecessity(id: number): Promise<NecessityEntity> {
  // const response: AxiosResponse<NecessityEntity> = await HTTP.get(
  //   `necessities/${id}`
  // );
  // return response.data;
  const necessityMock: NecessityEntity = {
    id,
    title: "Batata",
    createdDate: new Date(),
    category: Category.asset,
    subcategory: Subcategory.food,
    url: "https://www.youtube.com/embed/2X_2IdybTV0",
    description:
      "Doação de 10 pacotes de batata da marca são joão validade até 02/2023",
  };
  return Promise.resolve(necessityMock);
}
