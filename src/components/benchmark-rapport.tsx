import { Typography } from "antd"
import Materials from "./waste/materials"
import Trends from "./waste/trends"
import Process from "./waste/process"
import styles from "./rapport.module.css"

const { Title, Paragraph } = Typography

const BenchmarkRapport = () => {
  return (
    <div className={styles.container}>
      {/* Section 1 */}
      <Title level={3}>Benchmark rapport</Title>
      <Paragraph>
        In dit benchmark rapport vindt u een overzicht van de huidige
        afvalverwerkingsmethoden en hoe deze zich verhouden tot zowel nationale
        standaarden als best practices. Door middel van grafieken en tabellen
        analyseren we de verwerkingsmethoden per afvalsoort en identificeren we
        waar verbeteringen mogelijk zijn en waar al goed gepresteerd wordt.
      </Paragraph>

      <Trends />

      <Process />

      <Materials />
    </div>
  )
}

export default BenchmarkRapport
