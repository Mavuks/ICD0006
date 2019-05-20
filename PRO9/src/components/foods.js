import React from 'react'
import './main.css';
import '../App';
//import App from '../App';

const Foods = ({ foods }) => {
    return (
        
        <body>
            <div className="App">
                <h1>Food Api</h1>
                <table>
                    <thead>
                        <tr>
                            <td><h3>Söök</h3></td>
                            <td><h3>Asukoht</h3></td>
                            <td><h3>Hind</h3>   </td>
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