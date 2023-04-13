import React from "react";
import { Alert, Box, Button, Divider, HStack, IconButton, NativeBaseProvider, StatusBar, Text, VStack, Pressable, Badge, Spacer, Flex, TextArea, ScrollView, Center, useToast } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';


function AppBar() {
  return <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon name="ios-reorder-three" size={30} color="#FFF" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>

        </HStack>
      </HStack>
    </>;
}

function ContentBox() {
  const toast = useToast();
  return <>
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          <Text  bold italic underline fontSize="4xl">Taj Mahal is in Agra.</Text>
        </Box>
        <Box px="4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Box>
        <Box px="4" pb="4">
          <Button  onPress={() => toast.show({
              description: "I Love It",
              placement: "top"
            })}> 
            Like 
          </Button>
        </Box>
      </VStack>

      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          NativeBase
        </Box>
        <Box px="4">
          <TextArea h={20} placeholder="Text Area Placeholder" w="100%" />
        </Box>
        <Box px="4" pb="4">
            <Button onPress={() => Alert('hello')}>Like</Button>
        </Box>
      </VStack>

      
    </Box>
  </>
}

function PressableBox() {
  return <Box alignItems="center">
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
          <HStack alignItems="center">
            <Badge colorScheme="darkBlue" _text={{
            color: "white"
          }} variant="solid" rounded="4">
              Business
            </Badge>
            <Spacer />
            <Text fontSize={10} color="coolGray.800">
              1 month ago
            </Text>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Marketing License
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Read More
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>;
}

function AlertBox() {
  return <Center>
      <Alert maxW="400" status="info" colorScheme="info">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                We are going live in July!
              </Text>
            </HStack>
            <IconButton variant="unstyled" _focus={{
            borderWidth: 0
          }} icon={<Icon name="ios-close" size={16} color="#FFF" />} _icon={{
            color: "coolGray.600"
          }} />
          </HStack>
          <Box pl="6" _text={{
          color: "coolGray.600"
        }}>
            We are happy to announce that we are going live on July 28th. Get
            ready!
          </Box>
        </VStack>
      </Alert>
    </Center>;
}

export default function App() {
  return (
    <NativeBaseProvider>
      <AppBar />
      <ScrollView>
        <PressableBox />
        <ContentBox />
        <AlertBox />
      </ScrollView>
    </NativeBaseProvider>
  );
}