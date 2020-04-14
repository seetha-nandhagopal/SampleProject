import React, { Component } from 'react';
import {Text,View,TouchableOpacity,StyleSheet,ScrollView,FlatList,TouchableWithoutFeedback,Image,Animated} from 'react-native';
import { cards,Width ,Height} from '../Components/Constants/AppConstant';

export default  class Test extends Component{

  constructor(props){
    super(props);

    this.state={
        img_source:"",
        animatedValue :new Animated.Value(0),
        springValue:new Animated.Value(0,100),
        width:new Animated.Value(0,10)
    }
  }



//   componentDidMount(){
//     this.randomImage();
//   }
  randomImage(){
    var img_name = [
    require('../assets/icons/cardone.jpg'),
    require('../assets/icons/cardtwo.jpg'),
    require('../assets/icons/cardthree.png')

    ]
  
    var num =Math.floor(Math.random() * img_name.length);
    
    console.log("Hello",img_name[num]);
    this.setState({img_source: img_name[num]})
  }

  springAnimation(){
    var img_name = [
        require('../assets/icons/cardone.jpg'),
        require('../assets/icons/cardtwo.jpg'),
        require('../assets/icons/cardthree.png')
    
        ]
    
    for (var i = 0; i < img_name.length; i += 1)
{



    Animated.loop(

      Animated.spring(this.state.springValue,
        {
          toValue:1,
          friction:1
      }) .start( () => { this.randomImage ();
    })

      );
    
  }
}

// animationLoop(){
// Animated.loop(
//     Animated.sequence([
//       Animated.delay(3000),
//       Animated.timing(this.state.width, {
//         toValue: 400,
//         duration: 2000,
//         useNativeDriver:true
//       })
//     ]),
//     {
//       iterations: 10
//     }
//   ).start(() => {
//           // Logic whenever an iteration finishes...
//           this.animationLoop()
//         });
// }

// animateWidth() {
//     Animated.sequence([
//       Animated.delay(3000),
//       Animated.timing(this.state.width, {
//         toValue: 4,
//         duration: 3000
//       })
//     ]).start(() => {
//       // Logic whenever an iteration finishes...
//       this.animateWidth()
//     });
// }


// timeAnimation(){
// Animated.timing(this.state.animatedValue,
//      {
// 	toValue: 1,
// 	duration: 50
// }).start();

// setTimeout(() => this.state.animatedValue.stopAnimation(({value}) => console.log("Final Value: " + value)), 250);
// }
    render(){
    return(
        <View style={{flex:1,}}>
                      <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>

            <TouchableOpacity onPress={()=> this.springAnimation()}>
        <Text style= {css.text}>My Task</Text>
        </TouchableOpacity>

        </View>

        <View style={{flex:0.3,flexWrap:'wrap',margin:20}}>
        <Animated.Image
        
        source={(this.state.img_source)}
        style={[css.spring,
      {transform: [{ scale:this.state.springValue}],justifyContent:'center'} 
     ]} >
            </Animated.Image>

            {/* <Animated.Image
        source={require('../assets/icons/cardtwo.jpg')}
        style={[css.spring,
        { transform: [{ scale:this.state.springValue}],justifyContent:'center'}
        ]} > 
            </Animated.Image>
            <Animated.Image
        source={require('../assets/icons/cardthree.png')}
        style={[css.spring,
        { transform: [{ scale:this.state.springValue}],justifyContent:'center'}
        ]} >
            </Animated.Image>  */}
            {/* <Animated.Image
        source={require('../assets/icons/cardfour.png')}
        style={[css.spring,
        { transform: [{ scale:this.state.springValue}],justifyContent:'center'}
        ]} >
            </Animated.Image>
            <Animated.Image
        source={require('../assets/icons/cardone.jpg')}
        style={[css.spring,
        { transform: [{ scale:this.state.springValue}],justifyContent:'center'}
        ]} >
            </Animated.Image>
            <Animated.Image
        source={require('../assets/icons/cardtwo.jpg')}
        style={[css.spring,
        { transform: [{ scale:this.state.springValue}],justifyContent:'center'}
        ]} >
            </Animated.Image>
            <Animated.Image
        source={require('../assets/icons/cardthree.png')}
        style={[css.spring,
        { transform: [{ scale:this.state.springValue}],justifyContent:'center'}
        ]} >
            </Animated.Image>
            <Animated.Image
        source={require('../assets/icons/cardfour.png')}
        style={[css.spring,
        { transform: [{ scale:this.state.springValue}],justifyContent:'center'}
        ]} >
            </Animated.Image>
 */}
                </View>


        <View style={{flex:0.5,justifyContent:'center',alignItems:'center',}}>
              <Image source={(this.state.img_source)} 
      style={{width:200,height:200,resizeMode:'contain'}}/> 
        </View>
</View>
    )
    }
}

const css= StyleSheet.create({
    text:{
      fontFamily:'Roboto-Light',
      fontSize:30
    },
    spring:{
        width:80,
        height:80,
        resizeMode:'contain',

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
    
  
