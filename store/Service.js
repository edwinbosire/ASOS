
import raw from './Data.json'

var service = {

     getHomePageData() {
        
        let raw_data = require('./Data.json')
        let data = raw_data.asos.homepage.men.filter(function(type) {
            return (
                (type.smartphone === true) &
                (type.countriesIncluded == 'GB' ||
                type.countriesIncluded == ''))
                });

        return data;
    },

     getCategories(gender){
        if (gender == 'men'){
            
        }else{

        }
        let raw_data = require('./Data.json')
        let data = raw_data.asos.visualcategories[gender].filter(function(type) {
            return (type.ios === true & type.linkType == 'category')
                });
        return data;

    },

    getBagItems() {
        let raw_data = require('./Basket.json')
        return raw_data.products;
    },

    getBagTotal(){
        let raw_data = require('./Basket.json')
        var sum = raw_data.products.reduce(function(a, b){
            
            return a + b.price.current.value;
        }, 0);

        return sum;
    }

    
}
module.exports = service;

/**
 * 
 * this.state.raw.asos.homepage.men.filter(function(type) { return ((type.smartphone === true) & (type.countriesIncluded == 'GB' || type.countriesIncluded == '') & type.ios === true)})
 */