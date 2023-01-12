import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Routes from './routes'
import AuthProvider from "./auth";



const Index = () => {

    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>

    )

}

export default Index;