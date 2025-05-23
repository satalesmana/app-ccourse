import { useSelector, useDispatch } from 'react-redux'
import { ScrollView, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setAddres, setEmail, setName, setPhone } from '../store/reducer/profileSlice'
import { router } from 'expo-router'

export default function Profile(){
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch()

    const onSave = ()=>{
        router.push('/(tabs)/settings')
    }

    return (
        <SafeAreaProvider>
            <ScrollView style={styles.container}>
                <View>
                    <Text>Nama Lengkap</Text>
                    <TextInput
                        onChangeText={(value)=>dispatch(setName(value))}
                        value={profile.name}
                        style={styles.input}
                        />
                </View>

                <View>
                    <Text>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value)=>dispatch(setEmail(value))}
                        value={profile.email}
                        />
                </View>

                <View>
                    <Text>Phone Number</Text>
                    <TextInput
                        onChangeText={(value)=>dispatch(setPhone(value))}
                        value={profile.phone}
                        style={styles.input}
                        />
                </View>

                <View>
                    <Text>Address</Text>
                    <TextInput
                        onChangeText={(value)=>dispatch(setAddres(value))}
                        value={profile.address}
                        multiline
                        editable
                        numberOfLines={4}
                        maxLength={40}
                        style={styles.inputArea}
                        />
                </View>

                <View>
                    <Button title='Save' onPress={onSave} />
                </View>
            </ScrollView>
        </SafeAreaProvider>
            
    )
}

const styles = StyleSheet.create({
    input: { 
        height: 40,
        marginTop:12,
        marginBottom:12,
        borderWidth: 1,
        padding: 10,
    },
    inputArea: { 
        height: 120,
        marginTop:12,
        marginBottom:12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        padding:15
    }
  });