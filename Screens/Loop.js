import React, { Component } from 'react';
import {Text,View,TouchableOpacity,StyleSheet,ScrollView,FlatList,TouchableWithoutFeedback,Image,Animated,Dimensions} from 'react-native';
import { cards,Width ,Height} from '../Components/Constants/AppConstant';
import LoopImages from 'react-native-loop-image';

export default  class Loop extends Component{

  constructor(props){
    super(props);
    this.state={
        img_source:"",
        // showFontList:false,
        showImage:false,

    }

  }

  randomImage(){
    var img_name = [
    require('../assets/icons/cardone.jpg'),
    require('../assets/icons/cardtwo.jpg'),
    require('../assets/icons/cardthree.png')

    ]
  
    var num =Math.floor(Math.random() * img_name.length);
    
    console.log("Hello",img_name[num]);
    this.setState({img_source: img_name[num]})
    this.setState({ showImage: !this.state.showImage})
  }




  render() {
    let Width = Dimensions.get("window").width*0.6
   let Height = Dimensions.get("window").width*0.6
    
    let photos = [require('../assets/icons/cardone.jpg'),
                require('../assets/icons/cardtwo.jpg'),
                require('../assets/icons/cardthree.png'),
  ]

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => this.state.showImage?this.setState({showImage:!this.state.showImage}):this.randomImage()}>
            <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                <Text style ={{fontSize:15}}>Task</Text>
            </View>
            </TouchableOpacity>
            {this.state.showImage?

      <View style ={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
        <LoopImages photos = {photos} 
          height = {Height}
          width ={Width}
          isNativePhoto = {true}
          selectedIndicatorColor = {'#00F406'}
          normalIndicatorColor = {'#FF00F3'}
          delay = {0.5}
          onPress = {this.onPress.bind(this)}

        //  onPress ={()=> {this.randomImage()}}
     />              

     </View> :

     <View style={{flex:0.5,justifyContent:'center',alignItems:'center',}}>
   <Image source={(this.state.img_source)} 
style={{width:200,height:200,resizeMode:'contain'}}/> 
</View>

}

     </View>

            
   );
}

onPress(data) {
  	// do something you want do
    console.log('----------------' + data);
  }



}