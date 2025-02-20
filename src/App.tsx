import { useState } from "react"
import { Select, Typography, Divider } from "antd"
import BenchmarkRapport from "./components/benchmark-rapport"
import WasteRapport from "./components/waste-rapport"
import CSRDRapport from "./components/csrd-rapport"

import styles from "./App.module.css"

const { Option } = Select
const { Title, Paragraph } = Typography

const contentComponents: Record<string, React.FC | null> = {
  select: null,
  option1: WasteRapport,
  option2: BenchmarkRapport,
  option3: CSRDRapport,
}

const DropdownContent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("select")

  const SelectedComponent = contentComponents[selectedOption]

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Title level={2}>Bekijk rapport</Title>
        <Paragraph className={styles.paragraph}>
          Selecteer een rapport dat je wilt verkennen voor een dieper inzicht in
          het afvalbeheer van uw organisatie.
        </Paragraph>
      </div>

      <Divider className={styles.divider} />

      <div className={styles.dropdownContainer}>
        <Select
          title="Rapporttype"
          className={styles.dropdownContent}
          defaultValue="select"
          onChange={setSelectedOption}
        >
          <Option value="select" disabled>
            Selecteer een rapporttype
          </Option>
          <Option value="option1">Afval rapport</Option>
          <Option value="option2">Benchmark rapport</Option>
          <Option value="option3">CSRD rapport</Option>
        </Select>
      </div>

      <Divider className={styles.divider} />

      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <div className={styles.selectedOption}>
          Er zijn momenteel geen rapporten geselecteerd. Kies een rapport om de
          details te bekijken.
        </div>
      )}
    </div>
  )
}

export default DropdownContent
