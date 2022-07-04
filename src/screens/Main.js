import React, { useState, useEffect } from 'react';
import { View,
        StyleSheet,
        TextInput,
        Text,
        TouchableOpacity,
        FlatList
} from 'react-native';
import Name from "../components/Name"
import axios from 'axios';


export default function MainPage() {
    const [name, setName] = useState("")
    const [names, setNames] = useState([])
    const [updateName, setUpdateName] = useState("Add")
    const [selectedUser, setSelectedUser] = useState({})
    const [alamat, setAlamat] = useState("")

    const handleAddName = () => {
        const data = {name, alamat}
        console.log(data);
        if(updateName === "Add"){
            axios.post("https://api.kontenbase.com/query/api/v1/09ea5e7f-1b32-4c98-9bbf-8bfe0e39ee75/TODOS",data)
            .then((res) => {
                console.log(res);
                setName("")
                setAlamat("")
                getNames()
                
            })
            .catch((err) => {
                console.log(err)
            })
        } else if (updateName === "Update"){
            axios
        .patch(
            `https://api.kontenbase.com/query/api/v1/09ea5e7f-1b32-4c98-9bbf-8bfe0e39ee75/TODOS/${selectedUser._id}`, data
            )
        .then((res) => {
            console.log(res)
            setUpdateName("Add")
            getNames()
            setName("")
            setAlamat("")
        })
        .catch((error) => {
            console.log(error);
        })
        }
} 
    const getNames = () => {
            axios
            .get(
                "https://api.kontenbase.com/query/api/v1/09ea5e7f-1b32-4c98-9bbf-8bfe0e39ee75/TODOS"
            )
            .then((res) => {
                setNames(res.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Error Fetch Data");
            });
    }
    
    const patchName = (data) => {
        console.log(`SELECTED DATA :`,data);
        setName(data.name)
        setAlamat(data.alamat)
        setUpdateName("Update")
        setSelectedUser(data)
        axios
        .patch(
            `https://api.kontenbase.com/query/api/v1/09ea5e7f-1b32-4c98-9bbf-8bfe0e39ee75/TODOS/${selectedUser._id}`,data.name)
        .then((res) => {
            console.log(res)
            getNames()
        })
        .catch((error) => {
            console.log(error);
        })

    }
    
    const handleDeleteName = (item) => {
        console.log(item);
        axios
        .delete
        (`https://api.kontenbase.com/query/api/v1/09ea5e7f-1b32-4c98-9bbf-8bfe0e39ee75/TODOS/${item._id}`)
        .then((res) => {
            console.log(res);
            getNames()
        })
        .catch((err) => {
            console.log(err);
        })
    }

    // GET DATAS
    useEffect(() => {
        getNames();
    }, []);

    const styles = StyleSheet.create({
        container: {
            paddingTop: 30,
            flex: 1,
            backgroundColor: "#ffe4c4",
            padding: 19,
        },
        form : {
        },
        textInput : {
            borderRadius: 15,
            backgroundColor: "white",
            height : 45,
            width: "72%",
            color: "black",
            marginRight: 10,
            marginBottom : 8,
            paddingHorizontal: 15,
            fontSize: 15,
        },
        addbtn : {
            color : 'white',
            backgroundColor : '#6495ed',
            padding : '20px',
            borderRadius: 15,
            width : '6.2rem',
            position : 'absolute',
            height: 45,
            marginLeft : '16.2rem',
        },
        txtbtn : {
            color : 'white',
            fontSize : '18px',
            position : 'absolute',
            top : "0.5rem",
            left : '1.5rem'
        },
        Name : {
            width : '100%',
            backgroundColor : '#ffd700',
            borderRadius : 15,
            height : 45,
            marginTop : '4vh',
            marginBottom : 3
        },
        txtlist : {
            marginLeft  :'7.5rem',
            color : 'white',
            fontSize : '24px',
            marginTop : '5px'
        },
        item : {
            marginTop: "1vh",
            marginBottom : '1vh'
        },
        delete : {
            fontWeight : 20,
            color : 'red',
            fontSize : '24px',
            position : 'absolute',
            left : '24rem'
        },
        txtAlay : {
            fontSize : '30px',
            fontStyle : 'italic',
            fontWeight : 'bold',
            color : '#778899'
        }
    })

        return (
                <View style={styles.container}>
                    <View style={styles.form}>
                        <TextInput style={styles.textInput} value={name}
                        onChangeText={(text) => setName(text)} placeholder="Masukkan namamu disini .."/>

                        <TextInput style={styles.textInput} value={alamat}
                        onChangeText={(text) => setAlamat(text)} placeholder="Masukkan alamatmu disini .."/>
                    </View>

                    <TouchableOpacity style={styles.addbtn} onPress={() => handleAddName(names)}>
                        <Text style={styles.txtbtn}>{updateName}</Text>
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity style={styles.Name}>
                            <Text style={styles.txtlist}>LIST NAME</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.item}>
                        <FlatList
                            data={names}
                            renderItem={({ item }) => (
                                <Name
                                    name={item.name}
                                    alamat={item.alamat}
                                    _id={item._id.toString()}
                                    refresh={getNames}
                                    onPress={() => patchName(item)}
                                    onEdit={() => patchName(item)}
                                    onDelete={() => handleDeleteName(item)}
                                    />
                            )}
                            keyExtractor={(item) => item._id.toString()}
                            />
                    </View>
                    
                    <View>
                        <Text style={styles.txtAlay}>TODO APPS!</Text>
                    </View>
                </View>
            )


}