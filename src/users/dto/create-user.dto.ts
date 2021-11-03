export class CreateUserDto {
  id?: number;

  name: string;

  sex?: string;

  phoneNumber?: string;

  streetName?: string;

  streetNumber?: string;

  streetDistrict?: string;

  city?: string;

  state?: string;

  birthDate?: Date;

  cpf: string;

  email: string;

  password: string;

  createdAt?: string;

  updatedAt?: string;
}
