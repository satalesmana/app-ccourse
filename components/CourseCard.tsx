import { Text, View,  Image, Button, StyleSheet } from "react-native";

interface CourseCardType {
    onGoToDetail?: (value:any) => void;
    onStartCourse?: (value:any) => void;
    title: String;
    deskription: String;
    catergory: String;
    tanggal: String;
    image: String;
}

export const CourseCard=(props:CourseCardType)=>{
    return (
        <View style={styles.cardContainer}>
            <View>
                <Image
                    source={{ uri: props.image }}
                    style={styles.imageStyle} />
            </View>
            <View style={styles.cardInfo}>
                <View style={[styles.infoHeader]}>
                    <View>
                        <Text style={styles.chip}>
                            {props.catergory}
                        </Text>
                    </View>
                    <Text style={{ flex: 1, textAlign: 'right' }}>
                        {props.tanggal}
                    </Text>
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <Text style={[styles.title, { verticalAlign: 'top' }]}>
                        {props.title}
                    </Text>
                    <Text numberOfLines={2}
                        ellipsizeMode="tail"
                        style={{ verticalAlign: 'top' }}>
                        {props.deskription}
                    </Text>
                </View>
                <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Button
                            onPress={props.onGoToDetail}
                            title="Preview" color="#841584" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            title="Start"
                            onPress={props.onStartCourse}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageStyle: {
        width: 120,
        height: 150,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: '#f6f7f5',
        marginTop: 15
    },
    cardInfo: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
   
    chip: {
        backgroundColor: '#e6e4e1',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        flexWrap: 'wrap',
        flex: 1
    }
})