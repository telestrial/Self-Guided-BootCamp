import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [CommonModule, ElementsRoutingModule],
  exports: [],
})
export class ElementsModule {}
