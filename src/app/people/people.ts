import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Resident {
  name: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.html',
  styleUrls: ['./people.css']
})
export class PeopleComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const planetId = params['id'];
      this.loadResidents(planetId);
    });
  }

  loadResidents(planetId: string): void {
    this.http.get<any>(`https://swapi.py4e.com/api/planets/${planetId}/`).subscribe({
      next: (data: any) => { 
        this.residents = [];
        data.residents.forEach((url: string) => {
          this.http.get<Resident>(url).subscribe((resident: Resident) => {
            this.residents.push(resident);
          });
        });
      },
      error: (error: any) => console.error('There was an error!', error)
    });
  }
}
