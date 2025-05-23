import { SafeAreaProvider } from 'react-native-safe-area-context';
import CourseTopic from '../components/modules/course/Topic';
import CourseQuiz from '../components/modules/course/Quiz';
import { useState } from 'react';
import { Alert } from "react-native";
import { router } from 'expo-router';

const courseData={
  content:[
    { 
      type:'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value:[
        { id: 1, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
        { id: 2, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
        { id: 3, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
        { id: 4, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
        { id: 5, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
        { id: 6, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
      ]
    },
    { 
      type:'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value:[
        { id: 1, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
        { id: 2, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
        { id: 3, description: 'Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down.' },
        
      ]
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: 'What is the capital of France?',
        options: [
          { value: 1, label: 'Berlin' },
          { value: 2, label: 'Madrid' },
          { value: 3, label: 'Paris' },
          { value: 4, label: 'Lisbon' }
        ],
        answer: 3
      }
    }
  ]
}

export default function Course() {
  const [activeContent, setActiveContent] = useState(0);
  
  const onNextContent = () => {
    if (activeContent < courseData.content.length-1) {
      setActiveContent(activeContent + 1);
    }else{
      Alert.alert(
        "Alert Title",
        "This is the alert message.",
        [
          { text: "OK", onPress: () => router.replace("./(tabs)") }
        ],
        { cancelable: false }
      );
    }
  }

  const CourseController= () => {
    if (courseData.content[activeContent].type === 'materi') {
      return (
        <CourseTopic 
          onNextContent={ onNextContent } 
          topic={ courseData.content[activeContent].value as Array<{ id: number; description: string }> }/>
      );
    }

    if (courseData.content[activeContent].type === 'quiz') {
      return (
        <CourseQuiz 
          onNextContent={ onNextContent } 
          content={ courseData.content[activeContent].value }/>
      );
    }
    return null;
  }

  return (
    <SafeAreaProvider>
      <CourseController />
    </SafeAreaProvider>
  );
}

