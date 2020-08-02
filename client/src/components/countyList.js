import React, {useState, useEffect} from "react";
import "../countyList.css";

const CountyList = (props) => {
    const [data, setData] = useState(props.data);
    const [filteredData, setFilteredData] = useState();
    useEffect(() => {
        setData(props.data)
    })

    const handleChange = (e) => {
        const string = e.target.value.toLowerCase();
        const result = data.filter(county => (county.county_name.toLowerCase().includes(string) 
        || county.state_name.toLowerCase().includes(string)));
        setFilteredData(result);
    };

    return (
        <div class="side">
            <div className="search-box">
                <input
                    className="search-txt"
                    type="text"
                    placeholder="Search counties"
                    onChange={handleChange}></input>
                <button className="search-btn">
                    <i className="icon-basic-magnifier"></i>
                </button>
            </div>
            <ul>
                {filteredData ? 
                filteredData.map((county) => {
                    return (
                        <li>
                            {county.state_name} - {county.county_name}
                        </li>
                    );
                }) 
                :
                data.map((county) => {
                    return (
                        <li>
                            {county.state_name} - {county.county_name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CountyList;
