import {Component, OnInit} from '@angular/core';
import {Generation} from 'src/app/models/Generation';
import {GenerationsService} from "../../../services/generations.service";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  get generations(): Generation[] {
    return this._generations;
  }

  set generations(value: Generation[]) {
    this._generations = value;
  }

  private _generations: Generation[];

  constructor(private srv: GenerationsService) {
    this._generations = srv.generations;
  }

  ngOnInit(): void {
  }

  toggleVisibility() {
    let generationsList = document.getElementById("generationsList");
    // @ts-ignore
    generationsList.classList.toggle("invisible");
  }


  displayGeneration(e: any) {
    let generation = e.target.childNodes[0].data;
    console.log(generation);

  }
}
