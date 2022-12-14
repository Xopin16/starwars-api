import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleList: People[] = [];
  numPages = 0;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page: number) {
    this.peopleService.getPeople(page).subscribe(resp =>  {
      this.peopleList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

  saveImg(people: People){
    let namePers = people.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/characters/${namePers}.jpg`
  }

}
