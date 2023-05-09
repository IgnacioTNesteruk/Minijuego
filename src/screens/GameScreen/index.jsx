import { View, Text, Button } from "react-native"
import React, { useState } from "react"
import styles from "./styles"
import Card from "../../components/card"
import { useEffect } from "react";

const GameScreen = () => {
    const [currentGuess, setCurrentGuess] = useState()

    useEffect(() =>{
       setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1 )) 
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>The opponent's assumption is</Text>
            <Text style={styles.textColor}>{currentGuess}</Text>
            <Card otherStyles={styles.buttonContainer}>
                <Button title="Lower" onPress={() => console.log("lower")}
                />
                <Button title="Higher"onPress={() => console.log("Higher")}
                />
            </Card>
        </View>
    );
};

export default GameScreen;