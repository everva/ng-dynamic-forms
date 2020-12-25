import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { NGBootstrapSampleFormComponent } from "./ui-ng-bootstrap/ng-bootstrap-sample-form.component";

const APP_ROUTES: Route[] = [
    {
        path: "",
        redirectTo: "/ng-bootstrap-sample-form",
        pathMatch: "full"
    },
    {
        path: "ng-bootstrap-sample-form",
        component: NGBootstrapSampleFormComponent,
        data: {
            title: "NG Bootstrap UI",
            href: "https://github.com/udos86/ng-dynamic-forms/blob/master/sample/app/ng-bootstrap-sample-form/ng-bootstrap-sample-form.model.ts",
            bgColor: "#1b95e0"
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
