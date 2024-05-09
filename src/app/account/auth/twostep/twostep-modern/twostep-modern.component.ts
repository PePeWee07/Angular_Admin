import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CutomDropdownComponent } from '../../../../Component/customdropdown';

@Component({
  selector: 'app-twostep-modern',
  standalone: true,
  imports: [RouterModule, CutomDropdownComponent],
  templateUrl: './twostep-modern.component.html',
  styles: ``
})
export class TwostepModernComponent {

  year = (new Date().getFullYear())

}
