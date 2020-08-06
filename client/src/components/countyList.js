import React, { useState, useEffect } from "react";
import "../countyList.css";
import menu from "../menu.png";

const CountyList = (props) => {
    const [originalData, setOriginalData] = useState(props.data);
    const [modifiedData, setModifiedData] = useState();
    const [sortState, setSortState] = useState({
        byState: false,
        byCases: false,
        byDeaths: false,
        byFatality: false,
    });

    useEffect(() => {
        setOriginalData(props.data);
        setModifiedData([...props.data]);
        console.log("COUNTY LIST");
    }, [props]);

    const handleChange = (e) => {
        const string = e.target.value.toLowerCase();
        const result = originalData.filter((county) =>
            `${county.state_name} - ${county.county_name}`
                .toLowerCase()
                .includes(string)
        );
        console.log("change handled");

        if (sortState.byState) {
            setModifiedData(result);
        } else if (sortState.byCases) {
            console.log(result);
            setModifiedData(
                result.sort((a, b) => {
                    return b.confirmed - a.confirmed;
                })
            );
        } else if (sortState.byDeaths) {
            setModifiedData(
                result.sort((a, b) => {
                    return b.death - a.death;
                })
            );
        } else if (sortState.byFatality) {
            setModifiedData(
                result.sort((a, b) => {
                    return (
                        parseFloat(b.fatality_rate) -
                        parseFloat(a.fatality_rate)
                    );
                })
            );
        } else {
            console.log("change not properly handled in sort");
        }
    };

    const sortByCases = () => {
        setSortState({
            byState: false,
            byCases: true,
            byDeaths: false,
            byFatality: false,
        });
        setModifiedData([
            ...modifiedData.sort((a, b) => {
                return b.confirmed - a.confirmed;
            }),
        ]);
    };

    const sortByDeaths = () => {
        console.log("called");
        setSortState({
            byState: false,
            byCases: false,
            byDeaths: true,
            byFatality: false,
        });
        setModifiedData([
            ...modifiedData.sort((a, b) => {
                return b.death - a.death;
            }),
        ]);
    };

    const sortByFatalityRate = () => {
        setSortState({
            byState: false,
            byCases: false,
            byDeaths: false,
            byFatality: true,
        });
        setModifiedData([
            ...modifiedData.sort((a, b) => {
                return (
                    parseFloat(b.fatality_rate) - parseFloat(a.fatality_rate)
                );
            }),
        ]);
    };

    console.log(modifiedData)
    console.log(originalData)
    const sortByStates = () => {
        setSortState({
            byState: true,
            byCases: false,
            byDeaths: false,
            byFatality: false,
        });
        console.log("invoked");
        setModifiedData([...originalData]);
    };

    return (
        <div class="side" id="county-list">
            <div className="search-box">
                <input
                    className="search-txt"
                    type="text"
                    placeholder="Search counties"
                    onChange={handleChange}
                ></input>
                <button
                    className="search-btn"
                    id="sortDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i class="fas fa-bars"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" onClick={sortByStates}>
                        Sort by states (default)
                    </a>
                    <a class="dropdown-item" onClick={sortByCases}>
                        Sort by cases
                    </a>
                    <a class="dropdown-item" onClick={sortByDeaths}>
                        Sort by deaths
                    </a>
                    <a class="dropdown-item" onClick={sortByFatalityRate}>
                        Sort by fatality rate
                    </a>
                </div>
            </div>
            <ul>
                {modifiedData
                    ? modifiedData.map((county, i) => {
                          return (
                              <li
                                  key={i}
                                  onClick={props.onClick.bind(
                                      this,
                                      county.county_name,
                                      county.state_name
                                  )}
                                  onMouseEnter={props.onHover.bind(
                                      this,
                                      county.county_name,
                                      county.state_name
                                  )}
                                  onMouseLeave={props.onLeave.bind(
                                      this,
                                      county.county_name,
                                      county.state_name
                                  )}
                              >
                                  {county.state_name} - {county.county_name}
                              </li>
                          );
                      })
                    : null}
            </ul>
        </div>
    );
};

export default CountyList;
