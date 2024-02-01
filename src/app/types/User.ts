
export type User = {
  id: number;
  email: string;
  password: string;
}

export type EditUserForm = Omit<User, 'id' | 'password, email'>;
export type CreateUserForm = Omit<User, 'id'>;
