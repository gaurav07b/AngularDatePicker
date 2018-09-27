import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatInputModule, MatTableModule, MatFormFieldModule} from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

export const MY_FORMATS = {
  parse: {
    dateInput: 'Do MMM YY',
  },
  display: {
    dateInput: 'Do MMM YY',
    monthYearLabel: 'MMM YY',
    dateA11yLabel: 'Do',
    monthYearA11yLabel: 'MMMM YY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
