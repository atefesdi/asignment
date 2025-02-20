import { Typography } from "antd"
import Materials from "./waste/materials"
import Trends from "./waste/trends"
import styles from "./rapport.module.css"
import Process from "./waste/process"

const { Title, Paragraph } = Typography

const CSRDRapport = () => {
  return (
    <div className={styles.container}>
      <Title level={3}>CSRD rapport</Title>
      <Paragraph>
        Dit rapport biedt een uitgebreid overzicht van verschillende aspecten
        van afvalbeheer zoals gevraagd in het CSRD. Het omvat een gedetailleerd
        overzicht van de totale afvalcijfers, gebruikte verwerkingsmethodes,
        samenstelling van het afval, en de aanwezige materialen in het afval.
        Elk hoofdstuk biedt waardevolle inzichten in de omvang, verwerking en
        inhoud van afvalstromen, essentieel voor het optimaliseren van duurzaam
        afvalbeheer.
      </Paragraph>

      <Trends />

      <Process />

      <Materials />
    </div>
  )
}

export default CSRDRapport
