import { Component } from '@angular/core';
import { EnteredURL } from './EnteredURL';
import { TinyUrlService } from './tinyurl.service';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontendShortUrl';

  constructor(private urlservice: TinyUrlService) {

  };

  ngOnInit(): void { };

  enteredUrl: string = "";
  ObjectOfEnteredURL = {} as EnteredURL;
  uniqURL: string = "";

  public clickedOn(): void {

    this.ObjectOfEnteredURL.url_name = this.enteredUrl;
    this.urlservice.addUrl(this.ObjectOfEnteredURL).subscribe(
      (response: EnteredURL) => {
        this.uniqURL = environment.baseServer + "/ur/" + response.uniq_string;
      }
    )

  }

}
