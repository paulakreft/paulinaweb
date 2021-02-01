import Button from '@material-ui/core/Button';

const MainButton = ({ email, title }) => {
    const onClick = () => {
        window.location.href = `mailto:${email}`;
    }
    return (
        <Button 
            variant="contained" 
            style={{ 'margin': "16px", 'backgroundColor': 'black', 'color': 'white', 'fontWeight': '600', }}
            onClick={onClick}
            >{title}
        </Button>

    )
}

export default MainButton