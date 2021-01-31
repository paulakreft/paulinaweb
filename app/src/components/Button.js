import Button from '@material-ui/core/Button';

const MainButton = ({ title }) => {
    return (
        <Button variant="contained" style={{'margin': "16px", 'backgroundColor': 'black', 'color':'white', 'fontWeight': '600'}}>
            {title}
        </Button>

    )
}

export default MainButton