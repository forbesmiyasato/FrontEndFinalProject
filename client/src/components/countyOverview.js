import React from "react";
import "../countyOverview.css";

const countyOverview = (props) => {
    console.log(props.data);
    const data = props.data;
    return (
        <div class="side">
            <div class="container county-overview">
                <p>County Overview</p>
                <div class="row">
                    <div class="col button" onClick={props.togglePopup.bind(this, 'Cases')}>Cases</div>
                    <div class="col button" onClick={props.togglePopup.bind(this, 'Deaths')}>Deaths</div>
                </div>
                <p>
                    {data.county_name}, {data.state_name}
                </p>
                <div className="overview-data-container">
                    <div class="row overview-data">
                        <div class="col">
                            Confirmed:
                            <p>{data.confirmed}</p>
                        </div>
                        <div class="col">
                            New:
                            <p>{data.new}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            Death:
                            <p>{data.death}</p>
                        </div>
                        <div class="col">
                            New Death:
                            <p>{data.new_death}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            Fatality Rate:
                            <p>{data.fatality_rate}</p>
                        </div>
                        <div class="col">
                            Last Update:
                            <p>{data.last_update}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default countyOverview;