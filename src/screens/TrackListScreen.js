import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text Style={{ fontSize: 48 }} >
                Track list Screen</Text>
            <Button title="go to Track Detail"
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </View>
    );
};


const styles = StyleSheet.create({});

export default TrackListScreen;
