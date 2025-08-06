export default function ChatMessage({message}) {
  return (
    <div
    className='border-1 border-solid p-[0.5rem] h-min mx-[0.5rem] rounded-2xl'
    >
      <span>
        {message.text}
      </span>
    </div>
  )
}