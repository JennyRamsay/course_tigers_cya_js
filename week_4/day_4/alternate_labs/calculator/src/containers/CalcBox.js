import React, { useState } from "react";
import Header from "../components/Header";
import MathForm from "../components/MathForm";
import MathList from "../components/MathList";

const CalcBox = () => {

    const [calculations, setCalculations] = useState([]);


    const addCalculation = (submittedCalculation) => {
        submittedCalculation.id = Date.now();
        const updatedCalculation = [...calculations, submittedCalculation];
        setCalculations(updatedCalculation);
    }
    return (
        <div id="wholeDiv">
                <header id="header">
                    <Header/>
                </header>

            <div id="calculatorDiv">
                <main id="mainForm">
                    <MathForm onCalculationSubmit={(calculation) => addCalculation(calculation)}/>
                </main>

                <section id="calculations">
                    <h2>Calculations: </h2>
                    <MathList calculations={calculations}/>
                </section>
                
            </div>
        </div>
    )
}

export default CalcBox;