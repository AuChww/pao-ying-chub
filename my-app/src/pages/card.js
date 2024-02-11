import React from "react";
import { useState } from "react";
import paper from "../image/paper.png";
import rock from "../image/rock.png";
import scissors from "../image/scissors.png";
import yugi from "../image/yugi.png";
import Main from "./main";

function Card() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <p>Count: {count}</p>
            </div>
            {count == 0 && (
                <div class="grid grid-cols-3 px-4 mb-5">
                    <div onClick={() => setCount(count + 1)} class=" bg-zinc-800 mx-auto hover:scale-125 duration-300">
                        <img src={rock} class="p-3"></img>
                    </div>
                    <div onClick={() => setCount(count + 2)} class="bg-zinc-800 mx-auto hover:scale-125 duration-300">
                        <img src={paper} class="p-3"></img>
                    </div>
                    <div onClick={() => setCount(count + 3)} class="bg-zinc-800 mx-auto hover:scale-125 duration-300">
                        <img src={scissors} class="p-3"></img>
                    </div>
                </div>
            )}
            {count != 0 && (
                <div>
                    <div>
                        <p>Select Rock</p>
                        <img src={yugi} class="h-[36rem] mx-auto"></img>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;