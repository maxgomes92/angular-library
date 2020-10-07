import { Component, OnInit } from '@angular/core';
import { MyLibService } from './my-lib.service';
import { SimpleUser, SimpleUserOptions } from "sip.js/lib/platform/web";

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.page.html',
})
export class MyLibComponent implements OnInit {
  public currentTime: string;
  public simpleUser: SimpleUser;

  constructor(
    public myLibService: MyLibService,
  ) {

  }

  ngOnInit(): void {
    const server = "wss://sip.example.com";
    const aor = "sip:alice@example.com";
    const options: SimpleUserOptions = {
      aor,
      media: {
        local: {
          video: (document.getElementById('localVideo') as HTMLVideoElement)
        },
        remote: {
          video: (document.getElementById('remoteVideo') as HTMLVideoElement)
        }
      }
    };

    this.simpleUser = new SimpleUser(server, options);

    console.log('isConnected', this.simpleUser.isConnected())
  }

  onClick() {
    this.currentTime = this.myLibService.getTime();
    console.log('click', this.currentTime)
  }
}
