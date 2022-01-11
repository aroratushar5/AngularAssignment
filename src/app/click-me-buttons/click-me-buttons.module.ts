import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickMeButtonsRoutingModule } from './click-me-buttons-routing.module';
import { ScrollListenerDirective } from './scroll-listener.directive';
import { ClickMeButtonsComponent } from './click-me-buttons.component';


@NgModule({
  declarations: [
    ScrollListenerDirective,
    ClickMeButtonsComponent
  ],
  imports: [
    CommonModule,
    ClickMeButtonsRoutingModule
  ]
})
export class ClickMeButtonsModule { }
