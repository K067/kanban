import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import "./AddTask.css";
import add from "../../img/icon/add-card.svg";

export const AddTask = () => {
    const { tasks: { setBacklog, text, setText } } = useContext(Context);

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        if (text) {
            setBacklog((task) => [
                ...task,
                {
                    id: task.length + 1,
                    text,
                    description: "",
                },
            ]);

            setText("");
            setToggle(false);
        }
    };

    return (
        <>
            {toggle && (
                <div className="input">
                    <input type="text" onChange={(e) => setText(e.target.value.trim())} />
                    {!text && <span className="underline"></span>}
                </div>
            )}
            {text ? (
                <div className="submit-card" onClick={handleClick}>
                    <p>Submit</p>
                </div>
            ) : (
                <div className="add-card" onClick={() => setToggle(true)}>
                    <img src={add} alt="add" />
                    <p>Add task</p>
                </div>
            )}
        </>
    );
};
