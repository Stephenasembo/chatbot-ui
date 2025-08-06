import Button from './generic/Button'
import { FiArrowLeft } from "react-icons/fi";

export default function ChatHeader({chatTitle}) {
  return (
    <div
    className='grid grid-cols-[max-content_1fr] items-center border-2 border-solid h-min'
    >
      <Button
      className='p-[1rem]'
      >
        <FiArrowLeft
        className='h-[3rem] w-[2rem]'
        />
      </Button>
      <span
      className='text-3xl w-full text-center'
      >
        {chatTitle}
      </span>
    </div>
  )
}