import { Card, Typography, Row, Col } from "antd"
import styles from "./trends.module.css"

const { Title, Paragraph } = Typography

const Trends = () => {
  return (
    <Card className={styles.card}>
      <Title level={4}>1. Trends afvalproductie</Title>
      <Paragraph>
        Sinds begin 2016 stijgt de afvalproductie van uw organisatie gemiddeld
        met 5,14% per jaar.
      </Paragraph>

      <Row gutter={16}>
        <Col span={8}>
          <Card className={styles.statCard}>
            <h1 className={styles.percentage}>-1.1%</h1>
            <span className={styles.description}>
              Gemiddeld per jaar (sinds 2018)
            </span>
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.statCard}>
            <h1 className={styles.percentage}>+0.5%</h1>
            <span className={styles.description}>
              In vergelijking met 2022 Q4
            </span>
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.statCard}>
            <h1 className={styles.percentage}>12.7%</h1>
            <span className={styles.description}>
              van het afval bevat voornamelijk hernieuwbare materialen
            </span>
          </Card>
        </Col>
      </Row>
    </Card>
  )
}

export default Trends
