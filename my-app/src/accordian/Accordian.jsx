import React, { useState } from 'react'
import data from './data'
import "./style.css";

const Accordian = () => {
    const data1 = data
    const [selected, setSelected] = useState(null);
    const [multiple, setMultiple] = useState([]);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);

    function handleSingleSelection(getCurrentId) {
        console.log(selected, "handleSingleSelection", getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultipleSelection(getCurrentId) {
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);
        
        console.log(cpyMutiple, findIndexOfCurrentId);
        setMultiple(cpyMutiple)
    }


    console.log("multiple", multiple);
    function handleMultiSelection() {
        console.log("enableMultiSelection", enableMultiSelection)
        setEnableMultiSelection(!enableMultiSelection)
    }


    return (
        <div className="acc-wrapper">
            <button onClick={handleMultiSelection}>
                Enable Multi Selection
            </button >
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div
                                onClick={() => { enableMultiSelection ? handleMultipleSelection(dataItem.id) : handleSingleSelection(dataItem.id) }}
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>{
                                console.log("multiple.indexOf(dataItem.id)", multiple.indexOf(dataItem.id))

                            }

                            {
                                enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="acc-content ">{dataItem.answer}</div>)
                                    : ((selected == dataItem.id) &&
                                        <div className="acc-content ">{dataItem.answer}</div>
                                    )
                            }

                        </div>
                    ))
                ) : (
                    <div>No data found !</div>
                )}
            </div>
        </div>
    );

}

export default Accordian
