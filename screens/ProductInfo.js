import React, { Component } from 'react';
import { 
    StyleSheet,
    View, 
    Image, 
    Dimensions, 
    ScrollView, 
    Animated, 
    Text } from 'react-native';
import {lightBackground, extraLightBackground, darkText, lightText, emerald} from '../components/AsosColors';
import Button from '../components/Button'
import LineIcon from 'react-native-vector-icons/SimpleLineIcons'
import Card from '../components/Card'

const { width } = Dimensions.get('window');
const kPosterImageHeight = 480;


export default class ProductInfo extends Component { 

    constructor(props){
        super(props)
        
    }

    componentWillMount() {

        this._scrollY = new Animated.Value(0)
    
        this.startHeaderHeight = 60
        this.endHeaderHeight = 0
    
        this.animatedHeaderHeight = this._scrollY.interpolate({
          inputRange:[0, kPosterImageHeight-80],
          outputRange:[this.startHeaderHeight, this.endHeaderHeight],
          extrapolate: 'clamp'
        })
    
        this.animatedOpacity = this._scrollY.interpolate ({
          inputRange:[40, 100],
          outputRange:[1,0],
          extrapolate:'clamp'
        })
        
    }
    
    render() {
     
        return (
            <View style={styles.container}>
                <View style={{position:'absolute', left:10, top:20, zIndex:2, width:width}}>
                    <Animated.View style={
                        {flexDirection:'row', 
                        justifyContent:'space-between',
                        opacity:this.animatedOpacity,
                    }
                        }>
                        <Button 
                        type='Icon' 
                        icon={'md-arrow-round-back'} 
                        onPress={() => this.props.navigation.goBack()}/>

                        <Button 
                        type='Icon' 
                        icon={'ios-share'} 
                        onPress={() => this.props.navigation.goBack()}/>
                    </Animated.View>
                </View>
                <ScrollView 
                contentContainerStyle={{ width:width }} 
                showsVerticalScrollIndicator={false}
                scrollEventThrottle= {16}
                onScroll={Animated.event (
                    [{nativeEvent: {contentOffset: {y: this._scrollY}}}]
                  )} 
                >
                    <ScrollView 
                    horizontal={true}
                    contentContainerStyle={{  }}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    snapToAlignment={"center"}
                    snapToStart={true}
                    decelerationRate="fast">
                    
                        <Image style={{height:kPosterImageHeight, width:width, marginTop:-20}} source={require('../assets/images/product_jacket_1.jpeg')}/>
                        <Image style={{height:kPosterImageHeight, width:width, marginTop:-20}} source={require('../assets/images/product_jacket_2.jpeg')}/>
                        <Image style={{height:kPosterImageHeight, width:width, marginTop:-20}} source={require('../assets/images/product_1.jpeg')}/>

                    </ScrollView>
                     {/* <ViewPager 
                        style={{ }}
                        dataSource={this.dataSource.cloneWithPages(IMGS)}
                        renderPage={(data, pageId) => this._renderPage(data, pageId)}
                        isLoop={false}
                        autoPlay={false}
                    /> */}
                    {/* </Image> */}
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

                        <LineIcon.Button 
                        style={{marginHorizontal:0,  alignItems:'center', justifyContent:'center'}} 
                        name="bag" 
                        size={24} 
                        borderRadius={0} 
                        color='white' 
                        backgroundColor={emerald} 
                        onPress={this.onBackButtonPressed}>
                            <Text style={styles.basketButtonText}> ADD TO BAG </Text>
                        </LineIcon.Button>

                        <View style={styles.productInfo}>
                            <View style={{backgroundColor:lightBackground, alignSelf:'stretch', borderBottomWidth: 1,borderColor: extraLightBackground,}}>
                                <Text style={styles.list}> Product information </Text>
                            </View>
                            <View style={{backgroundColor:lightBackground, alignSelf:'stretch', borderBottomWidth: 1,borderColor: extraLightBackground,}}>
                                <Text style={styles.list}> Free delivery & returns </Text>
                            </View>
                            
                            <Text style={styles.list}> Size guide </Text>
                        </View>

                {/** BUY THE LOOK */}
                <View style={{flex:1,  paddingVertical:20,  backgroundColor: 'rgb(250,248,250)'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', margin: 20}}>
                        <Text style={{fontFamily:'futura', fontSize:18, color:darkText}}>{'BUY THE LOOK'}</Text>
                        <Text style={{fontFamily:'futura-light', fontSize:14, color:darkText}}>{'5 items'}</Text>

                    </View>
                    <ScrollView horizontal={ true } contentContainerStyle={ styles.recentView }> 
                        {recentlyViewed.map((item) => this.createGridItem(item))}
                    </ScrollView> 
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
    onBackButtonPressed(){  
        console.log("pop back")
      }

    actionButtonGroup() {
        return (
            <View style={styles.buttonGroup}>
                {<Button type={'IconText'} icon={'ios-heart-empty'} title={'SAVE'} />}
                {<Button type={'IconText'} icon={'ios-play'} title={'VIDEO'} />}
                {<Button type={'IconText'} icon={'md-share'} title={'SHARE'} />}
            </View>
        );
    }

    createGridItem(item){
        return (
            <View style={{marginHorizontal:10}}>
                <Card 
                key={item.id} 
                type='grid-item' 
                price={item.price} 
                subtitle={item.subtitle} 
                imageName={item.image} 
                onCardPress={ () => {
                    this.props.navigation.navigate('ProductListPage', {
                        title:'Recommended',
                    }) 
                }} />
            </View>
        );
     }

}
 
const recentlyViewed = [
    {id:0, price:'£35.00', subtitle:'Cold-Weather Newness', image:require('../assets/images/model_3.jpeg')},
    {id:1, price:'£55.00', subtitle:'Spring into summer', image:require('../assets/images/model_2.jpeg')},
    {id:2, price:'£90.00', subtitle:'ASOS light camo jacket', image:require('../assets/images/model_1.jpeg')},
    {id:3, price:'£11.50', subtitle:'Another Influence PLUS Tropical Palm Pocket Vest', image:require('../assets/images/model_3.jpeg')},
    {id:4, price:'£15.00', subtitle:'French Connection Henley T-Shirt', image:require('../assets/images/model_1.jpeg')}
];

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
        justifyContent:'space-between',
        alignItems:'center',
        margin:20,
        marginBottom:0,
        paddingBottom:20,
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
        fontFamily:'futura-medium',
        fontSize:14,
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
        fontSize: 14,
        fontWeight: "200",
        textAlign: 'center',
        color: darkText,
        width: width/2 - 50,
        backgroundColor: 'white',
        paddingVertical:5,
    },
    basketButtonText: {
        fontFamily: 'futura-medium',
        fontSize: 14,
        fontWeight: "800",
        textAlign: 'center',
        color: 'white',
    },
    productInfo:{
        alignSelf:'stretch', 
        margin:20,
        paddingBottom:20,
        borderColor: extraLightBackground,
    },
    list:{
        fontFamily: 'futura-light',
        fontSize: 16,
        textAlign: 'left',
        color: darkText,
        marginVertical:10,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

    },
    recentView:{
        flexDirection:'row', 
        flexWrap:'nowrap',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        marginLeft:10,
        marginBottom:20,
    }

});



