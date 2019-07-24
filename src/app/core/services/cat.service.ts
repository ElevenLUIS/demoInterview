import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import IImageResponse from '../models/interfaces/image-response.interface';
import CatImage from '../models/cat-image.class';

@Injectable()
export class CatService {

    constructor(private http: HttpClient) { }

    getRandomCat(): Observable<CatImage> {
        return this.http.get<IImageResponse>('images').pipe(
            map((response: IImageResponse) => response.image)
        );
    }

    addImageToFavs(imageId: string): Observable<CatImage> {
        return this.http.post<IImageResponse>(`images/fav/${imageId}`, null).pipe(
            map((response: IImageResponse) => response.image)
        );
    }

    getFavorites(): Observable<Array<CatImage>> {
        return this.http.get('images/fav').pipe(
            map((response: {images: Array<CatImage>}) => response.images)
        );
    }

    deleteFavorite(imageId: string): Observable<any> {
        return this.http.delete(`images/fav/${imageId}`);
    }
}
