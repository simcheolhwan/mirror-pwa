import { Dictionary } from "ramda"
import { UUSD } from "../constants"
import { lookup } from "../libs/parse"
import getLpName from "../libs/getLpName"
import Container from "../components/Container"
import ChartContainer from "../containers/ChartContainer"
import { getLocal } from "./My"

interface Item {
  total: { value: string }
  pool: { dataSource: { symbol: string; withdrawable: { value: string } }[] }
}

const FMT = { t: "EEE, LLL dd, HH:mm aa" }

const Chart = () => {
  const data: Dictionary<Item> = getLocal()

  const values = Object.values(data)
  const last = values[values.length - 1]
  const withdrawable = last.pool.dataSource.map(({ symbol }) => ({
    symbol,
    datasets: Object.entries(data).map(([t, { pool: { dataSource } }]) => ({
      t: Number(t),
      y: lookup(
        dataSource.find((d) => d.symbol === symbol)?.withdrawable.value,
        symbol,
        { integer: true }
      ),
    })),
  }))

  return (
    <Container sm>
      <article>
        <h1>Total Value</h1>
        <ChartContainer
          datasets={Object.entries(data).map(([t, { total }]) => ({
            t: Number(t),
            y: lookup(total.value, UUSD, { integer: true }),
          }))}
          fmt={FMT}
          compact
        />
      </article>

      <hr />

      <article>
        {withdrawable.map(({ symbol, datasets }) => (
          <section key={symbol}>
            <h1>Withdrawable {getLpName(symbol)}</h1>
            <ChartContainer datasets={datasets} fmt={FMT} compact />
          </section>
        ))}
      </article>
    </Container>
  )
}

export default Chart
