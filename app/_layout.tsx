import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ title: 'About us' }} />
      <Stack.Screen name="home" options={{ title: 'Dashboard' }} />
      <Stack.Screen name="detail"  options={{ title: 'Detail Course' }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="course" options={{ title: 'Course' }} />
    </Stack>
  )
}
