import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'


// Create a theme instance.
const theme = extendTheme({
  trelloCustom:{
    appBarHeight: '50px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  // ...other properties
  components: {
  // Name of the component
    MuiButton: {
      styleOverrides: {
      // Name of the slot
        root: {
        // Some CSS MuiOutlinedInput
          textTransform: 'none'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root:({ theme }) => ({
          color: theme.palette.pr
        })
      }
    },
    // root viết dưới dạng arrow function để nhận giá trị truyền vào theme (muốn xem giá trị truyền vào thì dùng cách này),
    // cách viết này tương tự cách dưới nhưng phải có return vì sử dụng => {}
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //   // Name of the slot
    //     root:({ theme }) => {
    //       return {
    //         color: theme.palette.primary.main
    //       }
    //     }
    //   }
    // }

    // thêm cái ngoặc tròn bên ngoài => ({ }) thì nó tự return
    MuiOutlinedInput: {
      styleOverrides: {
      // Name of the slot
        root:({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          },
          // sửa màu thêm khi hover
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'cyan'
            }
          },
          //sửa bôi đậm khi focus vào cách ngắn hơn '& fieldset': {borderWidth: '1px'}
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
            borderWidth: '1px',
            borderStyle: 'solid'
          }
        })
      }
    },
    '.MuiFormLabel-root': {
      color: 'green'
    }
  }
})

export default theme