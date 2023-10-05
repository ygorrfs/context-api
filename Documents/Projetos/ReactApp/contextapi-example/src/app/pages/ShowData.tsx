import { Link } from 'react-router-dom';
import { useContext } from 'react';
import '../styles/style.css'

import { Context } from '../contexts/Context';

export const ShowData = () => {
    const {state, dispatch} = useContext(Context);

    return (
        <div className='container'>
            <h3>TelaShowData</h3>

            {state.user.name && 
            <div>
                Meu nome é: {state.user.name}.
                Eu tenho {state.user.age} anos.
            </div>}
            {!state.user.name && 'Não há informações.'}
            <br/>
            <Link 
                className={`button ${state.theme.status === 'light' ? 'dark' : 'light'}`}
                to="/"
            >
                Voltar para SignUp
            </Link>
        </div>
    );
}