import React from "react-native";
import routes from "./routes";

const {
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Image
} = React;

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    icon: {
        height: 24,
        width: 24,
        margin: 16
    },
    badge: {
        position: "absolute",
        top: 8,
        right: 8,
        height: 24,
        width: 24,
        borderRadius: 12,
        paddingVertical: 4,
        backgroundColor: "#E91E63"
    },
    count: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 10,
        textAlign: "center"
    }
});

export default class NotificationIcon extends React.Component {
    _onPress() {
        this.props.navigator.push(routes.notes());
    }

    render() {
        const { count } = this.props;

        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor="rgba(0, 0, 0, .16)" onPress={this._onPress.bind(this)}>
                    <Image source={require("image!ic_notifications_white")} style={styles.icon} />
                </TouchableHighlight>
                {count ?
                    <View style={styles.badge}>
                        <Text style={styles.count} onPress={this._onPress.bind(this)}>
                            {count < 100 ? count : "99+"}
                        </Text>
                    </View> :
                    null
                }
            </View>
        );
    }
}

NotificationIcon.propTypes = {
    count: React.PropTypes.number.isRequired,
    navigator: React.PropTypes.object.isRequired
};
