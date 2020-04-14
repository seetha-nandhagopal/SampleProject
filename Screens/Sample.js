import React from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false,
      top: new Animated.Value(-135 / 2),
    };
  }

  componentDidMount() {}

  shuffleCards(e) {
    this.setState({
      gameStart: true,
    });
    this.cycleAnimation();
  }

  cycleAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.top, {
          toValue: -900,
          duration: 300,
          delay: 100,
        }),
        Animated.timing(this.state.top, {
          toValue: -175 / 2,
          duration: 1,
          delay: 1,
        }),
        Animated.timing(this.state.top, {
          toValue: 900,
          duration: 300,
          delay: 100,
        }),
      ]),
      {
        iterations: 4,
      },
    ).start();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <Animated.Image
            ref={'deck'}
            resizeMode="stretch"
            source={require('../assets/icons/Worship.png')}
            style={[
              {
                width: 100,
                height: 175,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={e => this.shuffleCards(e)}>
          <Animated.Image
            resizeMode="stretch"
            source={require('../assets/icons/supper.png')}
            style={[
              {
                width: 100,
                height: 175,
                position: 'absolute',
                left: -100,
              },
              { top: this.state.top },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={e => this.shuffleCards(e)}>
          <Animated.Image
            resizeMode="stretch"
            source={require('../assets/icons/Reception.png')}
            style={[
              {
                width: 100,
                height: 175,
                position: 'absolute',
                left: -100,
              },
              { top: this.state.top },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={e => this.shuffleCards(e)}>
          <Animated.Image
            resizeMode="stretch"
            source={require('../assets/icons/Ordinal.png')}
            style={[
              {
                width: 100,
                height: 175,
                position: 'absolute',
                left: -100,
              },
              { top: this.state.top },
            ]}
          />
        </TouchableOpacity>

      </View>
    );
  }
}


