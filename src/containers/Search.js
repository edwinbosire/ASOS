import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, ListView, Image, Dimensions, TouchableHighlight} from 'react-native';
import Color from '../AsosColors';
import Card from '../components/Card';
import { Actions } from 'react-native-router-flux';
import ActionBar from '../components/ActionBar'

const {width, height} = Dimensions.get('window');

var Service = require('../store/Service')

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Search extends Component {

  constructor(props) {
    super(props);
    let feed = Service.getCategories('men');

    this.state = {
        loaded: false,
        isSearching: false,
        gender:'men',
        feed: feed,
        dataSource: ds.cloneWithRows(feed)
    };
  }

    searchForTerm(text){
        searchfeed = Service.getCategories(this.state.gender).filter(function(item) {
            return item.title.toUpperCase().match(text.toUpperCase());
        });
        console.log(searchfeed.length)
        this.setState({
            feed: this.state.feed,
            dataSource:  ds.cloneWithRows(searchfeed)
        })

    }


    renderRows(data){
        return ( 
            <TouchableHighlight activeOpacity={0.8} underlayColor={Color.extraLightBackground}onPress={() => (data.title)?Actions.productListing(data) : Actions.cateogryListing(data)}>
                <View style={{marginTop:10, height:(width/2 - 15),width:(width/2 - 15), justifyContent: 'center', alignItems: 'stretch'}}>  
                    <Image style={{flex:1, resizeMode:'cover'}} source={{uri: data.image.url}}>
                        <View style ={{flex:1,alignSelf: 'stretch',  justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.title}> {data.title.toUpperCase()} </Text>
                        </View>
                    </Image>
                </View>
        </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style= {{alignSelf:'stretch',borderBottomWidth: 1,borderColor: Color.extraLightBackground}}>
                    <TextInput style={styles.input}
                            ref={(input) => this.searchInput = input}
                            placeholder='Search'
                            placeholderTextColor={Color.darkText}
                            returnKeyType='search'
                            autoCapitalize='sentences'
                            autoFocus={false}
                            clearButtonMode='always'
                            keyboardShouldPersistTaps={true}
                            onChangeText={(text) => this.searchForTerm(text)}
                        />  
                </View>
                <ActionBar style={{marginHorizontal:10}} firstButtonText={'WOMEN'} secondButtonText={'MEN'} />
               <ListView contentContainerStyle = {styles.gridView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRows({...rowData})}
               />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.lightBackground,
        marginTop:30,
    },
    input: {
        margin:10,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor:Color.extraLightBackground,
        textAlign:'center',
        fontWeight:"200",
        fontFamily:'futura',
        fontSize:18,
    },
    gridView:{
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginHorizontal:10,
    },
  title:{
        fontFamily:'futura',
        fontSize:18,
        fontWeight:"800",
        textAlign: 'center',
        color:'white',
        backgroundColor:'transparent',
        shadowColor:'black',
        shadowRadius:10,
    },

});

export default Search;