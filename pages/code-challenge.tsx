import { Header } from "@/components/code-challenge/Header";
import { Box, Table, TableHead, TableBody, TableRow, TableCell, Text, Button, Modal } from "@interchain-ui/react";
import { useState } from "react";
import AssetTableRow from "@/components/code-challenge/AssetTableRow";
import { observer } from "mobx-react-lite";
import AssetSelector from "@/components/code-challenge/AssetSelector";
import { useStore } from "@/stores/hooks";
import Footer from "@/components/code-challenge/Footer";
import DepositView from "@/components/code-challenge/Deposit";

export default observer(function CodeChallenge() {
  const assetStore = useStore('assetStore')
  const [isAssetSelectorOpen, setAssetSelectorOpen] = useState(false)
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false)

  return (
<Box display='flex' flexDirection='column' minHeight='100vh'>
  <Box p='$10'>
    <Header />
  </Box>
  
  <Box flexGrow={1} px='$10'>
    <Table width='$full'>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>
            <Text color='$gray500'>Asset</Text>
          </TableCell>
          <TableCell>
            <Text color='$gray500'>Balance</Text>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {assetStore.assets?.map?.(myAsset=>(
          <AssetTableRow asset={myAsset} balance="123" key={myAsset.symbol}
            onDepositClick={()=>setIsDepositModalOpen(true)}
          />
        ))}
      </TableBody>
    </Table>
    <Box mt='$10'>
      <Button size="sm" intent='tertiary' onClick={()=>setAssetSelectorOpen(true)}>Add Asset</Button>
    </Box>
  </Box>
  
  <Footer />

  <Modal header={null}
    isOpen={isAssetSelectorOpen} 
    onClose={()=>{}}
  >
    <AssetSelector 
      onClose={()=>setAssetSelectorOpen(false)}
      onAdd={(asset)=>{
        assetStore.addAsset(asset)
        setAssetSelectorOpen(false)
      }}
    />
  </Modal>

  <Modal header={null}
    isOpen={isDepositModalOpen} 
    onClose={()=>{}}
  >
    <DepositView onClose={()=>setIsDepositModalOpen(false)} />
  </Modal>
</Box>
  )
})