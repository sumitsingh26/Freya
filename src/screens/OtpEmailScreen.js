import { ActivityIndicator, Image, ImageBackground, StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import imagepath from '../images/Images'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { otpEmail } from './network/Api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const OtpEmailScreen = () => {
    const navigation = useNavigation();
    const [loaderModelVisible, setLoaderModelVisible] = useState(false);
    const openLoaderModel = () => {
        setLoaderModelVisible(true);
    };
    const cloaseLoaderModel = () => {
        setLoaderModelVisible(false);
    }
    const route = useRoute();
    const { email, mobile_no } = route.params;
    // console.log("User Email: " + email);
    // console.log("User Phone: " + mobile_no);

    const [etext1, setEtext1] = useState('');
    const [isEtext1Valid, setEtext1Valid] = useState(true);

    const [etext2, setEtext2] = useState('');
    const [isEtext2Valid, setEtext2Valid] = useState(true);

    const [etext3, setEtext3] = useState('');
    const [isEtext3Valid, setEtext3Valid] = useState(true);

    const [etext4, setEtext4] = useState('');
    const [isEtext4Valid, setEtext4Valid] = useState(true);

    const [otp, setOtp] = useState('');

    const [error, setError] = useState({});

    const validate = () => {
        let error = {};
        if (etext1 == '') {
            setEtext1Valid(false);
            setEtext2Valid(true);
            setEtext3Valid(true);
            setEtext4Valid(true);
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Enter OTP"
            })
        } else if (etext2 == '') {
            setEtext2Valid(false);
            setEtext1Valid(true);
            setEtext3Valid(true);
            setEtext4Valid(true);
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Enter OTP"
            })
        } else if (etext3 == '') {
            setEtext3Valid(false);
            setEtext1Valid(true);
            setEtext2Valid(true);
            setEtext4Valid(true);
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Enter OTP"
            })
        } else if (etext4 == '') {
            setEtext4Valid(false);
            setEtext1Valid(true);
            setEtext2Valid(true);
            setEtext3Valid(true);
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Enter OTP"
            })
        } else {
            setEtext1Valid(true);
            setEtext2Valid(true);
            setEtext3Valid(true);
            setEtext4Valid(true);
            setError(error);
            return Object.keys(error).length === 0;
        }
    }

    const goToAnotherScreen = () => {
        if (validate()) {
            openLoaderModel();
            let setOtp = etext1 + etext2 + etext3 + etext4;
            console.log(setOtp);
            let data = {
                "email": email,
                "otp": setOtp
            }
            console.log(data);
            let endPoint = "api/auth/otp/email";
            otpEmail(data, endPoint).then((response) => {
                console.log(response);
                if (response.Success == true) {
                    cloaseLoaderModel();
                    Toast.show({
                        type: "success",
                        text1: "Success",
                        text2: response?.Message
                    })
                    navigation.replace('OtpMobileScreen', { mobileNo: mobile_no }); // Navigate to the 'Login' screen
                } else {
                    cloaseLoaderModel();
                    Toast.show({
                        type: "error",
                        text1: "Failed",
                        text2: response?.Message
                    })
                }

            })

        } else {
            console.log("failed");
        }

    };


    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    return (
        <ImageBackground style={{ width: "100%", height: "100%" }} resizeMode={"cover"} source={imagepath.loginBgImage}>
             <SafeAreaView>
          <KeyboardAwareScrollView>
            <View style={styles.rootContainer}>
                <Image style={{marginTop: 30}}source={imagepath.otpImage}></Image>
                <Text style={styles.txt1}>Check your email</Text>
                <Text style={styles.txt2}>An email with verification code has been sent to your email id. Write the code below continue</Text>
                <View style={styles.otpView}>
                    <TextInput
                        ref={et1}
                        style={styles.inputView}
                        keyboardType='number-pad'
                        maxLength={1}
                        value={etext1}
                        onChangeText={txt => {
                            if (txt.length >= 1) {
                                setEtext1(txt);
                                et2.current.focus();
                            } else if (txt.length < 1) {
                                et1.current.focus();
                                setEtext1(txt);
                            }
                        }}
                    />
                    <TextInput
                        ref={et2}
                        style={styles.inputView}
                        keyboardType='number-pad'
                        maxLength={1}
                        value={etext2}
                        onChangeText={txt => {
                            if (txt.length >= 1) {
                                setEtext2(txt);
                                et3.current.focus();
                            } else if (txt.length < 1) {
                                et1.current.focus();
                                setEtext2(txt);
                            }
                        }}
                    />
                    <TextInput
                        ref={et3}
                        style={styles.inputView}
                        keyboardType='number-pad'
                        maxLength={1}
                        value={etext3}
                        onChangeText={txt => {
                            if (txt.length >= 1) {
                                setEtext3(txt);
                                et4.current.focus();
                            } else if (txt.length < 1) {
                                et2.current.focus();
                                setEtext3(txt);
                            }
                        }}
                    />
                    <TextInput
                        ref={et4}
                        style={styles.inputView}
                        keyboardType='number-pad'
                        maxLength={1}
                        value={etext4}
                        onChangeText={txt => {
                            if (txt.length >= 1) {
                                setEtext4(txt);
                                et4.current.focus();
                            } else if (txt.length < 1) {
                                et3.current.focus();
                                setEtext4(txt);
                            }
                        }}
                    />
                </View>
                <View style={styles.containerTextRow2}>
                    <Text style={styles.text1}>Didn't receive it yet?</Text>
                    <Text style={styles.resendText}>Resend</Text>
                    <Text style={styles.text1}> here</Text>
                </View>

                <View style={styles.buttonViewStyle}>
                    <TouchableOpacity onPress={goToAnotherScreen}>
                        <Text style={styles.buttonTxtStyle}>Continue</Text>
                    </TouchableOpacity>
                </View>
                <Modal animationType="fade" visible={loaderModelVisible} onRequestClose={cloaseLoaderModel} transparent={true}>
                    <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <ActivityIndicator size={'large'} color={'#DED0B6'} />
                    </View>
                </Modal>
              
            </View>
            </KeyboardAwareScrollView>
                </SafeAreaView>
        </ImageBackground>
    )
}

export default OtpEmailScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "8%",
    },
    txt1: {
        fontSize: 28,
        fontWeight: "600",
        fontFamily: "Poppins-Regular",
        color: "white"
    },
    txt2: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Poppins-Regular",
        color: "white",
        width: "100%",
        textAlign: "center"
    },
    otpView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20
    },
    inputView: {
        width: 50,
        height: 70,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: "#efecdd",
        margin: 5,
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        fontWeight: "600"
    },
    containerTextRow2: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20

    },
    resendText: {
        fontFamily: "Poppins-Regular",
        fontWeight: "700",
        fontSize: 14,
        color: "#494949",
        marginLeft: 3,
    },
    underlineText: {
        textDecorationLine: 'underline',
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        color: "#607274",
        marginLeft: 3
    },
    text1: {
        fontSize: 14,
        color: "#494949",
        alignItems: "center",
        fontFamily: "Poppins-Regular",
    },
    buttonViewStyle: {
        width: "100%",
        height: 50,
        backgroundColor: "#607274",
        borderRadius: 6,
        marginTop: 40,
        justifyContent: "center"
    },
    buttonTxtStyle: {
        fontWeight: "600",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "white",
        textAlign: "center"

    },
})