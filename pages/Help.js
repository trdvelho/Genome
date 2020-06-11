import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Linking,
    TouchableOpacity,
    Button
} from 'react-native';
import backgroundImage from '../resources/background';

export default function HelpScreen() {
    return (
      <ImageBackground source={backgroundImage} style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>Help me !</Text>
          <Text style={styles.description}>We'are here to help you: send us an email</Text>
          <TouchableOpacity  onPress={()=>{ 
            Linking.openURL('mailto:support@domain.com?subject=mailsubject&body=mailbody');
                                      }}>
              <View><Text style={styles.emailus}>Contact Us</Text></View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    title: {
      marginTop: 80,
      fontSize: 30,
      color: '#303371',
      fontWeight: 'bold'
    },
    description: {
      marginTop: 50
    },
    emailus: {
      color: 'green'
    }
  })