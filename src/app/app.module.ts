import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatTabsModule} from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatMenuModule} from '@angular/material/menu';  
// animaciones del navegador
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// peticiones http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// cookie serivice
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
// componentes
import { LoginErrorComponent } from './components/login/login-error/login-error.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatInputModule } from '@angular/material/input';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { IndexProductComponent } from './components/products/index-product/index-product.component';
import {MatCardModule} from '@angular/material/card';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { IonicModule } from '@ionic/angular'; 
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';
import { CreateCuponComponent } from './components/cupones/create-cupon/create-cupon.component';
import { IndexCuponComponent } from './components/cupones/index-cupon/index-cupon.component';
import { UpdateCuponComponent } from './components/cupones/update-cupon/update-cupon.component';
import { GaleriaProductComponent } from './components/products/galeria-product/galeria-product.component';
import { DragDirective } from './directives/drag.directive';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CreateMarcaComponent } from './components/añadir/create-marca/create-marca.component';
import { IndexMarcaComponent } from './components/añadir/index-marca/index-marca.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginErrorComponent,
    SidenavComponent,
    BodyComponent,
    SublevelMenuComponent,
    NotFoundComponent,
    DashboardComponent,
    NavbarComponent,
    CreateProductComponent,
    IndexProductComponent,
    UpdateProductComponent,
    ConfirmDialogComponent,
    CreateCuponComponent,
    IndexCuponComponent,
    UpdateCuponComponent,
    GaleriaProductComponent,
    DragDirective,
    CreateMarcaComponent,
    IndexMarcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    NgxDropzoneModule,
    MatMenuModule,
    IonicModule.forRoot()
  
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [CookieService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
