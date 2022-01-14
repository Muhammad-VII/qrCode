import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetVcardInfoService {
  constructor(private _HttpClient:HttpClient) { }
  show404 = new BehaviorSubject(false);
  getVcardInfo(id:string): Observable<any> {
    const jsonForm: FormGroup = new FormGroup({
      SmallId: new FormControl(id),
      Token: new FormControl('4hO_Q5Pm4G8avz3WWfzTTZ8sCvZufV2VUw0yeuEggJs'),
    })
    return this._HttpClient.post(`https://eams-api.azurewebsites.net/GetVCardIfo`,jsonForm.value)
  }

  addToContact(id:number): Observable<any> {
    const jsonForm: FormGroup = new FormGroup({
      VCartLogId: new FormControl(id),
      Token: new FormControl('pKpJnDRkwrVkvKSI7T1NsDdLzfhuhz-USUz4QXL0pSQ'),
    })
    return this._HttpClient.post("https://eams-api.azurewebsites.net/AddToContact",jsonForm.value)
  }
}
