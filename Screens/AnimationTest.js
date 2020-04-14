// // import React from 'react';
// // import { Dimensions, ImageBackground } from 'react-native';
// // import * as Animatable from 'react-native-animatable';
// // import erlich from '../assets/icons/background.jpg';
// // import moneyFront from '../assets/icons/images.jpg';
// // import moneyBack from '../assets/icons/currency.jpg';

// // const MONEY_DIMENSIONS = { width: 5, height: 5 };
// // const SCREEN_DIMENSIONS = Dimensions.get('window');
// // const WIGGLE_ROOM = 50;

// // const FlippingImage = ({
// //   back = false,
// //   delay,
// //   duration = 2000,
// //   source,
// //   style = {},
// // }) => (
// //   <Animatable.Image
// //     animation={{
// //       from: {
// //         rotateX: back ? '0deg' : '180deg',
// //         rotate: !back ? '180deg' : '0deg',
// //       },
// //       to: {
// //         rotateX: back ? '360deg' : '-180deg',
// //         rotate: !back ? '180deg' : '0deg',
// //       },
// //     }}
// //     duration={duration}
// //     delay={delay}
// //     easing="linear"
// //     iterationCount="infinite"
// //     useNativeDriver
// //     source={source}
// //     style={{
// //       ...style,
// //       backfaceVisibility: 'hidden',
// //     }}
// //   />
// // );

// // const Swinging = ({
// //   amplitude,
// //   rotation = 7,
// //   delay,
// //   duration = 700,
// //   children,
// // }) => (
// //   <Animatable.View
// //     animation={{
// //       0: {
// //         translateX: -amplitude,
// //         translateY: -amplitude * 0.8,
// //         rotate: `${rotation}deg`,
// //       },
// //       0.5: {
// //         translateX: 0,
// //         translateY: 0,
// //         rotate: '0deg',
// //       },
// //       1: {
// //         translateX: amplitude,
// //         translateY: -amplitude * 0.8,
// //         rotate: `${-rotation}deg`,
// //       },
// //     }}
// //     delay={delay}
// //     duration={duration}
// //     direction="alternate"
// //     easing="ease-in-out"
// //     iterationCount="infinite"
// //     useNativeDriver>
// //     {children}
// //   </Animatable.View>
// // );

// // const Falling = ({ duration, delay, style, children }) => (
// //   <Animatable.View
// //     animation={{
// //       from: { translateY: -MONEY_DIMENSIONS.height - WIGGLE_ROOM },
// //       to: { translateY: SCREEN_DIMENSIONS.height + WIGGLE_ROOM },
// //     }}
// //     duration={duration}
// //     delay={delay}
// //     easing={t => Math.pow(t, 1.7)}
// //     iterationCount="infinite"
// //     useNativeDriver
// //     style={style}>
// //     {children}
// //   </Animatable.View>
// // );

// // const ErlichBachman = ({ children }) => (
// //   <ImageBackground source={erlich} style={{ flex: 1 }}>
// //     {children}
// //   </ImageBackground>
// // );

// // const randomize = max => Math.random() * max;

// // const range = count => {
// //   const array = [];
// //   for (let i = 0; i < count; i++) {
// //     array.push(i);
// //   }
// //   return array;
// // };

// // const AnimationTest = ({ count = 10, duration =5000 }) => (
// //   <ErlichBachman>
// //     {range(count)
// //       .map(i => randomize(1000))
// //       .map((flipDelay, i) => (
// //         <Falling
// //           key={i}
// //           duration={duration}
// //           delay={i * (duration / count)}
// //           style={{
// //             position: 'absolute',
// //             paddingHorizontal: WIGGLE_ROOM,
// //             center:
// //               randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) -
// //               WIGGLE_ROOM,
// //           }}>
// //           <Swinging
// //             amplitude={MONEY_DIMENSIONS.width / 5}
// //             delay={randomize(duration)}>
// //             {/* <FlippingImage source={moneyFront} delay={flipDelay} style={{ position: 'absolute',width:100,height:50}} /> */}
// //             <FlippingImage
// //               source={moneyBack}
// //               delay={flipDelay}
// //               back
// //               style={{ position: 'absolute',width:100,height:50 }}
// //             />
// //           </Swinging>
// //         </Falling>
// //       ))}
// //   </ErlichBachman>
// // );

