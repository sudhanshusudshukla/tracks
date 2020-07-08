import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up for Tracker</Text>
            </Spacer>
            <Input label="Email"
                placeholder="please enter email"
                leftIcon={{ type: 'Feather', name: 'mail' }}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false} />
            <Spacer />
            <Input label="password"
                placeholder="please enter Password"
                leftIcon={{ type: 'Feather', name: 'lock' }}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry />
            {state.errorMessage ? ( <Text 
            style={styles.errorText}>{state.errorMessage}</Text> ): null}
            <Spacer>
                <Button title="Sign Up"
                    onPress={() => signup({ email, password })} />
            </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        marginLeft: 15
    }
});

export default SignupScreen;