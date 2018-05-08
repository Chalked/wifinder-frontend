import React, { Component } from 'react';
import classes from './ModalForm.css';
import { bounceInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounceInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
    }
}

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            address: ''
        }
    }

    handleName = (event) => {
        this.setState({ name: event.target.value });
    }

    handleDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    handleAddress = (event) => {
        this.setState({ address: event.target.value });
    }

    handleSubmit = (event) => {
        if (this.state.name === '' || this.state.description === '' 
            || this.state.address === '') {
            alert('Please fill all fields.')
            return null;
        }
        event.preventDefault();
        let route = 'locations/';
        let data = {
            name: this.state.name,
            description: this.state.description,
            address: this.state.address
        }
        this.props.post(data, route, 'POST');
        this.setState({ name: '', description: '', address: '' });
        this.props.toggle();
    }

    render() {
        return (
            <StyleRoot>
                <div className={classes.Modal}>
                    <div className={classes.OuterWrapper}>
                        <div className={classes.InnerWrapper} style={styles.bounceInUp}>
                            <small className={classes.Close} onClick={() => this.props.toggle()}>close</small>
                            <h3 className={classes.Title}>Add a new location</h3>
                            <p className={classes.P}>To add a new place where free wifi can be found, fill out the following form. All areas must be filled.</p>
                            <form onSubmit={this.handleSubmit} className={classes.Form} >
                                <label className={classes.Name}>
                                    Name:
                                    <input className={classes.Input}
                                        type='text'
                                        onChange={this.handleName}
                                        value={this.state.name} />
                                </label>
                                <label className={classes.Description}>
                                    Description:
                                    <textarea className={classes.TextArea}
                                        onChange={this.handleDescription}
                                        value={this.state.description} >
                                    </textarea>
                                </label>
                                <label className={classes.Address}>
                                    Address:
                                    <input className={classes.AddressInput}
                                        type='text'
                                        onChange={this.handleAddress}
                                        value={this.state.address} />
                                </label>
                                <input className={classes.Submit} type='submit' value='Submit' />
                            </form>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

export default ModalForm;