import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string;
  address?: string;
  id: number;
  date: Date;
}

@Injectable()
export class UserService {

  currentUser: User = UserService.dummyUserList[1];


  static dummyUserList: Array<User> = [
    {
      id: 100,
      email: "korisnik@gmail.com",
      password: "korisnik1",
      date: new Date("2021-05-13 17:58")
    },
    {
      id: 200,
      email: "korisnikbroj2@gmail.com",
      password: "korisnik12",
      date: new Date("2021-04-13 17:58")
    },
    {
      id: 300,
      email: "korisnikbroj3@gmail.com",
      password: "korisnik123",
      date: new Date("2021-03-13 17:58")
    }];

  /* pronalazimo korisnika na osnovu id polja iz navedenog niza (podsetnik: dummyUserList) */
  getUserId(id: number): User {
    var userFound: User;

    UserService.dummyUserList.forEach(user => {
      if (user.id == id) {
        userFound = user;
      }
    });

    this.currentUser = userFound!;
    return userFound!;
  }

  /* dohvatamo korisnicko ime iz objekta interfejsa korisnika */
  getUserName(user: User): string {
    return user.email;
  }

  getUser(userEmail: string): User {
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
    return this.currentUser;
  }

  /* provera da li je sifra dobra (u poredjenju sa odgovarajucom email adresom) */
  isPassOk(userEmail: string, password: string): boolean {
    return UserService.dummyUserList.find(userToFind =>
      (userToFind.email == userEmail && userToFind.password == password)) != undefined;
  }

  /* registracija korisnika  */
  registerUser(email: string, password: string, date: Date): User {
    var maxId: number = 0;
    UserService.dummyUserList.forEach(user => {
      if (maxId < user.id) {
        maxId = user.id;
      }
    });

    var id = ++maxId;
    var user: User = { id, email, password, date };

    UserService.dummyUserList.push(user);

    this.currentUser = user;
    console.log(user);
    return user;
  }
}