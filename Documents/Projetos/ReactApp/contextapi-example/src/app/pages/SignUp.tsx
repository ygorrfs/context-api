import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import '../styles/style.css'

import { Context } from '../contexts/Context';

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState(0);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput( parseInt(e.target.value) );
    }

    const handleSave = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: nameInput
            }
        });
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: ageInput
            }
        });
    }

    return (
        <div className='container'>
            <h3>Tela SignUp (Theme: {state.theme.status})</h3>
            <div className='sign-input'>
                <input 
                    type="text" 
                    placeholder='Digite um nome' 
                    value={nameInput} 
                    onChange={handleNameChange}
                    className='input'
                />
                <input 
                    type="text" 
                    placeholder='Digite uma idade' 
                    value={ageInput} 
                    onChange={handleAgeChange}
                    className='input'
                />

                <button 
                    className={`button ${state.theme.status === 'light' ? 'dark' : 'light'}`} 
                    onClick={handleSave}
                >
                    Salvar
                </button>
            </div>

            <Link 
                className={`button ${state.theme.status === 'light' ? 'dark' : 'light'}`}
                to="/exibir"
            >
                Ir para ShowData
            </Link>
        </div>
    );
}