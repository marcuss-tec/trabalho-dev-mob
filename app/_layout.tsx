import { Stack, Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"
        options={{
          headerShown: false,
          tabBarStyle:{display: 'none'},
          href: null

        }}
      />
        <Tabs.Screen name="compras"
          options={{
            headerShown: false,
            href: null
          }}
        />
        
    </Tabs>
  );
}