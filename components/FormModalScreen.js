import React, { useState } from 'react';
import { ScrollView, View, TextInput, StyleSheet, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { backgroundColor, primaryFont } from './utils';

const FormModalScreen = ({ navigation }) => {

  const [city, setCity] = useState('Northglenn');
  const [stateCode, setStateCode] = useState('CO');
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);

  const [singleFamily, setSingleFamily] = useState(null);
  const [multiFamily, setMultiFamily] = useState(null);
  const [condo, setCondo] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [land, setLand] = useState(null);
  const [farm, setFarm] = useState(null);
  const [other, setOther] = useState(null);

  const handleSubmit = () => {
    if (minPrice > maxPrice) {
      Alert.alert('Max Price must be greater than Min Price');
    } else {

      const searchCriteria = {
        city,
        stateCode,
        minPrice,
        maxPrice,
        bedrooms,
        bathrooms,
        propTypes: {
          singleFamily,
          multiFamily,
          condo,
          mobile,
          land,
          farm,
          other
        }
      }
      navigation.navigate('Search', { searchCriteria });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={[styles.text, styles.bold]}>City</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder='Northglenn'
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.bold]}>State</Text>
        <Picker
          onPress={() => console.log('hello world')}
          selectedValue={stateCode}
          mode=''
          onValueChange={(itemValue, itemIndex) =>
            setStateCode(itemValue)
          }>
          <Picker.Item label="Alabama" value="AL" />
          <Picker.Item label="Alaska" value="AK" />
          <Picker.Item label="Arizona" value="AZ" />
          <Picker.Item label="Arkansas" value="AR" />
          <Picker.Item label="California" value="CA" />
          <Picker.Item label="Colorado" value="CO" />
          <Picker.Item label="Connecticut" value="CT" />
          <Picker.Item label="Delaware" value="DE" />
          <Picker.Item label="Florida" value="FL" />
          <Picker.Item label="Georgia" value="GA" />
          <Picker.Item label="Hawaii" value="HI" />
          <Picker.Item label="Idaho" value="ID" />
          <Picker.Item label="Illinois" value="IL" />
          <Picker.Item label="Indiana" value="IN" />
          <Picker.Item label="Iowa" value="IA" />
          <Picker.Item label="Kansas" value="KS" />
          <Picker.Item label="Kentucky" value="KY" />
          <Picker.Item label="Louisiana" value="LA" />
          <Picker.Item label="Maine" value="ME" />
          <Picker.Item label="Maryland" value="MD" />
          <Picker.Item label="Massachusetts" value="MA" />
          <Picker.Item label="Michigan" value="MI" />
          <Picker.Item label="Minnesota" value="MN" />
          <Picker.Item label="Mississippi" value="MS" />
          <Picker.Item label="Missouri" value="MO" />
          <Picker.Item label="Montana" value="MT" />
          <Picker.Item label="Nebraska" value="NE" />
          <Picker.Item label="Nevada" value="NV" />
          <Picker.Item label="New Hampshire" value="NH" />
          <Picker.Item label="New Jersey" value="NJ" />
          <Picker.Item label="New Mexico" value="NM" />
          <Picker.Item label="New York" value="NY" />
          <Picker.Item label="North Carolina" value="NC" />
          <Picker.Item label="Ohio" value="OH" />
          <Picker.Item label="Oklahoma" value="OK" />
          <Picker.Item label="Oregon" value="OR" />
          <Picker.Item label="Pennsylvania" value="PA" />
          <Picker.Item label="Rhode Island" value="RI" />
          <Picker.Item label="South Carolina" value="SC" />
          <Picker.Item label="South Dakota" value="SD" />
          <Picker.Item label="Tennessee" value="TN" />
          <Picker.Item label="Texas" value="TX" />
          <Picker.Item label="Utah" value="UT" />
          <Picker.Item label="Vermont" value="VT" />
          <Picker.Item label="Virginia" value="VA" />
          <Picker.Item label="Washington" value="WA" />
          <Picker.Item label="West Virginia" value="WV" />
          <Picker.Item label="Wisconsin" value="WI" />
          <Picker.Item label="Wyoming" value="WY" />
        </Picker>
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.bold]}>Home Types</Text>
        <View style={styles.homeTypes}>
          <View style={styles.switch}>
            <Text style={styles.text}>Single-Family Homes</Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={setSingleFamily}
              value={singleFamily}
            />
          </View>
          <View style={styles.switch}>
            <Text style={styles.text}>Multi-Family Homes</Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={setMultiFamily}
              value={multiFamily}
            />
          </View>
          <View style={styles.switch}>
            <Text style={styles.text}>Condos/Townhomes</Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={setCondo}
              value={condo}
            />
          </View>
          <View style={styles.switch}>
            <Text style={styles.text}>Mobile Homes</Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={setMobile}
              value={mobile}
            />
          </View>
          <View style={styles.switch}>
            <Text style={styles.text}>Land Lots</Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={setLand}
              value={land}
            />
          </View>
          <View style={styles.switch}>
            <Text style={styles.text}>Farms</Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={setFarm}
              value={farm}
            />
          </View>
          <View style={styles.switch}>
            <Text style={styles.text}>Other</Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={setOther}
              value={other}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.bold]}>Price</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.pricePicker}
            onPress={() => console.log('hello world')}
            selectedValue={minPrice}
            mode=''
            onValueChange={(itemValue, itemIndex) =>
              setMinPrice(itemValue)
            }>
            <Picker.Item label="No Min" value={null} />
            <Picker.Item label="$50k" value="50000" />
            <Picker.Item label="$100k" value="100000" />
            <Picker.Item label="$125k" value="120000" />
            <Picker.Item label="$150k" value="150000" />
            <Picker.Item label="$175k" value="170000" />
            <Picker.Item label="$200k" value="200000" />
            <Picker.Item label="$225k" value="220000" />
            <Picker.Item label="$250k" value="250000" />
            <Picker.Item label="$275k" value="275000" />
            <Picker.Item label="$300k" value="300000" />
            <Picker.Item label="$325k" value="325000" />
            <Picker.Item label="$350k" value="350000" />
            <Picker.Item label="$375k" value="375000" />
            <Picker.Item label="$400k" value="400000" />
            <Picker.Item label="$425k" value="425000" />
            <Picker.Item label="$450k" value="450000" />
            <Picker.Item label="$475k" value="475000" />
            <Picker.Item label="$500k" value="500000" />
            <Picker.Item label="$525k" value="525000" />
            <Picker.Item label="$550k" value="550000" />
            <Picker.Item label="$575k" value="575000" />
            <Picker.Item label="$600k" value="600000" />
            <Picker.Item label="$625k" value="625000" />
            <Picker.Item label="$650k" value="650000" />
            <Picker.Item label="$675k" value="675000" />
            <Picker.Item label="$700k" value="700000" />
            <Picker.Item label="$725k" value="725000" />
            <Picker.Item label="$750k" value="750000" />
            <Picker.Item label="$775k" value="775000" />
            <Picker.Item label="$800k" value="800000" />
            <Picker.Item label="$825k" value="825000" />
            <Picker.Item label="$850k" value="850000" />
            <Picker.Item label="$875k" value="875000" />
            <Picker.Item label="$900k" value="900000" />
            <Picker.Item label="$925k" value="925000" />
            <Picker.Item label="$950k" value="950000" />
            <Picker.Item label="$975k" value="975000" />
            <Picker.Item label="$1M" value="1000000" />
            <Picker.Item label="$1.5M" value="1000500" />
            <Picker.Item label="$2M" value="2000000" />
            <Picker.Item label="$2.5M" value="2000500" />
            <Picker.Item label="$3M" value="3000000" />
            <Picker.Item label="$3.5M" value="3000500" />
            <Picker.Item label="$4M" value="4000000" />
            <Picker.Item label="$4.5M" value="4000500" />
            <Picker.Item label="$5M" value="5000000" />
            <Picker.Item label="$5.5M" value="5000500" />
            <Picker.Item label="$6M" value="6000000" />
            <Picker.Item label="$6.5M" value="6000500" />
            <Picker.Item label="$7M" value="7000000" />
            <Picker.Item label="$7.5M" value="7000500" />
            <Picker.Item label="$8M" value="8000000" />
            <Picker.Item label="$8.5M" value="8000500" />
            <Picker.Item label="$9M" value="9000000" />
            <Picker.Item label="$9.5M" value="9000500" />
            <Picker.Item label="$10M" value="10000000" />
          </Picker>
          <Text style={[styles.text, styles.priceText]}>to</Text>
          <Picker
            style={styles.pricePicker}
            onPress={() => console.log('hello world')}
            selectedValue={maxPrice}
            mode=''
            onValueChange={(itemValue, itemIndex) =>
              setMaxPrice(itemValue)
            }>
            <Picker.Item label="No Max" value={null} />
            <Picker.Item label="$100k" value="100000" />
            <Picker.Item label="$125k" value="120000" />
            <Picker.Item label="$150k" value="150000" />
            <Picker.Item label="$175k" value="170000" />
            <Picker.Item label="$200k" value="200000" />
            <Picker.Item label="$225k" value="220000" />
            <Picker.Item label="$250k" value="250000" />
            <Picker.Item label="$275k" value="275000" />
            <Picker.Item label="$300k" value="300000" />
            <Picker.Item label="$325k" value="325000" />
            <Picker.Item label="$350k" value="350000" />
            <Picker.Item label="$375k" value="375000" />
            <Picker.Item label="$400k" value="400000" />
            <Picker.Item label="$425k" value="425000" />
            <Picker.Item label="$450k" value="450000" />
            <Picker.Item label="$475k" value="475000" />
            <Picker.Item label="$500k" value="500000" />
            <Picker.Item label="$525k" value="525000" />
            <Picker.Item label="$550k" value="550000" />
            <Picker.Item label="$575k" value="575000" />
            <Picker.Item label="$600k" value="600000" />
            <Picker.Item label="$625k" value="625000" />
            <Picker.Item label="$650k" value="650000" />
            <Picker.Item label="$675k" value="675000" />
            <Picker.Item label="$700k" value="700000" />
            <Picker.Item label="$725k" value="725000" />
            <Picker.Item label="$750k" value="750000" />
            <Picker.Item label="$775k" value="775000" />
            <Picker.Item label="$800k" value="800000" />
            <Picker.Item label="$825k" value="825000" />
            <Picker.Item label="$850k" value="850000" />
            <Picker.Item label="$875k" value="875000" />
            <Picker.Item label="$900k" value="900000" />
            <Picker.Item label="$925k" value="925000" />
            <Picker.Item label="$950k" value="950000" />
            <Picker.Item label="$975k" value="975000" />
            <Picker.Item label="$1M" value="1000000" />
            <Picker.Item label="$1.5M" value="1000500" />
            <Picker.Item label="$2M" value="2000000" />
            <Picker.Item label="$2.5M" value="2000500" />
            <Picker.Item label="$3M" value="3000000" />
            <Picker.Item label="$3.5M" value="3000500" />
            <Picker.Item label="$4M" value="4000000" />
            <Picker.Item label="$4.5M" value="4000500" />
            <Picker.Item label="$5M" value="5000000" />
            <Picker.Item label="$5.5M" value="5000500" />
            <Picker.Item label="$6M" value="6000000" />
            <Picker.Item label="$6.5M" value="6000500" />
            <Picker.Item label="$7M" value="7000000" />
            <Picker.Item label="$7.5M" value="7000500" />
            <Picker.Item label="$8M" value="8000000" />
            <Picker.Item label="$8.5M" value="8000500" />
            <Picker.Item label="$9M" value="9000000" />
            <Picker.Item label="$9.5M" value="9000500" />
            <Picker.Item label="$10M" value="10000000" />
          </Picker>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.bold]}>Min Bedrooms</Text>
          <TextInput
            style={styles.input}
            value={bedrooms}
            onChangeText={setBedrooms}
            placeholder='Any'
            keyboardType='number-pad'
          />
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.bold]}>Min Bathrooms</Text>
          <TextInput
            style={styles.input}
            value={bathrooms}
            onChangeText={setBathrooms}
            placeholder='Any'
            keyboardType='number-pad'
          />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={[styles.text, styles.bold]}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 30
  },
  input: {
    height: 44,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    marginBottom: 30,
    marginTop: 10
  },
  text: {
    fontFamily: primaryFont,
    fontSize: 16
  },
  priceText: {
    marginLeft: 10,
    marginRight: 10
  },
  bold: {
    fontWeight: '700',
    fontSize: 20
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pricePicker: {
    width: 100,
  },
  section: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  homeTypes: {
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    marginTop: 20,
    marginBottom: 100,
    backgroundColor: 'white',
    height: 44,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FormModalScreen;