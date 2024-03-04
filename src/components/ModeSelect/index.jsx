
import DarkModeOutLinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'


function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          '& .MuiSvgIcon-root': {
            color: 'white'
          } }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alightItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small'/>Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alightItems: 'center', gap: 1 }}>
            <DarkModeOutLinedIcon fontSize='small'/>Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alightItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small'/>System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect