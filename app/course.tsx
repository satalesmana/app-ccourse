import { View, Text, StyleSheet, Button, Image,ScrollView } from 'react-native';
import {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Course() {
  const [activeTopic, setActiveTopic] = useState(1);
  const [topic, setTopic] = useState([
    { id: 1, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
    { id: 2, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
    { id: 3, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
    { id: 4, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
    { id: 5, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
    { id: 6, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
  ]);

  const isShowNext = topic.length == activeTopic;

  const onContinue = () => {
    if (activeTopic < topic.length) {
      setActiveTopic(activeTopic + 1);
    }
  }

  const onNextTopic = () => {}

  return (
    <SafeAreaProvider>
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
            topic.map((item, index) => 
              <View key={index}>
                {  index <= activeTopic-1 &&
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
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  courseItem: {
    paddingTop: 15,
  },
});