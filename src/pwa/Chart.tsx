import { useState } from "react"
import { Dictionary, pickBy } from "ramda"
import { format, isAfter, isValid } from "date-fns"
import { UUSD } from "../constants"
import { lookup } from "../libs/parse"
import getLpName from "../libs/getLpName"
import Page from "../components/Page"
import Container from "../components/Container"
import Button from "../components/Button"
import ChartContainer from "../containers/ChartContainer"
import { getLocal } from "./My"
import FixedBottom from "./FixedBottom"
import styles from "./Chart.module.scss"

interface Item {
  total: { value: string }
  pool: { dataSource: { symbol: string; withdrawable: { value: string } }[] }
}

const FMT = { t: "EEE, LLL dd, HH:mm aa" }

const Chart = () => {
  const [data, setData] = useState<Dictionary<Item>>(getLocal)

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

  /* delete data */
  const handleClick = () => {
    const date = window.prompt(
      "Data older than the date below will be deleted. (yyyy-MM-dd)",
      format(new Date(), "yyyy-MM-dd")
    )

    if (date && isValid(new Date(date))) {
      const next: Dictionary<Item> = pickBy(
        (_, key) => isAfter(new Date(Number(key)), new Date(date)),
        data
      )

      setData(next)
      localStorage.setItem("my", JSON.stringify(next))
    }
  }

  return (
    <Page>
      <Container sm>
        {Object.values(data).length < 2 ? (
          <p>Not enough data</p>
        ) : (
          <>
            <article>
              <h1 className={styles.title}>Total Value</h1>
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
              <h1 className={styles.title}>Withdrawable</h1>
              {withdrawable.map(({ symbol, datasets }) => (
                <section key={symbol}>
                  <h2>{getLpName(symbol)}</h2>
                  <ChartContainer datasets={datasets} fmt={FMT} compact />
                </section>
              ))}
            </article>
          </>
        )}
      </Container>

      <FixedBottom>
        <Button onClick={handleClick} color="secondary" outline block>
          Delete data before ...
        </Button>
      </FixedBottom>
    </Page>
  )
}

export default Chart
