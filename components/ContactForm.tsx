import { useState } from "react";
import {
  Box,
  useColorModeValue,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [formData, setFormData] = useState({
    name: "a",
    email: "a",
    text: "a",
  });
  return (
    <form name="contact" method="POST" data-netlify="true">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Name" mb={5} name="name" />
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="hello@world.com" mb={5} name="email" />
        <FormLabel>Message</FormLabel>
        <Textarea
          placeholder="Here is a sample placeholder"
          resize="vertical"
          rounded="md"
          mb={5}
          name="text"
        />
        <Button
          mt={4}
          colorScheme={useColorModeValue("teal", "gray")}
          type="submit"
          disabled={
            formData.email === "" ||
            formData.name === "" ||
            formData.text === ""
          }
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};
