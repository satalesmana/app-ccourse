import { View, FlatList, Text, StyleSheet } from "react-native"



type ItemProps = {
    id?: string;
    title: string;
    describe: string
};

const Item = ({ title, describe }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.describe}>{describe}</Text>
    </View>
);

interface MateriProps {
    topic?: Array<ItemProps>
}

export const Materi = (props:MateriProps) => {
    return (
        <View>
            <FlatList
                data={props.topic}
                renderItem={({ item }) => <Item
                    title={item.title}
                    describe={item.describe}
                />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E8E8E8'
    },
    title: {
        fontWeight: 800,
    },
    describe: {
        color: '#9D9B9B'
    }

})