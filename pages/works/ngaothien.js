import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import WP from '../../components/work-paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ngaothien">
    <Container>
      <Title>
        Ngao Thien Mobile <Badge>06/2018 - 01/2020</Badge>
      </Title>
      <WP>
        -Working with a designer to build a detail page.
        <br />
        -Building CMS and rendering detail on web features by project
        requirements.
      </WP>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ngaothien.gamota.com/" target="_blank">
            https://ngaothien.gamota.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Junior Web Developer</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML/CSS/JS ,PHP ,CodeIgniter ,MySQL </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hiepkhach_02.png" alt="hiepkhach" />
      <WorkImage src="/images/works/hiepkhach_03.png" alt="hiepkhach" />
    </Container>
  </Layout>
)

export default Work
