<template>
  <Page actionBarHidden="true">
    <GridLayout rows="70, *, 140">
      <FlexboxLayout row="0" class="top-bar">
        <Label class="title">
          <FormattedString>
            <Span text="Deall" class="title-1" />
            <Span text="!" class="title-2" />
          </FormattedString>
        </Label>
        <Label text="Skip >" class="skip" />
      </FlexboxLayout>

      <GridLayout row="1">
        <Carousel ref="myCarousel" v-if="hasItems" height="100%" width="100%" color="#6b6b6b" @pageChanged="myChangePageEvent" android:indicatorAnimation="slide" indicatorColor="#151651" indicatorOffset="0, -10" showIndicator="true">
        <CarouselItem v-for="(item, i) in onboardData" :key="i" :backgroundColor="item.color" verticalAlignment="middle" @tap="myTapPageEvent">
            <GridLayout rows="60, 120, *" >
                <AbsoluteLayout row="0" class="car-line">
                <Label row="0" :text="item.title" horizontalAlignment="left"  textWrap="true" class="car-title" />
                <Image src="res://line" class="line"/>
                </AbsoluteLayout>
                <Label row="1" :text="item.desc" horizontalAlignment="left"  textWrap="true" class="car-desc" />
                <Image row="2" :src="item.img" class="car-img" stretch="aspectFill" />
            </GridLayout>
        </CarouselItem>
    </Carousel>
      </GridLayout>

      <StackLayout row="2" class="bottom-btn" orientation="vertical">
        <Button text="Sign Up" class="large-btn" />
        <Button text="Login" class="large-btn login" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script src="../js/onboard.js"></script>

<style>
@import "../android.scss";
</style>
