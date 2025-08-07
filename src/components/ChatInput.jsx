import { useState } from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import Input from './generic/Input'
import Button from './generic/Button'
import TextArea from './generic/TextArea'

export default function ChatInput() {
  const [value, setValue] = useState('');

  return (
    <div
    className='box-border p-[0.25rem] border-2 border-solid flex gap-[0.25rem] h-max self-end w-full rounded-xl'
    >
      <TextArea
      className='w-full resize-none p-[0.5rem] text-base overflow-auto max-h-[10rem] outline-none'
      value={value}
      setValue={setValue}
      placeHolder='Type your message here'
      />
      <Button
      className='border-2 p-[0.5rem] rounded-full w-max h-min relative hover:bg-sky-700 transition active:top-2 duration-750 self-end'
      >
        <LuSendHorizontal
        className='w-[1.5rem] h-[1.5rem]'
        />
      </Button>
    </div>
  )
}