import { NgModule } from "@angular/core";
import { PreloadAllModules, Router, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./features/home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            {
                path: 'speeches',
                loadChildren: () =>
                    import('./features/speech/speech.module').then(m => m.SpeechModule)
            },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ], { preloadingStrategy: PreloadAllModules}
        )
    ],
    declarations: [

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }