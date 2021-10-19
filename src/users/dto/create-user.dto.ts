export class CreateUserDto {
  id?: number;

  name: string;

  sex: string;

  phone_number: string;

  street_name: string;

  street_number: string;

  street_district: string;

  city: string;

  state: string;

  birth_date: Date;

  cpf: string;

  email: string;
  
  password: string;
  
  createdAt?: string;
  
  updatedAt?: string;
}
