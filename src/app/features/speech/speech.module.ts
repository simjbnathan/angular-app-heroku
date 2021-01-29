import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "src/app/shared/shared.module";
import { SpeechDetailComponent } from "./speech-detail/speech-detail.component";
import { SpeechEditComponent } from "./speech-edit/speech-edit.component";
import { SpeechListComponent } from "./speech-list/speech-list.component";
import { ProductResolver } from "./speech-resolver.service";

@NgModule({
  imports: [
    SharedModule,

    RouterModule.forChild([
      { path: '', component: SpeechListComponent },
      {
        path: ':id', component: SpeechDetailComponent,
        resolve: { resolvedData: ProductResolver }
      },
      {
        path: ':id/edit', component: SpeechEditComponent,
        resolve: { resolvedData: ProductResolver }
      },
    ])
  ],
  declarations: [
    SpeechListComponent,
    SpeechDetailComponent,
    SpeechEditComponent
  ]
})
export class SpeechModule { }