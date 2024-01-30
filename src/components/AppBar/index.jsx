import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import '~/fontawesome/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box>
        <AppsIcon/ >
        <div>
          <FontAwesomeIcon icon="check-square" />
          Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
        </div>
      </Box>
      <Box>
        <ModeSelect/>
      </Box>
    </Box>
  )
}

export default AppBar