import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from "../providers/auth/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    authProvider: AuthProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        this.rootPage = 'HomePage';
      }
      else {
        this.rootPage = 'LoginPage';
      }
    });

    authProvider.checkLogin();
  }
}

