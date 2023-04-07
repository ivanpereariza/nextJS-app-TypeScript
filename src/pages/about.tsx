import { Col, Container, Row, Text } from '@nextui-org/react'
import Image from 'next/image'

const About = () => {
  return (
    <Container style={{ marginTop: '40px' }}>
      <Row justify="center">
        <Col span={2} offset={1}>
          <Image src="/images/Foto Ivan.jpeg" alt="Profile Picture" width={200} height={200} style={{ borderRadius: '50%' }} />
        </Col>
        <Col span={5} >
          <Text h1 size="2xl">Ivan Pereiro</Text>
          <Text h2 size="md">Web Developer</Text>
          <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tincidunt eros, in gravida quam. Ut at lectus sit amet risus pellentesque tincidunt. Donec et felis eget nisi finibus ultrices. Maecenas tincidunt tristique convallis.</Text>
        </Col>
      </Row>
    </Container>

  )
}

export default About
