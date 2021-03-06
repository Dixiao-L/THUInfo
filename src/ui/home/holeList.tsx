import React, {useContext, useEffect, useState} from "react";
import {
	FlatList,
	Image,
	Pressable,
	RefreshControl,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import {getHoleList, holeConfig, holeLogin} from "../../network/hole";
import {FetchMode, HoleTitleCard} from "../../models/home/hole";
import Snackbar from "react-native-snackbar";
import {getStr} from "../../utils/i18n";
import {NetworkRetry} from "../../components/easySnackbars";
import {ThemeContext} from "../../assets/themes/context";
import themes from "../../assets/themes/themes";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TimeAgo from "react-native-timeago";
import {HoleMarkdown} from "../../components/home/hole";
import {HomeNav} from "./homeStack";
import {Material} from "../../constants/styles";
import Feather from "react-native-vector-icons/Feather";

export const HoleListScreen = ({navigation}: {navigation: HomeNav}) => {
	const [data, setData] = useState<HoleTitleCard[]>([]);
	const [refreshing, setRefreshing] = useState(true);
	const [page, setPage] = useState(1);
	const [fetchMode, setFetchMode] = useState(FetchMode.NORMAL);
	const [payload, setPayload] = useState("");
	const [searchContent, setSearchContent] = useState("");

	const themeName = useContext(ThemeContext);
	const theme = themes[themeName];

	const firstFetch = (
		mode: FetchMode = FetchMode.NORMAL,
		fetchPayload: string = "",
	) => {
		setPage(1);
		setRefreshing(true);
		getHoleList(mode, 1, fetchPayload)
			.then((r) => setData(r))
			.catch((err) => {
				if (typeof err === "string") {
					holeLogin()
						.then(() =>
							Snackbar.show({text: err, duration: Snackbar.LENGTH_SHORT}),
						)
						.catch(() =>
							Snackbar.show({
								text: getStr("holePleaseSetToken"),
								duration: Snackbar.LENGTH_LONG,
							}),
						);
				} else {
					NetworkRetry();
				}
			})
			.then(() => setRefreshing(false));
	};

	useEffect(firstFetch, []);

	return (
		<>
			<View
				style={{
					paddingHorizontal: 15,
					paddingVertical: 8,
					flexDirection: "row",
					alignItems: "center",
				}}>
				<Pressable
					onPress={() => {
						setFetchMode(FetchMode.NORMAL);
						firstFetch(FetchMode.NORMAL);
					}}
					style={({pressed}) => ({
						padding: 10,
						marginHorizontal: 2,
						backgroundColor: pressed ? "#eee" : "white",
					})}>
					<Feather name="refresh-cw" size={20} />
				</Pressable>
				<Pressable
					onPress={() => {
						setFetchMode(FetchMode.ATTENTION);
						firstFetch(FetchMode.ATTENTION);
					}}
					style={({pressed}) => ({
						padding: 10,
						marginHorizontal: 2,
						backgroundColor: pressed ? "#eee" : "white",
					})}>
					<Feather name="bookmark" size={20} />
				</Pressable>
				<Pressable
					onPress={() => {
						setFetchMode(FetchMode.SEARCH);
						setPayload("热榜");
						firstFetch(FetchMode.SEARCH, "热榜");
					}}
					style={({pressed}) => ({
						padding: 10,
						marginHorizontal: 2,
						backgroundColor: pressed ? "#eee" : "white",
					})}>
					<FontAwesome name="fire" size={20} />
				</Pressable>
				<TextInput
					style={{
						flex: 1,
						marginHorizontal: 3,
						backgroundColor: "#eee",
					}}
					value={searchContent}
					onChangeText={setSearchContent}
				/>
				<Pressable
					onPress={() => {
						setFetchMode(FetchMode.SEARCH);
						setPayload(searchContent);
						firstFetch(FetchMode.SEARCH, searchContent);
					}}
					style={({pressed}) => ({
						padding: 10,
						marginHorizontal: 2,
						backgroundColor: pressed ? "#eee" : "white",
					})}>
					<FontAwesome name="search" size={20} />
				</Pressable>
			</View>
			<FlatList
				data={data}
				renderItem={({item}) => {
					const needFold = holeConfig.foldTags.includes(item.tag);
					return (
						<TouchableOpacity
							style={Material.card}
							onPress={() => navigation.navigate("HoleDetail", item)}>
							<View
								style={{flexDirection: "row", justifyContent: "space-between"}}>
								<View style={{flexDirection: "row", alignItems: "center"}}>
									<Text
										style={{
											fontWeight: "bold",
											marginVertical: 2,
										}}>{`#${item.pid}`}</Text>
									{item.tag && item.tag !== "折叠" && (
										<View
											style={{
												backgroundColor: "#00c",
												borderRadius: 4,
												marginLeft: 5,
												paddingHorizontal: 4,
											}}>
											<Text style={{color: "white", fontWeight: "bold"}}>
												{item.tag}
											</Text>
										</View>
									)}
									<Text> </Text>
									<TimeAgo time={item.timestamp * 1000} />
								</View>
								<View style={{flexDirection: "row", alignItems: "center"}}>
									{needFold && <Text> 已隐藏</Text>}
									{!needFold && item.reply > 0 && (
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Text>{item.reply}</Text>
											<Icon name="comment" size={12} />
										</View>
									)}
									{!needFold && item.likenum > 0 && (
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Text>{item.likenum}</Text>
											<Icon name="star-o" size={12} />
										</View>
									)}
								</View>
							</View>
							{needFold || (
								<HoleMarkdown
									text={item.text}
									navigationHandler={(pid) =>
										navigation.navigate("HoleDetail", {pid, lazy: true})
									}
								/>
							)}
							{!needFold && item.type === "image" && (
								<Pressable
									onPress={() =>
										navigation.navigate("HoleImage", {
											url: holeConfig.imageBase + item.url,
										})
									}>
									<Image
										source={{uri: holeConfig.imageBase + item.url}}
										style={{height: 400}}
										resizeMode="contain"
									/>
								</Pressable>
							)}
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item) => `${item.pid}`}
				onEndReachedThreshold={0.5}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={() => firstFetch(fetchMode, payload)}
						colors={[theme.colors.accent]}
					/>
				}
				onEndReached={() => {
					setRefreshing(true);
					getHoleList(fetchMode, page + 1, "")
						.then((r) =>
							setData((o) =>
								o.concat(r.filter((it) => it.pid < o[o.length - 1].pid)),
							),
						)
						.catch(NetworkRetry)
						.then(() => setRefreshing(false));
					setPage((p) => p + 1);
				}}
			/>
		</>
	);
};
