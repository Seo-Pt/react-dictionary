import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms.js";

export default function Meanings(props){
    if (props.length) {

        return (
            <div className="Meanings">
    <div className="card mt-3">
    <div className="card-body">
    
    <h3>[{props.meanings.partOfSpeech}]</h3>
    <h6>Definition(s):</h6>
    
    {props.meanings.definitions.map(function(definition, index){
        return(
            <div key={index}>
                <ul>
                    <li>{definition.definition}</li>
                </ul>
                    </div>
            );
        })}
        <Synonyms synonyms={props.meanings.synonyms} />
    </div>
    </div>
    </div>
    );
} else {
    <div className="Meanings"><em>Meanings not available</em></div>

}
}