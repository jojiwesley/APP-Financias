import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
const list = [
  {
    id: 1,
    label: "boleto conta luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Pix cliente x",
    value: "2.5000,00",
    date: "20/09/2022",
    type: 1, //receita
  },
  {
    id: 3,
    label: "salário",
    value: "7.200,00",
    date: "22/09/2022",
    type: 1, //receita
  },
];
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="joji wesley" />

      <Balance saldo="15.000,00" gastos="-527,00" />
      <Actions></Actions>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}></Movements>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginLeft: 14,
    marginRight: 14,
  },
});
