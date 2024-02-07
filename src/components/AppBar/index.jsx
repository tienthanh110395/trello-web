import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import '~/fontawesome/FontAwesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/starred'
import Template from './Menus/Template'
import Button from '@mui/material/Button'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/profile'


function AppBar() {

  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.3
        }}>
          <SvgIcon fontSize='small' component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Template />
          <Button variant="outlined">Create</Button>
          {/* <FontAwesomeIcon icon="check-square" /> */}
        </Box>

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        <TextField id="outlined-search" label="Search..." type="search" size='small' />

        <ModeSelect/>
        <Tooltip title="Notifications">
          <Badge color='secondary' variant="dot" invisible={false} >
            <NotificationsNoneIcon sx={{ cursor: 'pointer', color: 'primary.main' }}/>
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>

        <Profile />

      </Box>
    </Box>
}

export default AppBar