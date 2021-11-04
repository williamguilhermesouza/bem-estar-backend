export class CreatePatientDto {
  id?: number;

  name: string;

  sex: string;

  phoneNumber: string;

  streetName: string;

  streetNumber: string;

  streetDistrict: string;

  city: string;

  state: string;

  birthDate: Date;

  cpf: string;

  email: string;

  color: string;

  civilState: string;

  religion: string;

  scholarship: string;

  profession: string;

  placeOfBirth: string;

  weight: number;

  height: number;

  createdAt?: string;

  updatedAt?: string;
}
