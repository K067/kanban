import { useState, useEffect } from "react";

export const useContent = () => {
    const useLocalStorage = task => {
        const [state, setState] = useState(() =>
            localStorage.getItem(task)
                ? JSON.parse(localStorage.getItem(task))
                : []
        );

        useEffect(() => {
            localStorage.setItem(task, JSON.stringify(state));
        }, [state, task]);

        return [state, setState];
    }

    const [backlog, setBacklog] = useLocalStorage('Backlog');
    const [ready, setReady] = useLocalStorage('Ready');
    const [inProgress, setInProgress] = useLocalStorage('In Progress');
    const [finished, setFinished] = useLocalStorage('Finished');
    const [text, setText] = useState("");

    return {
        backlog,
        setBacklog,
        text,
        setText,
        ready,
        setReady,
        inProgress,
        setInProgress,
        finished,
        setFinished
    };
};
