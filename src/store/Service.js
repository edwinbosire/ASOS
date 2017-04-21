
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
            return (type.ios === true & type.title.length > 0)
                });
        return data;

    }
}
module.exports = service;

/**
 * 
 * this.state.raw.asos.homepage.men.filter(function(type) { return ((type.smartphone === true) & (type.countriesIncluded == 'GB' || type.countriesIncluded == '') & type.ios === true)})
 */