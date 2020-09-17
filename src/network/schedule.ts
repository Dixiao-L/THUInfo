import {connect, retrieve, retryWrapper} from "./core";
import {
	COURSE_SELECT_ENTRY,
	INFO_ROOT_URL,
	JXRL_MIDDLE,
	JXRL_PREFIX,
	JXRL_SUFFIX,
	SECONDARY_PREFIX,
	SECONDARY_SUFFIX,
} from "../constants/strings";
import {parseJSON, parseScript} from "../models/schedule/schedule";
import {Calendar} from "../utils/calendar";
import {mocked} from "../redux/store";

export const getSchedule = () => {
	const format = (c: Calendar) => c.format("YYYYMMDD");
	const groupSize = 3; // Make sure that `groupSize` is a divisor of `Calendar.weekCount`.
	return mocked()
		? Promise.resolve([
				[
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 1,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 1,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 1,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 1,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 1,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 1,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 1,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 2,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 2,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 2,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 2,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 2,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 2,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 2,
					},
					{
						begin: 1,
						dayOfWeek: 7,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 2,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 3,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 3,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 3,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 3,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 3,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 3,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 4,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 4,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 4,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 4,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 4,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 4,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 4,
					},
					{
						begin: 3,
						dayOfWeek: 6,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 4,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 5,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 5,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 5,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 5,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 5,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 5,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 5,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 6,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 6,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 6,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 6,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 6,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 6,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 6,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 7,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 7,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 7,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 7,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 7,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 7,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 7,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 8,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 8,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 8,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 8,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 8,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 8,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 8,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 9,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 9,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 9,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 9,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 9,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 9,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 9,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 10,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 10,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 10,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 10,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 10,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 10,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 10,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 11,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 11,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 11,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 11,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 11,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 11,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 11,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 12,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 12,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 12,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 12,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 12,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 12,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 12,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 13,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 13,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 13,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 13,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 13,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 13,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 13,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 14,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 14,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 14,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 14,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 14,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 14,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 14,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 15,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 15,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 15,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 15,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 15,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 15,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 15,
					},
					{
						begin: 1,
						dayOfWeek: 1,
						end: 2,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 16,
					},
					{
						begin: 3,
						dayOfWeek: 1,
						end: 5,
						locale: "明理楼214",
						title: "电子学基础",
						type: 0,
						week: 16,
					},
					{
						begin: 8,
						dayOfWeek: 1,
						end: 10,
						locale: "五教5103",
						title: "马克思主义基本原理",
						type: 0,
						week: 16,
					},
					{
						begin: 1,
						dayOfWeek: 3,
						end: 2,
						locale: "六教6C202",
						title: "复变函数引论",
						type: 0,
						week: 16,
					},
					{
						begin: 3,
						dayOfWeek: 3,
						end: 4,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 16,
					},
					{
						begin: 3,
						dayOfWeek: 4,
						end: 4,
						locale: "六教6A214",
						title: "大学物理B(2)",
						type: 0,
						week: 16,
					},
					{
						begin: 1,
						dayOfWeek: 5,
						end: 2,
						locale: "六教6A018",
						title: "数据结构",
						type: 0,
						week: 16,
					},
				],
				[],
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  ])
		: retryWrapper(
				792,
				Promise.all(
					Array.from(new Array(Calendar.weekCount / groupSize), (_, id) =>
						retrieve(
							JXRL_PREFIX +
								format(new Calendar(id * groupSize + 1, 1)) +
								JXRL_MIDDLE +
								format(new Calendar((id + 1) * groupSize, 7)) +
								JXRL_SUFFIX,
							INFO_ROOT_URL,
						),
					),
				)
					.then((results) =>
						results
							.map((s) => {
								if (s[0] !== "m") {
									throw 0;
								}
								return s.substring(s.indexOf("[") + 1, s.lastIndexOf("]"));
							})
							.filter((s) => s.trim().length > 0)
							.join(","),
					)
					.then((str) => JSON.parse(`[${str}]`))
					.then(parseJSON),
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  );
};

export const getSecondary = () =>
	mocked()
		? Promise.resolve([])
		: connect(COURSE_SELECT_ENTRY, INFO_ROOT_URL)
				.then(() =>
					retrieve(
						SECONDARY_PREFIX + Calendar.semesterId + SECONDARY_SUFFIX,
						COURSE_SELECT_ENTRY,
						undefined,
						"GBK",
					),
				)
				.then((str) => {
					const lowerBound = str.indexOf("function setInitValue");
					const upperBound = str.indexOf("}", lowerBound);
					return parseScript(str.substring(lowerBound, upperBound));
				});
