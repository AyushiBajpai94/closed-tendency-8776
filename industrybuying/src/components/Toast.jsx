import { Button } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
export default function ToastExample() {
    const toast = useToast()
    return (
      <Button
      bgColor='orange.500'
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }