import { Card, Typography, Table } from "antd"
import styles from "./process.module.css"

const { Title, Paragraph } = Typography

const data = [
  {
    key: "1",
    type: "Afvalsoort",
    better: "Beter",
    average: "Gemiddeld",
    lower: "Onder",
    unknown: "Onbekend",
  },
  {
    key: "1",
    type: "080111 - Afval van verf en lak dat organische oplosmiddelen of andere gevaarlijke stoffen bevat",
    better: "91.5%",
    average: "0%",
    lower: "0%",
    unknown: "8.5%",
  },
  {
    key: "2",
    type: "080314 - Inktblis dat gevaarlijke stoffen bevat",
    better: "100%",
    average: "0%",
    lower: "0%",
    unknown: "0%",
  },
]

const columns = [
  {
    title:
      "08 - Afval van bereiding, formulering, levering en gebruik (BFLG) van coatings (verf, lak en email), lijm, kit en drukinkt",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "",
    dataIndex: "better",
    key: "better",
  },
  {
    title: "",
    dataIndex: "average",
    key: "average",
  },
  {
    title: "",
    dataIndex: "lower",
    key: "lower",
  },
  {
    title: "",
    dataIndex: "unknown",
    key: "unknown",
  },
]

const Process = () => {
  return (
    <Card>
      <Title level={4}>
        2. Afvalverwerking in vergelijking met landelijke praktijken
      </Title>
      <Paragraph>
        In de onderstaande tabel analyseren we de toegepaste verwerkingsmethoden
        per afvalsoort en vergelijken we deze met de meest gebruikte methoden op
        nationaal niveau. Hierbij categoriseren we elke verwerkingsmethode als
        beter, gelijk aan, of minder effectief dan de landelijke standaard.
        Indien de verwerkingsmethode onbekend is, wordt deze apart vermeld. Dit
        biedt inzicht in hoe onze verwerkingspraktijken zich verhouden tot de
        gangbare methoden en waar mogelijke verbeterpunten liggen.
      </Paragraph>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        className={styles.table}
      />
    </Card>
  )
}

export default Process
