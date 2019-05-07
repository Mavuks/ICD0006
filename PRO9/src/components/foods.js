import React from 'react'

const Fooditem = ({fooditem}) => {
    return (
        <div>
            {/* <center><h1>foods List</h1></center> */}
            {fooditem.map((Fooditems) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{Fooditems.name_est}</h5>
{/*                         <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p class="card-text">{contact.company.bs}</p> */}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Fooditem