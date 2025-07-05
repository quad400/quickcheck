import FeatureTitle from "@/src/components/FeatureTitle";
import LoanCard from "@/src/components/LoanCard";
import { Avatar } from "@/src/constants/Image";
import { Sizes } from "@/src/constants/Sizes";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Index() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          paddingVertical:Sizes.padding.small,
          paddingHorizontal:Sizes.padding.medium,
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
              }}
            >
              Hello, Abdulquadri
            </Text>
            <Text
              style={{
                fontWeight: "300",
                fontSize: 14,
              }}
            >
              Welcome to quickcheck
            </Text>
          </View>
        </View>
        <Pressable>
          <AntDesign name="bells" size={Sizes.icon.medium} />
        </Pressable>
      </View>
      <FlatList
        data={[1, 2, 4, 5, 6]}
        contentContainerStyle={{
          gap: Sizes.padding.small,
          paddingHorizontal: Sizes.padding.medium,
        }}
        keyExtractor={(item, index) => `${item}-${item ?? index}`}
        stickyHeaderHiddenOnScroll={true}
        stickyHeaderIndices={[0]}
        StickyHeaderComponent={() => (
          <>
            <View
              style={
                {
                  // gap: Sizes.margin.medium,
                }
              }
            >
              <FeatureTitle
                title="Featured Loan"
                onPress={() => router.push("/")}
              />
              <FlatList
                data={[1, 2, 3]}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: Sizes.margin.normal,
                }}
                renderItem={({ item }) => (
                  <LoanCard
                    amount={"3000"}
                    loanType="Personal Loan"
                    status="pending"
                    isLarge={false}
                  />
                )}
              />
            </View>
            <FeatureTitle
              title="Flexible Offers"
              onPress={() => router.push("/")}
            />
          </>
        )}
        renderItem={(item) => (
          <LoanCard
            amount={"3000"}
            loanType="Personal Loan"
            status="pending"
            isLarge={true}
          />
        )}
      />
    </SafeAreaView>
  );
}
