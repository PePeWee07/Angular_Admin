import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [PageTitleComponent, ClipboardModule, FormsModule, LucideAngularModule],
  templateUrl: './clipboard.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class ClipboardComponent {
  text1: string = 'Welcome to Tailwick😊';
  text2: string = 'Welcome to Tailwick😊';
  isCopied1!: boolean;
  copiedValue: string = '';

  private copySubscription: Subscription | null = null;

  constructor(private _clipboardService: ClipboardService) { }

  ngOnInit() { }


  callServiceToCopy1() {
      this.copySubscription = this._clipboardService.copyResponse$
        .pipe(take(1))
        .subscribe(re => {
          if (re.isSuccess) {
            alert('Copied text:' + re.content);
          }
        });
  }

  callServiceToCopy() {
      this.copySubscription = this._clipboardService.copyResponse$
        .pipe(take(1))
        .subscribe(re => {
          if (re.isSuccess) {
            alert('Copied text:' + re.content);
          }
        });
    this.text2 = '';
  }

  onCopyFailure() {
    alert('copy fail!');
  }


}

