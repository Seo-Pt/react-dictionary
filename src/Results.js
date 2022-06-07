import React from "react";
import Meanings from "./Meanings.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props){
    console.log(props)
    if (props.results) {
        let word = props.results.word;
    return(
        <div className="Results">
            <section>
            <div className="card mt-3">
            <div className="card-body">
            <h2>📖{word}</h2>
            <span><Phonetics phoneticAudio={props.results.phonetics[0]} phoneticText={props.results.phonetic} /></span>


            </div>
            </div>
            </section>
            <section>
            {props.results.meanings.map(function (meaning, index){
                return ( 
                <section className="meanings" key={index}>
                    <Meanings meanings={meaning} />
                </section>)
            })}
            </section>

        </div>
    );
    } else {
        return null;
    }
}