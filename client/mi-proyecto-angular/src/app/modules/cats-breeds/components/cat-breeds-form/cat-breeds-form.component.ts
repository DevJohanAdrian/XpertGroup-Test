import { Component, OnInit } from '@angular/core';
import { BreedService } from '../../../../core/services/breed.services';
import { ImagesService } from '../../../../core/services/images.service';
import { Data, ResponseObject } from '../../interfaces/breed.interface';
import { DataImage, ResponseObjectImage } from '../../interfaces/image.interface';

@Component({
  selector: 'app-cat-breeds-form',
  templateUrl: './cat-breeds-form.component.html',
  styleUrl: './cat-breeds-form.component.css'
})


export class CatBreedsFormComponent implements OnInit {
  breeds: ResponseObject[] = [];
  selectedBreed: string | undefined;
  imageCodeId: string | undefined;
  breedDetails: any;
  breedImages: ResponseObjectImage [] = []


  
  constructor(private breedsService: BreedService, private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.breedsService.getBreeds().subscribe((data: Data) => {
      this.breeds = data.responseObject;
    });
  }

  onBreedChange(): void {
    if (this.selectedBreed) {
      this.breedsService.getBreedById(this.selectedBreed).subscribe((data: Data) => {
        this.breedDetails = data.responseObject;
       
      });

      this.imagesService.getImagesByBreedId(this.selectedBreed).subscribe((images: DataImage ) => {
        this.breedImages = images.responseObject;
      });
    }
  }

 
}