import { Box, Card, CardFooter, CardHeader, Center, Flex, Heading, Image, Input, InputGroup, InputRightElement, Select, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from './example_data.json';
export default function Cardlist() {
    const [dataState, setDataState] = useState(data);
    // console.log(dataState.filter((item) => item.categories.length==3)[0].categories)
    const categoriesmenu=data.filter((item) => item.categories.length==3)[0]?.categories ||[];
    const [pagenum, setPagenum] = useState(9);
    const Navigate = useNavigate();
    // useEffect(() => {
    //     setDataState(data); 
    // }, []);
    return (
        <div>
            <Flex direction="column" align="center" marginTop="20px">
                <Flex justify="space-between" width="95%" marginBottom="20px">
                    <Center fontFamily='kanit' fontSize="18" color="black">Place List</Center>
                    <Box display="flex">
                        <Select w="150px" defaultValue={categoriesmenu[0]} onChange= {(e)=>setDataState(data.filter(item => item.categories.includes(e.target.value)))} variant='outline'  fontSize="16px" fontFamily='kanit' color="#134B8A" >
                            {categoriesmenu.map((item, index)=>{
                                return(
                                    <option  key={index} value={item}>{item} </option>
                                )
                            })}
                         
                        </Select>
                        <p style={{fontSize:'24px', color:'#134B8A',marginLeft:"20px",marginRight:"20px" } }>|</p> 
                        <InputGroup w="300px" color="#134B8A" >
                            <InputRightElement pointerEvents="none">
                                <Image
                                    src="/image/search.png"
                                    alt='search'
                                    w="20px"
                                    h="20px"
                                />
                            </InputRightElement>
                            <Input variant="outline" onChange={(e)=>setDataState(data.filter(item => item.name.includes(e.target.value))||[])} placeholder="Search name..." fontSize="16px" fontFamily='kanit' />
                        </InputGroup>
                    </Box>
                </Flex>

                <Flex wrap="wrap" justify="center" >
                    {dataState.slice( pagenum-9, pagenum).map((item, index) => (
                        <Card onClick={()=>Navigate("../preview/"+item.id)} key={index} maxW="md" flex="1 1 calc(27.333% )" margin="10px" boxShadow='dark-lg' >
                            <Stack spacing='14px'>
                                <CardHeader>
                                    <Box display="flex">
                                        <Image
                                            w="90px"
                                            h="90px"
                                            borderRadius="15px"
                                            src={item.profile_image_url}
                                            alt={item.name}
                                        />
                                        <Heading paddingLeft="30px" size='md' color="#605C5C" fontSize="18px" fontFamily='kanit'>
                                            {item.name}
                                        </Heading>
                                    </Box>
                                    <Flex
                                        align="center"
                                        justify="center"
                                        direction="row"
                                        mt="-30px"
                                        marginLeft="100px"
                                    >
                                        <Image
                                            w="20px"
                                            h="auto"
                                            src="/image/calendar.png"
                                            alt="calendar"
                                        />
                                        <Text mx="2" color="#605C5C" fontSize="16px" fontFamily='kanit'>
                                            {item.operation_time[0].time_open} - {item.operation_time[0].time_close}
                                        </Text>
                                        <Flex align="center" marginLeft="100px">
                                            <Image
                                                w="20px"
                                                h="auto"
                                                src="/image/dot.png"
                                                alt="dot"
                                            />
                                            <Text ml="2" color="#134B8A" fontSize="16px" fontFamily='kanit'>{item.rating}</Text>
                                        </Flex>
                                    </Flex>
                                </CardHeader>
                                <CardFooter marginTop="-40px">
                                    <Stack direction='row' spacing={0}>
                                        {item.images.map((imageUrl, imgIndex) => (
                                            <Image
                                                key={imgIndex}
                                                borderRadius={imgIndex === 0 ? "15px 0 0 15px" : imgIndex === item.images.length - 1 ? "0 15px 15px 0" : ""}
                                                marginLeft={imgIndex === 0 ? "15px" : "0"}
                                                w="120px"
                                                h="120px"
                                                src={imageUrl}
                                                alt={`Image ${imgIndex + 1}`}
                                            />
                                        ))}
                                    </Stack>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </Flex>
            </Flex>
        </div>
    );
}
