import ChatHeader from './components/ChatHeader'
import ChatInput from './components/ChatInput'
import ChatList from './components/ChatList'

function App() {
  return (
    <div
    className='flex flex-col h-screen'
    >
      <ChatHeader
      chatTitle='Hello world'
      />
      <ChatList />
      <ChatInput />
    </div>
)
}

export default App
