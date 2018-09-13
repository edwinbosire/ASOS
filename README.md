 ![Banner image](https://github.com/edwinbosire/ASOS/raw/master/ASOS%20BANNER%402x.png)

 ![Show Case](https://github.com/edwinbosire/ASOS/raw/master/ASOS-Showcase%402x.png)

##### *** This is work in progress ****
A React Native Clone of the popular ASOS App, this project was done over one weekend for learning purposes and is theremore not being maintained. Feel free to fork and use as you please.

It is platform agnostic although nearly all work done so far has been written and tested on iOS.

React-Native is a powerful tool for creating UI, and therefore i've focussed only on the UI. The business logic including data retrieval is ommitted from this project.

## FEATURES

- [x] Dynamic Home Page
- [x] Category Listing
- [x] Product List
- [x] Product Info (limited functionality
- [ ] Basket
- [ ] Favourites
- [ ] Account

## THINGS THAT ARE BROKEN
- [x] All the data feeds; No image loading because Asos has update their product catalogue and the data bundled here is stale. Solution? 1. Move all the data including images to be local. 2. Update the data sources and repeat this process ever so often.

#### LEFT OUT

If you fork this project, feel free to extend the following features.

- API Services
- Basket management
- Recently Viewed Objects
- Account information
- No Tests! I like living dangerously

## 3rd Party Libraries used

- [React Native Router Flux](https://github.com/aksonov/react-native-router-flux)  (Highly recommended)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)


## Getting Started

- Clone the app

  `git clone https://github.com/edwinbosire/ASOS.git `
  
- run npm in the project root folder

  ` npm install`
  
- run on simulator

  `react-native run-ios --simulator "iPhone 5s"`   
  
  Avoid this by opening the project in xcode and chosing run, this is also a better environment to read & fix build time errors.
  
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
├── Android
├── ios
├── node_modules
├── src
    ├── components  <== All the "dumb" ui widgets go here**
    ├── containers <=== top level views akin to viewcontrollers**
    ├── img   <== should be renamed to assets, might copy videos here
    ├── services  <== dummy data classes, to be expanded in the future
    └── store <== Data dump from ASOS API
    
```

All the interesting things are within the components and containers group. 

The iOS app utilises the `AppRouter.js` file for ALL navigation, we implement the tabbar from here and use [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) to get shit done. This library saved a tonne of work usually associated with rolling out your own Navigator + Redux setup.

## Deployment

TODO:


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

