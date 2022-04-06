import { AddressDTO } from "../dtos/InstitutionDetailDTO";


export class InstitutionEntity {


  constructor(public id: number, public name: string, public phone: string, public email: string, public site: string, public addressDTO: AddressDTO) { }

  get address(): string {
    const { rua, numero, bairro, cidade, estado, cep } = this.addressDTO;
    return `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}, ${cep}`
  }

}
