import React from "react";

const Card = () => {
    return (
        <div className="card text-center">
            <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla suscipit neque risus, et aliquam nulla euismod feugiat.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Card;
