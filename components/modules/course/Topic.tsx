import { View, Text, StyleSheet, Button, Image,ScrollView } from 'react-native';
import { useState } from 'react';

interface CourseTopicProps {
    onNextContent: () => void;
    topic: Array<{ id: number; description: string }>;
}

export default function CourseTopic(props: CourseTopicProps) {
    const [activeTopic, setActiveTopic] = useState(0);

    const isShowNext = props.topic.length == activeTopic;

    const onContinue = () => {
        if (activeTopic < props.topic.length) {
            setActiveTopic(activeTopic + 1);
        }
    }

    const onNextTopic = () => {
        setActiveTopic(0);
        props.onNextContent();
    }

    return (
        <View style={{ flex: 1}}>
            <ScrollView>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 400, height: 200}} />
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                <View style={{width:50, backgroundColor:'#841584', height:5, margin: 5}}/>
                <View style={{width:50, backgroundColor:'#841584', height:5, margin: 5}}/>
                <View style={{width:50, backgroundColor:'#841584', height:5, margin: 5}}/>
                <View style={{width:50, backgroundColor:'#841584', height:5, margin: 5}}/>
                <View style={{width:50, backgroundColor:'#841584', height:5, margin: 5}}/>
                <View style={{width:50, backgroundColor:'#841584', height:5, margin: 5}}/>
                <View style={{width:50, backgroundColor:'#841584', height:5, margin: 5}}/>
                </View>

                <View style={{  borderColor:'#f6f7f5', padding:15}}>
                {
                    props.topic.map((item, index) => 
                    <View key={index}>
                        {  index <= activeTopic &&
                        <Text style={styles.courseItem}>
                        {item.description } 
                        </Text>
                        }
                    </View>
                    )
                }
                </View>

            </ScrollView>
            <View style={{ padding:15}}>
                { !isShowNext && <Button
                    onPress={onContinue}
                    title="Tap to continue" color="#841584" />
                }

                { isShowNext && 
                    <Button
                        onPress={onNextTopic}
                        title="Next Topic" color="#4287f5" />
                }
                
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    courseItem: {
      paddingTop: 15,
    },
  });