import React, { useRef, useState } from "react";
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

export default function SignUpIndividual({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [incomeRange, setIncomeRange] = useState("");
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [taxId, setTaxId] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [secure, setSecure] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const emailRef = useRef(null);
  const taxRef = useRef(null);
  const passRef = useRef(null);
  const confirmRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "At least 6 characters";
    if (!confirm) newErrors.confirm = "Please confirm your password";
    else if (password !== confirm) newErrors.confirm = "Passwords do not match";
    if (!agreed)
      newErrors.agreed = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      // placeholder for real signup logic
      await new Promise((res) => setTimeout(res, 1000));
      Alert.alert("Account created", `Welcome, ${name}`);
      // optionally navigate
      // navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert("Sign up failed", "Please try again");
    } finally {
      setLoading(false);
    }
  };

  const incomeOptions = [
    "$20,000",
    "$20,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000",
  ];

  return (


      <SafeAreaView style={styles.container}>

        <ScrollView>

                {/* Logo at top */}
                <Image
                  source={require("../../assets/images/logo.png")}
                  style={styles.logo}
                  resizeMode="contain"
                />
                
                
                <Text style={[styles.headerTitle, { color: COLORS.primary }]}>Fill your information below or register with your social accounts.</Text>

                <KeyboardAvoidingView
                  style={styles.inner}
                  behavior={Platform.OS === "ios" ? "padding" : undefined}
                >
                  

                  <View style={styles.form}>
                      <Text style={styles.label}>Full name</Text>
                      <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder="Jane Doe"
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current?.focus()}
                        style={[styles.input, errors.name && styles.inputError]}
                        accessibilityLabel="Full name"
                      />
                      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

                      <Text style={[styles.label, { marginTop: 32 }]}>Email</Text>
                      <TextInput
                        ref={emailRef}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="you@example.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => taxRef.current?.focus()}
                        style={[styles.input, errors.email && styles.inputError]}
                        accessibilityLabel="Email"
                      />
                      {errors.email ? (
                        <Text style={styles.error}>{errors.email}</Text>
                      ) : null}

                      {/* Annual income dropdown (after email) */}
                      <Text style={[styles.label, { marginTop: 32 }]}>Annual Income Range</Text>
                      <TouchableOpacity
                        style={[
                          styles.dropdownButton,
                          styles.input,
                          { backgroundColor: "#F76D1B" },
                        ]}
                        onPress={() => setIncomeOpen((s) => !s)}
                        accessibilityLabel="Select Range"
                      >
                        <Text style={styles.dropdownText}>
                          {incomeRange ? incomeRange : "Select range"}
                        </Text>
                      </TouchableOpacity>
                      {incomeOpen ? (
                        <View style={styles.dropdownList}>
                          {incomeOptions.map((opt) => (
                            <TouchableOpacity
                              key={opt}
                              onPress={() => {
                                setIncomeRange(opt);
                                setIncomeOpen(false);
                              }}
                              style={styles.dropdownItem}
                            >
                              <Text>{opt}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      ) : null}

                      <Text style={[styles.label, { marginTop: 32 }]}>
                        Tax Identification Number (TIN) (optional)
                      </Text>
                      <TextInput
                        ref={taxRef}
                        value={taxId}
                        onChangeText={setTaxId}
                        placeholder="123-45-6789"
                        keyboardType="default"
                        returnKeyType="next"
                        onSubmitEditing={() => passRef.current?.focus()}
                        style={styles.input}
                        accessibilityLabel="Tax ID"
                      />

                      <Text style={[styles.label, { marginTop: 32 }]}>Password</Text>
                      <View style={styles.passwordRow}>
                        <TextInput
                          ref={passRef}
                          value={password}
                          onChangeText={setPassword}
                          placeholder="••••••••"
                          secureTextEntry={secure}
                          returnKeyType="next"
                          onSubmitEditing={() => confirmRef.current?.focus()}
                          style={[
                            styles.input2,
                            styles.passwordInput,
                            errors.password && styles.inputError,
                          ]}
                          accessibilityLabel="Password"
                        />
                        <TouchableOpacity
                          onPress={() => setSecure((s) => !s)}
                          style={styles.showBtn}
                          accessibilityLabel={secure ? "Show password" : "Hide password"}
                        >
                          <Image
                            source={require("../../assets/images/eye.png")}
                            style={[styles.eye, { opacity: secure ? 0.6 : 1 }]}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      </View>
                      {errors.password ? (
                        <Text style={styles.error2}>{errors.password}</Text>
                      ) : null}

                      <Text style={[styles.label, { marginTop: 32 }]}>Confirm password</Text>
                      <TextInput
                        ref={confirmRef}
                        value={confirm}
                        onChangeText={setConfirm}
                        placeholder="••••••••"
                        secureTextEntry={secure}
                        returnKeyType="done"
                        onSubmitEditing={handleSignUp}
                        style={[styles.input2, errors.confirm && styles.inputError]}
                        accessibilityLabel="Confirm password"
                      />
                      <TouchableOpacity
                          onPress={() => setSecure((s) => !s)}
                          style={styles.showBtn}
                          accessibilityLabel={secure ? "Show password" : "Hide password"}
                        >
                          <Image
                            source={require("../../assets/images/eye.png")}
                            style={[styles.eye, { opacity: secure ? 0.6 : 1 }]}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      {errors.confirm ? (
                        <Text style={styles.error2}>{errors.confirm}</Text>
                      ) : null}

                      {/* Agree to terms checkbox */}
                      <View style={styles.checkboxRow}>
                        <TouchableOpacity
                          onPress={() => setAgreed((s) => !s)}
                          style={[
                            styles.checkboxBox,
                            agreed && styles.checkboxChecked,
                            { color: "#F76D1B" },
                          ]}
                          accessibilityLabel="Agree to terms and conditions"
                        >
                          {agreed ? <Text style={styles.checkboxTick}>✓</Text> : null}
                        </TouchableOpacity>
                        <Text style={[{ color: "#F76D1B", }, styles.checkboxLabel]}>I agree with terms and conditions</Text>
                      </View>
                      {errors.agreed ? (
                        <Text style={styles.error}>{errors.agreed}</Text>
                      ) : null}

                      <TouchableOpacity
                        style={[styles.button, loading && styles.buttonDisabled]}
                        onPress={handleSignUp}
                        disabled={loading}
                        accessibilityLabel="Create account"
                      >
                        {loading ? (
                          <ActivityIndicator color="#fff" />
                        ) : (
                          <Text style={[styles.buttonText, { color: COLORS.bg }]}>Sign Up</Text>
                        )}
                      </TouchableOpacity>

                      {/* SUW graphic under Sign Up button */}
                      <Image
                        source={require("../../assets/images/icons/SUW.png")}
                        style={styles.suw}
                        resizeMode="contain"
                      />

                      {/* Social icons row: Apple, Google (G), Instagram */}
                      <View style={styles.socialRow}>
                        <TouchableOpacity accessibilityLabel="Sign up with Apple">
                          <Image
                            source={require("../../assets/images/apple.png")}
                            style={styles.socialIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>

                        <TouchableOpacity accessibilityLabel="Sign up with Google">
                          <Image
                            source={require("../../assets/images/google.png")}
                            style={styles.socialIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>

                        <TouchableOpacity accessibilityLabel="Sign up with Instagram">
                          <Image
                            source={require("../../assets/images/insta.png")}
                            style={styles.socialIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      </View>

                      <View style={styles.footer}>
                          <Text style={styles.footerText}>Already have an account?</Text>
                          <TouchableOpacity
                          onPress={() => {
                              // navigate to SignUpIndividual screen
                              router.back('sign-in')
                          }}
                          >
                          <Text style={[styles.link]}> Sign In</Text>
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

  container: { 
    flex: 1, 
    backgroundColor: COLORS.white
  },

  inner: { 
    flex: 1, 
    padding: 16, 
    justifyContent: "center" 
  },

  headerTitle: {
    color: COLORS.text,
    lineHeight: 20,
    marginHorizontal: 68,
    textAlign: 'center',
    marginBottom: 56,
  },
  form: {
    //backgroundColor: COLORS.white,
    //borderRadius: 12,
    //shadowColor: "#000",
    //shadowOpacity: 0.05,
    //shadowRadius: 10,
    //elevation: 3,
  },
  label: {
    fontSize: 16,
    color: COLORS.muted,
    marginBottom: 8,
  },

  input: {
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
  error: { color: COLORS.danger, marginTop: 6, fontSize: 12 },

  error2: { 
    color: COLORS.danger,
    marginTop: -6, 
    fontSize: 12 
  },

  passwordRow: { },
  passwordInput: { flex: 1 },
  showBtn: { paddingHorizontal: 10, paddingVertical: 6 },

  eye: {
    width: 22, 
    height: 22, 
    position: 'absolute', 
    right: 16, 
    bottom: 24 
  },
  
  button: {
    marginTop: 56,
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

  logo: { 
    width: 162,
    height: 63,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 8,
  },

  dropdownButton: { justifyContent: "center" },
  dropdownText: { color: COLORS.bg, textAlign: 'center' },
  dropdownList: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginTop: 6,
    paddingVertical: 6,
  },
  dropdownItem: { paddingVertical: 8, paddingHorizontal: 12 },
  checkboxRow: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkboxTick: { color: "#fff", fontSize: 12, fontWeight: "700" },
  checkboxLabel: { color: '#F76D1B' },
  suw: { width: 320, height: 56, alignSelf: "center", marginTop: 18 },
  socialRow: { flexDirection: "row", justifyContent: "center", marginTop: 12 },
  socialIcon: { width: 56, height: 48, marginHorizontal: 10 },

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
