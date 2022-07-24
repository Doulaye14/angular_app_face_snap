import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap-service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  btnText!: string;

  constructor(private faceSnapService: FaceSnapService,
              private router: ActivatedRoute){}

  ngOnInit(){
    this.btnText = "Oh Snap!";
    const sanpid = +this.router.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(sanpid)
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

}
