import { TextInput } from "react-native";
import React from "react";

import styles from "./styles";

const Input = ({ otherStyle, ...restProps }) => {
    return (
        <TextInput style={{ ...styles.input, ...otherStyle, }} {...restProps} />
    );
};

export default Input;
