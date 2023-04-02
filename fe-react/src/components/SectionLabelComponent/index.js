import { Box, Typography, Link, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styles';

const Header = ({ title }) => {
    const classes = useStyles();
    return (
        <Typography className={classes.title} variant='h6'>
            { title }
        </Typography>
    );
};
const Item = ({ item, underline }) => {
    const classes = useStyles();
    if(typeof item === 'object') {
        const LinkItem = () => (
            <Link className={classes.subTitle} underline={underline} component={RouterLink} to={item.link}>
                { item.text }
            </Link>
        );
        if(!!item.tooltip && !!item.icon) {
            return (
                <Tooltip title={item.tooltip} disableInteractive followCursor placement='top'>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box className={classes.icon} component='img' src={item.icon} />
                        <LinkItem />
                    </Box>
                </Tooltip>
            );
        } else if(!!item.tooltip) {
            return (
                <Tooltip title={item.tooltip} disableInteractive followCursor placement='top'>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <LinkItem />
                    </Box>
                </Tooltip>
            );
        } else if(!!item.icon) {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box className={classes.icon} component='img' src={item.icon} />
                    <LinkItem />
                </Box>
            );
        } else return <LinkItem />;
    } else {
        return (
            <Typography className={classes.subTitle}>
                { item.split('{b}').map((row, index) => index % 2 ? <b>{ row }</b> : row) }
            </Typography>
        );
    }
};
const ListItems = ({ list, underline }) => {
    const classes = useStyles();
    return (
        <Box className={classes.listItemContainer}>
            { list.map(item => <Item item={item} underline={underline} />) }
        </Box>
    );
};
const SectionLabelComponent = ({ title, list, underline }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Header title={title} />
            <ListItems list={list} underline={underline} />
        </Box>
    );
};

SectionLabelComponent.Header = Header;
SectionLabelComponent.ListItems = ListItems;

SectionLabelComponent.defaultProps = {
    underline: 'hover'
};
ListItems.defaultProps = {
    underline: 'hover'
};

export default SectionLabelComponent;