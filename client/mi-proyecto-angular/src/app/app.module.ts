import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsTableComponent } from './modules/cats-table/pages/cats-table.component';
import { CatsBreedsComponent } from './modules/cats-breeds/pages/cats-breeds.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InicioCardComponent } from './modules/dashboard/pages/inicio/components/inicio-card/inicio-card.component';
import InicioComponent from './modules/dashboard/pages/inicio/inicio.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { CatBreedsFormComponent } from './modules/cats-breeds/components/cat-breeds-form/cat-breeds-form.component';
import { CatTableFiltersComponent } from './modules/cats-table/components/cat-table-filters/cat-table-filters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProtectedComponent } from './auth/pages/protected/protected.component';





@NgModule({
  declarations: [
    AppComponent,
    CatsTableComponent,
    CatsBreedsComponent,
    DashboardComponent,
    InicioComponent,
    InicioCardComponent,
    LoginComponent,
    RegisterComponent,
    CatBreedsFormComponent,
    ProtectedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule, 
    CatTableFiltersComponent,
    NgbModule
   
  
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
