import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataImage } from '../../modules/cats-breeds/interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiUrl = 'http://localhost:3000/api/v1/catsImage';  // URL de tu backend

  constructor(private http: HttpClient) { }

  getImagesByBreedId(breed_id: string): Observable<DataImage> {
    return this.http.get<DataImage>(`${this.apiUrl}/images/${breed_id}`);
  }
}