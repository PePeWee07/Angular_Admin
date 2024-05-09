import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-classic',
  standalone: true,
  imports: [PageTitleComponent, CKEditorModule, FormsModule],
  templateUrl: './classic.component.html',
  styles: ``
})
export class ClassicComponent {
  public Editor = ClassicEditor;
  editorData: string = `<h3>The three greatest things you learn from traveling</h3>
  <p><br data-cke-filler=" true">
  </p>
  <p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p>
  <p><br data-cke-filler="true"></p>

  <h4>Appreciation of diversity</h4>
  <p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>
  <p><br data-cke-filler="true"></p>
  <p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist. But when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p>
  <p><br data-cke-filler="true"></p>
  <ul>
      <li>buy the ticket</li>
      <li><i>start your adventure</i></li>
  </ul>`;
}
