import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		redirectTo: 'app',
		pathMatch: 'full'
	},
	{
		path: 'app',
		loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) //website
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
