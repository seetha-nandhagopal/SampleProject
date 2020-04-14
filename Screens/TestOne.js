// import React, { Component } from 'react';
// import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';

// export default  class TestOne extends Component{
//     render(){
//     return(
//         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//             <TouchableOpacity onPress={()=> this.props.navigation.navigate("TestTwo")}>
//         <Text style= {css.text}>TestOne</Text>
//         </TouchableOpacity>
//         </View>
//     )

//     }
// }

// const css= StyleSheet.create({
//   text:{
//     fontFamily:'Roboto-Light',
//     fontSize:30
//   }
// })



// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Button
// } from "react-native";

// import WheelOfFortune from 'react-native-wheel-of-fortune';

// const participants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20]
//     // 21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

// const rewards = participants.map(e => ({ uri: `https://i.pravatar.cc/300?$1` }))

// class TestOne extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       winnerValue: null,
//       winnerIndex: null
//     }
//     this.child = null
//   }

//   _renderPlayButton = () => {
//     return (
//       <Text style={styles.tapToStart}>TAP TO PLAY</Text>
//     );
//   }

//   _textRender = (x, y, value, size, i) => (
//     <Text
//         x={x}
//         y={y - 70}
//         fill={this.props.textColor ? this.props.textColor : '#fff'}
//         textAnchor="middle"
//         fontSize={this.fontSize}
//     >
//         {Array.from({ length: number.length }).map((_, j) => {
//             return (
//                 <TSpan
//                     x={x}
//                     dy={this.fontSize}
//                     key={`arc-${i}-slice-${j}`}
//                 >

//                     {number.charAt(j)}
//                 </TSpan>
//             );
//         })}
//     </Text>
// )



//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle={'light-content'} />
//         <WheelOfFortune
//           onRef={ref => (this.child = ref)}
//           rewards={participants}
//           knobSize={20}
//           borderWidth={3}
//           borderColor={"#FFF"}
//           innerRadius={30}
//           duration={5000}
//           textColor={"red"}
//           backgroundColor={"#c0392b"}
//           getWinner={(value, index) => this.setState({ winnerValue: value, winnerIndex: index })}
//         />
//         <Button title="Press me" onPress={() => { this.child._onPress() }} />
       
//       </View>
//     );
//   }
// }
// export default TestOne;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E74C3C'
//   },
//   winner: {
//     width: '100%',
//     position: 'absolute',
//     padding: 10,
//     backgroundColor: '#fff',
//     bottom: 50,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   winnerText: {
//     fontSize: 26,
//     color: '#666'
//   },
//   tapToStart: {
//     fontSize: 50,
//     color: '#fff',
//     fontWeight: 'bold'
//   }
// });


// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Animated,
//   SafeAreaView,
//   Dimensions
// } from "react-native";

// const cardHeight = 250;
// const cardTitle = 45;
// const cardPadding = 10;

// const { height } = Dimensions.get("window");
// const cards = [
//   {
//     name: "Shot",
//     color: "#a9d0b6",
//     price: "30 CHF"
//   },
//   {
//     name: "Juice",
//     color: "#e9bbd1",
//     price: "64 CHF"
//   },
//   {
//     name: "Mighty Juice",
//     color: "#eba65c",
//     price: "80 CHF"
//   },
//   {
//     name: "Sandwich",
//     color: "#95c3e4",
//     price: "85 CHF"
//   },
//   {
//     name: "Combi",
//     color: "#1c1c1c",
//     price: "145 CHF"
//   },
//   {
//     name: "Signature",
//     color: "#a390bc",
//     price: "92 CHF"
//   },
//   {
//     name: "Coffee",
//     color: "#fef2a0",
//     price: "47 CHF"
//   }
// ];

// export default class App extends React.Component {
//   state = {
//     y: new Animated.Value(0)
//   };

//   render() {
//     const { y } = this.state;
//     return (
//       <SafeAreaView style={styles.root}>
//         <View style={styles.container}>
//           <View style={StyleSheet.absoluteFill}>
//             {cards.map((card, i) => {
//               const inputRange = [-cardHeight, 0];
//               const outputRange = [
//                 cardHeight * i,
//                 (cardHeight - cardTitle) * -i
//               ];
//               if (i > 0) {
//                 inputRange.push(cardPadding * i);
//                 outputRange.push((cardHeight - cardPadding) * -i);
//               }
//               const translateY = y.interpolate({
//                 inputRange,
//                 outputRange,
//                 extrapolateRight: "clamp"
//               });
//               return (
//                 <Animated.View
//                   key={card.name}
//                   style={{ transform: [{ translateY }] }}
//                 >
//                   <View
//                     style={[styles.card, { backgroundColor: card.color }]}
//                   />
//                 </Animated.View>
//               );
//             })}
//           </View>
//           <Animated.ScrollView
//             scrollEventThrottle={16}
//             contentContainerStyle={styles.content}
//             showsVerticalScrollIndicator={false}
//             onScroll={Animated.event(
//               [
//                 {
//                   nativeEvent: {
//                     contentOffset: { y }
//                   }
//                 }
//               ],
//               { useNativeDriver: true }
//             )}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     margin: 16
//   },
//   container: {
//     flex: 1
//   },
//   content: {
//     height: height * 2
//   },
//   card: {
//     height: cardHeight,
//     borderRadius: 10
//   }
// });

import React, { Component } from 'react';
import {Text,View,TouchableOpacity,StyleSheet,ScrollView,FlatList,TouchableWithoutFeedback,Image} from 'react-native';
import { cards,Width ,Height} from '../Components/Constants/AppConstant';

