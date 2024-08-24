// import { Component,  OnInit, PipeTransform } from '@angular/core';
// import { Data, ResponseObject} from '../../interfaces/cat-table.interface';
// import { BreedService } from '../../../../core/services/breed.services';


// import { AsyncPipe, DecimalPipe } from '@angular/common';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';
// import { Observable,  of } from 'rxjs';
// // import { map, startWith } from 'rxjs/operators';
// import { NgbHighlight, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';




// @Component({
//   selector: 'app-cat-table-filters',
//   templateUrl: './cat-table-filters.component.html',
//   standalone: true,
//   imports: [DecimalPipe, AsyncPipe, ReactiveFormsModule, NgbHighlight, NgbTypeaheadModule, NgbPaginationModule],
//   styleUrl: './cat-table-filters.component.css',
//   providers: [DecimalPipe]
// })
// export class CatTableFiltersComponent implements OnInit {
//   page = 1;
// 	pageSize = 10;
// 	collectionSize = 0;

//   breeds: ResponseObject[] = []; // Row Data: The data to be displayed.
//   breeds$: Observable<ResponseObject[]> = of(this.breeds);
//   filter = new FormControl('', { nonNullable: true });



//   constructor(private breedsService: BreedService, private pipe: DecimalPipe) {
   
//   }

 

//   ngOnInit() {
//     this.breedsService.getBreeds().subscribe((data: Data) => {
//       this.breeds = data.responseObject;
//       this.breeds$ = of(this.breeds); // Asigna los datos cargados al observable
//       this.collectionSize = this.breeds.length;
//     });
//   }
//   onInputChange(): void {
//     const searchTerm = this.filter.value;
//     this.breeds$ = of(this.search(searchTerm, this.pipe));
//  // Reset to the first page when filtering
//   }


//   // onSubmit(event: Event): void {
//   //   event.preventDefault(); 
// 	// 	const searchTerm = this.filter.value;
// 	// 	this.breeds$ = of(this.search(searchTerm, this.pipe));
// 	// }

//   search(text: string, pipe: PipeTransform): ResponseObject[] {
//     return this.breeds.filter((cat) => {
//       const term = text.toLowerCase();
//       return (
//         cat.name.toLowerCase().includes(term) ||
//         cat.origin.toLowerCase().includes(term) ||
//         cat.country_code.toLowerCase().includes(term) ||
//         cat.temperament.toLowerCase().includes(term) ||
//         cat.description.toLowerCase().includes(term) ||
//         pipe.transform(cat.dog_friendly).includes(term) ||
//         pipe.transform(cat.intelligence).includes(term)
//       );
//     });
//   }
// }


import { Component, OnInit, PipeTransform } from '@angular/core';
import { Data, ResponseObject } from '../../interfaces/cat-table.interface';
import { BreedService } from '../../../../core/services/breed.services';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cat-table-filters',
  templateUrl: './cat-table-filters.component.html',
  standalone: true,
  imports: [DecimalPipe, AsyncPipe, ReactiveFormsModule, NgbHighlight, NgbPaginationModule],
  styleUrls: ['./cat-table-filters.component.css'],
  providers: [DecimalPipe]
})
export class CatTableFiltersComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = 0;

  breeds: ResponseObject[] = []; // Row Data: The data to be displayed.
  filteredBreeds: ResponseObject[] = []; // Data filtered and paginated
  breeds$: Observable<ResponseObject[]> = of([]); // Observable of the current page's data
  filter = new FormControl('', { nonNullable: true });

  constructor(private breedsService: BreedService, private pipe: DecimalPipe) {}

  ngOnInit() {
    this.breedsService.getBreeds().subscribe((data: Data) => {
      this.breeds = data.responseObject;
      this.collectionSize = this.breeds.length;
      this.onInputChange(); // Initially apply the filter and pagination
    });

    this.filter.valueChanges.subscribe(() => {
      this.onInputChange();
    });
  }

  onInputChange(): void {
    this.page = 1; // Reset to the first page when filtering
    const searchTerm = this.filter.value;
    this.filteredBreeds = this.search(searchTerm, this.pipe);
    this.collectionSize = this.filteredBreeds.length;
    this.updateFilteredBreeds();
  }

  search(text: string, pipe: PipeTransform): ResponseObject[] {
    return this.breeds.filter((cat) => {
      const term = text.toLowerCase();
      return (
        cat.name.toLowerCase().includes(term) ||
        cat.origin.toLowerCase().includes(term) ||
        cat.country_code.toLowerCase().includes(term) ||
        cat.temperament.toLowerCase().includes(term) ||
        cat.description.toLowerCase().includes(term) ||
        pipe.transform(cat.dog_friendly).includes(term) ||
        pipe.transform(cat.intelligence).includes(term)
      );
    });
  }

  updateFilteredBreeds(): void {
    this.breeds$ = of(
      this.filteredBreeds
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
    );
  }

  onPageChange(page: number): void {
    this.page = page;
    this.updateFilteredBreeds();
  }
}
