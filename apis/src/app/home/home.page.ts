import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  image: any;
  imageDate = new FormControl(new Date());

  constructor(private nasaService:NasaService) {}
  ngOnInit() {
    this.nasaService.getimageoftheday().subscribe((data) => {
      this.image = data;
    });
  }
  loadimage(imageDate: any) {
    this.nasaService.getimagebydate(imageDate.value).subscribe((data) => {
      this.imageDate = data;
    });
  }
    
}
