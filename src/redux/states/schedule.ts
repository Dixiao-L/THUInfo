import {Exam, Lesson} from "../../helper/src";

export interface PrimarySchedule {
	primary: Lesson[];
	exam: Exam[];
}

export interface SecondarySchedule {
	secondary: Lesson[];
}

export interface CustomSchedule {
	custom: Lesson[];
}

export interface Schedule
	extends PrimarySchedule,
		SecondarySchedule,
		CustomSchedule {
	cache: string;
	primaryRefreshing: boolean;
	secondaryRefreshing: boolean;
	shortenMap: {[key: string]: string};
	hiddenRules: Lesson[];
}
