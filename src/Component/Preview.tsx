import { Box, Button, Flex, Grid, Image, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import data from './example_data.json';

export default function Preview() {
    const { id } = useParams();
    const maindata = data.filter(item => item.id === parseInt(id||"0", 10));
    const Navigate = useNavigate();
    console.log(maindata)
    return (
        <div>
            <SimpleGrid columns={1} spacing={0} w="100vw" h="99vh" >
                <Box bg='white' height='100px' zIndex="1" >
                    <Button backgroundColor='#134B8A' onClick={()=>Navigate('../cardlist')} variant='solid' colorScheme='blue' mt="20px" marginLeft="35px" borderRadius="30px">
                        <Image 
                            src="/image/right-arrow.png"
                            alt='search '
                            w="12px"
                            h="12px"

                        /> Back
                    </Button>
                </Box>
                <SimpleGrid columns={2} spacing={0} w="95vw" h="98vh" marginLeft="30px"  >
                    <Box backgroundColor='#C4D3E9' height='37vw' w="auto" borderTopLeftRadius="10px" borderBottomLeftRadius="10px">
                        <VStack spacing='0' marginTop="30px">

                            <Box style={{textAlign:'center'}} w='600px' h='200px' bg='white' borderTopLeftRadius="10px" borderTopRightRadius="10px" >

                                <Image 
                                    // style={{transform:'rotate(90deg)'}}
                                    src={maindata[0].profile_image_url}
                                    alt='Green double couch with wooden legs'
                                    borderTopLeftRadius="10px"
                                    borderTopRightRadius="10px"
                                    w='100%' h='100%'
                                />
                            </Box>
                            <Box w='600px' h='300px' bg='white'  borderBottomRadius="10px" borderBottomRightRadius="10px">
                                <Flex minWidth='max-content' alignItems='center' gap='2'>
                                    <Box  >
                                        <Text paddingLeft="5" paddingTop="5" paddingBottom="5" fontSize="14px" fontFamily='kanit'>{maindata[0].name}</Text>
                                    </Box>
                                    <Spacer />

                                    <Flex>
                                        <Image
                                            paddingLeft="2" paddingTop="2" paddingBottom="5"
                                            w="30px"
                                            h="auto"
                                            src="/image/dot.png"
                                            alt="dot"
                                            ml="10"
                                        />
                                        <Text ml="1" paddingRight="2" paddingTop="2" color="#134B8A" fontSize="14px" fontFamily='kanit'> {maindata[0].rating}</Text>

                                    </Flex>
                                </Flex>
                                <Grid templateColumns='repeat(3, 1fr)' gap={6} paddingLeft="2">
                                    <Box  > <Text paddingLeft="5" fontSize="14px" fontFamily='kanit' >Address:</Text></Box>

                                    <Text w='300px' fontSize="14px" fontFamily='kanit'>
                                        {maindata[0].address}
                                    </Text>

                                </Grid>
                                <Grid templateColumns='repeat(3, 1fr)' gap={6} p="2" >
                                    <Box  > <Text fontSize="14px" fontFamily='kanit'>Opening Hours:</Text></Box>
                                    <Text >
                                        {maindata[0].operation_time.map((item,index)=>{
                                            return (
                                                <Text key={index+1} w='300px' fontSize="14px" fontFamily='kanit'>{item.day}:  {item.time_open}-{item.time_close}</Text>
                                            )
                                        })}
                                    </Text>

                                </Grid>
                            </Box>

                        </VStack>
                    </Box>

                    <Box backgroundColor='#C4D3E9' height='37vw' w="auto" borderTopRightRadius="10px" borderBottomRightRadius="10px">

                        <VStack spacing='0' marginTop="30px">

                            <Box w='500px' h='220px' bg='white' borderTopLeftRadius="10px" borderTopRightRadius="10px" >
                                <Text padding="10px" fontFamily='kanit' fontSize='16'> Image</Text>
                                {/* {maindata[0].images.map((item,index)=>{
                                    return
                                })
                                 } */}
                                <Image display="flex"
                                    justify-content="center"
                                    src={maindata[0].images[0]}
                                    alt='Green double couch with wooden legs'
                                    borderTopLeftRadius="10px"
                                    borderTopRightRadius="10px"
                                    w='450px' h='190px'
                                    marginLeft="20px"

                                />
                            </Box>
                            <Box w='500px' h='200px' bg='white'>
                                <Image
                                    src= {maindata[0].images[1]}
                                    alt='Green double couch with wooden legs'
                                    w='450px' h='200px'
                                    marginLeft="20px"

                                />
                            </Box>
                            <Box w='500px' h='210px' bg='white' borderBottomRightRadius="10px" borderBottomLeftRadius="10px">
                                <Image
                                    src={maindata[0].images[2]}
                                    alt='Green double couch with wooden legs'
                                    borderBottomRightRadius="10px"
                                    borderBottomLeftRadius="10px"
                                    w='450px' h='190px'
                                    marginLeft="20px"

                                />
                            </Box>
                        </VStack>
                    </Box>

                </SimpleGrid>

            </SimpleGrid></div>
    )
}

