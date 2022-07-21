import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  btnText!: string;

  ngOnInit(){
    this.title = "Meilleur image";
    this.description = "Un beau paysage";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.btnText = "Oh Snap!";
  }

  onSnap(){
    if (this.btnText == "Oh Snap!") {
      this.snaps++;
      this.btnText = "Oops, un Snap!"
    } else {
      this.snaps--;
      this.btnText = "Oh Snap!"
    }
  }
  
}

