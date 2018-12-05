 ![Banner image](https://github.com/edwinbosire/ASOS/raw/master/ASOS%20BANNER%402x.png)

 ![Show Case](https://github.com/edwinbosire/ASOS/raw/master/ASOS-Showcase%402x.png)

##### *** This is work in progress ****
A React Native Clone of the popular ASOS App, this project was done over ~~one weekend~~ a period of time for learning purposes and is theremore not being maintained. Feel free to fork and use as you please.

It is platform agnostic although nearly all work done so far has been written and tested on iOS.

React-Native is a powerful tool for creating UI, and therefore i've focussed only on the UI. The business logic including data retrieval is ommitted from this project.

This project is build on the expo sdk and you can play with the app  [here](https://exp.host/@nscoder/asos)

## FEATURES

- [x] Dynamic Home Page
- [x] Category Listing
- [x] Product List
- [x] Product Info (limited functionality
- [ ] Basket
- [ ] Favourites
- [ ] Account

## THINGS THAT ARE BROKEN
- [x] A lot, the styling is all over the place, component re-usability breaks any Software Engineering decorum.

#### LEFT OUT

If you fork this project, feel free to extend the following features.

- API Services (~~Images will eventually break once ASOS updates their CMS~~ most images embeded within the app apart from the contents in the basket)
- Basket management
- Recently Viewed Objects
- Account information
- No Tests! I like living dangerously

## 3rd Party Libraries used

- [Expo](https://expo.io) 
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React-Navigation](https://reactnavigation.org/en/)
- [React-Native - 31.0.0](https://github.com/expo/react-native/archive/sdk-31.0.0.tar.gz))


## Getting Started

[Expo](https://expo.io/) is the easiest way to start building a new React Native application. It allows you to start a project without installing or configuring any tools to build native code - no Xcode or Android Studio installation required (see [Caveats](https://facebook.github.io/react-native/docs/getting-started#caveats)).

- Clone the app

  `git clone https://github.com/edwinbosire/ASOS.git `
  
  Assuming that you have Node installed, you can use npm to install the Expo CLI command line utility:
  
  `npm install -g expo-cli`

- Start the Expo server

  ` npm start`
  
### Running your React Native application
  
  Install the Expo client app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, follow on-screen instructions to get a link.
  
  ##### Modifying your app
  
  Now that you have successfully run the app, let's modify it. Open `Homepage.js` in your text editor of choice and edit some lines. The application should reload automatically once you save your changes.
  
  That's it!
  
  Congratulations! You've successfully run and modified the ASOS RN app!.
  
  
 If you encounter any problem, refer to the [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html).

## Prerequisites

To run the project, you will need Node, Watchman, React-Native CLI and Xcode or Android SDK depending on your chosen platform, you can install these using Homebrew

` brew install node`

` brew install watchman `

Node comes with npm, you can use Yarn if you prefer or any other package manager.

` npm install -g react-native-cli `

- Android SDK or Xcode 

Get Xcode from the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

## Structure
```
.
├── tests
├── .expo
├── assets <== Images, fonts and other assets
├── compnents <== All the "dumb" ui widgets go here**
├── constants
├── navigation <== Tabbar management and routing
├── node_modules <== bleh!
├── screens <=== top level views akin to viewcontrollers**
├── store <== currently unused json
├── App.js <== Main entry point for our project
    
```

All the interesting things are within the components and containers group. 

The iOS app utilises the `MainTabNavigation.js` file for ALL navigation, we implement the tabbar from here and use [React Navigation](https://reactnavigation.org/en/) to get stuff done. This library saved a tonne of work usually associated with rolling out your own Navigator + Redux setup.

## Deployment

Expo to the rescue!


## Contributing

Just fork the repo and do your thing.

## Authors
- [ME 😀](www.twitter.com/edwinbosire) - 

- The Internet - Shout out to [StackOverflow](http://stackoverflow.com/questions/tagged/react-native) and the ReactNative [documentation](https://facebook.github.io/react-native/versions.html).

## Shameless Plug

In my past life, I used to write apps for other high street brands including [Topshop](https://itunes.apple.com/gb/app/topshop/id355683626?mt=8), [Topman](https://itunes.apple.com/gb/app/topman/id579354482?mt=8), [Burton](https://itunes.apple.com/gb/app/burton-menswear-london/id572488756?mt=8), JackWills (offline), Harrods and others I can't recall. So I've got vast experience in building withing the "app commerce" domain and it's truely unbelievable how quick developing with React-Native is.  

So here's the deal, I am available for freelance work (as in after work & weekends kinda work) if you are in need of  quick dev work in React-Native, Swift or Objective-C <a href="mailto:me@edwinb.co.uk">let's talk 📧 </a>

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

