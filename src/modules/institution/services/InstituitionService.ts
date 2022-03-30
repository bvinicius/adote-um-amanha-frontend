import { InstituitionEntity } from "../models/InstituitionEntity";

export async function getInstituition(id: number): Promise<InstituitionEntity> {
  const instituitionMock: InstituitionEntity = {
    id,
    name: "Lar esperança",
    phone: "(51) 3517-4877",
    email: "Laresperança@hotmail.com",
    site: "https://laresperanca.com",
    adress: "R. Deodoro, 250 - Mário Quintana, Porto Alegre - RS, 91260-370"
  };
  return Promise.resolve(instituitionMock);
}
