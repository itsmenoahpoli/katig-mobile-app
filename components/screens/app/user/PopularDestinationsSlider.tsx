import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  type ImageSourcePropType,
} from "react-native";
import { imageAssets } from "@assets/index";

type DestinationCardProps = {
  title: string;
  image: ImageSourcePropType;
};

const destinations: DestinationCardProps[] = [
  {
    title: "Maniyawa Island",
    image: imageAssets.destinationImg1,
  },
  {
    title: "Mongpong Island",
    image: imageAssets.destinationImg2,
  },
];

const DestinationCard: React.FC<DestinationCardProps> = (props) => {
  return (
    <View className="flex flex-col space-y-2 mr-5">
      <Image source={props.image} className="h-[120px] w-[240px] rounded-xl" />
      <Text className="text-md font-bold">{props.title}</Text>
    </View>
  );
};

export const PopularDestinationsSlider: React.FC = () => {
  return (
    <View className="flex flex-col space-y-2">
      <Text className="text-lg font-bold">Popular Destinations</Text>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View className="flex flex-row">
          {destinations.map((destination: DestinationCardProps) => (
            <DestinationCard
              key={destination.title}
              title={destination.title}
              image={destination.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
