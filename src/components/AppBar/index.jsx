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
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto',
      overflowY: 'hidden',
      gap: 2,
      paddingX: 2,
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}>
          <SvgIcon fontSize='small' component={TrelloIcon} inheritViewBox sx={{ color: 'white' }} />
          <Typography variant="span" sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'white' }}>Trello</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Template />
          <Button startIcon={<LibraryAddIcon />} variant="outlined">Create</Button>
          {/* <FontAwesomeIcon icon="check-square" /> */}
        </Box>

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        <TextField id="outlined-search" label="Search..." type="text" size='small' 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white', '&:hover': { cursor: 'pointer' } }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <ClearIcon
                  sx={{ color: searchValue ? 'white' : 'transparent', '&:hover': { cursor: 'pointer' } }}
                  onClick={() => setSearchValue('')} />
              </InputAdornment>)
          }}
          sx={{
            minWidth: 120,
            maxWidth: 170, border: '#fffff' }}
        />

        <ModeSelect sx={{ minWidth: 120 }}/>
        <Tooltip title="Notifications">
          <Badge color='warning' variant="dot" invisible={false} >
            <NotificationsNoneIcon sx={{ cursor: 'pointer', color: 'white' }}/>
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>

        <Profile />

      </Box>
    </Box>
  )}

export default AppBar