import React, { Component } from 'react';
import Foods from './components/foods';

class App extends Component {
    render() {
        return (
            <Foods foods={this.state.foods} />
        )
    }

    state = {
        foods: []
    };

    componentDidMount() {
        fetch('https://api.fuud.ituk.ee/daily/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ foods: data.data })
            })
            .catch(console.log)
    }


}

export default App;