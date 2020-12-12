import Container from "../components/Container"
import { SettingsProvider, useSettingsState } from "../hooks/useSettings"
import { WalletProvider, useWalletState } from "../hooks/useWallet"
import { ContractProvider, useContractState } from "../hooks/useContract"
import { StatsProvider, useStatsState } from "../statistics/useStats"
import routes from "../pwa/routes"
import "./App.scss"

const App = () => {
  const settings = useSettingsState()
  const wallet = useWalletState()
  const contract = useContractState(wallet.address)
  const stats = useStatsState()

  return (
    <SettingsProvider value={settings}>
      <WalletProvider value={wallet} key={wallet.address}>
        <ContractProvider value={contract}>
          <StatsProvider value={stats}>
            <Container>{routes}</Container>
          </StatsProvider>
        </ContractProvider>
      </WalletProvider>
    </SettingsProvider>
  )
}

export default App
