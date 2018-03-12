SecurityCamerasComponentimport { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';

@NgModule({
  imports: [
	ThemeModule,
	HttpClientModule,
  ],
  declarations: [SecurityCamerasComponent]
})
export class LiveModule { }



