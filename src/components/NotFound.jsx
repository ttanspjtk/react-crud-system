import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    homepage: {
        backgroundImage: `url('image/404-2.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        width: '100%'
    }
});

const NotFound = () => {
    const classes = useStyles();
    return (
        <p className={classes.homepage}></p>
    );
};

export default NotFound;
