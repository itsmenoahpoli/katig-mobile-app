import React from "react";
import { View, RefreshControl, ScrollView } from "react-native";
import { HomeNavigation, PopularDestinationsSlider } from "@components/index";

export default (): JSX.Element => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      className="flex-1 p-4"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="flex flex-col space-y-4">
        <View>
          <HomeNavigation />
        </View>

        <View>
          <PopularDestinationsSlider />
        </View>
      </View>
    </ScrollView>
  );
};
