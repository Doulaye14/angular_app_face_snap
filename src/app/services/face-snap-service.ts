import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
	providedIn: 'root'
})

export class FaceSnapService{
	mySnaps: FaceSnap[] = [
		{
		  id: 1,
		  title: "belle photo",
		  description: "Une très belle photo",
		  imageUrl: "https://img.pixers.pics/pho_wat(s3:700/FO/37/41/83/94/700_FO37418394_c447bba146d5cc241c06648eba18bb1c.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/stickers-hamburger-frites-et-boisson-au-cola.jpg.jpg",
		  createdDate: new Date(),
		  snaps: 0
		},
		{
		  id: 2,
		  title: "belle photo",
		  description: "Une très belle photo",
		  imageUrl: "https://media.istockphoto.com/photos/bacon-cheese-burger-with-beef-patty-tomato-onion-picture-id544805912?k=20&m=544805912&s=612x612&w=0&h=tAh2seBeI-xeAYLsvFWNkYqTOy_9ioiIfckurl4aezA=",
		  createdDate: new Date(),
		  location: "Dakar",
		  snaps: 0
		},
		{
		  id: 3,
		  title: "belle photo",
		  description: "Une très belle photo",
		  imageUrl: "https://st2.depositphotos.com/1020618/8867/i/450/depositphotos_88670080-stock-photo-close-up-of-home-made.jpg",
		  createdDate: new Date(),
		  location: "Kaolack",
		  snaps: 0
		},
		{
		  id: 4,
		  title: "belle photo",
		  description: "Une très belle photo",
		  imageUrl: "https://ucarecdn.com/370d1aa2-4b70-4bbb-a998-ab6b753f80d6/-/resize/700x/700.jpg",
		  createdDate: new Date(),
		  snaps: 0
		},
		{
		  id: 5,
		  title: "belle photo",
		  description: "Une très belle photo",
		  imageUrl: "https://agde-soleil.mythicburger.com/7746-home_default/menu-l-creations.jpg",
		  createdDate: new Date(),
		  location: "Dakar",
		  snaps: 0
		},
		{
		  id: 6,
		  title: "belle photo",
		  description: "Une très belle photo",
		  imageUrl: "https://media.istockphoto.com/photos/hamburger-with-fries-picture-id617364554?k=20&m=617364554&s=170667a&w=0&h=BxrF5_jLL14UwUcOzUNxKJUk1uDo3ya29oOWRFnvffo=",
		  createdDate: new Date(),
		  location: "Kaolack",
		  snaps: 0
		}
	]

	getAllFaceSnaps(): FaceSnap[]{
		return this.mySnaps;
	}

	getFaceSnapById(faceSnapId: number) : FaceSnap{
		const faceSnap = this.mySnaps.find(faceSnap => faceSnap.id === faceSnapId);
		if (!faceSnap) {
			throw new Error("faceSnap not found !");
		}else{
			return faceSnap;
		}
	}

	snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
		const faceSnap = this.getFaceSnapById(faceSnapId);
		snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
	}

}