import React, { Component } from 'react';
import classes from './CommentForm.css';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleBodyChange = (event) => {
        this.setState({
          body: event.target.value
        });
    };

    handleSubmit = (event) => {
        if (this.state.title === '' || this.state.body === '') {
            alert('Please fill all fields to leave a comment.')
            return null;
        }
        event.preventDefault();
        let route = 'comments/';
        let data = {
            title: this.state.title,
            body: this.state.body,
            location_id: this.props.currentLocation
        }
        this.props.post(data, route, 'POST');
        this.setState({ title: '', body: '' });
        this.props.toggle();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={classes.Form}>
            <small className={classes.Small}>Leave a comment:</small>
            <br></br>
                <label className={classes.Title}>
                    Title:
                    <input className={classes.Input}
                        type='text' 
                        name='title' 
                        onChange={this.handleTitleChange}
                        value={this.state.title} />
                </label>
                <label className={classes.Comment}>
                    Comment:
                    <textarea className={classes.Input}
                        name='body' 
                        onChange={this.handleBodyChange}
                        value={this.state.body} >
                    </textarea>
                </label>
                <input type='submit' value='Submit' className={classes.Submit} />
            </form>
        );
    }
    
}

export default CommentForm;