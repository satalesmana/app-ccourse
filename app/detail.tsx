import { View, Text, StyleSheet, Button, ToastAndroid } from "react-native"
import { ButtonTabs } from "../components/ButtonTabs"
import React, { useState } from 'react';
import { Info, Materi } from "../components/modules/detail"
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { useEffect } from "react";

const Detail = () => {
    const [activeTabs, setActiveTabs] = useState('info');
    const [description, setDescription] = useState('');
    const [itemTopic, setItemTopic] = useState([]);
    const { id } = useLocalSearchParams();

    const onGetData = async () => {
        try {
            const response = await axios.get(`https://elearning-api-ten.vercel.app/api/kursus/${id}`);

            setDescription(response.data.data.deskripsi);

            if(response.data.data.content && response.data.data.content.length > 0) {
                const topic = response.data.data.content.map((item:any, index:Number) => {
                    return {
                        id: index.toString(),
                        title: item.type,
                        describe: item.type,
                    }
                });
                setItemTopic(topic);
            }
            
        } catch (error) {
            const message = error?.message || 'Gagal mengambil data';
            ToastAndroid.showWithGravity(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
    }

    const UIActiveTabs = () => {
        if (activeTabs == 'info') return <Info description={description} />
        if (activeTabs == 'index') return <Materi topic={itemTopic} />
        return <Info description={description} />
    }

    useEffect(() => {
        onGetData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.buttonTabContainer}>
                    <ButtonTabs
                        title="Description"
                        isActive={activeTabs == 'info'}
                        customStyle={{ flex: 1 }}
                        onPress={() => setActiveTabs('info')} />
                    <ButtonTabs
                        title="Index"
                        customStyle={{ flex: 1 }}
                        isActive={activeTabs == 'index'}
                        onPress={() => setActiveTabs('index')} />
                </View>
                <View style={styles.contentContainer}>
                    <UIActiveTabs />
                </View>
            </View>
            <View style={{ padding: 15 }}>
                <Button
                    title="Let's Go"
                    color="#14116B" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20
    },
    buttonTabContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white'
    }
})
export default Detail