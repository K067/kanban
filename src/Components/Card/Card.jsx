import "./Card.css";
import del from "../../img/icon/add-card.svg";
import { Link } from "react-router-dom";
import { AddTask } from "../AddTask/AddTask";
import { SelectTask } from "../Select/SelectTask";

export const Card = ({ name, data, setData, select, setSelect }) => {
    return (
        <div className="card">
            <p>{name}</p>
            <ul>
                {data &&
                    data.map((item, index) => (
                        <li key={index} className="task">
                            <Link to={`tasks/${item.id}`} state={{ item, name }}>{item.text}</Link>
                            <button className="act"
                                onClick={() =>
                                    setData(data.filter((task) => task.id !== item.id))
                                }>
                                <img src={del} alt="del" />
                            </button>
                        </li>
                    ))}
            </ul>
            {name === "Backlog" ?
                <AddTask />
                :
                <SelectTask
                    name={name}
                    data={data}
                    setData={setData}
                    select={select}
                    setSelect={setSelect}
                />}
        </div>
    );
};
