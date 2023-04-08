import { Col, Container, Grid, Row, Text } from '@nextui-org/react'
import Image from 'next/image'

const About = () => {
  return (
    <Container>
      <Grid.Container justify='center' gap={4} style={{ marginTop: '40px' }}>
        <Grid sm={4} >
          <Col offset={2}>
            <Image src="/images/Foto Ivan.jpeg" alt="Profile Picture" width={200} height={200} style={{ borderRadius: '50%' }} />
          </Col>
        </Grid>
        <Grid sm={6}>
          <Col>
            <Text h1 size="2xl">Ivan Pereiro</Text>
            <Text h2 size="md">Web Developer</Text>
            <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tincidunt eros, in gravida quam. Ut at lectus sit amet risus pellentesque tincidunt. Donec et felis eget nisi finibus ultrices. Maecenas tincidunt tristique convallis.</Text>
          </Col>
        </Grid>
      </Grid.Container>
    </Container>

  )
}

export default About
