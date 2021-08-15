import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import SearchableDropdown from 'react-native-searchable-dropdown';

const { width, height } = Dimensions.get('window');

export default function Profile({ navigation }: StackScreenProps<RootStackParamList, 'Profile'>) {
    const [links, setLinks] = React.useState([]);

    Font.loadAsync({
      Gilroy: "../assets/fonts/Gilroy-ExtraBold.otf"
    });

    React.useEffect(() => {
      (async() => {
        const reqData = await fetch('http://10.0.2.2/getGeneralLinks');
        const resData = await reqData.json();
        setLinks(resData);
      })();
    }, []);
    
    return (
        <View style={styles.profile_page}>
            <Text style={styles.logo}>LINKR.</Text>
            <SearchableDropdown 
              onTextChange={text => console.log(text)}
              onItemSelect={item => console.log(item)}
              items={links}
              defaultIndex={2}
              resetValue={false}
              underlineColorAndroid="transparent"
            />
        </View>
    );
}

const styles = StyleSheet.create({
  profile_page: {
    height: height,
    width: width,
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  logo: {
    fontSize: 34,
    color: "white",
    fontWeight: 'bold',
    marginTop: 35,
    fontFamily: 'Gilroy'
  },
});
