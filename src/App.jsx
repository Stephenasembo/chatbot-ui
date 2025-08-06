import ChatHeader from './components/ChatHeader'
import ChatInput from './components/ChatInput'
import ChatList from './components/ChatList'

function App() {
  return (
    <div
    className='grid grid-rows-[min_content_1fr_min_content] h-screen'
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
