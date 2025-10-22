import { Image, Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { banners } from "../utils/banners";
import { useState } from "react";

const { width } = Dimensions.get("window");

export function Slides() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Carousel
        width={width}
        height={258}
        autoPlay
        autoPlayInterval={3000}
        data={banners}
        loop
        pagingEnabled
        snapEnabled
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        scrollAnimationDuration={300}
        onProgressChange={(_, absoluteProgress) =>
          setActiveIndex(Math.round(absoluteProgress))
        }
        renderItem={({ item }) => (
          <Image
            source={item.image}
            className="w-full h-full rounded-2xl object-cover"
          />
        )}
      />

      <View className="flex-row mt-3 justify-center items-center">
        {banners.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full mx-1 ${
              activeIndex === index ? "bg-green-600 w-5" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </View>
    </>
  );
}
