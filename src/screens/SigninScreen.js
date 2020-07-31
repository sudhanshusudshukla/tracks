import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            // onDidFocus={() => { }}
            // onWillBlur={() => { }}
            // onDidBlur={() => { }}
            />
            <AuthForm
                headerText="Sign In to your Account"
                errorMessage=""
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <Navlink
                text="Don't have an account? Signup instead "
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    }

});

export default SigninScreen;