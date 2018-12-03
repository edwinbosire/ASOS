import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

const { width , height} = Dimensions.get('window')

class Favourites extends Component {
    state = {
        animation: null,
      };

      componentWillMount() {
        this._playAnimation();
      }
    
    render() {
        return (
            <View style={styles.animationContainer}>
            {this.state.animation &&
            <Lottie
                loop = {false}
                ref={animation => { this.animation = animation; }}
                style={{
                width: width,
                height: height,
                backgroundColor: '#eee',
                }}
                source={this.state.animation}
            />}
        </View>
    );
    }

    _playAnimation = () => {
        if (!this.state.animation) {
          this._loadAnimationAsync();
        } else {
          this.animation.reset();
          this.animation.play();
        }
      };
    
      _loadAnimationAsync = async () => {
        let result = await fetch(
          'https://www.lottiefiles.com/storage/datafiles/0BklE7L1HhdHa4v/data.json'
        )
          .then(data => {
            return data.json();
          })
          .catch(error => {
            console.error(error);
          });
        this.setState({ animation: result }, this._playAnimation);
      };
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eee'
    }
});

export default Favourites;