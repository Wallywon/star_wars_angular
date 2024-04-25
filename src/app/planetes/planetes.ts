import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planetes',
  templateUrl: './planetes.html',
  styleUrls: ['./planetes.css']
})
export class PlanetesComponent implements OnInit {
  planete: any[] = [];
  currentPage: number = 1;
  loading: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets(): void {
    this.loading = true;
    const url = `https://swapi.py4e.com/api/planets/?page=${this.currentPage}`;
    console.log("Fetching data from:", url);
    this.http.get<any>(url).subscribe({
      next: (data) => {
        this.planete = data.results;
        this.loading = false;
        this.cdr.markForCheck();  
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  nextPage(): void {
    this.currentPage++;
    console.log('Current Page after Next:', this.currentPage); // Debug log
    this.loadPlanets();
  }
  
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      console.log('Current Page after Previous:', this.currentPage); // Debug log
      this.loadPlanets();
    }
  }
  

  
  getPlanetId(url: string): string {
    const segments = url.split('/'); 
    return segments[5];  
  }
}
