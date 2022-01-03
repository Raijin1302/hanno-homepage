import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  SimpleGrid,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoGoogle
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0.9}>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            mt={6}
            align="center"
          >
            Hello , I&apos;m a front-end developer based in Vietnam!
          </Box>
        </Section>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hanno Nguyen
            </Heading>
            <p>Digital Craftman (Developer / Designer / Analyst)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/hanno.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hanno aka <Link>Hoan</Link> is a Freelance Classified Analyst and a
            Front-end Developer based in Ho Chi Minh City with an ambition for
            building digital products he wants. Now he's seeking a Front-end
            Developer position in a company that requires him to utilize his
            skills, abilities and experience in the IT field to ensure the
            company's success.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My porfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.7}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Vietnam
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Completed the BTech Program in the College of Bach Khoa about
            system,networking
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Worked at Appota
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Works as a freelance
          </BioSection>
        </Section>
        <Section delay={0.9}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music, <Link href="">UI Design</Link>, Reading,{' '}
            <Link href="">Motion</Link>, Gaming, Machine Learning
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Raijin1302" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @raijin1302
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="mailto: raijinnguyen1302@gmail.com
"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGoogle} />}
                >
                  @raijinnguyen1302
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/raijin1302/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @raijin1302
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={thumbYouTube}
            >
              My YouTube channel
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid> */}

          {/* <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box> */}
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
