import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { colors } from "../../../src/theme/colors";

const CARD_PAIRS = ["🐶","🐱","🐸","🐵","🦊","🐼"];

export default function MemoriaJogo() {
  const [cards, setCards] = useState<any[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [errors, setErrors] = useState(0);
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const duplicated = [...CARD_PAIRS, ...CARD_PAIRS]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        flip: new Animated.Value(0)
      }));
    setCards(duplicated);
  }, []);

  function flipCard(cardIndex: number) {
    if (finished) return;
    if (selected.includes(cardIndex) || matched.includes(cardIndex)) return;

    const newSelected = [...selected, cardIndex];
    setSelected(newSelected);

    Animated.timing(cards[cardIndex].flip, {
      toValue: 1, duration: 250, useNativeDriver: true
    }).start();

    if (newSelected.length === 2) {
      setMoves(m => m + 1);

      const [first, second] = newSelected;
      if (cards[first].value === cards[second].value) {
        setMatched([...matched, first, second]);
        setSelected([]);

        if (matched.length + 2 === cards.length) {
          finishGame();
        }
      } else {
        setErrors(e => e + 1);
        setTimeout(() => {
          Animated.timing(cards[first].flip, {
            toValue: 0, duration: 250, useNativeDriver: true
          }).start();
          Animated.timing(cards[second].flip, {
            toValue: 0, duration: 250, useNativeDriver: true
          }).start();
          setSelected([]);
        }, 600);
      }
    }
  }

  function finishGame() {
    setFinished(true);
    const duration = (Date.now() - startTime) / 1000;
    console.log("RELATÓRIO JOGO DA MEMÓRIA:", {
      tempo: duration,
      movimentos: moves,
      erros: errors,
      precisão: `${(((moves - errors) / moves) * 100).toFixed(1)}%`
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memória</Text>

      <View style={styles.grid}>
        {cards.map((card, idx) => {
          const rotate = card.flip.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "180deg"]
          });

          const isFlipped = selected.includes(idx) || matched.includes(idx);

          return (
            <TouchableOpacity 
              key={idx}
              activeOpacity={0.8}
              style={styles.cardWrapper}
              onPress={() => flipCard(idx)}
            >
              <Animated.View style={[styles.card, { transform: [{ rotateY: rotate }] }]}>
                <Text style={styles.cardText}>{isFlipped ? card.value : "❓"}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>

      {finished && (
        <View style={styles.result}>
          <Text style={styles.resultText}>🎉 Parabéns!</Text>
          <Text style={styles.resultText}>Movimentos: {moves}</Text>
          <Text style={styles.resultText}>Erros: {errors}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: colors.primary
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10
  },
  cardWrapper: {
    width: "22%",
    aspectRatio: 1,
  },
  card: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 28,
    color: "#FFF"
  },
  result: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#EEE"
  },
  resultText: {
    textAlign: "center",
    fontSize: 16,
  }
});
