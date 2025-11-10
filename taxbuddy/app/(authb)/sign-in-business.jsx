import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";



export default function SignInBusiness({ navigation }) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const passwordRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "At least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1100));
      //Navigates to home screen
      router.push('home-b')
      Alert.alert("Signed in", `Welcome back, ${email}`);
    } catch (e) {
      Alert.alert("Sign in failed", "Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                    {/* Logo at the very top */}
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    
                    <Text style={[styles.title, { color: COLORS.primary }]}>Hi Welcome back, you've been missed. Login to your account.</Text>

                    <KeyboardAvoidingView
                        style={styles.inner}
                        behavior={Platform.OS === "ios" ? "padding" : undefined}
                    >
                        
                        <View style={styles.form}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                value={email}
                                onChangeText={(t) => setEmail(t)}
                                placeholder="you@example.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                onSubmitEditing={() => passwordRef.current?.focus()}
                                style={[styles.input1, errors.email && styles.inputError]}
                                accessible
                                accessibilityLabel="Email"
                            />
                            {errors.email ? (
                                <Text style={styles.error}>{errors.email}</Text>
                            ) : null}

                            <Text style={[styles.label, { marginTop: 32 }]}>Password</Text>
                            <View style={styles.passwordRow}>
                                <TextInput
                                ref={passwordRef}
                                value={password}
                                onChangeText={(t) => setPassword(t)}
                                placeholder="••••••••"
                                secureTextEntry={secure}
                                returnKeyType="done"
                                onSubmitEditing={handleSignIn}
                                style={[
                                    styles.input2,
                                    styles.passwordInput,
                                    errors.password && styles.inputError,
                                ]}
                                accessible
                                accessibilityLabel="Password"
                                />
                                <TouchableOpacity
                                onPress={() => setSecure((s) => !s)}
                                style={styles.showBtn}
                                accessibilityLabel={secure ? "Show password" : "Hide password"}
                                >
                                <Image
                                    source={require('../../assets/images/eye.png')}
                                    style={[styles.eye, { opacity: secure ? 0.6 : 1 }]}
                                    resizeMode="contain"
                                />
                                </TouchableOpacity>
                            </View>
                            {errors.password ? (
                                <Text style={styles.error2}>{errors.password}</Text>
                            ) : null}

                            <TouchableOpacity
                                style={styles.forgot}
                                onPress={() => {
                                // navigation.navigate("ForgotPassword")
                                Alert.alert("Forgot password", "Password reset flow goes here");
                                }}
                            >
                                <Text style={[styles.forgotText, { color: "#F76D1B", marginTop: -6 }]}>Forgot password?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, loading && styles.buttonDisabled]}
                                onPress={handleSignIn}
                                disabled={loading}
                                accessibilityLabel="Sign in"
                            >
                                {loading ? (
                                <ActivityIndicator color="#fff" />
                                ) : (
                                <Text style={[styles.buttonText, { color: COLORS.bg }]}>Sign In</Text>
                                )}
                            </TouchableOpacity>

                            {/* SUW graphic under Sign In button */}
                            <Image
                                source={require("../../assets/images/icons/SUW.png")}
                                style={styles.suw}
                                resizeMode="contain"
                            />

                            {/* Social icons row: Apple, Google (G), Instagram */}
                            <View style={styles.socialRow}>
                                <TouchableOpacity accessibilityLabel="Sign in with Apple">
                                <Image
                                    source={require("../../assets/images/apple.png")}
                                    style={styles.socialIcon}
                                    resizeMode="contain"
                                />
                                </TouchableOpacity>

                                <TouchableOpacity accessibilityLabel="Sign in with Google">
                                <Image
                                    source={require("../../assets/images/google.png")}
                                    style={styles.socialIcon}
                                    resizeMode="contain"
                                />
                                </TouchableOpacity>

                                <TouchableOpacity accessibilityLabel="Sign in with Instagram">
                                <Image
                                    source={require('../../assets/images/insta.png')}
                                    style={styles.socialIcon}
                                    resizeMode="contain"
                                />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.footer}>
                                <Text style={styles.footerText}>Don't have an account?</Text>
                                <TouchableOpacity
                                onPress={() => {
                                    // navigate to SignUpIndividual screen
                                    router.push('sign-up-business')
                                }}
                                >
                                <Text style={[styles.link]}> Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
            </ScrollView>

        </SafeAreaView>
  );
}

const COLORS = {
  bg: "#f7f8fb",
  primary: "#367E34",
  text: "#0f172a",
  muted: "#212121",
  danger: "#dc2626",
  white: "#fff",
};




const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: COLORS.white },

  inner: { flex: 1, padding: 16, justifyContent: "center" },

  logo: { 
    width: 162,
    height: 63,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 8,
  },

  eye: { width: 22, height: 22, position: 'absolute', right: 16, bottom: 24 },
  suw: { width: 320, height: 56, alignSelf: "center", marginTop: 18 },
  socialRow: { flexDirection: "row", justifyContent: "center", marginTop: 12 },

  socialIcon: { width: 56, height: 48, marginHorizontal: 10 },

  header: { marginBottom: 24 },

  title: { 
    color: COLORS.text,
    lineHeight: 20,
    marginHorizontal: 61,
    textAlign: 'center',
    marginBottom: 56,
 },
  subtitle: { fontSize: 14, color: COLORS.muted, marginTop: 6 },
  form: {
    backgroundColor: COLORS.white,
    //padding: 18,
    borderRadius: 12,
    //shadowColor: "#000",
    //shadowOpacity: 0.05,
    shadowRadius: 10,
    //elevation: 3,
  },

  label: {
    fontSize: 16,
    color: COLORS.muted,
    marginBottom: 8,
  },

  input1: {
    height: 46,
    borderWidth: 1,
    borderColor: "#e6e9ee",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    color: COLORS.text,
    backgroundColor: '#2121211A',
  },

  input2: {
    height: 46,
    borderWidth: 1,
    borderColor: "#e6e9ee",
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 40,
    backgroundColor: "#fff",
    color: COLORS.text,
    backgroundColor: '#2121211A',
  },


  inputError: { borderColor: COLORS.danger },

  error: {
    color: COLORS.danger, 
    marginTop: 6, 
    fontSize: 12 
  },

  error2: { 
    color: COLORS.danger, 
    marginTop: -6, 
    fontSize: 12 
  },

  passwordRow: {  },
  passwordInput: { flex: 1 },
  showBtn: { paddingHorizontal: 10, paddingVertical: 6 },
  showText: { color: COLORS.primary, fontWeight: "600" },
  forgot: { alignSelf: "flex-end", marginTop: 8 },
  forgotText: { color: COLORS.muted, },
  button: {
    marginTop: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: { opacity: 0.7 },

  buttonText: { 
    color: COLORS.white, 
  },

  footer: { 
    flexDirection: "row", 
    justifyContent: "center", 
    marginVertical: 48 
  },

  footerText: { 
    color: COLORS.muted, 
    fontSize: 16 
  },

  link: { 
    color: COLORS.primary, 
    fontSize: 16,
  },

});
