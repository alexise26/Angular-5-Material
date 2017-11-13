import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatListModule,
  MatGridListModule,
  MatProgressBarModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    NoopAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
