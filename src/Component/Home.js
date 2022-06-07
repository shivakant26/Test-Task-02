import React, { useEffect, useState } from "react";

const Home = () => {
    const [bestPrice, setBestPrice] = useState(1000);
    const [color, setColor] = useState(0);
    const [Power, setPower] = useState(0);
    const [warpDrive, setWrapDrive] = useState(0);
    const [optionPackage, setOptionPackage] = useState(0);
    const [Total, setTotal] = useState(1000);
    const active ={  
        background: 'black',  
    }
    const inactive ={  
        background: 'blueviolet',  
    }
    return (
        <div className="main-page">
            <div className="page-heading">
                <h1>Test-Task-02</h1>
            </div>
            <div className="page-body">
                <div className="container">
                    <div className="clearfix">
                        <div className="left-side-content">
                            <div className="inner-box">
                                <div className="row">
                                    <h4>Select Color</h4>
                                    <button  onClick={(e) => setColor(Number(e.target.value))} value={0}>White 0 $</button>
                                    <button  onClick={(e) => setColor(Number(e.target.value))} value={100}>Red 100 $</button>
                                    <button  onClick={(e) => setColor(Number(e.target.value))} value={200}>Blue 200 $</button>
                                </div>
                                <div className="row">
                                    <h4>Select Power</h4>
                                    <button onClick={(e) => setPower(Number(e.target.value))} value={100}>100MV 0 $</button>
                                    <button onClick={(e) => setPower(Number(e.target.value))} value={200}>200MV 200 $</button>
                                    <button onClick={(e) => setPower(Number(e.target.value))} value={300}>300MV 500 $</button>
                                </div>
                                <div className="row">
                                    <h4>Wrap Drive</h4>
                                    <button onClick={(e) => setWrapDrive(Number(e.target.value))} value="0">No 0 $</button>
                                    <button onClick={(e) => setWrapDrive(Number(e.target.value))} value="1000">Yes 1000 $</button>
                                </div>
                                <div className="row">
                                    <h4>Select Option Package</h4>
                                    <button onClick={(e) => setOptionPackage(Number(e.target.value))} value="0">Basic 0 $</button>
                                    <button onClick={(e) => setOptionPackage(Number(e.target.value))} value="100">Sport 100 $</button>
                                    <button onClick={(e) => setOptionPackage(Number(e.target.value))} value="500">Lux 500 $</button>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-content">
                            <div className="output-side">
                                <div className="box">
                                    <div className="best-price">
                                        <div className="clearfix">
                                            <div className="left-part"><h4>Best-Price:</h4></div>
                                            <div className="right-part"><p>{Total} $</p></div>
                                        </div>
                                    </div>
                                    <div className="colors">
                                        <div className="clearfix">
                                            <div className="left-part"><h4>Color:</h4></div>
                                            <div className="right-part"><p>{color} $</p></div>
                                        </div>
                                    </div>
                                    <div className="power">
                                        <div className="clearfix">
                                            <div className="left-part"><h4>Power:</h4></div>
                                            <div className="right-part"><p>{Power} $</p></div>
                                        </div>
                                    </div>
                                    <div className="wrap-drive">
                                        <div className="clearfix">
                                            <div className="left-part"><h4>Wrap_Drive:</h4></div>
                                            <div className="right-part"><p>{warpDrive} $</p></div>
                                        </div>
                                    </div>
                                    <div className="option-package">
                                        <div className="clearfix">
                                            <div className="left-part"><h4>Option Package:</h4></div>
                                            <div className="right-part"><p>{optionPackage} $</p></div>
                                        </div>
                                    </div>
                                    <div className="total">
                                    <div className="clearfix">
                                            <div className="left-part"><h4>Total : </h4></div>
                                            <div className="right-part"><p>{Total + color + Power + warpDrive + optionPackage} $</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;