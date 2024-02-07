import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MusicPlayer = () => {
  const [isPlaying, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
    //Добавь код для управления воспроизведением аудио//
  };

  return (
    <View style={style.player}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Now Playing</Text>
      <TouchableOpacity onPress={handlePlayPause}>
        <Text style={{ color: "blue", fontSize: 18 }}>
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  player: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MusicPlayer;
