import React from "react";
import { useState } from "react";
import Card from "./card";
import Opp from "./opponent";
import plain from "../image/map.jpg";


function Main() {
    return (
        <div>
            <img src={plain} class="h-screen w-screen object-cover"></img>
            <div class="absolute inset-x-0 top-5">
                <Opp />
            </div>
            <div>
                <div class="absolute inset-x-0 bottom-0">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Main;