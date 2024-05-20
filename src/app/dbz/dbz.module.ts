import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dbzComponent } from './components/components.component';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponentDBZ } from './components/list/list-component/list-component.component';
import {AgregaCharacterComponentComponent} from './components/agrega-character-component/agrega-character-component.component'




@NgModule({
    declarations: [
        dbzComponent,
        MainPageComponent,
        ListComponentDBZ,
        AgregaCharacterComponentComponent,
    ],
    exports: [
        dbzComponent,
        MainPageComponent,
        ListComponentDBZ,
        AgregaCharacterComponentComponent,
    ],
    imports: [
        CommonModule,

    ]
})
export class DbzModule { }
