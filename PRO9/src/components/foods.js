import React from 'react'
import './main.css';

const Foods = ({ foods }) => {
    return (
        <div>
            <center><h1>food List</h1></center>
            <table>
                <thead>
                    <tr>
                        <td>Söök</td>
                        <td>Asukoht</td>
                        <td>Hind</td>
                    </tr>
                </thead>

                {foods.map((food) => (
                    <div key={food.name_est}>
                        <tbody>
                            <tr>
                                <td> {food.name_est}</td>
                                <td>{food.price}</td>
                                <td>{food.providers[0]}</td>
                            </tr>
                        </tbody>
                    </div>
                ))}
            </table>
        </div>
    )
};

export default Foods