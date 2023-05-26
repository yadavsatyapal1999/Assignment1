import React from "react";
import { useState } from "react";
import "./Style.css";
export default function Content({ arr, identical, pic }) {
    const [originalid, Setoriginalid] = useState("x");
    const [matchid, Setmatchid] = useState("y");
    const [verify, Setverify] = useState("")
    const match = pic.find((item) => item.id === identical);
    return <section id="Section" >
        <h3 id="Head">Please click on the identical tiles to verify that you are not a robot</h3>
        <div id="Image">
        {arr.map((item) => {
            const sh = pic.find(items => items.id === item)

            return <img key={sh.id} src={sh.src} onClick={() => {
                Setoriginalid(sh.id)
            }} alt="could not load" />
        })}
        <img key={identical} src={match.src} onClick={() => {
            Setmatchid(identical);

        }} alt="Could not load pic" /></div>
        {originalid !== "x" || matchid !== "y" ?
            <>  <button id="reset" onClick={() => {
                Setmatchid("y");
                Setoriginalid("x");
                Setverify("")
            }} >Reset</button>  </> : ""}
        {originalid !== "x" && matchid !== "y" ?
            <>  <button id="verify" onClick={() => {
                if (originalid === matchid) {
                    Setverify("You are a human. Congratulations!")
                } else {
                    Setverify("We can't verify you as a human. You selected the non-identical tiles. ")
                }
            }} >Verify</button>  </> : ""}
        <h1 id="Message">{verify}</h1>
    </section>
}