import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Image, ScrollView } from "native-base";
import { DataTable } from "react-native-paper";

const AssemblyNonPPRReturnValve = () => {
  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/cvu.png",
          }}
          height={300}
          width={Dimensions.get("window").width}
          alt="valve-body"
        />
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={{ fontSize: 14 }}>Art-No.</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={{ fontSize: 14 }}>Dimension</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{ fontSize: 14 }}>Packing Unit</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{ fontSize: 14 }}>Kg/Piece</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>
              <Text>S1-20</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>20 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>10 pcs</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.010</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ backgroundColor: "#f0f0f0" }}>
            <DataTable.Cell>
              <Text>S1-25</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>25 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>10 pcs</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.015</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>
              <Text>S1-32</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>32 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>5 pcs</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.025</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ backgroundColor: "#f0f0f0" }}>
            <DataTable.Cell>
              <Text>S1-40</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>40 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>5 pcs</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.042</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>
              <Text>S1-50</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>50 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>5 pcs</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.081</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{ backgroundColor: "#f0f0f0" }}>
            <DataTable.Cell>
              <Text>S1-63</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>63 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>1 pc</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.141</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text>S1-75</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>75 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>1 pc</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.200</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ backgroundColor: "#f0f0f0" }}>
            <DataTable.Cell>
              <Text>S1-90</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>90 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>1 pc</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.318</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text>S1-110</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>110 mm</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ left: 20 }}>
              <Text>1 pc</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text>0.563</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default AssemblyNonPPRReturnValve;
