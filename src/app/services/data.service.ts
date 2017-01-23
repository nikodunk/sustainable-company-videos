import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/Rx';
import { AngularFire, FirebaseListObservable } from 'angularfire2';




@Injectable()
export class DataService {

  email = null;
  brand = new Object;


  constructor(private http: Http, private af:AngularFire) { };



  storeEmails(){
  	const body=JSON.stringify(this.email);
  	const headers = new Headers({
  		'Content-Type': 'application/json'
  	});
  	return this.http.post('https://superjuice-1cb15.firebaseio.com/emails.json', body, {headers: headers})
  }

  storeBrand(){
    const body=JSON.stringify(this.brand);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://superjuice-1cb15.firebaseio.com/brands.json', body, {headers: headers})
  }


fetchPosts(){
    const body=JSON.stringify(this.brand);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('https://superjuice-1cb15.firebaseio.com/brands.json')
      .map(data => data.json())
  }
  



  storeVote(){
    const body=JSON.stringify(this.brand);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://superjuice-1cb15.firebaseio.com/brands/.json', body, {headers: headers})
  }

  // fetchESCOs() {
  //   return this.af.database.list('/escos', {
  //         query: {
  //           orderByChild: 'name',
  //         } 
  //       });
  // }

  // fetchNews() {
  //   return this.af.database
  //             .list('/brands')
  //             .map((array) => array.reverse()) as FirebaseListObservable<any[]>;

  // }


  // fetchData(type: string) {
  //   return this.af.database
  //         .list('/brands', {
  //         query: {
  //           orderByChild: 'category',
  //           equalTo: type,
  //         } 
  //       });
  // }

  
  

}
