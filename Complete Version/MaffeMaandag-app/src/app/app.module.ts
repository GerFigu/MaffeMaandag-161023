import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsOverviewComponent } from './students/students-overview/students-overview.component';
import { StudentUpdateComponent } from './students/student-update/student-update.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { GRPC_CLIENT_FACTORY, GrpcHandler, GrpcLoggerModule } from '@ngx-grpc/core';
import { GrpcWebClientFactory, GrpcWebClientSettings } from '@ngx-grpc/grpc-web-client';
import { GRPC_STUDENT_SERVICE_CLIENT_SETTINGS } from './generated/maffe-maandag.pbconf';
import { GrpcMessage } from '@ngx-grpc/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function GrpcWebClientSettingsFactory() {
  return { host: 'http://localhost:5000' } as GrpcWebClientSettings;
}

@NgModule({
  declarations: [
    AppComponent,
    StudentsOverviewComponent,
    StudentUpdateComponent,
    StudentAddComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    GrpcLoggerModule.forRoot({
      settings: {
        requestMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
        responseMapper: (msg: GrpcMessage) => msg.toProtobufJSON()
      }
    }), 
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpClientModule,
    { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
    {
      provide: GRPC_STUDENT_SERVICE_CLIENT_SETTINGS,
      useFactory: GrpcWebClientSettingsFactory
    },
    { provide: GrpcHandler, useClass: GrpcHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
