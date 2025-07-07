import FeatureTitle from "@/src/components/FeatureTitle";
import LoanCard from "@/src/components/LoanCard";
import { useColors } from "@/src/constants/Colors";
import { Avatar } from "@/src/constants/Image";
import { Sizes } from "@/src/constants/Sizes";
import { isTablet } from "@/src/constants/Values";
import { useGetLoans } from "@/src/hooks/useLoan";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Index = () => {
  const { bottom } = useSafeAreaInsets();
  const colors = useColors();

  const { data, refetch, isFetching, isRefetching } = useGetLoans();
  const numColumns = isTablet ? 2 : 1;

  return (
    <SafeAreaView
      style={{
        // flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          paddingTop: Sizes.padding.small,
          paddingHorizontal: Sizes.padding.medium,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            gap: Sizes.padding.small,
          }}
        >
          <Image
            source={Avatar}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: "500",
                fontSize: Sizes.font.large,
                color: colors.dark,
              }}
            >
              Hello, Abdulquadri
            </Text>
            <Text
              style={{
                fontWeight: "300",
                fontSize: 14,
                color: colors.dark,
              }}
            >
              Welcome to quickcheck
            </Text>
          </View>
        </View>
        <Pressable>
          <AntDesign
            name="bells"
            color={colors.dark}
            size={Sizes.icon.medium}
          />
        </Pressable>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{
          gap: Sizes.padding.small,
          paddingBottom: bottom + Sizes.padding.normal,
          paddingHorizontal: Sizes.padding.medium,
        }}
        refreshControl={
          <RefreshControl
            tintColor={colors.primary}
            refreshing={isRefetching}
            onRefresh={refetch}
            colors={[colors.primary]}
          />
        }
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={
          numColumns === 2
            ? {
                gap: Sizes.margin.normal,
              }
            : undefined
        }
        ListHeaderComponent={() =>
          data &&
          data.length > 0 && (
            <>
              <FeatureTitle
                title="Featured Loan"
                onPress={() => router.push("/")}
              />
              <FlatList
                data={data.slice(0, 3)}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: Sizes.margin.normal,
                }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <LoanCard item={item} isLarge={false} />
                )}
              />
              <FeatureTitle
                title="Flexible Offers"
                onPress={() => router.push("/")}
              />
            </>
          )
        }
        ListEmptyComponent={() =>
          isFetching ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator color={colors.primary} size="large" />
            </View>
          ) : (
            <View>
              <Text>No Loan Yet</Text>
            </View>
          )
        }
        renderItem={({ item }) => <LoanCard item={item} isLarge={true} />}
      />
    </SafeAreaView>
  );
};
export default Index;
