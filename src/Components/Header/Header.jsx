import './Header.css';
import { User } from '../User/User';

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='header-wrapper'>
                    <p className='header-title'>Awesome Kanban Board</p>
                    <User />
                </div>
            </div>
        </header>
    )
}