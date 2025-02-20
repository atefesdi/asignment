import { Card, Typography } from "antd"

const { Title, Paragraph } = Typography

const Materials = () => {
  return (
    <Card>
      <Title level={4}>3. Materialen</Title>
      <Paragraph>
        De Rijksoverheid heeft plannen voor de transitie naar een circulaire
        economie geformuleerd in 5 transitieagenda's (TA's) die verschillende
        economische sectoren en ketens behelzen:1) Biomassa en Voedsel,2)
        Kunststof,3) Maakindustrie,4) Bouw,5) Consumptiegoederen.
        <br />
        <br />
        In vergelijking met 2019 zijn de afvalstromen in de TAs Biomassa &
        Voedsel en Consumptiegoederen licht gedaald, daarentegen zijn de TAs
        'onbekend' en Bouw toegenomen.    Hoewel de biomassa- en voedselsectoren
        klein lijken in vergelijking met de anderen, genereren ze aanzienlijke
        negatieve effecten op het gebied van landgebruik, broeikasgasemissies en
        degradatie van land en water.
      </Paragraph>
    </Card>
  )
}

export default Materials
