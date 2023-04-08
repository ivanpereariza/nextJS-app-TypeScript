import Image from "next/image"
import { Col, Container, Loading, Row, Table } from "@nextui-org/react"
import { GetStaticPaths, GetStaticProps } from "next"


export const getStaticPaths: GetStaticPaths = async () => {

  const res = await fetch(`${process.env.API_HOST}/api/avo`)
  const { data }: TAPIAvoResponse = await res.json()

  const paths = data.map(({ id }) => {
    return {
      params: {
        id
      }
    }
  })

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const res = await fetch(`${process.env.API_HOST}/api/avo/${params?.id}`)
  const { data }: { data: TProduct } = await res.json()

  return {
    props: {
      product: data
    }
  }
}

const ProductItem = ({ product }: { product: TProduct }) => {

  return (
    <>
      {
        product ?
          <Container>
            <Row style={{ marginTop: '30px' }}>
              <Col span={3} offset={2}>
                <Image src={product.image} alt={product.name} width={300} height={300} />
              </Col>
              <Col span={5}>
                <h1>{product?.name}</h1>
                <h2>Price: {product?.price}</h2>
              </Col>
            </Row>
            <Row>
              <Col offset={2} span={8}>
                <div>
                  <h3>About this avocado</h3>
                  <hr />
                  <p>{product?.attributes.description}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginTop: '15px' }} offset={2} span={8}>
                <Table
                  aria-label="Avocado attributes"
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header>
                    <Table.Column>Attributes</Table.Column>
                    <Table.Column> </Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row key="1">
                      <Table.Cell>Shape</Table.Cell>
                      <Table.Cell>{product.attributes.shape}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="2">
                      <Table.Cell>Hardiness</Table.Cell>
                      <Table.Cell>{product.attributes.hardiness}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="3">
                      <Table.Cell>Taste</Table.Cell>
                      <Table.Cell>{product.attributes.taste}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Col>
            </Row>
          </Container>
          :
          <Loading type='points' />
      }
    </>

  )
}

export default ProductItem
