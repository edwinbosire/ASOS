import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

const { width , height} = Dimensions.get('window')

class Profile extends Component {
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
                ref={animation => {
                this.animation = animation;
                }}
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
          'https://cdn.rawgit.com/airbnb/lottie-react-native/635163550b9689529bfffb77e489e4174516f1c0/example/animations/Watermelon.json'
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

export default Profile;