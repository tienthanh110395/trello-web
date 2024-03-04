import { experimental_extendTheme as extendTheme } from '@mui/material/styles'


// Tạo instance theme.
const theme = extendTheme({
  trelloCustom:{
    appBarHeight: '50px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  // Các chỉnh sửa viết trong components
  components: {
  // Tên Component
    MuiButton: {
      styleOverrides: {
      // Tên thẻ chỉnh sửa
        root: {
          // CSS chỉnh sửa
          textTransform: 'none',
          color: 'white',
          '&:hover':{
            background: 'none',
            borderColor: 'cyan'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
              borderWidth: '0.5px !important'
            },
            '&:hover fieldset': {
              borderColor: 'cyan',
              borderWidth: '1px !important'
            }
          },
          //Changer color label when focu
          '& label.Mui-focused': {
            color: 'white'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root:({ theme }) => ({
          '& label.Mui-focused': {
            color: 'white'
          }

        })
      }
    },
    // root viết dưới dạng arrow function để nhận giá trị truyền vào theme (muốn sử dụng giá trị truyền vào thì dùng cách này),
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
      // Sửa border
        root:({ theme }) => ({
          color: 'white',
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          // // sửa màu thêm khi hover
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'cyan'
            }
          },
          //sửa bôi đậm khi focus vào cách ngắn hơn '& fieldset': {borderWidth: '1px'}
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'cyan',
            borderWidth: '1px',
            borderStyle: 'solid'
          }
        } )
        // '&.Mui-focused .MuiInputLabel-root': {
        //   color: 'red' // Color of the label text when focused
        // }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'white' // Change the color of the label text when focused
          },
          color: 'white'
        }
      }
    },
    // Sửa scrollBar mặc định
    MuiCssBaseline: {
      styleOverrides:{
        body: {
          '*::-webkit-scrollbar':{
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor: '#bcd3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor: '#1abc9c'
          }
        }
      }
    }
  }
})

export default theme