import Chat from "./components/list/chatList/chat/Chat"
import List from "./components/list/List"
import Detail from "./components/detail/Detail"
import Login from "./components/login/login"
import Notification from "./components/notification/Notification"

const App = () => {

  const user = true;

  return (
    <div className='container'>
      {
        user ? (
          <>
          <List />
          <Chat />
          <Detail />
          </>
        ) : (<Login />)
      }
      <Notification />

    </div>
  )
}

export default App