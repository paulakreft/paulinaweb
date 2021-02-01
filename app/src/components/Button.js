import Button from '@material-ui/core/Button';
import styles from './Button.module.css';


const MainButton = ({ email, title }) => {
    const onClick = () => {
        window.location.href = `mailto:${email}`;
    }
    return (
        <Button 
            variant="contained" 
            style={{ 'margin': "16px", 'backgroundColor': 'transparent', 'color': 'black', 'fontWeight': '500', 'border': '1px solid' }}
            onClick={onClick}
            >{title}
        </Button>

    )
}

export default MainButton