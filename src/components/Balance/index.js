import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";
export default function Balance({ saldo, gastos }) {
  return (
    <MotiView
      style={styles.container}
      from={{ rotateX: "-100deg", opacity: 0 }}
      animate={{ rotateX: "0deg", opacity: 1 }}
      transition={{ type: "timing", duration: 900, delay: 300 }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expense}>{gastos}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingBottom: 22,
    paddingTop: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: "#dadada",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#dadada",
    marginRight: 22,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expense: {
    fontSize: 22,
    color: "#e74c3c",
  },
});
