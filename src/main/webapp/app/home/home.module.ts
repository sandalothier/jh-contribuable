import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContribuableSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ContribuableSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class ContribuableHomeModule {}
