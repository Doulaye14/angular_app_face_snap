import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap-service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  btnText!: string;

  constructor(private faceSnapService: FaceSnapService,
              private router: Router){}

  ngOnInit(){
    this.btnText = "Oh Snap!";
  }

  onSnap(){
    if (this.btnText == "Oh Snap!") {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.btnText = "Oops, un Snap!"
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.btnText = "Oh Snap!"
    }
  }

  onView(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
