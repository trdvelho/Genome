import React, { Component, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import backgroundImage from '../resources/background';


const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Screen = props => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
        
        { props.img ?
            ( <Image source={props.img} style={styles.cardImg}></Image> ) :
            ( 
                <TouchableOpacity
                    style={styles.buttonAdd}>
                        <Text style={styles.buttonTextAdd}>+</Text>
                </TouchableOpacity>
            )
        }

        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
        { props.img && (
            <TouchableOpacity
                style={styles.button}>
                        <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            )
        }

      </Animated.View>
    </View>
  );
};

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 600 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.3, 1, 0.3]
        })
      }
    ]
  };
};

export default function Wearables() {
    const [ cards, setCard ] = useState([
        {
            title: 'Sapphire Keychain',
            subtitle: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
            img: require('../resources/img/rock.png')
        },
        {
            title: 'Moonstone Keychain',
            subtitle: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
            img: require('../resources/img/rock1.png')
        }
    ]);
    return (
      <ImageBackground source={backgroundImage} style={styles.imageBG}>
        <View style={styles.userInfos} >
          <Image source={require(`../resources/img/profilePhoto.png`)} style={styles.profilePhoto}></Image>
          <Text style={styles.userName}>Lottie Curtis</Text>
          <Text style={styles.userProducts}>You have {cards.length} products</Text>
        </View>
        
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: xOffset } } }],
            { useNativeDriver: true }
          )}
          horizontal
          pagingEnabled
          style={styles.scrollView}
        >
            {
                cards.map( (card, i) => ( 
                    <Screen key={i} title={card.title} subtitle={card.subtitle} img={card.img} index={i} style={styles.test}  />
                    )
                )
            }

            <Screen title="Add a Wearable" subtitle="Don’t See One You Like? Choosing the Best Gemstone for Your Necklace and Jewelry" index={cards.length} style={styles.test} />
          
        </Animated.ScrollView>
      </ImageBackground>
    );
  
}

const styles = StyleSheet.create({
  userInfos: {
    marginTop: 20,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  userProducts: {
    color: 'black',
    marginTop: 5,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 14,
    borderRadius: 50,
    backgroundColor: 'white'
  },
  scrollView: {
    flexDirection: "row"
  },
  imageBG: {
    
    
  },
  profilePhoto: {
    width: 55,
    height: 55,
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 90
  },
  screen: {
    height: 400,
    position: 'relative',
    //justifyContent: 'center',
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white"
  },
  cardImg:{
    position: 'absolute',
    top: -80,
    width: 150,
    height: 150
  },
  title: {
    fontSize: 25,
    width: 150,
    marginTop: 80,
    color: '#4E5B76',
    fontWeight: "bold",
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 15,
    width: 150,
    marginTop: 20,
    fontWeight: "300",
    color: '#A0A9B8',
    textAlign: 'center'
  },
  button: {
    marginTop: 50,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#303371',
    borderRadius: 30
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: "bold",
  },
  buttonAdd:{
    width: 60,
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#303371',
    borderRadius: 40
  },
  buttonTextAdd: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 30,
    color: '#fff',
    fontWeight: "bold"
  },

});
