import React from "react";
import DateTimePicker, {
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useForm } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import type { CreateBookingData } from "@@types/booking";

type Props = {
  onCreateBooking: (bookingData: CreateBookingData) => Promise<void>;
};

const locationsOptions = [
  { label: "Maniwaya", value: "maniwaya" },
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

  const [locations, setLocations] = React.useState<{
    from: string;
    to: string;
  }>({ from: "", to: "" });
  const [datepickerOpen, setDatepickerOpen] = React.useState<boolean>(false);
  const [passengersOpen, setPassengersOpen] = React.useState<boolean>(true);

  // TODO: add modal for setting passengers

  // const getToLocations = () => {
  //   return locations.filter((location) => location.value !== fromValue);
  // };

  const handleSetLocation = (type: "from" | "to", location: string) => {
    //
  };

  const handleToggleDatepickerShow = () => {
    setDatepickerOpen((prevState) => !prevState);
  };

  const handleSetDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    console.log(selectedDate);
    setValue("departureDate", selectedDate as any);
    setDatepickerOpen(false);
  };

  const handleCreateBooking = handleSubmit(async (formData) => {
    return await props.onCreateBooking(formData);
  });

  return (
    <>
      {datepickerOpen ? (
        <DateTimePicker
          value={new Date()}
          mode="date"
          is24Hour={false}
          onChange={handleSetDate}
        />
      ) : null}
      <View className="flex flex-col justify-between">
        <View className="flex flex-col mb-4">
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">FROM</Text>
            <View className="px-3"></View>
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">TO</Text>
            <View className="px-3">
              <Picker
                selectedValue={""}
                onValueChange={(itemValue) =>
                  handleSetLocation("from", itemValue)
                }
              >
                {locationsOptions.map((location) => (
                  <Picker.Item label={location.label} value={location.value} />
                ))}
              </Picker>
            </View>
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">
              DEPARTURE DATE
            </Text>
            <Pressable onPress={handleToggleDatepickerShow}>
              <Text className="text-xs text-blue-500 font-bold ml-3">
                Select Date
              </Text>
            </Pressable>
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">
              PASSENGER TYPE
            </Text>
            <Pressable onPress={handleToggleDatepickerShow}>
              <Text className="text-xs text-blue-500 font-bold ml-3">
                Set Passengers
              </Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          className="h-[40px] w-full bg-primary rounded-lg justify-center items-center"
          onPress={handleCreateBooking}
        >
          <Text className="text-md text-white font-bold">Book Now</Text>
        </Pressable>
      </View>
    </>
  );
};
