/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlexaChromeBar from "./AlexaChromeBar";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Thinking</Text>
                <AlexaChromeBar alexaState='thinking' />
                <View style={{ height: 100 }} />
                <Text style={styles.label}>Speaking</Text>
                <AlexaChromeBar alexaState='speaking' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    label: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
