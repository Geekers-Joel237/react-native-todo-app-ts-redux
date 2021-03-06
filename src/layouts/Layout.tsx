import React, { FC } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

function Layout({ children }:any): JSX.Element {
    const { colors } = useTheme();

    return (
        <View
            style={[
                { backgroundColor: colors.background },
                { height: "100%", width: "100%" },
            ]}
        >
            {children}
        </View>
    );
}

export default Layout;
