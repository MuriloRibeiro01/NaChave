import {MainButton, SecondaryButton} from './Button';

export function MenuInput() {
    return (
        <div>
            <InputLogin />
            
            <InputLogin />
            <div>
                <button className='main-button'>Login</button>
            </div>
        </div>                
    );
}

export function InputLogin() {
    return (
        <input type="text" placeholder="Usuario" />
    );
}