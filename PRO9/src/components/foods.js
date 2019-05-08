import React from 'react'
import './main.css';
import '../App';

const Foods = ({ foods }) => {
    return (
        <body>
            <div className="App">
                <center><h1>Food List</h1></center>
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