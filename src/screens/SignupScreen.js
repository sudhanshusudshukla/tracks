import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <Navlink
                routeName="Signin"
                text="Already have an Account! Signin Instead!"
            />

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
    }

});

export default SignupScreen;