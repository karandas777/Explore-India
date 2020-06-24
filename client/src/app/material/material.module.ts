import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatRippleModule } from "@angular/material";
const MaterialComponents=[
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
]


@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
