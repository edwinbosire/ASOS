import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Image, 
    Dimensions, 
    ScrollView,
    Text,
    TouchableHighlight } from 'react-native';
import Color from '../components/AsosColors';
import Card from '../components/Card'
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../components/NavBar'
import ActionBar from '../components/ActionBar'

const {width, height} = Dimensions.get('window');
const kWidth = (width/2) - 15;

export default class ProductListPage extends Component { 

    constructor(props){
        super(props)
        // props.title = "Party Like An Animal"
    }

    buttonSelected(state){ }
    render() {
        const { navigation } = this.props
        const title = navigation.getParam('title', 'Products')
        return (
            <View style={styles.container}>
                <NavBar 
                title={ title.toUpperCase() } 
                onBackPress={() => this.props.navigation.goBack()} />
                <ScrollView contentContainerStyle={styles.gridView} > 
                    <ActionBar 
                    firstButtonText={'SORT  ▼ '} 
                    secondButtonText={'filter'} 
                    onButtonSelect={(s) => this.buttonSelected(s)}/>
                    <Text style={styles.resultsCount}> 1,234 styles found </Text>
                    {products.map((item) => this.createGridItem(item))}
                </ScrollView>
            </View>   
         );
    }

    createGridItem(item){
        return(
            <TouchableHighlight style={{
                backgroundColor:'white',
                borderWidth: 0.5, 
                borderColor: 'rgba(0,0,0,0.1)',
                shadowColor:'black',
                shadowOffset:{ width: 0, height: 3 },
                shadowRadius:4,
                shadowOpacity:0.1,
                marginVertical:10,
                }}
                activeOpacity={0.8} 
                underlayColor={Color.extraLightBackground}
                onPress={() => this.props.navigation.navigate('ProductInfo')}>
                
                <View style={[styles.gridItem]}>
                    <Image style={[{width:kWidth, height:null, flex:3, resizeMode:'cover', alignSelf:'center',}]} source={item.image}/>
                    <View style={{flex:1,flexDirection:'column', justifyContent:'space-around', marginLeft:5 }}>
                        <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:5,marginRight:5 }}>
                            <Text style={styles.price}>{item.price}</Text>
                            <Icon.Button style={{padding:0}} name="ios-heart-empty" size={25} color={Color.darkBackground}  backgroundColor="transparent"/>
                        </View>
                        <Text style={styles.subTitlePrice}>{item.subtitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
     }

}
 
const products = [
    {id:0, price:'£35.00', subtitle:'Cold-Weather Newness', image:require('../assets/images/model_3.jpeg')},
    {id:1, price:'£55.00', subtitle:'Spring into summer', image:require('../assets/images/model_2.jpeg')},
    {id:2, price:'£90.00', subtitle:'ASOS light camo jacket', image:require('../assets/images/model_1.jpeg')},
    {id:3, price:'£11.50', subtitle:'Another Influence PLUS Tropical Palm Pocket Vest', image:require('../assets/images/model_3.jpeg')},
    {id:4, price:'£15.00', subtitle:'French Connection Henley T-Shirt', image:require('../assets/images/model_1.jpeg')},
    {id:2, price:'£90.00', subtitle:'ASOS light camo jacket', image:require('../assets/images/model_1.jpeg')},
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.lightBackground,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridView:{
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: 'flex-start',
        justifyContent:'space-around',
    },
    resultsCount: {
        fontFamily: 'futura',
        fontSize: 14,
        fontWeight: "100",
        textAlign: 'center',
        color: Color.lightText,
        paddingVertical:10,
        width:width,
    },
    gridItem: {
        overflow:'hidden',
        backgroundColor: 'white',
        height:250,
        width:kWidth,
    },
    subTitlePrice:{
        fontFamily:'futura-medium',
        fontSize:14,
        fontWeight:"200",
        color:Color.lightText,
    },
    price:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"600",
        textAlign: 'left',
        color:Color.darkText,
    },

});
