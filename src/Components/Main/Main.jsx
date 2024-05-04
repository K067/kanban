import React, { useContext, useMemo } from "react";
import { Context } from "../../Context/Context";
import { Card } from "../Card/Card";
import "./Main.css";

export const Main = () => {
    const { tasks: {
        backlog,
        setBacklog,
        ready,
        setReady,
        inProgress,
        setInProgress,
        finished,
        setFinished
    } } = useContext(Context);

    const blocks = useMemo(
        () =>
            [
                { name: "Backlog", data: backlog, setData: setBacklog },
                {
                    name: "Ready",
                    data: ready,
                    setData: setReady,
                    select: backlog,
                    setSelect: setBacklog,
                },
                {
                    name: "In Progress",
                    data: inProgress,
                    setData: setInProgress,
                    select: ready,
                    setSelect: setReady,
                },
                {
                    name: "Finished",
                    data: finished,
                    setData: setFinished,
                    select: inProgress,
                    setSelect: setInProgress,
                },
            ],
        [
            backlog,
            setBacklog,
            ready,
            setReady,
            inProgress,
            setInProgress,
            finished,
            setFinished
        ]
    );

    return (
        <main>
            <section>
                <div className="container">
                    <div className="card-wrapper">
                        {blocks.map((item, index) => (
                            <Card
                                key={index}
                                name={item.name}
                                data={item.data}
                                setData={item.setData}
                                select={item.select}
                                setSelect={item.setSelect}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
