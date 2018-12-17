import React, { Component } from 'react';
import { Animated, Dimensions, View } from "react-native";

export type AlexaState = 'listening' | 'speaking' | 'thinking';

type State = {
    width: number
};

type Props = {
    alexaState: AlexaState
};

export default class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.minWidth = 100;
        this.durationTime = 800;
        this.state = {
            width: new Animated.Value(this.minWidth)
        };
        this.window = Dimensions.get('window');
        this.opacity = new Animated.Value(1);
    }

    thinking = () => {
        this.toWidth = this.toWidth <= this.minWidth ? this.window.width + 100 : this.minWidth;
        this.duration = this.toWidth <= this.minWidth ? 400 : this.durationTime;
        Animated.sequence(
            [
                Animated.timing(this.state.width, {
                    duration: this.duration,
                    toValue: this.toWidth
                })
            ]
        ).start(this.thinking);
    };

    speaking = () => {
        console.log(this.opacity._value);
        Animated.sequence(
            [
                Animated.timing(this.opacity, {
                    duration: this.durationTime,
                    toValue: this.opacity._value === 1 ? 0 : 1
                })
            ]
        ).start(this.speaking);
    };

    componentDidMount(): void {
        if (this.props.alexaState === 'thinking') {
            this.thinking();
        } else if (this.props.alexaState === 'speaking') {
            this.setState({
                width: this.window.width
            });
            this.speaking();
        }
    }

    render() {
        const lightBlueBar = {
            height: 15,
            backgroundColor: '#05FEFE',
            width: this.state.width,
            opacity: this.opacity
        };

        const darkBlueBar = {
            alignItems: 'center',
            height: 15,
            backgroundColor: '#214CFB',
            width: '100%',
        };

        return (
            <View style={darkBlueBar}>
                <Animated.View style={lightBlueBar} />
            </View>
        );
    }
}