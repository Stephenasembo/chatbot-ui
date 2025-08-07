import ChatMessage from './ChatMessage';

const userMessage = {
  text: `Hello! My name is Mark. What's your name ?`,
  sender: 'Human'
}

const botMessage = {
  text: `Nice to know you. You can call me Matata.`,
  sender: 'Bot'
}

export default function ChatList() {
  return(
    <div
    className='h-full flex flex-col self-start flex-col gap-[1rem] my-[0.5rem]'
    >
      <ChatMessage
      message={userMessage}
      />
      <ChatMessage
      message={botMessage}
      />
    </div>
  )
}