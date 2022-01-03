import { Box, Image, Text } from '@chakra-ui/react'
import mainImgDev from '../public/dev_man.png'

const DevMan = () => {
  return (
    <Box align="center" my={4} p={4} maxW="container.md">
      <Image
        borderWidth={2}
        borderStyle="solid"
        display="inline-block"
        w="39vh"
        src="/dev_man.png"
        alt="Wallpaper Image"
      />
      <br />
      <Text as="i" fontSize="xs" textAlign="center">
        Illustrated by Alzea Arafat
      </Text>
    </Box>
  )
}

export default DevMan
