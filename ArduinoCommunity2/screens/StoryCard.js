import React, { Component } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  Touchable
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          {this.props.story.image===1?<Image source={require('../assets/projectImage1.png')} style={{width:RFValue(275),height:RFValue(125),marginTop:20}}/>:<Image source={require('../assets/projectImage2.png')} style={{width:RFValue(275),height:RFValue(125),marginTop:20}}/>}
          <Text style={{color:'white',fontFamily:'Bubblegum-Sans',fontSize:RFValue(17.5),margin:10}}>{this.props.story.title}</Text>
          <Text style={{color:'white',fontFamily:'Bubblegum-Sans',fontSize:RFValue(12.5),margin:5}}>{this.props.story.author}</Text>
          <Text style={{color:'white',fontFamily:'Bubblegum-Sans',fontSize:RFValue(10),margin:2.5}}>{this.props.story.description}</Text>
          <TouchableOpacity style={{width:RFValue(100),height:RFValue(25),margin:5,backgroundColor:'red',borderRadius:15,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Ionicons name='heart' color='white' size={RFValue(15)}/>
            <Text style={{fontFamily:'Bubblegum-Sans',color:'white',margin:5}}>1K likes</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#19005D',
    justifyContent: "center",
    alignItems: "center",
    borderRadius:90,
    margin:20
  }
});
