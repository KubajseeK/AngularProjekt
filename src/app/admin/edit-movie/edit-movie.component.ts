import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/entities/Movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie: Movie | undefined


  constructor() { }

  ngOnInit(): void {
    
  }

}
