import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
/* Nếu đặt tên file là index.jsx thì chỉ cần ghi đường dẫn import đến folder chứa file */
import BoardBar from '~/pages/Boards/BoardBar'
/* Nếu không thì phải ghi đến tận tên file */
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'


function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}

export default Board