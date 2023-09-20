
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";

import {
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from '../components';
import { useState } from "react";


const Home = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: COLORS.lightWhite
        },
        headerShadowVisible: false,
        headerLeft: () => {
          //back text
          return (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' onPress={() => router.goBack()} />
          )
        },
        headerRight: () => {
          return (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          )
        },
        headerTitle: ''
      }} />

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleChick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />

        </View>
      </ScrollView>




    </SafeAreaView>
  )
}

export default Home;