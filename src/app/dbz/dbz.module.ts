import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dbzComponent } from './components/components.component';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponentDBZ } from './components/list/list-component/list-component.component';





@NgModule({
    declarations: [
        dbzComponent,
        MainPageComponent,
        ListComponentDBZ,
    ],
    exports: [
        dbzComponent,
        MainPageComponent,
        ListComponentDBZ,
    ],
    imports: [
        CommonModule,

    ]
})
export class DbzModule { }
