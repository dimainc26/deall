<template>
  <Page actionBarHidden="true" backgroundColor="white">
    <GridLayout rows="*, 70">
      <StackLayout row="0" class="wel-container" orientation="vertical">
      <Label class="fas topbrowse">
        <FormattedString>
          <Span text.decode="&#xf0a8; \t" />
        </FormattedString>
      </Label>

      <AbsoluteLayout class="tr-container">
        <Image src="res://a" class="tr-img" />
        <Label text="Product Designer (UI)" class="tr-title" />
        <Label class="tr-txt">
          <FormattedString>
            <Span text="Deall Jobs \t " />
            <Span text.decode="&#xf002;" />
          </FormattedString>
        </Label>
      </AbsoluteLayout>

      <StackLayout orientation="vertical" class="fast-container">
        <Label>
          <FormattedString>
            <Span text.decode="&#xf002; \t " />
            <Span text="1-3 YoE" />
          </FormattedString>
        </Label>
        <Label>
          <FormattedString>
            <Span text.decode="&#xf002; \t " />
            <Span text="Full Time - Remote" />
          </FormattedString>
        </Label>
        <Label>
          <FormattedString>
            <Span text.decode="&#xf002; \t " />
            <Span text="Negotiable" />
          </FormattedString>
        </Label>
      </StackLayout>

      <Label class="priority-slots">
        <FormattedString>
          <Span text.decode="&#xf002; \t " />
          <Span text="6 priority slots left" />
        </FormattedString>
      </Label>

      <StackLayout class="foryou-top" orientation="horizontal">
        <Label class="jobs-top fas m10 m-selsected">
          <FormattedString>
            <Span text="Curated for you" />
          </FormattedString>
        </Label>
        <Label class="jobs-top fas m10">
          <FormattedString>
            <Span text="About Company" />
          </FormattedString>
        </Label>
      </StackLayout>

      <!-- About content -->

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
          <ScrollView orientation="vertical">
            <StackLayout orientation="vertical">
              <StackLayout class="part-container">
                <Label class="part-title" text="Job Description" />
                <Label
                  class="part-txt"
                  textWrap="true"
                  text="Olalal adlcm scqaklnclc qckimekci cikcmqec ikcjmkacmcmwekmcaemckemwkmkc scmwkmkew olala"
                />
              </StackLayout>

              <StackLayout class="part-container">
                <Label class="part-title" text="Requirements" />
                <Label
                  class="part-txt"
                  textWrap="true"
                  text="Olalal adlcm scqaklnclc qckimekci cikcmqec ikcjmkacmcmwekmcaemckemwkmkc scmwkmkew olala"
                />
              </StackLayout>

              <StackLayout class="part-container">
                <Label class="part-title" text="Skills Needed" />

                <WrapLayout class="filters">
                  <Label class="filter-txt fas bg-reverse">
                    <FormattedString>
                      <Span text.decode="&#xf044; \t " />
                      <Span text="\t  Filters" />
                    </FormattedString>
                  </Label>
                </WrapLayout>
              </StackLayout>

              <StackLayout class="part-container bg-reverse">
                <Label class="part-title" text="Similar Jobs" />
                <ScrollView orientation="horizontal">
                  <StackLayout class="similar-jobs" orientation="horizontal">
                    <ForYou />
                  </StackLayout>
                </ScrollView>
              </StackLayout>
            </StackLayout>
          </ScrollView>
        </CarouselItem>
        <CarouselItem id="slide2" verticalAlignment="middle">
          <ScrollView orientation="vertical">
            <StackLayout orientation="vertical">
              <StackLayout class="part-container">
                <Label class="part-title" text="Overview" />
                <Label
                  class="part-txt"
                  textWrap="true"
                  text="Olalal adlcm scqaklnclc qckimekci cikcmqec ikcjmkacmcmwekmcaemckemwkmkc scmwkmkew olala"
                />
              </StackLayout>

              <StackLayout class="part-container">
                <Label class="part-title" text="Insight" />
                <Label
                  class="part-txt"
                  textWrap="true"
                  text="Olalal adlcm scqaklnclc qckimekci cikcmqec ikcjmkacmcmwekmcaemckemwkmkc scmwkmkew olala"
                />
              </StackLayout>

              <StackLayout class="part-container">
                <Label class="part-title" text="Our Team" />

                <StackLayout class="filters" width="100%" >
                  <StackLayout width="100%" orientation="horizontal" >
                    <Image src="res://a" class="team-img" />
                    <StackLayout orientation="vertical" >
                      <Label text="Zanre Mahamadi" class="team-title" />
                      <Label text="Chief Executive Officer" class="team-txt" />
                    </StackLayout>
                    <Image src="res://b" class="team-socialimg" />
                  </StackLayout>
                </StackLayout>
              </StackLayout>

              <StackLayout class="part-container">
                <Label class="part-title" text="Culture" />
                <Label
                  class="part-txt"
                  textWrap="true"
                  text="Olalal adlcm scqaklnclc qckimekci cikcmqec ikcjmkacmcmwekmcaemckemwkmkc scmwkmkew olala"
                />
              </StackLayout>

              <StackLayout class="part-container bg-reverse">
                <Label class="part-title" text="Similar Jobs" />
                <ScrollView orientation="horizontal">
                  <StackLayout class="similar-jobs" orientation="horizontal">
                    <ForYou />
                  </StackLayout>
                </ScrollView>
              </StackLayout>
            </StackLayout>
          </ScrollView>
        </CarouselItem>
      </Carousel>
    </StackLayout>

    <FlexboxLayout row="1" class="bar-filter">
      <Button class="fas circle-btn gray" text.decode="&#xf02e;" />
      <Button class="fas circle-btn gray" text.decode="&#xf1e0;" />
      <Button text="Easy Apply" @tap="filterModal" class="large-btn" width="65%" />
    </FlexboxLayout>

    

    </GridLayout>
  </Page>
</template>

<script src="../js/browse_detail.js"></script>

<style>
@import "../android.scss";
</style>
