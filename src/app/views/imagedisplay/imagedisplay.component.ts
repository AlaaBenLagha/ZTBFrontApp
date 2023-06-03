

import { Component,OnInit, ViewChild} from '@angular/core';




import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-imagedisplay',
  templateUrl: './imagedisplay.component.html',
  styleUrls: ['./imagedisplay.component.scss']
})
export class ImagedisplayComponent implements OnInit{
  title = 'angular-img-hover';
  myThumbnail = 'http://localhost:3000/images/400037525043000000089099070_recto.jpg';


  constructor(private sanitizer: DomSanitizer ) {
        
  }


  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
  ngOnInit(): void {
    
  }

}
