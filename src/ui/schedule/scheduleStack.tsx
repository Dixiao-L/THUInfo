import React from "react";
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import {ScheduleScreen} from "./schedule";
import {getStr} from "../../utils/i18n";
import {ScheduleShortenScreen} from "./scheduleShorten";

type ScheduleStackParamList = {
	Schedule: undefined;
	ScheduleShorten: undefined;
};

const Stack = createStackNavigator<ScheduleStackParamList>();

export type ScheduleNav = StackNavigationProp<ScheduleStackParamList>;

export const ScheduleStackScreen = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Schedule"
			component={ScheduleScreen}
			options={{title: getStr("schedule")}}
		/>
		<Stack.Screen
			name="ScheduleShorten"
			component={ScheduleShortenScreen}
			options={{title: getStr("scheduleCustomShorten")}}
		/>
	</Stack.Navigator>
);
