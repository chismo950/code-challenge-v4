import { AvatarImage, Box, Button, TableCell, TableRow, Text } from "@interchain-ui/react"
import { Asset } from '@chain-registry/types'

export default function AssetTableRow({
  asset,
  balance,
  onDepositClick,
  onWithdrawClick
}:{
  asset: Asset,
  balance: string,
  onDepositClick?: ()=>void,
  onWithdrawClick?: ()=>void
}) {
  if (!asset) {
    return null
  }
  const logo_URI = asset.logo_URIs?.png || asset.logo_URIs?.jpeg || asset.logo_URIs?.svg

  return <TableRow>
  <TableCell>
    {logo_URI&&<AvatarImage
      src={ logo_URI } name={`img-${asset.name}`}
      width="40px" height="40px"
    />}
  </TableCell>
  <TableCell>
    <Box>
      <Text>{asset.symbol}</Text>
    </Box>
    <Box mt='$3'>
      <Text color='$gray500'>{asset.name}</Text>
    </Box>
  </TableCell>
  <TableCell>
    <Box >
      <Text>{balance}</Text>
    </Box>
    <Box mt='$3'>
      <Text color='$gray500'>$123</Text>
    </Box>
  </TableCell>
  <TableCell>
    <Box display='flex' justifyContent='end'>
      <Box>
        <Button size="sm" intent='secondary' onClick={onDepositClick}>Deposit</Button>
      </Box>
      <Box ml='$4'>
        <Button size="sm" intent='secondary' onClick={onWithdrawClick}>Withdraw</Button>
      </Box>
    </Box>
  </TableCell>
</TableRow>
}