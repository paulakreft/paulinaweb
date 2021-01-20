import Button from '@material-ui/core/Button';

const MainButton = ({ title }) => {
    return (
        <Button variant="contained" style={{'margin': "16px"}}>
            {title}
        </Button>

    )
}

export default MainButton