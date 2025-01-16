import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="index" options={{ title: 'your time' }} />
      <Stack.Screen name="about" options={{ title: 'newpage' }} />
    </Stack>
  );
}
