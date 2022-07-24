import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap-service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  mySnaps!: FaceSnap[];

  constructor(private facesnapservice: FaceSnapService) {}

  ngOnInit(): void {
    this.mySnaps = this.facesnapservice.getAllFaceSnaps();
  }

}