import { NgModule } from "@angular/core";
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "prestations",
    loadChildren: "./prestations/prestations.module#PrestationsModule",
  },
  {
    path: "clients",
    loadChildren: "./clients/clients.module#ClientsModule",
  },
  {
    path: "**",
    loadChildren: "./page-not-found/page-not-found.module#PageNotFoundModule",
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules,
    }),
  ],
})
export class AppRoutingModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) =>
      typeof value === "function" ? value.name : value;

    console.log("Routes: ", JSON.stringify(router.config, replacer, 2));
  }
}
