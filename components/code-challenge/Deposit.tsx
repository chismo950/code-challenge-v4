import { AvatarImage, Box, Button, Icon, Text, useTheme } from "@interchain-ui/react";

export default function DepositView({
  onClose
}:{
  onClose?: ()=>void
}) {
  const {theme} = useTheme()
  return (
<Box borderRadius='$xl' width='100vw' maxWidth='460px' p='$8'
  backgroundColor={theme==='dark'?'rgb(30,30,30)':'#ffffff'}
>
  <Box display='flex' alignItems='center'>
    <Box flexGrow={1}>
      <Text fontWeight='bold' fontSize='$lg'>Deposit ATOM</Text>
    </Box>
    <Button size="xs" intent='secondary' onClick={onClose}>
      <Icon name='close' />
    </Button>
  </Box>

  <Box display='grid' gridTemplateColumns='1fr 30px 1fr' mt='$10' mb='$4'>
    <Box><Text color='$gray500' fontSize='$xs'>From Cosmos Hub</Text></Box>
    <Box></Box>
    <Box><Text color='$gray500' fontSize='$xs'>To Osmosis</Text></Box>
  </Box>

  <Box display='grid' gridTemplateColumns='1fr 30px 1fr'>
    <Box backgroundColor={theme==='dark'?'#111111':'#eeeeee'} borderRadius='$lg' px='$4' height='48px' display='flex' alignItems='center'>
      <AvatarImage
        src='https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png' 
        name={`img-deposit-atom`}
        width="20px" height="20px"
      />
      <Box ml='$3'>
        <Text color='$gray500'>atom1xy5y...m6wwz9a</Text>
      </Box>
    </Box>
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Text color='$gray500' textAlign='center'>{'->'}</Text>
    </Box>
    <Box backgroundColor={theme==='dark'?'#111111':'#eeeeee'} borderRadius='$lg' px='$4' height='48px' display='flex' alignItems='center'>
      <AvatarImage
        src='https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png' 
        name={`img-deposit-atom`}
        width="20px" height="20px"
      />
      <Box ml='$3' flexGrow={1}>
        <Text color='$gray500'>osmolxy5y...w9a</Text>
      </Box>
      <Icon name='pencilLine' color='$gray500' />
    </Box>
  </Box>

  <Box display='flex' alignItems='center' mt='$9' mb='$3'>
    <Box flexGrow={1}>
      <Text color='$gray500'>Select amount</Text>
    </Box>
    <Box display='flex'>
      <Box mr='$1'><Text fontSize='$xs' color='$gray500'>Available</Text></Box>
      <Text fontWeight='bold' fontSize='$xs' color='$gray500'>2 ATOM</Text>
    </Box>
  </Box>

  <Box borderStyle='$solid' borderWidth='thin' borderColor='$gray400' borderRadius='$md' height='50px' display='flex' alignItems='center'>
    <Box width='50px' height='50px' borderRightStyle='solid' borderRightWidth='thin' borderRightColor='$gray400' display='flex' alignItems='center' justifyContent='center'>
      <AvatarImage
        src='https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png' 
        name={`img-deposit-atom`}
        width="30px" height="30px"
      />
    </Box>
    <Box flexGrow={1} px='$5'>
      <Text fontSize='$md' fontWeight='bold'>2</Text>
    </Box>
    <Box pr='$2'>
      <Text fontSize='$xs'>ATOM</Text>
    </Box>
    <Box pr='$5'>
      <Text fontSize='$xs' color='$gray500'>≈ $1,013</Text>
    </Box>
  </Box>

  <Box display='flex' justifyContent='end' mt='$4'>
    <Box>
      <Button size="xs" intent='secondary'>
        <Text color='$gray500' fontSize='xs'>Max</Text>
      </Button>
    </Box>
    <Box mx='$4'>
      <Button size="xs" intent='secondary'>
        <Text color='$gray500' fontSize='xs'>1/2</Text>
      </Button>
    </Box>
    <Box>
      <Button size="xs" intent='secondary'>
        <Text color='$gray500' fontSize='xs'>1/3</Text>
      </Button>
    </Box>
  </Box>

  <Box display='flex' alignItems='center' backgroundColor={theme==='dark'?'#111111':'#eeeeee'} p='$4' borderRadius='$md' mt='$10'>
    <Icon name='timeLine' color={theme==='dark'?'#ffffff':'#000000'} />
    <Box ml='$3'>
      <Text fontSize='$xs'>Estimated time:</Text>
    </Box>
    <Box ml='$3'>
      <Text fontWeight='bold' fontSize='$xs'>20 seconds</Text>
    </Box>
  </Box>
  
  <Box mt='$8'>
    <Button fluidWidth intent='tertiary'>Transfer</Button>
  </Box>

  <Box mt='$8'>
    <Button fluidWidth variant='unstyled' size="xs">Cancel</Button>
  </Box>
  

</Box>
  )
}