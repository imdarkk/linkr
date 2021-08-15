import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native';
import { RootStackParamList } from "../types";
import {useFonts} from 'expo-font';

const { width, height } = Dimensions.get('window');

export default function Login({ navigation }: StackScreenProps<RootStackParamList, 'Login'>) {
    const [loaded] = useFonts({
        Barlow: require('../assets/fonts/Barlow-Medium.ttf')
    });

    if (!loaded) {
        return (
            <Text>Loading...</Text>
        );
    } else {
        return (
            <View style={styles.login_page}>
                <View style={styles.inputWrap}>
                    <TextInput placeholder="Username" placeholderTextColor="#3D3C3C" style={styles.input} />
                    <TextInput placeholder="Password" placeholderTextColor="#3D3C3C" style={styles.input} />
                </View>
                <TouchableOpacity><Text style={styles.fptext}>Forgot your password?</Text></TouchableOpacity>

                <View style={styles.inputWrap}>
                    <TouchableOpacity style={styles.snbtn}><Text style={styles.sntext}>Login</Text></TouchableOpacity>
                </View>
                <TouchableOpacity><Text style={styles.natext}>Don't have an account?</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login_page: {
        height: height,
        width: width,
        justifyContent: 'center',
        backgroundColor: '#1C1C1C',
    },
    inputWrap: {
        width: width,
        alignItems: 'center'
    },
    input: {
        width: "80%",
        height: 47,
        backgroundColor: '#232323',
        color: '#797878',
        borderRadius: 4,
        paddingLeft: 20,
        marginBottom: 15,
    },
    fptext: {
        color: '#6F6F6F',
        left: 40,
        fontFamily: 'Barlow'
    },
    snbtn: {
        width: "80%",
        height: 47,
        backgroundColor: '#375C64',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 55
    },
    sntext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'Barlow'
    },
    natext: {
        color: '#6F6F6F',
        left: 40,
        top: 200,
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Barlow'
    }
});