// // export default AnimationTest;


// import React, { Component } from 'react';

// import { View, Text, StyleSheet, Animated, Platform,TouchableOpacity,Image } from 'react-native';

// export default class App extends Component
// {
//     constructor()
//     {
//         super();
//         this.Animation = new Animated.Value(0);
//           // springValue:new Animated.Value(0,100)



//         // this.Animation = new Animated.Value(0),
//         // this.springValue=new Animated.Value(0,100)
//         // springValue:new Animated.Value(0,100)


//     }

//     componentDidMount()
//     {
//         // If you want to Start the animation on button click then call this function on button onPress event.
//         this.StartBackgroundColorAnimation();
//     }

//   //   springAnimation(){

//   //   Animated.loop(

//   //     Animated.spring(this.state.springValue,
//   //       {
//   //         toValue:1,
//   //         friction:1
//   //     }) .start( () => { this.randomImage ();
//   //   })

//   //     );

//   // }



//     StartBackgroundColorAnimation = () =>
//     {
//         this.Animation.setValue(0);

//         Animated.timing(
//             this.Animation,
//             {
//                 toValue: 1,
//                 duration: 15000
//             }
//         ).start(() => { this.StartBackgroundColorAnimation() });
//     }

//     render()
//     {
//         const BackgroundColorConfig = this.Animation.interpolate(
//         {
//             // inputRange: [ 0, 0.2, 0.4, 0.6, 0.8, 1 ],
//             inputRange: [  0.2, 0.4, 1 ],


//             outputRange: [ require('../assets/icons/cardone.jpg'),require('../assets/icons/cardtwo.jpg'),require('../assets/icons/cardthree.png'), ]


//             // outputRange: [ '#FFEB3B', '#CDDC39', '#009688', '#03A9F4', '#3F51B5', '#FFEB3B' ]

//         });

//         return(
//           <View style={{flex:1,}}>

//           {/* <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>

//           <TouchableOpacity onPress={()=> this.springAnimation()}>
//       <Text style= {styles.text}>My Task</Text>
//       </TouchableOpacity>

//       </View> */}

//       <View style={{flex:0.3,margin:20}}>

//            <Animated.View style = {[ styles.MainContainer, { backgroundColor: BackgroundColorConfig } ]}>
// {/* <Animated.View style= {[Image source= {BackgroundColorConfig} style ={styles.spring}]}> */}


//                 {/* Put all your components Here Inside the Root Animated View. */}

//                 {/* <Text style = {styles.TextStyle}>React Native Change background Color Using Animation</Text> */}


//             </Animated.View>
//             </View>
//             </View>

//         );
//     }
// }

// const styles = StyleSheet.create(
// {
//     MainContainer:
//     {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,
//         marginTop: (Platform.OS == 'ios') ? 20 : 0
//     },

//     TextStyle: {

//         color: "#000",
//         fontSize: 20,
//         textAlign: 'center'
//     },  
//       text:{
//       fontFamily:'Roboto-Light',
//       fontSize:30
//     },  
//       spring:{
//       width:80,
//       height:80,
//       resizeMode:'contain',
//       justifyContent:'center'

//   },


// });





import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';

export default class TestOne extends Component {
  constructor(props) {
    super(props);

    this.imageLoop = this.imageLoop.bind(this);

    this.state = {
      img_source: "",
      final: "",
      isVisible: false,
    }
  }
  // componentDidMount(){
  //   this.imageLoop();
  // }

