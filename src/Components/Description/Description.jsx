import './Description.css';
import cross from '../../img/icon/cross.svg';
import { useLocation, useParams, Link } from "react-router-dom";
import { Context } from '../../Context/Context';
import { useContext, useState } from 'react';

export const Description = () => {
    let { state } = useLocation();
    let { taskId } = useParams();

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

    const [description, setDescription] = useState(state.item.description);

    const saveDescription = (name, setName) => {
        const id = name.map(item => item.id).indexOf(Number(taskId));
        const tasks = [...name];
        const select = { ...name[id] };
        select.description = description;
        tasks[id] = select;
        setName(tasks);
    }

    const changeDescription = () => {
        switch (state.name) {
            case 'Backlog': saveDescription(backlog, setBacklog);
                break;
            case 'Ready': saveDescription(ready, setReady);
                break;
            case 'InProgress': saveDescription(inProgress, setInProgress);
                break;
            case 'Finished': saveDescription(finished, setFinished);
                break;
            default: return false;
        }
    }

    return (
        <div className='dsc-wrapper'>
            <div className='dsc'>
                <div className='info'>
                    <h1>{state.item.text}</h1>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="No description"
                        defaultValue={state.item.description}
                    ></textarea>
                </div>
                <Link
                    to="/"
                    onClick={changeDescription}
                >
                    <img className='cross' src={cross} alt="cross" />
                </Link>
            </div>
        </div>
    )
}