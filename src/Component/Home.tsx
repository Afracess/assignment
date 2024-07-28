import { Box, Button, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
export default function Home() {


  const Navigate = useNavigate();

  return (

    <Box w="100vw" h="99vh">
      <Grid
        templateAreas={`"nav header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'50px fr 30px'}
        gridTemplateColumns={'50px 1fr'}
        fontWeight='bold'
      >
        <GridItem bg='#134B8A' area={'header'} marginLeft="-30px" h='50px'>
          <Grid templateColumns="repeat(6,1fr)">
            <GridItem colStart={6} colSpan={2}>

              <Box>
                <Box display="flex" justifyItems="flex-end">
                  <Image
                    src="/image/notification.png" alt='notification'
                    w="30px"
                    h="auto"
                    alignItems="center"
                    margin="0"
                    paddingTop="15px"
                    paddingBottom="10px"

                  />

                  <Image
                    src="/image/user.png" alt='user'
                    w="30px"
                    h="auto"
                    alignItems="center"
                    margin="0"
                    paddingTop="15px"
                    paddingBottom="10px"
                    ml="10px"

                  />
                  <Text
                    fontSize="16px"
                    alignItems="center"
                    margin="0"
                    paddingTop="15px"
                    paddingBottom="10px"
                    ml="10px">
                    Akkarapol
                  </Text>
                  <Image
                    src="/image/down.png" alt='down'
                    w="20px"
                    h="auto"
                    alignItems="center"
                    margin="0"
                    paddingTop="15px"
                    paddingBottom="10px"
                    ml="10px"

                  />
                </Box>
              </Box>

            </GridItem>
          </Grid>
        </GridItem>
        <GridItem area={'nav'} borderTopRightRadius="30px" boxShadow='dark-lg' p='3' h="100vh" backgroundColor="white" zIndex="1000" >
          <VStack as="nav"  >
            <Box >
              <Image
                src="/image/logo.jpg" alt='logo'
                w="auto"
                h="auto"
                alignItems="center"
                margin="0"
                paddingTop="15px"
              />

            </Box>


            <Box >
              <hr style={{ width: "90%" }}></hr>
              <Button
                mr="10px"
                backgroundColor="white"

              >
                <Box  >
                  <Box borderRadius="10px" backgroundColor="#0F1E56">
                    <Image w="30px" h="auto" src="/image/list.png" alt='logo' />

                  </Box>
                  <Text w="20px" fontSize="12px" fontFamily='kanit'> place</Text>
                </Box>
              </Button>
              <hr style={{ width: "90%" }}></hr>
            </Box>

          </VStack>
        </GridItem>
        <GridItem area={'main'} backgroundColor="white" >
          <Outlet />
        </GridItem>
        <GridItem area={'footer'} >

        </GridItem>
      </Grid>
    </Box>

  )
}
