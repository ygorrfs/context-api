
import { Context } from "../contexts/Context";
import { useContext } from "react";
import '../styles/style.css'

const Header = () => {
    const { state, dispatch } = useContext(Context);

    const handleSwitchTheme = () => {
        if(state.theme.status === 'light'){
            document.documentElement.style.setProperty('--background-color', '#000');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--border-color', '#fff');
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: 'dark'
                }
            })
        } else {
            document.documentElement.style.setProperty('--background-color', '#fff');
            document.documentElement.style.setProperty('--text-color', '#000');
            document.documentElement.style.setProperty('--border-color', '#000');
            dispatch ({
                type: 'CHANGE_STATUS',
                payload: {
                    status: 'light'
                }
            })
        }
    }


    return (
        <div>
            <h1 className="title">Título da página</h1>
            Tema: {state.theme.status}
            <button 
                onClick={handleSwitchTheme} 
                className={`button ${state.theme.status === 'light' ? 'dark' : 'light'}`}
            >
                Mudar Tema
            </button>
        </div>
    )
}

export default Header;