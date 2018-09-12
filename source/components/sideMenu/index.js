import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import DripConnectionScreen from "../dripConnectionScreen";
import MainScreen from "../mainScreen";

class SideMenu extends Component {

    static propTypes = {
        navigation: PropTypes.object
    };

    navigateToScreen = (route) => () => {

        console.log(route);
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('MainScreen')}>
                            Home
                        </Text>
                        <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('DripConnectionScreen')}>
                            Drip Connection
                        </Text>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>This is my fixed footer</Text>
                </View>
            </View>
        );
    }
}


export default SideMenu;