import dataFeed from '../store/Data.json'

function getHomePageFeed() {
    return dataFeed.hubs.men;
}

function getRecentlyViewed(){

}

function getProductInCategory(catID){

}

module.export = {getHomePageFeed, getRecentlyViewed, getProductInCategory}