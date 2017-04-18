import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import {lightBackground, extraLightBackground,darkBackground, darkText, lightText, emerald} from '../AsosColors';
import Button from '../components/Button'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewPager from 'react-native-viewpager';
const {width, height} = Dimensions.get('window');
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
const PADDING = 10;



export default class ProductInfo extends Component { 

    constructor(props){
        super(props)
        
        this.dataSource = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
            dataSource: this.dataSource.cloneWithPages(IMGS),
            page: 0
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{position:'absolute', left:10, top:20, zIndex:2}}>
                    <Icon.Button style={{ backgroundColor:'transparent'}} name="keyboard-backspace" size={30} color={darkBackground}  backgroundColor="transparent" onPress={this.onBackButtonPressed}/>
                </View>
                <ScrollView contentContainerStyle={{ alignItems:'center'}} showsVerticalScrollIndicator={false}>
                    <View style={{height:480, width:width}}>
                     <ViewPager 
                        style={{ }}
                        dataSource={this.dataSource.cloneWithPages(IMGS)}
                        renderPage={(data, pageId) => this._renderPage(data, pageId)}
                        isLoop={false}
                        autoPlay={false}
                    />
                    </View>
                    {this.actionButtonGroup()}
                        <View style={styles.productDescription}>
                            <Text style={styles.price}> £30.00 </Text>
                            <Text style={styles.subTitle}> ASOS Skinny Jeans With Knee Rips In Black </Text>
                        </View>

                        <View style={ styles.optionsGroup }>
                            <Text style={styles.optionsButtonText}> WASHED BLACK  </Text>
                            <View style={{backgroundColor:extraLightBackground, height:30, width:1}}></View>
                            <Text style={styles.optionsButtonText}> SIZE  ▼ </Text>
                        </View>

                        <Icon.Button style={{width:width*0.9, alignItems:'center', justifyContent:'center'}}name="basket-fill" size={30} borderRadius={0} color='white' backgroundColor={emerald} onPress={this.onBackButtonPressed}>
                            <Text style={styles.basketButtonText}> ADD TO BAG </Text>
                        </Icon.Button>

                        <View style={styles.productInfo}>
                            <View style={{backgroundColor:lightBackground, alignSelf:'stretch', borderBottomWidth: 1,borderColor: extraLightBackground,}}>
                                <Text style={styles.list}> Product information </Text>
                            </View>
                            <View style={{backgroundColor:lightBackground, alignSelf:'stretch', borderBottomWidth: 1,borderColor: extraLightBackground,}}>
                                <Text style={styles.list}> Free delivery & returns </Text>
                            </View>
                            
                            <Text style={styles.list}> Size guide </Text>
                        </View>
                </ScrollView>
            </View>   
         );
    }
    
    _renderPage(data, pageID){
        console.log(data);
        return (
            <Image style={{width:width, height:480, resizeMode:'cover'}} source={{uri:data}} />                    
        )
    }
    onBackButtonPressed(){    }

    actionButtonGroup() {
        return (
            <View style={styles.buttonGroup}>
                {<Button icon={'heart-outline'} title={'SAVE'} />}
                {<Button icon={'play'} title={'VIDEO'} />}
                {<Button icon={'share-variant'} title={'SHARE'} />}
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBackground,
        paddingTop: -20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        height: 44,
        width: 60,
        resizeMode: 'center'
    },
    buttonText: {
        fontFamily: 'futura',
        fontSize: 14,
        fontWeight: "800",
        textAlign: 'left',
        color: darkText,
    },
    buttonGroup: {
        flexDirection:'row',
        width:width-50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

    },
price:{
        fontFamily:'futura',
        fontSize:20,
        fontWeight:"800",
        textAlign: 'left',
        paddingVertical:10,
        color:darkText,
    },
subTitle:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"200",
        textAlign: 'left',
        color:lightText,
    },
    productDescription:{ 
        alignSelf:'stretch', 
        margin:20,
        paddingBottom:20,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

},
    optionsGroup: {
        height: 54,
        margin:20,
        marginTop:-20,
        alignSelf:'stretch',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

    },
    optionsButtonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: darkText,
        width: width/2 - 50,
        backgroundColor: 'white',
        paddingVertical:5,
    },
    basketButtonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: 'white',
        paddingVertical:5,
    },
    productInfo:{
        alignSelf:'stretch', 
        margin:20,
        paddingBottom:20,
        borderColor: extraLightBackground,
    },
    list:{
        fontFamily: 'futura',
        fontSize: 20,
        fontWeight: "100",
        textAlign: 'left',
        color: darkText,
        marginVertical:10,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

    },
});



const productImage = 'https://images.asos-media.com/products/asos-double-breasted-trench-coat-with-shower-resistance-in-light-khaki/7487951-1-lightkhaki?$XL$'
const backButtonImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAAbklEQVR4Ae3ZxQHDMAxAUZ197sBasQu1gXuoaHhfC7ygAyFJktYysi7Oc56si7OS6uKspLo4z7hHqYtzw8HBwemNg4ODg/OtqY3zfIkD9FdSVEZq5bJvn4SEhISEhISEVHw43yGlny9Hv6ckSdIEb5dSW8V5J5sAAAAASUVORK5CYII="
var IMGS = [
  'http://images.asos-media.com/products/asos-super-skinny-jeans-with-double-zip-and-biker-details-in-washed-black/7911409-1-washedblack?$XXL$&wid=513&fit=constrain',
  'http://images.asos-media.com/products/asos-super-skinny-jeans-with-double-zip-and-biker-details-in-washed-black/7911409-3?$XXL$&wid=513&fit=constrain',
  'http://images.asos-media.com/products/asos-super-skinny-jeans-with-double-zip-and-biker-details-in-washed-black/7911409-2?$XXL$&wid=513&fit=constrain',
  'http://images.asos-media.com/products/asos-super-skinny-jeans-with-double-zip-and-biker-details-in-washed-black/7911409-4?$XXL$&wid=513&fit=constrain',
];
