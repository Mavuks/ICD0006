import React from 'react'
import './main.css';
import '../App';
//import App from '../App';

const Foods = ({ foods }) => {
    return (
        
        <body>
            <div className="App">
                <h1>Food List</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Söök</td>
                            <td>Asukoht</td>
                            <td>Hind</td>
                        </tr>
                    </thead>
                    {foods.map((food, id) => (
                        <tbody key={id}>
                            <tr>
                                <td>{food.name_est}</td>
                                <td>{food.providers[0]}</td>
                                <td>{food.price}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </body>
    )
};

export default Foods