import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
            <footer>
                <button onClick={this.props.chargerExemple}>Remplir</button>
            </footer>
        );
    }
}

export default Admin;