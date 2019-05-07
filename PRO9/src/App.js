import React, {Component} from 'react';
import Fooditem from './components/foods';

class App extends Component {
    render() {
        return (
            <Fooditem fooditem={this.state.fooditem} />
        )
    }

    state = {
        fooditem: []
    };

    componentDidMount() {
        fetch('https://api.fuud.ituk.ee/daily')
            .then(res => res.json())
            .then((data) => {
                this.setState({ foodtem: data })
            })
            .catch(console.log)
    }
}

export default App;