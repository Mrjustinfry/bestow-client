import React, {Component} from 'react';

export default class Input extends Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }
    render() {
        const Element = this.props.element || 'input';

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <Element
                    {...this.props.input}
                    id={this.props.input.name}
                    className={this.props.display}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
            </div>
        );
    }
}
