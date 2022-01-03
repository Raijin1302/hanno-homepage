import NextLink from 'next/link'
import Section from '../components/section'

import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Link,
  Image,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" textAlign="center" pb={8}>
        Not found
      </Heading>

      <Section delay={0.3}>
        <Image src="/404.jpg"></Image>
      </Section>

      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
