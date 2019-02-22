import * as React from "react";

/// <reference path="../interfaces.d.ts"/>

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        const text = this.state.liked ? 'like':'dislike'
        return (
            <div>
                <p onClick={this.handleClick}>
                    You {text} {this.props.firstName}·{this.props.lastName}
                </p>
            </div>
        );
    }

    private handleClick = () => {
        this.setState({
            liked: !this.state.liked
        });
    }
}