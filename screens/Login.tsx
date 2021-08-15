import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native';
import { useAuth } from "../auth/auth-context";
import { RootStackParamList } from "../types";

const { width, height } = Dimensions.get('window');

export default function Login({ navigation }: StackScreenProps<RootStackParamList, 'Login'>) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { login } = useAuth();

    return (
        <View style={styles.login_page}>
            <View style={[styles.inputWrap, styles.inputWrapText]}>
                <TextInput placeholder="Username" placeholderTextColor="#3D3C3C" style={styles.input} value={username} onChangeText={text => setUsername(text)} />
                <TextInput placeholder="Password" placeholderTextColor="#3D3C3C" style={styles.input} value={password} onChangeText={text => setPassword(text)} />
            </View>
            <TouchableOpacity><Text style={styles.fptext}>Forgot your password?</Text></TouchableOpacity>

            <View style={styles.inputWrap}>
                <TouchableOpacity style={styles.snbtn} onPress={() => login(username, password)}><Text style={styles.sntext}>Login</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('register')}><Text style={styles.natext}>Don't have an account?</Text></TouchableOpacity>
        </View>
    );
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
        alignItems: 'center',
    },
    inputWrapText: {
        marginTop: "45%"
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
    },
    natext: {
        color: '#6F6F6F',
        marginLeft: 40,
        marginTop: 200,
        fontSize: 18,
        fontWeight: '500'
    }
});
