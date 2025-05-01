import { View, Button, Image, Text, StyleSheet } from "react-native"

export const CourseProgresCard=()=>{
    return (
        <View style={styles.cardContainer}>
            <View>
                <Image
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.imageStyle} />
            </View>
            <View style={styles.cardInfo}>
              
                <View style={{  marginTop: 10, marginBottom:10 }}>
                    <Text style={[styles.title, { verticalAlign: 'top' }]}>React Native Navigation</Text>
                </View>

                <View style={{display: 'flex', flexDirection:'column', gap:5}}>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{flex:2 }}>Materi Kursus</Text>
                        <View style={{display:'flex', flex: 1 }}>
                            <Text style={styles.chip}>4/5</Text>
                        </View>
                    </View>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{flex: 2 }}>Quiz</Text>
                        <View style={{display:'flex', flex: 1 }}>
                            <Text style={styles.chip}>0/10</Text>
                        </View>
                    </View>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{flex: 2 }}>Score</Text>
                        <View style={{display:'flex', flex: 1 }}>
                            <Text style={styles.chip}>0</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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