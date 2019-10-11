import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

class RegisterCruxButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasSetUpStarted: false
        }
    }


    render() {
        const { label } = this.props;
        const { hasSetUpStarted } = this.state;
        if (hasSetUpStarted) {
            return (
                <Text>Already started.</Text>
            );
        } else {
            return (
                <Button {...this.props} label={label} />
            );
        }
    }
}


RegisterCruxButton.defaultProps = {
    label: 'Setup CruxPay'
}

export default RegisterCruxButton;