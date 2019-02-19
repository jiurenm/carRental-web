import * as React from "react";

/// <reference path="../interfaces.d.ts"/>

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            liked: false
        }
    }

    private handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const text = this.state.liked ? 'like':'dislike'
        return (
            <div>
                <p onClick={this.handleClick.bind(this)}>
                    You {text} {this.props.firstName}·{this.props.lastName}
                </p>
            </div>
        );
    }
}