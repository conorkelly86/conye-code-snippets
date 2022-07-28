import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormHelperText,
  Input,
  Text,
  useClipboard,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";

export interface ClipboardProps {
  text: string;
  description?: string;
}

function Clipboard(props: ClipboardProps) {
  const [value, setValue] = useState(props.text);
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <>
      <Divider />
      <Flex mb={2} mt={2}>
        <Text mb="8px">{props.description}</Text>
      </Flex>{" "}
      <Flex mb={2}>
        <Input
          value={value}
          readOnly
          placeholder="..."
          style={{ color: "rgb(214, 222, 235)", background: "#011627" }}
        />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
    </>
  );
}

export default Clipboard;
