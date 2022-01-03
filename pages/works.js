import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHiepKhach from '../public/images/works/hiepkhach_01.png'
import thumbNgaoThien from '../public/images/works/ngaothien_01.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="hiepkhach"
              title="Hiệp Khách Giang Hồ"
              thumbnail={thumbHiepKhach}
            >
              A homepage game website
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ngaothien"
              title="Ngạo Thiên"
              thumbnail={thumbNgaoThien}
            >
              A homepage game website
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
