import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerText: string = '';

  constructor() {}

  ngOnInit() {
    this.footerText = `© ${new Date().getFullYear()} Developed by Viniston Arockiasamy`;
  }
}
