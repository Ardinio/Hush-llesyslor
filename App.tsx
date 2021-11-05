import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';
import RootNavigator from './navigation/RootNavigator';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <ReduxProvider store={store}>
            <SafeAreaProvider>
                <StatusBar style="auto" translucent={true} />
                <RootNavigator />
            </SafeAreaProvider>
        </ReduxProvider>
    );
}

export default App;
