import React, { useState } from "react";
import Select from "react-select";
import '../AddTask/AddTask.css';
import add from '../../img/icon/add-card.svg';

export const SelectTask = ({ data, setData, select, setSelect, }) => {
    const [toggle, setToggle] = useState(false);

    const handleSelect = task => {
        setData([...data, { id: task.id, text: task.value, description: task.description }]);
        setSelect(select.filter((item) => item.id !== task.id));
        setToggle(false);
    };

    const options = select.map(task => {
        return { value: task.text, label: task.text, id: task.id, description: task.description };
    });

    return (
        <>
            {toggle &&
                <Select
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            maxWidth: '258px',
                            cursor: 'pointer',
                            marginRight: '11px'
                        }),
                        option: (baseStyles) => ({
                            ...baseStyles,
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: 'normal',
                            fontStretch: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 'normal',
                            letterSpacing: 'normal',
                            textAlign: 'left',
                            color: '#000',
                        }),
                        menu: (baseStyles) => ({
                            ...baseStyles,
                            marginTop: ' 5px',
                            boxShadow: 'none'
                        }),
                        control: () => ({
                            padding: '8px 9px 7px 8px',
                            borderRadius: '5px',
                            backgroundColor: '#fff',
                            outline: 'none',
                            border: 'none',
                            width: '100%',
                            maxHeight: '35px',
                            display: 'flex'
                        }),
                        valueContainer: () => ({
                            display: 'block'
                        }),
                        placeholder: () => ({
                            color: 'hsl(0, 0%, 50%)'
                        }),
                    }}
                    classNamePrefix="select"
                    options={options}
                    components={{ DropdownIndicator: false }}
                    onChange={handleSelect}
                    isSearchable={false}
                />
            }
            <div className='add-card' onClick={() => { if (select.length !== 0) setToggle(true) }}> {/* На данный момент */}
                <img src={add} alt="add" />
                <p>Add Task</p>
            </div >
        </>
    )
}