import React from "react"
import "../topCounties.css"

const findGreatest = (data, number) => {
    //searching for the highest states up to a certain number
    //this function does alot since we only want to call it
    //once on page load
    let greatestDeaths = new Array();
    let greatestCases = new Array();
    let greatestFatality = new Array();
    let current = null;
    for(var i = 0; i < data.length; ++i){
        //if county and state name are not the same, its just a county
        if(data[i].county_name != data[i].state_name){
            //first push up to the number specified
            if(greatestDeaths.length < number){
                greatestDeaths.push(data[i])
            }
            else{
                //then start replacing when a greater is found
                for(var j = 0; j < number; ++j){
                    if(data[i].death > greatestDeaths[j].death){
                        current = greatestDeaths[j]
                        greatestDeaths[j] = data[i]
                        //if we make a replacement we need to take out the smallest and not the current
                        //value from the list
                        for(var k = 0; k < number; ++k){
                            if(current != null && greatestDeaths[k].death < current.death){
                                let temp = greatestDeaths[k]
                                greatestDeaths[k] = current
                                current = temp
                                break
                            }
                        }
                        break
                    }
                    
                }
                
            }
            //now do that for all the other arrays
            //first push up to the number specified
            if(greatestCases.length < number){
                greatestCases.push(data[i])
            }
            else{
                //then start replacing when a greater is found
                for(var j = 0; j < number; ++j){
                    if(data[i].confirmed > greatestCases[j].confirmed){
                        current = greatestCases[j]
                        greatestCases[j] = data[i]
                        //if we make a replacement we need to take out the smallest and not the current
                        //value from the list
                        for(var k = 0; k < number; ++k){
                            if(current != null && greatestCases[k].confirmed < current.confirmed){
                                let temp = greatestCases[k]
                                greatestCases[k] = current
                                current = temp
                                break
                            }
                        }
                        break
                    }
                    
                }
                
            }

            if(data[i].fatality_rate != "nan%"  && data[i].fatality_rate != "inf%" && greatestFatality.length < number){
                greatestFatality.push(data[i])
            }
            else{
                //then start replacing when a greater is found
                for(var j = 0; j < number; ++j){
                    if(data[i].fatality_rate != "nan%" && data[i].fatality_rate != "inf%" && data[i].fatality_rate > greatestFatality[j].fatality_rate){
                        current = greatestFatality[j]
                        greatestFatality[j] = data[i]
                        //if we make a replacement we need to take out the smallest and not the current
                        //value from the list
                        for(var k = 0; k < number; ++k){
                            if(current != null && greatestFatality[k].fatality_rate < current.fatality_rate){
                                let temp = greatestFatality[k]
                                greatestFatality[k] = current
                                current = temp
                                break
                            }
                        }
                        break
                    }
                    
                }
                
            }
        }    
    }
    let allGreatest = new Array(greatestDeaths, greatestCases, greatestFatality)
    return allGreatest
}


const topCounties = (props) => {
    let data = props.data
    let greatest = findGreatest(data, 5)
    console.log(greatest)
    return (
        <div class="side" id="topContainer">
            <div id="topSelector">
               <input type="button" value="Deaths"></input>
               <input type="button" value="Cases"></input>
               <input type="button" value="Recovered"></input>
               <input type="button" value="Mortality"></input>
            </div>
            <div class="countyHolder">
                <p clas="deaths">

                </p>
                <p class="cases">
                    
                </p>
                <p class="recovered">

                </p>
                <p class="mortality">

                </p>
            </div>
            <div class="countyHolder">

            </div>
            <div class="countyHolder">

            </div>
            <div class="countyHolder">

            </div>
            <div class="countyHolder">

            </div>
        </div>
    );
};

export default topCounties;