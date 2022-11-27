import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Button from "./button";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Navbar />
        <div className="container p-3">
          <div className="col-12">
            <h1 className="display-1 text-start">A Warm Welcome!</h1>
            <p className="col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla suscipit neque risus, et aliquam nulla euismod feugiat. Etiam ut velit eu mauris condimentum ornare. 
            Nunc congue tincidunt lectus id placerat. Cras nec est pulvinar, sodales eros id, euismod diam. Integer sit amet condimentum erat. 
            Duis vitae fermentum justo. Vestibulum congue tempus lacus, at convallis justo eleifend vitae.</p>
            <Button/>
          </div>
        </div>
        <div className="card p-3">
            <div className="row">
                <div className="col-12 col-md-3">
                 <Card />
                </div>
                <div className="col-12 col-md-3">
                 <Card />
                </div>
                <div className="col-12 col-md-3">
                 <Card />
                </div>
                <div className="col-12 col-md-3">
                 <Card />
                </div>
            </div>
        </div>
        <Footer />
    </>

  );
};

export default Home;
