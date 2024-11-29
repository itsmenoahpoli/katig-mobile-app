import React from "react";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker, { type DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useForm } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import type { CreateBookingData } from "@@types/booking";

type Props = {
  onCreateBooking: (bookingData: CreateBookingData) => Promise<void>;
};

const locations = [
  { label: "Maniyawa", value: "maniyawa" },
  { label: "Polo", value: "polo" },
  { label: "Mongpong", value: "mongpong" },
  { label: "Buyabod", value: "buyabod" },
];

export const CreateBookingForm: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateBookingData>();
  const fromValue = watch("from");

  const [datepickerOpen, setDatepickerOpen] = React.useState<boolean>(false);
  const [passengersOpen, setPassengersOpen] = React.useState<boolean>(true);

  // TODO: add modal for setting passengers

  const getToLocations = () => {
    return locations.filter((location) => location.value !== fromValue);
  };

  const handleToggleDatepickerShow = () => {
    setDatepickerOpen((prevState) => !prevState);
  };

  const handleSetDate = (event: DateTimePickerEvent, selectedDate: any) => {
    setValue("departureDate", selectedDate);
  };

  const handleCreateBooking = handleSubmit(async (formData) => {
    return await props.onCreateBooking(formData);
  });

  return (
    <>
      {datepickerOpen ? <DateTimePicker value={new Date()} mode="date" is24Hour={false} onChange={handleSetDate} /> : null}
      <View className="flex flex-col justify-between">
        <View className="flex flex-col mb-4">
          <Text className="text-xs font-bold mb-1">Select Locations</Text>
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">FROM</Text>
            <RNPickerSelect items={locations} onValueChange={(value: string) => setValue("from", value)} />
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">TO</Text>
            <RNPickerSelect items={getToLocations()} onValueChange={(value: string) => setValue("to", value)} />
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">DEPARTURE DATE</Text>
            <Pressable onPress={handleToggleDatepickerShow}>
              <Text className="text-xs text-blue-500 font-bold ml-3">Select Date</Text>
            </Pressable>
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">PASSENGER TYPE</Text>
            <Pressable onPress={handleToggleDatepickerShow}>
              <Text className="text-xs text-blue-500 font-bold ml-3">Set Passengers</Text>
            </Pressable>
          </View>
        </View>

        <Pressable className="h-[40px] w-full bg-primary rounded-lg justify-center items-center" onPress={handleCreateBooking}>
          <Text className="text-md text-white font-bold">Book Now</Text>
        </Pressable>
      </View>
    </>
  );
};
