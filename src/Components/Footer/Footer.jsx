import './Footer.css';
import { useContext } from 'react';
import { Context } from "../../Context/Context";

export const Footer = () => {
    const { tasks: { inProgress, finished } } = useContext(Context)

    return (
        <footer>
            <div className='container'>
                <div className='footer-wrapper'>
                    <div>
                        <p>Active tasks: {inProgress.length}</p>
                        <p>Finished tasks: {finished.length}</p>
                    </div>
                    <p>Kanban board by K067</p>
                </div>
            </div>
        </footer>
    )
}