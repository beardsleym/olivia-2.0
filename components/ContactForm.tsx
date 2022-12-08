import {
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const toast = useToast();
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const clearForm = () => {
    setContactForm({
      name: "",
      email: "",
      message: "",
    });
  };
  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    const url = "https://olivia-contact.uv.workers.dev";
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast({
        title: "Message sent",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      clearForm();
    } catch (error: any) {
      toast({
        title: "Error sending message",
        description: error?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    type: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContactForm({
      ...contactForm, // Copy the old fields
      [type]: e.target.value, // But override this one
    });
  };
  const isDisabled = () => !Object.values(contactForm).every((value) => value);

  return (
    <FormControl maxW="md">
      <form name="contact" onSubmit={handleSubmit}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          mb={5}
          name="name"
          backgroundColor={bgColor}
          value={contactForm.name}
          onChange={(e) => handleInputChange("name", e)}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="hello@world.com"
          mb={5}
          name="email"
          backgroundColor={bgColor}
          value={contactForm.email}
          onChange={(e) => handleInputChange("email", e)}
        />
        <FormLabel>Message</FormLabel>
        <Textarea
          placeholder="Here is a sample placeholder"
          resize="vertical"
          rounded="md"
          mb={5}
          name="message"
          backgroundColor={bgColor}
          value={contactForm.message}
          onChange={(e) => handleInputChange("message", e)}
        />
        <Button
          mt={4}
          colorScheme={useColorModeValue("teal", "gray")}
          type="submit"
          disabled={isDisabled()}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </form>
    </FormControl>
  );
};
