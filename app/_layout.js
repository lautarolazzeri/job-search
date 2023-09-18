import { Stack } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Entrypo from '@expo/vector-icons/build/Entypo'



// const getFonts = () => {
//   return Font.loadAsync({
//     'DMBold': require('../assets/fonts/DMSans-Bold.ttf'),
//     'DMMedium': require('../assets/fonts/DMSans-Medium.ttf'),
//     'DMRegular': require('../assets/fonts/DMSans-Regular.ttf'),
//   })
// }

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entrypo.font)
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady])
  if (!appIsReady) {
    return null;
  }


  return <Stack onLayout={onLayoutRootView} />
}

export default Layout