import { Typography } from "antd"
import Materials from "./waste/materials"
import Trends from "./waste/trends"
import Process from "./waste/process"
import styles from "./rapport.module.css"

const { Title, Paragraph } = Typography

const WasteRapport: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Section 1 */}
      <Title level={3}>Afval rapport</Title>
      <Paragraph>
        In dit afval rapport vindt u een overzicht van alle afvalstromen, de
        bijbehorende hoeveelheden afval en de gebruikte verwerkingsmethodes.
      </Paragraph>

      <Trends />

      <Process />

      <Materials />
    </div>
  )
}

export default WasteRapport
