import { useEffect, useRef } from 'react';

const useAutosizeTextArea = (textAreaRef, value) => {
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value]);
};

export default function TextArea({className, value, setValue, placeHolder}) {
  const textAreaRef = useRef(null);
  useAutosizeTextArea(textAreaRef, value);
  return (
    <textarea
    className={className}
    ref={textAreaRef}
    value={value}
    rows={1}
    placeholder={placeHolder}
    autoFocus
    onChange={
      (e) => {
        const newValue = e.target.value;
        setValue(newValue);
      }
    }
    >
    
    </textarea>
  )
}