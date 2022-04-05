import { AddressDTO } from "../dtos/InstitutionDetailDTO";


export class InstitutionEntity {
  

  constructor(public id: number, public name: string, public phone: string, public email: string, public site: string, public addressDTO: AddressDTO) {}

  getAddress?(): string {
    return `${this.addressDTO.rua}, ${this.addressDTO.numero} - ${this.addressDTO.bairro}, ${this.addressDTO.cidade} - ${this.addressDTO.estado}, ${this.addressDTO.cep}`
  }

}
