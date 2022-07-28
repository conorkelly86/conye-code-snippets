
import { Button, Editable, EditableInput, EditablePreview, Flex, Input, useClipboard } from '@chakra-ui/react'
import { useState } from 'react'

export interface ClipboardProps {
    text: string
}

function Clipboard(props:ClipboardProps) {
    const [value, setValue] = useState(props.text)
    const { hasCopied, onCopy } = useClipboard(value)
  
    return (
      <>
        <Flex mb={2}>

          <Input value={value} readOnly placeholder='...' />
          <Button onClick={onCopy} ml={2}>
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
       
      </>
    )
  }

  export default Clipboard