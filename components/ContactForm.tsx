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
import { useState } from "react";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    const url = "https://floral-pond-b830.uv.workers.dev";
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("form submitted ✅", data);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: formData,
      });
      console.log({ response });
    } catch (error) {
      console.log("form error: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
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
  const isDisabled = () => {
    return !Object.values(contactForm).every((value) => value);
  };

  return (
    <FormControl maxW="md">
      <form
        name="contact"
        // method="POST"
        // data-netlify="true"
        // action="https://floral-pond-b830.uv.workers.dev"
        onSubmit={handleSubmit}
      >
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
