import React from "react";
import { getData } from "../../apirequest.jsx";
import "./works.css";

const Works = () => {
    const [works, setWorks] = React.useState(null);
    React.useEffect(() => {
        const response = getData("api/allworks");
        setWorks(response.data);
    }, []);
    return (
        <div className="work-container">
            <h1 className="page-title">Our Works</h1>
            {console.log("works", works)}
        </div>
    );
};

export default Works;
