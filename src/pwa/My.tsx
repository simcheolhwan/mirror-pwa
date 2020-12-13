import classNames from 'classnames/bind'
import { gt } from "../libs/math"
import { useWallet } from "../hooks"
import Page from "../components/Page"
import useMy from "../pages/My/useMy"
import Num from "./Num"
import Connect from "./Connect"
import Refresh from "./Refresh"
import styles from './My.module.scss'

const cx = classNames.bind(styles)

const My = () => {
  const { address } = useWallet()
  const { loading, uusd, holdings, mint, pool, stake, total } = useMy()

  const contents = [
    { title: "UST", children: uusd },
    { title: "Holdings", children: holdings.totalValue },
    { title: "Collaterals", children: mint.totalCollateralValue },
    { title: "Minted assets", children: mint.totalMintedValue },
    { title: "Withdrawable LP", children: pool.totalWithdrawableValue },
    { title: "Rewards", children: stake.totalRewardsValue },
  ]

  return (
    <div className={cx({loading})}>
      {!address ? (
        <Page>
          <Num title="MIR Price" price>
            {stake.price}
          </Num>

          <Connect />
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
              gt(children, 0) && (
                <Num title={title} key={children}>
                  {children}
                </Num>
              )
          )}
        </Page>
      )}

      <Refresh loading={loading} />
    </div>
  )
}

export default My
