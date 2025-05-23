import { View, Text, Button, ScrollView, Alert } from "react-native";
import { RadioButton } from "@/components/RadioButton";
import { useState } from "react";


interface CourseQuizProps {
    onNextContent: () => void;
    content: { 
        question: number; 
        options: Array<{ value: any; label: string }>; 
        answer: number | null;
    };
}

export default function QuizTopic(props: CourseQuizProps) {
    const [userAnswer, setUserAnswer ] = useState(null);

    const checkAnswer=()=>{
        props.onNextContent()
    }

    return (
        <View style={{flex:1}}>
             <ScrollView style={{padding:15}}>
                <Text>{ props.content.question }</Text>
                {props.content.options.map((option,index) => (
                    <View key={ index }>
                        <RadioButton 
                            onSelect={(val)=>setUserAnswer(val)}
                            label={ option.label }
                            value={ option.value }
                            selected={ userAnswer==option.value }
                            />
                    </View>
                ))}
            </ScrollView>
            <View style={{ padding:15}}>
                <Button title="Submit" 
                    color="#841584" 
                    onPress={ checkAnswer } />
            </View>
        </View>
    )
}