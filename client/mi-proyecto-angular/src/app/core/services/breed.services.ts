import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../../modules/cats-breeds/interfaces/breed.interface';
// import { DataTable } from '../../modules/cats-table/interfaces/cat-table.interface';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  private apiUrl = 'http://localhost:3000/api/v1/cats';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<Data> {
    return this.http.get<Data>(`${this.apiUrl}/breeds`);
  }

  getBreedById(breedId: string): Observable<Data> {
    return this.http.get<Data>(`${this.apiUrl}/breeds/${breedId}`);
  }

  // searchBreeds(query: string): Observable<DataTable> {
  //   return this.http.get<DataTable>(`${this.apiUrl}/breedsQuery/search?q=${query}`);
  // }


}


