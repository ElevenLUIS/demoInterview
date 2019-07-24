import { Component, OnInit } from '@angular/core';
import { CatService } from '../core/services/cat.service';
import IImageResponse from '../core/models/interfaces/image-response.interface';
import CatImage from '../core/models/cat-image.class';

@Component({
    selector: 'app-favs',
    templateUrl: './favs.component.html',
    styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {

    private _favImages: Array<CatImage> = [];

    constructor(private catService: CatService) { }

    ngOnInit(): void {
        this.getFavorites();
    }

    get favImages(): Array<CatImage> {
        return this._favImages;
    }

    getFavorites(): void {
        this.catService.getFavorites().subscribe(
            (response: Array<CatImage>) => {
                this._favImages = response;
            }
        );
    }

    deleteFavorite(image: CatImage): void {
        this.catService.deleteFavorite(image.id).subscribe(
            (response: any) => {
                this._favImages.splice(this._favImages.indexOf(image), 1);
            }
        );
    }
}
