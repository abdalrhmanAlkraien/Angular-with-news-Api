import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';

const metrial=[
  MatButtonModule,
  MatSliderModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule
];
@NgModule({

  imports: [metrial],
  exports:[metrial]
})
export class MetrialModule { }
