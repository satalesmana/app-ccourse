import { FlatList, Text, View, StyleSheet, Image, Button, ScrollView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from "expo-router";
import axios from 'axios'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../../store/reducer/kursusSlice'
import { CourseCard } from "../../components/CourseCard";

const Home = () => {
    const dispatch = useDispatch()
    const kursusList = useSelector(state => state.kursus.data)

    const onGoToDetail = () => {
        router.push('/detail')
    }

    const onStartCourse = () => {
        router.push('/course')
    }

    const onGetData = async () => {
        try {
            const response = await axios.get('http://192.168.39.60:3000/api/kursus');
            dispatch(setData(response.data.data))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        onGetData()
    }, [])

    return (
        <SafeAreaProvider style={styles.container}>
            <FlatList
                onRefresh={() => onGetData()}
                refreshing={false}
                data={kursusList}
                renderItem={({item}) => 
                    <CourseCard 
                        catergory={item.kategori}
                        title={item.title}
                        deskription={item.deskripsi}
                        image={item.img_url}
                        tanggal={item.tgl}
                     />
                }
                keyExtractor={item => item._id}
            />

        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
})

export default Home