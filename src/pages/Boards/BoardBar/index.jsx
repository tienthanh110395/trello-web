import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const chipStyle = {
  color: 'white',
  variant:'outlined',
  bgcolor: '#38ada9',
  paddingX: '5px',
  borderRadius: '5px',
  '& .MuiSvgIcon-root':{
    color: 'white'
  }
}
function BoardBar() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.trelloCustom.boardBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflowX: 'auto',
          overflowY: 'hidden',
          paddingX: 2,
          borderBottom: '1px solid #00bfa5',
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#395169' : '#2673ff'
        }}>
        <Box sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          gap: 2
        }}>
          <Chip
            sx={chipStyle}
            icon={<DashboardIcon />}
            label="This is DashBoard"
            // clickable
            onClick={() => {}}
          />
          <Chip
            sx={chipStyle}
            icon={<VpnLockIcon />}
            label="Public/Private WorkSpace"
            // clickable
            onClick={() => {}}
          />

          <Chip
            sx={chipStyle}
            icon={<AddToDriveIcon />}
            label="Add to GoogleDrive"
            // clickable
            onClick={() => {}}
          />

          <Chip
            sx={chipStyle}
            icon={<BoltIcon />}
            label="Automation"
            // clickable
            onClick={() => {}}
          />

          <Chip
            sx={chipStyle}
            icon={<FilterListIcon />}
            label="FilterList"
            // clickable
            onClick={() => {}}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}>
          <Button startIcon={<PersonAddIcon/>} variant="outlined">Invite</Button>
          <AvatarGroup total={24} sx={{
            '& .MuiAvatar-root':{
              width: 34,
              height: 34,
              fontSize: 12
            }
          }}>
            <Tooltip title="Barca"><Avatar alt="Barca" src="/src/images/fcbarcelona.png" /></Tooltip>
            <Tooltip title="Munich"><Avatar alt="Munich" src="/src/images/munich.png" /></Tooltip>
            <Tooltip title="Real"><Avatar alt="Real" src="/src/images/real.png" /></Tooltip>
            <Tooltip title="City"><Avatar alt="City" src="/src/images/manCity.png" /></Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar