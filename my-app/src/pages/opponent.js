import React from "react";
import kaiba from "../image/kaiba.png";
import { useState } from "react";

function Opp() {
    const [countop, setCountop] = useState(0);

    return (
        <div class="mx-auto">
            <div class="">
                {countop == 0 && (
                    <div class="text-4xl text-white font-bold mt-4 mb-4 flex justify-center animate-pulse duration-100">
                        Preparing
                    </div>
                )}
                {countop != 0 && (
                    <div class="text-4xl text-white font-bold mt-4 mb-4 flex justify-center animate-ping duration-1000">
                        Ready
                    </div>
                )}
                <img src={kaiba} class="mx-auto h-96"></img>
            </div>
            {countop == 0 && (
                <div class="absolute inset-x-0 top-0 flex text-xl">
                    <div onClick={() => setCountop(countop + 1)} class=" mx-auto hover:scale-125 duration-300">
                        <button>rock</button>
                    </div>
                    <div onClick={() => setCountop(countop + 2)} class="mx-auto hover:scale-125 duration-300">
                        <button>paper</button>
                    </div>
                    <div onClick={() => setCountop(countop + 2)} class="mx-auto hover:scale-125 duration-300">
                        <button>scissors</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Opp;