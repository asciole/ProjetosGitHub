import { PrestadorService } from './services/prestador.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/components/InputText/inputtext';
import { ButtonModule } from 'primeng/components/Button/Button';
import { DataTableModule } from 'primeng/components/DataTable/DataTable';
import { TooltipModule } from 'primeng/components/Tooltip/Tooltip';
import { DialogModule } from 'primeng/components/Dialog/Dialog';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { AppComponent } from './app.component';
import { PesquisaPrestadorComponent } from './pesquisa-prestador/pesquisa-prestador.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ManterPrestadorComponent } from './manter-prestador/manter-prestador.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {FieldsetModule} from 'primeng/components/fieldset/fieldset';
import { routing } from './router-module';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaPrestadorComponent,
    NavbarComponent,
    LoginComponent,
    ManterPrestadorComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    DataTableModule,
    HttpModule,
    JsonpModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    FieldsetModule,
    routing
  ],
  providers: [PrestadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
