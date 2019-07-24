import { Component, OnInit } from '@angular/core';
import { CatService } from '../core/services/cat.service';
import IImageResponse from '../core/models/interfaces/image-response.interface';
import CatImage from '../core/models/cat-image.class';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    currentImg: CatImage;

    constructor(private catService: CatService) { }

    ngOnInit(): void {
        this.getRandomImage();
    }

    getRandomImage(): void {
        this.catService.getRandomCat().subscribe(
            (response: CatImage) => {
                this.currentImg = response;
            }
        );
    }

    addImageToFavs(): void {
        this.catService.addImageToFavs(this.currentImg.id).subscribe(
            (response: CatImage) => {
                this.getRandomImage();
            }
        );
    }
}
