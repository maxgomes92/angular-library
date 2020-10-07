import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MyLibService } from './my-lib.service';

@NgModule({
  declarations: [MyLibComponent],
  providers: [MyLibService],
  exports: [MyLibComponent]
})
export class MyLibModule { }
