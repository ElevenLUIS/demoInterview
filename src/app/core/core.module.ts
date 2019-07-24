import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CatService } from './services/cat.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        CatService
    ]
})
export class CoreModule { }
