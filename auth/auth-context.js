import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        (async () => {
          if (await AsyncStorage.getItem("tkn")) {
            const token = await AsyncStorage.getItem("tkn");
            const reqData = await fetch("http://10.0.2.2:909/check", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: token,
              }),
            });
            const resData = await reqData.json();

            if (resData.status == 200) {
              setLoggedIn(true);
            }
          } else {
            setLoggedIn(false);
          }
        })();
    }, []);

    const login = (username, password) => {
        (async () => {
            const reqData = await fetch("http://10.0.2.2:909/logUser", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
            });
            
            if (reqData.status == 200) {
                setLoggedIn(true);
            }
        })();
    };

    const logout = async () => {
        setLoggedIn(false);
        await AsyncStorage.removeItem('tkn');
    };

    const authContextValue = {
        login,
        loggedIn,
        logout
    };

    return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
