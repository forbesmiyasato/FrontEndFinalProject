import React, { useEffect, useState } from "react";
import Map from "./map";
import "../App.css";
import RightSideBar from "./RightSideBar";
import axios from "axios";

const App = () => {
    const [healthData, setHealthData] = useState([]);
    const [selectedCounty, setSelectedCounty] = useState({});

    useEffect(() => {
        async function fetchData() {
            const healthResult = await axios(
                "https://covid19-us-api.herokuapp.com/county"
            );
            setHealthData(healthResult.data.message);
        }

        fetchData();
    }, []);

    const onMapCountyClick = (name, state) => {
        const found = healthData.find(
            (element) =>
                element["county_name"] == name && element["state_name"] == state
        );
        if (found) {
            setSelectedCounty(found);
            console.log(selectedCounty);
        }
    };
    
    return (
        <view>
            <div id="headerContainer">
                <h1 id="dashboardName">Coronavirus US County Tracker</h1>
            </div>
            <div class="side">Test</div>
            <div id="dashboardMap">
                <Map healthData={healthData} onClick={onMapCountyClick}></Map>
            </div>
            <RightSideBar data={selectedCounty}></RightSideBar>
        </view>
    );
};

export default App;
