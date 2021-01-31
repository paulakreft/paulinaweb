import Button from '@material-ui/core/Button';

const MainButton = ({ mail, title}) => {
    return (
        <Button variant="contained" style={{'margin': "16px", 'backgroundColor': 'black', 'color':'white', 'fontWeight': '600',}}>
            <a href={mail}>{title}</a>
        </Button>

    )
}

export default MainButton