
interface CreateUserData {
  name ?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>
}

interface TechObject {
  title: string;
  expericence: number;
}

export default function createUser({ name, email, password, techs }: CreateUserData){
  const user = {
    name,
    email,
    password,
    techs
  }

  return user;
}