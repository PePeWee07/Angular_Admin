import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { FormsModule } from '@angular/forms';

export class UploadAdapter {
  private loader;
  constructor(loader: any) {
    this.loader = loader;
  }
}


@Component({
  selector: 'app-inline',
  standalone: true,
  imports: [PageTitleComponent, FormsModule],
  templateUrl: './inline.component.html',
  styles: ``
})
export class InlineComponent {
  name = 'Angular';
  public editor: any;


}
