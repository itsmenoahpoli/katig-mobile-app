import React from "react";
import DateTimePicker, {
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { View, Text, Pressable, StyleSheet } from "react-native";
import type { CreateBookingData } from "@@types/booking";

type Props = {
  onCreateBooking: (bookingData: CreateBookingData) => Promise<void>;
};

type RouteLocations = {
  from: string;
  to: string;
};

const locationsOptions = [
  { label: "-", value: "" },
  { label: "Maniwaya", value: "maniwaya" },
  { label: "Polo", value: "polo" },
  { label: "Mongpong", value: "mongpong" },
  { label: "Buyabod", value: "buyabod" },
];

const pickerStyle = StyleSheet.create({
  picker: {
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const CreateBookingForm: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateBookingData>();
  const fromValue = watch("from");

  const [locations, setLocations] = React.useState<RouteLocations>({
    from: "",
    to: "",
  });
  const [datepickerOpen, setDatepickerOpen] = React.useState<boolean>(false);
  const [passengersOpen, setPassengersOpen] = React.useState<boolean>(true);

  const filteredToLocations = locationsOptions.filter(
    (location) => location.value !== fromValue
  );
  const handleSetLocation = (type: "from" | "to", location: string) => {
    setValue(type, location);
    setLocations({
      ...locations,
      [type]: location,
    });
  };

  const handleToggleDatepickerShow = () => {
    setDatepickerOpen((prevState) => !prevState);
  };

  const handleSetDate = (event: DateTimePickerEvent, selectedDate: any) => {
    setValue("departureDate", format(new Date(selectedDate), "MMMM dd, yyyy"));
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
        <View className="flex flex-col mb-2">
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">FROM</Text>
            <View className="px-3">
              <Picker
                selectedValue={locations.from}
                mode="dialog"
                style={[pickerStyle.picker, { height: 30, marginTop: -15 }]}
                onValueChange={(itemValue) =>
                  handleSetLocation("from", itemValue)
                }
              >
                {locationsOptions.map((location) => (
                  <Picker.Item
                    style={pickerStyle.picker}
                    key={location.value}
                    label={location.label}
                    value={location.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-lg py-3 mb-2">
            <Text className="text-xs text-gray-500 font-bold ml-3">TO</Text>
            <View className="px-3">
              <Picker
                selectedValue={locations.to}
                mode="dialog"
                style={[pickerStyle.picker, { height: 30, marginTop: -15 }]}
                onValueChange={(itemValue) =>
                  handleSetLocation("to", itemValue)
                }
              >
                {filteredToLocations.map((location) => (
                  <Picker.Item
                    style={pickerStyle.picker}
                    key={location.value}
                    label={location.label}
                    value={location.value}
                  />
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

        <View className="w-full bg-orange-100 border border-orange-200 rounded-xl p-3 mb-4">
          <Text className="text-xs">
            Regular schedule of trips is scheduled from 5:00am to 5:00pm
          </Text>
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
