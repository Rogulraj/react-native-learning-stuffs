import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Formik} from 'formik';

import * as yup from 'yup';

const passwordSchema = yup.object().shape({
  passwordLength: yup
    .number()
    .min(8, 'Minimum Should be 8 characters')
    .max(16, 'Maximum Should be 16 characters')
    .required('Please Enter Valid Password'),
});

export default function PasswordGen() {
  const [password, setPassword] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  async function passwordGenerator(passwordLength: number) {
    let characterList = '';

    const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const symbolsCharacters = '~!@#$%^&*()_+?<>|:,./;';
    const numbersCharacters = '0123456789';

    if (upperCase) {
      characterList += upperCharacters;
    }

    if (lowerCase) {
      characterList += lowerCharacters;
    }

    if (numbers) {
      characterList += numbersCharacters;
    }

    if (symbols) {
      characterList += symbolsCharacters;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    console.log(passwordResult);

    setPassword(passwordResult);
    setIsGenerated(true);
  }

  async function createPassword(characters: string, passwordLength: number) {
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }

    return result;
  }

  async function resetPassword(params: type) {
    setPassword('');
    setIsGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  // useEffect(() => {
  //   passwordGenerator(6);
  // }, []);

  return (
    <View>
      <Text>PasswordGen</Text>
      <Formik
        initialValues={{
          passwordLength: '',
        }}
        onSubmit={value => passwordGenerator(Number(value.passwordLength))}>
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          /* and other goodies */
        }) => (
          <>
            <View>
              <TextInput
                value={values.passwordLength}
                onChangeText={handleChange('passwordLength')}
                keyboardType="numeric"
                placeholder="Ex. 8"
              />
              <TouchableOpacity>
                <Text>Generate Password</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Rest Password</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
