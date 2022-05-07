import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeSService {

  getDataFromServer(){
    console.log("We sent Request to Server")
  }

      getGithubDataOfUser(username:string){

         return  fetch(`https://api.github.com/users/${username}`)
      }

  constructor() { }
}
