import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button';
//import { MatBadgeModule } from '@angular/material/badge';
//import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { PipesModule } from '@wizdm/connect/database/pipes';
import { MomentPipesModule } from '@wizdm/pipes/moment';
import { EditableViewerModule } from '@wizdm/editable';
import { ContentModule } from '@wizdm/content';
import { AvatarModule } from '@wizdm/elements/avatar';
import { IconModule } from '@wizdm/elements/icon';
//import { AuthGuardModule } from 'app/utils/auth-guard';
import { PostComponent } from './post.component';

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    //MatBadgeModule,
    //MatMenuModule,
    MatChipsModule,
    MatDividerModule,
    //AuthGuardModule,
    EditableViewerModule,
    MomentPipesModule,
    PipesModule,
    ContentModule,
    AvatarModule,
    IconModule
  ],
  declarations: [ PostComponent ],
  exports: [ PostComponent ]
})
export class PostModule { }
