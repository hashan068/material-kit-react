// ----------------------------------------------------------------------

type Account = {
  displayName: string;
  email: string;
  photoURL: string;
};

export class AccountClass {
  constructor(
    public displayName: string = 'Jaydon Frankie',
    public email: string = 'demo@minimals.cc',
    public photoURL: string = '/assets/images/avatars/avatar_25.jpg'
  ) {}
}

export const account: Account = new AccountClass();

