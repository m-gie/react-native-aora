import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const VideoCard = ({ video }) => {
  const [play, setPlay] = useState(false);
  //   console.log(video.users.avatar);
  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex flex-row flex-1 justify-center items-center">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary-100 justify-center items-center p-0.5">
            <Image
              source={{ uri: video.users.avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {video.title}
            </Text>
            <Text
              className="text-gray-100 text-xs font-pregular"
              numberOfLines={1}
            >
              {video.users.username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Text>Playing</Text>
      ) : (
        <TouchableOpacity
          className="w-full h-60 rounded-xl relative justify-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: video.thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="absolute w-12 h-12"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
