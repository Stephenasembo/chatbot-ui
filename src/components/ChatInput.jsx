import { LuSendHorizontal } from "react-icons/lu";
import Input from './generic/Input'
import Button from './generic/Button'

export default function ChatInput() {
  return (
    <div
    className='box-border p-[0.25rem] border-2 border-solid flex gap-[0.25rem]'
    >
      <Input
      className='border-1 border-solid h-max p-[0.5rem] text-lg rounded-2xl w-full'
      type='text'
      name='userText'
      />
      <Button
      className='border-2 p-[0.5rem] rounded-full w-max'
      >
        <LuSendHorizontal
        className='w-[1.5rem] h-[1.5rem]'
        />
      </Button>
    </div>
  )
}