export default  class TestOne extends Component{

  constructor(props){
    super(props);

    this.state={
      img_name:'',
    }
  }


  componentDidMount(){
    this.randomImage();
  }


  randomImage(){
    var img_name = new Array
      
    // (
    //   "{require('../assets/icons/Ordinal.png')}",
    //   " {require('../assets/icons/Reception.png')}",
    // "{require('../assets/icons/supper.png')}"
    // );

    (
      "../assets/icons/Ordinal.png",
      "../assets/icons/Reception.png",
      "../assets/icons/supper.png"
    );
  
    var num =Math.floor(Math.random() * img_name.length);

    console.log("Hello",img_name[num]);
    this.setState({img_source: img_name[num]})

    // return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //   <Image source= {img_name[num]} 
    // style={{width:500,height:500}}/>
    // </View>

  

  //  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  {/* //     <Image source={require('../assets/icons/Ordinal.png')} */}
  {/* //        style={{width:500,height:500}}/>  */}

    //  <Image source= {img_name[res]} 
    // style={{width:500,height:500}}/>
    //  </View>

  }




    render(){

    return(
        <View style={{flex:1,}}>


          


           {/* <ScrollView style={{flex: 1}}contentInset={{bottom:20}} > */}

{/* <View style={css.subContainer}>
<FlatList
  style={{ margin: 10 }}
  data={cards}
  showsVerticalScrollIndicator={false}
  scrollEnabled={false}
  keyExtractor={(item, index) => index.toString()}
  numColumns={2}
  renderItem={({ item }) => (
    <View>
      <TouchableWithoutFeedback 
        style={css.menuColor}>
        <View style={css.menuContainer}>
          <View style={css.image}>
            <Image style={{ width: Width*0.25 , height: Width*0.25 , resizeMode: "contain" }} source={()=> this.randomImage()} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )}
/> */}
          {/* <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>

            <TouchableOpacity onPress={()=> this.randomImage()}>
        <Text style= {css.text}>TestOne</Text>
        </TouchableOpacity>

        </View> */}

        <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
            <Image source= {require(this.state.img_source)} style={{width:500,height:500}}/>
        </View>

        {/* <View style={{flex:0.5,}}>
               <Image source={img_name[res]}
         style={{width:500,height:500}}/> */}


        {/* </View> */}


</View>
 /* </ScrollView>  */
//  </View>

    )

    }
}

const css= StyleSheet.create({
  text:{
    fontFamily:'Roboto-Light',
    fontSize:30
  },
    container: {
      alignItems: "center"
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 20
    },
    headerButton: {
      margin: 1,
      justifyContent: 'center',
      alignItems: "center",
      paddingHorizontal: 10,
    },
    logo: {
      width: Width*0.15,
      height: Width*0.15,
      marginHorizontal: 20,
      opacity: 0.8
    },
    imageSize: {
      width: 30,
      height: 30,
    },
    imageSizeOne: {
      width: 25,
      height: 25
    },
    mainContainer: {
      // flex: 0.15,
      paddingBottom:20,
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    headers: {
      fontSize: 30,
      color: '#2A2A30',
      fontWeight: 'bold',
      fontFamily: "Montserrat-Bold",
      textAlign: 'left',
      marginLeft: 15,
    },
    subTitle: {
      fontSize: 18,
      color: '#2A2A30',
      textAlign: 'center',
      fontWeight: '500',
      fontFamily: "Montserrat-SemiBold",
      marginLeft: 22,
    },
    subContainer: {
      flex: 0.9,
      alignItems: "center"
  
    },
    menuColor: {
      backgroundColor: 'white',
    },
    menuContainer: {
      flex: 0.9,
      margin: 8,
      borderWidth: 0.5,
      borderRadius: 20,
      shadowColor: '#000', // IOS
      shadowOffset: { height: 1, width: 2 }, // IOS
      shadowOpacity: 0.25, // IOS
      shadowRadius: 3.84, //IOS
      elevation: 5,
      borderColor: '#FF5474',
      height: Width * 0.50,
      width: Width * 0.42,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'white'
    },
    image: {
      flex: 0.7,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: 88,
      height: 88,
    },
    font: {
      fontFamily: "Montserrat-SemiBold",
      fontSize: 12,
      lineHeight: 18,
      textAlign: 'center',
      color: '#2A2A30',
      fontWeight: '500',
      padding: 3,
      margin: 3,
      opacity: 1,
    },
    subTitleView: {
      flex: 0.4,
      justifyContent: 'center'
    },
    middleContainer: {
      flex: 0.080,
      flexDirection: 'row',
      // width:250,
      // backgroundColor:'pink',
      // justifyContent: 'space-around',
      // margin: 8,
    },
    preamble: {
      justifyContent: 'flex-start',
      fontSize: 16,
      color: '#2A2A30',
      textAlign: 'center',
      fontWeight: '500',
      fontFamily: "Montserrat-SemiBold",
      marginLeft: 10,
      borderWidth: 0.5,
      borderRadius: 15,
      // elevation: 5,
      borderColor: '#FF5474',
      padding:8,
      width: Width * 0.42,
    },
    text: {
      justifyContent: 'flex-end',
      fontSize: 16,
      color: '#2A2A30',
      textAlign: 'center',
      fontWeight: '500',
      fontFamily: "Montserrat-SemiBold",
      borderWidth: 0.5,
      // elevation: 5,
      borderColor: '#FF5474',
      padding:8,
      borderRadius: 15,
      width: Width * 0.42,
      marginRight:10,
    },
  
  });
  
  


