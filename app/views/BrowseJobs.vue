<template>
  <Page actionBarHidden="true">
    <StackLayout orientation="vertical">
      <Label class="fas topbrowse">
        <FormattedString>
          <Span text.decode="&#xf002; \t" />
          <Span text="Browse Jobs" />
        </FormattedString>
      </Label>

      <StackLayout class="foryou-top" orientation="horizontal">
        <Label class="jobs-top fas m10 selsected">
          <FormattedString>
            <Span text="Curated for you" />
          </FormattedString>
        </Label>
        <Label class="jobs-top fas m10">
          <FormattedString>
            <Span text="All Jobs" />
          </FormattedString>
        </Label>
      </StackLayout>

      <!-- Component Curated for you -->

      <Carousel
        height="100%"
        width="100%"
        @pageChanged="myChangePageEvent"
        pageTapped="mySelectedEvent"
        indicatorColor="#fff000"
        finite="true"
        bounce="false"
        showIndicator="false"
        verticalAlignment="top"
        android:indicatorAnimation="swap"
        color="white"
      >
        <CarouselItem id="slide1" verticalAlignment="middle">
          <Filters margin="auto, 16" />
        </CarouselItem>
        <CarouselItem id="slide2" verticalAlignment="middle">

          <StackLayout orientation="horizontal" >
            <StackLayout
              class="skill-search"
              margin="18 12"
              borderRadius="16"
              backgroundColor="white"
              height="50"
              orientation="horizontal"
              width="76%"
            >
              <Label text.decode="&#xf002;" class="fas mini" />
              <TextField hint="Enter your role..." class="search-field" />
              <Label text.decode="&#xf00d;" class="fas mini" />
            </StackLayout>

            <Label class="fas mini br" text.decode="&#xf0b0;"  />
          </StackLayout>

          <Filters margin="auto, 16" />
        </CarouselItem>
      </Carousel>
      
    </StackLayout>
  </Page>
</template>

<script src="../js/browse_jobs.js"></script>

<style>
@import "../android.scss";
</style>