  randomImage() {
    var img_name = [
      require('../assets/icons/cardone.jpg'),
      require('../assets/icons/cardtwo.jpg'),
      require('../assets/icons/cardthree.png'),
      require('../assets/icons/cardfour.png'),
      require('../assets/icons/cardfive.png'),
      require('../assets/icons/cardsix.png'),
      require('../assets/icons/cardseven.png')

    ]
    var num = Math.floor(Math.random() * img_name.length);

    console.log("Hello", img_name[num]);
    this.setState({ img_source: img_name[num] })
    // this.setState({isVisible:false})

  }

  loopingCondition() {

    if (this.state.isVisible === false) {
      this.setState({ isVisible: !this.state.isVisible })
      this.imageLoop(0)

    } else {
      this.setState({ isVisible: !this.state.isVisible })
      // this.randomImage()
      console.log("stop")
    }


  }

  imageLoop(i) {

    var myArray = [
      require('../assets/icons/cardone.jpg'),
      require('../assets/icons/cardtwo.jpg'),
      require('../assets/icons/cardthree.png'),
      require('../assets/icons/cardfour.png'),
      require('../assets/icons/cardfive.png'),
      require('../assets/icons/cardsix.png'),
      require('../assets/icons/cardseven.png')]

    myArray[i];
    console.log("okay", myArray[i])

    setTimeout(() => {
      console.log("timeout", myArray[i]);
      this.setState({ img_source: myArray[i] })

      if (i < myArray.length && this.state.isVisible === true) {
        i++
        this.imageLoop(i)

      } else {
        console.log("finished")
      }

    }

      , 500);

  }




  // imageLoop(){

  // var myArray =[ 
  // require('../assets/icons/cardone.jpg'),
  // require('../assets/icons/cardtwo.jpg'),
  // require('../assets/icons/cardthree.png'),
  // require('../assets/icons/cardfour.png'),
  // require('../assets/icons/cardfive.png'),
  // require('../assets/icons/cardsix.png'),
  // require('../assets/icons/cardseven.png')]

  // for (let i=0; i<myArray.length; i++) { 
  //   myArray[i]; 
  //  console.log("okay",myArray[i])

  //  setTimeout(function() { 
  //      console.log("timeout",myArray[i]); 

  //  }, 2000 * i); 
  //  this.setState({img_source:myArray[i]})

  // }
  // }




  // var img_name = [
  //   require('../assets/icons/cardone.jpg'),
  //   require('../assets/icons/cardtwo.jpg'),
  //   require('../assets/icons/cardthree.png'),
  //   require('../assets/icons/cardfour.png'),
  //   require('../assets/icons/cardfive.png'),
  //   require('../assets/icons/cardsix.png'),
  //   require('../assets/icons/cardseven.png')

  //   ]

  //   for (var i = 0, len = img_name.length; i < len; i += 1) {
  //     (function(i) {
  //         setInterval(function() {
  //             // list[i] += 10;
  //             console.log(i + "=>" + img_name[i] + "\n");

  //         }, 5000)
  //     })(i);
  //     this.setState({img_source: img_name[i]})

  // }


  // for (var i=0;i<img_name.length;i++){
  //    img_name[i];
  //           console.log("ni" ,img_name[i])
  //     this.setState({img_source: img_name[i]})

  // }
  // function img_name() { 
  //   setTimeout(function() { 
  //     this.setState({img_source: img_name[i]})
  //     console.log ("hello ", [i])


  //       // Add tasks to do 
  //   }, 100 * i); 
  // } 

  //   for (let i=0; i<img_name.length; i++) { 
  //     img_name[i]
  //             this.setState({img_source: img_name[i]})
  //             console.log ("hello ", [i])


  //  } 

  //  function img_name() { 
  //    setTimeout(function() { 
  //        console.log(i); 
  //                this.setState({img_source: img_name[i]})

  //    }, 2000 * i); 
  //  } 

  // let myArray = ["one", "two", "three", "four"]





  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.loopingCondition()} >
            <Text style={css.text}>My Task</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', }}>
          <Image source={(this.state.img_source)}
            style={{ width: 200, height: 200, resizeMode: 'contain' }} />
        </View>
      </View>
    )
  }
}

const css = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Light',
    fontSize: 30
  }
})
