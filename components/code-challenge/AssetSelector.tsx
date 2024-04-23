import { useState } from 'react';
import { assets } from 'chain-registry';
import { Box, Button, ChangeChainCombobox, Icon, useTheme } from '@interchain-ui/react';
import { Asset } from '@chain-registry/types'

const symbols = ['ATOM', 'JUNO', 'STARS', 'AKT', 'OSMO'];

const dropdownList = symbols.map((symbol) => {
  const asset = assets.find((assetList) => assetList.assets[0].symbol === symbol)!.assets[0];

  return {
    iconUrl: asset.logo_URIs?.png || asset.logo_URIs?.jpeg || asset.logo_URIs?.svg,
    label: asset.symbol,
    value: asset.name,
    asset
  };
});

export default function AssetSelector({
  onAdd,
  onClose
}:{
  onAdd?: (asset:Asset) => void,
  onClose?: ()=>void
}) {
  const {theme} = useTheme()
  const [selectedAsset, setSelectedAsset] = useState<Asset>()

  return (
    <Box backgroundColor={theme==='dark'?'rgb(33,36,40)':'#ffffff'} borderRadius='$xl'>
      <Box display='flex' justifyContent='end' p='$8'>
        <Button size="xs" intent='secondary' onClick={onClose}>
          <Icon name='close' />
        </Button>
      </Box>
      <Box p='$10'>
        <Box height='$29'>
          <ChangeChainCombobox
            appearance='bold'
            onItemSelected={(item) => {
              setSelectedAsset(assets.find((assetList) => assetList.assets[0].symbol === item?.label)!.assets[0])
            }}
            options={dropdownList}
          />
        </Box>
        <Button intent='secondary' onClick={()=>{
          if (selectedAsset) onAdd?.( selectedAsset )
        }}>Add</Button>
      </Box>
    </Box>
  );
}