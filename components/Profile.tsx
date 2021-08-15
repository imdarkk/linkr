import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, ScrollView } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Profile({ navigation }: StackScreenProps<RootStackParamList, 'Profile'>) {
    const [links, setLinks] = React.useState([]);
    const [boxes, setBoxes] = React.useState([]);

    React.useEffect(() => {
      (async () => {
        const reqData = await fetch('http://10.0.2.2:909/getGeneralLinks');
        const resData = await reqData.json();
          
        setLinks(resData);
      })();
    }, []);

  return (
        <View style={styles.profile_page}>
          <Text style={styles.logo}>LINKR.</Text>
          <SearchableDropdown
            onTextChange={(text) => console.log(text)}
            onItemSelect={(item) => {
              setBoxes(oldBoxes => [...oldBoxes, item]);
            }}
            containerStyle={{padding: 5, marginTop: 34, color: '#5F5F5F'}}
            textInputStyle={{
              width: width - 65,
              height: 47,
              backgroundColor: '#232323',
              color: '#5F5F5F',
              paddingLeft: 20,
              borderRadius: 4
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#232323',
              color: '#5F5F5F',
              borderBottomWidth: 1,
              borderBottomColor: '#272727',
            }}
            itemTextStyle={{
              color: '#5F5F5F',
            }}
            itemsContainerStyle={{
              maxHeight: '60%',
              backgroundColor: '#232323',
              color: '#5F5F5F',
            }}
            items={links}
            defaultIndex={2}
            placeholder="Search to add a link..."
            resPtValue={false}
            underlineColorAndroid="transparent"
        />
        <ScrollView>
          {boxes.map((item) => (
            <View style={styles.boxSM}>
              <Ionicons name={"logo-" + item.name.toLowerCase()} color="white" size={32} />
              <View style={{width: "100%"}}>
                <TextInput placeholder={"Link Title(Default: " + item.name + ")"} placeholderTextColor="#5F5F5F" style={styles.inputLinks} />
                <TextInput placeholder={item.default_link} placeholderTextColor="#5F5F5F" style={styles.inputLinks} />
              </View>
            </View>
          ))}
        </ScrollView>
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
  },
  dropdown: {
      backgroundColor: 'white',
      width: 200,
     height: 50,
  },
  boxSM: {
    width: width - 65,
    height: 110,
    backgroundColor: "#232323",
    borderRadius: 4,
    marginTop: 20,
    flexDirection: 'row'
  },
  inputLinks: {
    width: "75%",
    height: 35,
    borderRadius: 5,
    backgroundColor: "#2C2C2C",
    color: "#5F5F5F",
    paddingLeft: 15,
    marginTop: 5,
  }
});
