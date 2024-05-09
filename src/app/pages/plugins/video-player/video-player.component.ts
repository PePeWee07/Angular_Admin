import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [PageTitleComponent, YouTubePlayerModule],
  templateUrl: './video-player.component.html',
  styles: ``
})
export class VideoPlayerComponent {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
