import { Container, Loading } from "@nextui-org/react"
import { Card, Col, Text, Row, Button, Grid } from "@nextui-org/react";
import Link from "next/link";


export const getStaticProps = async () => {

  const res = await fetch(`${process.env.API_HOST}/api/avo`)
  const { data }: TAPIAvoResponse = await res.json()

  return {
    props: {
      productList: data
    }
  }
}

const Home = ({ productList }: { productList: TProduct[] }) => {

  return (
    <Container style={{ marginTop: '15px' }}>
      {
        productList?.length > 0 ?
          <Grid.Container gap={2} justify="center">
            {
              productList.map(({ name, id, image, price }) => {
                return (
                  <Grid key={id} sm={4}>
                    <Card>
                      <Card.Image
                        src={image}
                        objectFit="cover"
                        width="100%"
                        height={340}
                        alt={name}
                      />
                      <Card.Footer
                        isBlurred
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid green",
                          bottom: 0,
                          zIndex: 1,
                        }}
                      >
                        <Row>
                          <Col>
                            <Row>
                              <Col>
                                <Text color="black" size={20}>
                                  {name}
                                </Text>
                                <Text color="green" size={12}>
                                  {price}
                                </Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col>
                            <Row justify="flex-end">
                              <Button
                                flat
                                auto
                                rounded
                                bordered
                                borderWeight={'light'}
                                color={'success'}
                              >
                                <Link href={`/product/${id}`}>
                                  <Text
                                    css={{ color: "green" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                  >
                                    Details
                                  </Text>
                                </Link>
                              </Button>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Grid>
                )
              })
            }

          </Grid.Container >
          :
          <Loading type='points' />
      }
    </Container >
  )
}


export default Home
