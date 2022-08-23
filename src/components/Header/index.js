import { AppBar, Divider, Toolbar, Typography, Stack, CircularProgress } from '@mui/material';

const Header = ({ eurToUahRate, usdToUahRate }) => {
    return (
        <AppBar position='static' sx={{ alignItems: 'center' }}>
            <Toolbar variant='dense'>
                <Stack direction='row' spacing={{ xs: 1, sm: 4, md: 7 }}>
                    <Typography>
                        USD =
                        {!usdToUahRate ? (
                            <CircularProgress
                                color='secondary'
                                size={20}
                                sx={{ ml: '5px', verticalAlign: 'sub' }}
                            />
                        ) : (
                            ' ' + usdToUahRate.toFixed(2)
                        )}
                    </Typography>
                    <Divider orientation='vertical' flexItem />
                    <Typography>
                        EUR =
                        {!eurToUahRate ? (
                            <CircularProgress
                                color='secondary'
                                size={20}
                                sx={{ ml: '5px', verticalAlign: 'sub' }}
                            />
                        ) : (
                            ' ' + eurToUahRate.toFixed(2)
                        )}
                    </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
