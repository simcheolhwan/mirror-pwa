import { useEffect } from "react"
import classNames from "classnames/bind"
import { startOfHour } from "date-fns"
import { SMALLEST } from "../constants"
import { gte } from "../libs/math"
import { useWallet } from "../hooks"
import Page from "../components/Page"
import useMy from "../pages/My/useMy"
import Num from "./Num"
import Refresh from "./Refresh"
import Bottom from "./Bottom"
import styles from "./My.module.scss"

const cx = classNames.bind(styles)

const My = () => {
  const { address } = useWallet()
  const my = useMy()
  const { loading, uusd, holdings, mint, pool, stake, total } = my

  /* store data on local storage for chart */
  useEffect(() => {
    !my.loading && !my.total.loading && setLocal(my)
  }, [my])

  /* render */
  const chartAvailable = Object.keys(getLocal()).length > 1

  const contents = [
    { title: "UST", children: uusd },
    { title: "Holdings", children: holdings.totalValue },
    { title: "Collaterals", children: mint.totalCollateralValue },
    { title: "Minted assets", children: mint.totalMintedValue },
    { title: "Withdrawable LP", children: pool.totalWithdrawableValue },
    { title: "Rewards", children: stake.totalRewardsValue },
  ]

  return (
    <div className={cx({ loading })}>
      {!address ? (
        <Page>
          <Num title="MIR Price" price>
            {stake.price}
          </Num>
        </Page>
      ) : (
        <Page>
          <Num title="Total Value">{total.value}</Num>
          <Num title="MIR Price" price>
            {stake.price}
          </Num>

          <hr />

          {contents.map(
            ({ title, children }) =>
              gte(children, SMALLEST) && (
                <Num title={title} key={children}>
                  {children}
                </Num>
              )
          )}
        </Page>
      )}

      <Bottom
        link={
          !address
            ? { to: "/auth", children: "Connect" }
            : chartAvailable
            ? { to: "/chart", children: "Chart" }
            : undefined
        }
      >
        <Refresh loading={loading} />
      </Bottom>
    </div>
  )
}

export default My

/* local storage */
export const getLocal = () => {
  const stored = localStorage.getItem("my")
  return stored ? JSON.parse(stored) : {}
}

export const setLocal = (data: any) => {
  const stored = getLocal()
  const timestamp = startOfHour(new Date()).getTime()
  const next = JSON.stringify({ ...stored, [timestamp]: data })
  localStorage.setItem("my", next)
}
