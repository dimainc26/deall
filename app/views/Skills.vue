<template>
  <Page actionBarHidden="true">
    <GridLayout rows="70, *, 90" width="100%" height="100%">
      <StackLayout row="0" orientation="vertical" width="100%" height="100%">
        <FlexboxLayout class="skills-top">
          <FlexboxLayout class="skills-nav">
            <Label text.decode="&#xf058;" class="fas checked" />
            <Label text="Profile" class="skills-group" />
          </FlexboxLayout>
          <FlexboxLayout class="skills-nav">
            <Label text.decode="&#xf111;" class="fas checked" />
            <Label text="Career Preference" class="skills-group" />
          </FlexboxLayout>
          <FlexboxLayout class="skills-nav">
            <Label text.decode="&#xf111;" class="fas checked" />
            <Label text="Docs" class="skills-group" />
          </FlexboxLayout>
        </FlexboxLayout>
      </StackLayout>
      <StackLayout row="1">
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
            <Label
              text="Your profile will visible to top recruiters"
              class="title m10"
              textWrap="true"
            />
            <AbsoluteLayout class="recommandation">
              <Label text.decode="&#xf05a;" class="fas icon" />
              <Label class="rec-desc" textWrap="true">
                <FormattedString>
                  <Span
                    text="Your minimum salary seems to be higher than the industry standard average, usually it will be around "
                    class="rec-desc"
                  />
                  <Span text="Rp8.600.000" class="bold" />
                  <Span text=" \n Use reccomandation" class="rec-click" />
                </FormattedString>
              </Label>
              <Label text.decode="&#xf00d;" class="fas close" />
            </AbsoluteLayout>

            <FlexboxLayout class="fields" height="90%">
              <AbsoluteLayout class="field">
                <TextField
                  returnKeyType="next"
                  hint="Zanre Mahamadi"
                  class="input"
                />
                <Label text="Full Name" class="label" />
              </AbsoluteLayout>

              <AbsoluteLayout class="field">
                <TextField
                  returnKeyType="next"
                  hint="+226 00 00 00 00"
                  class="input"
                />
                <Label text="Whatsapp Number" class="label" />
              </AbsoluteLayout>

              <AbsoluteLayout class="field">
                <Label text.decode="&#xf070;" class="fas secure" />
                <TextField returnKeyType="next" hint="********" class="input" />
                <Label text="Most Recent Role & Company" class="label" />
              </AbsoluteLayout>

              <AbsoluteLayout class="field">
                <Label text.decode="&#xf070;" class="fas secure" />
                <TextField
                  returnKeyType="next"
                  hint="Licence 3 2018"
                  class="input"
                />
                <Label text="Bachelor Degree Entry Year" class="label" />
              </AbsoluteLayout>

              <AbsoluteLayout class="field">
                <Label text.decode="&#xf070;" class="fas secure" />
                <TextField returnKeyType="go" hint="1 800 $" class="input" />
                <Label text="Minimum Salary Entry" class="label" />
              </AbsoluteLayout>
            </FlexboxLayout>
          </CarouselItem>
          <CarouselItem id="slide2" verticalAlignment="middle">
            <Label
              text="Are you currently looking for new opportunities? "
              class="title m10"
              textWrap="true"
            />

            <StackLayout class="opportunities">
              <StackLayout
                class="opp"
                v-for="(opp, index) in opportunities"
                :key="index"
                orientation="horizontal"
              >
                <Label :text="opp.icon" class="fas fa opp-icon" />
                <label class="opp-txt" textWrap="true">
                  <FormattedString>
                    <Span :text="opp.title" class="opp-title" />
                    <Span :text="`\n ` + opp.desc" class="opp-desc" />
                  </FormattedString>
                </label>
              </StackLayout>
            </StackLayout>
          </CarouselItem>
          <CarouselItem id="slide3" verticalAlignment="middle">
            <Label
              text="What kind of roles are you open to?"
              class="title m10"
              marginRight="50"
              textWrap="true"
            />

            <StackLayout
              class="skill-search"
              margin="18 12"
              borderRadius="16"
              backgroundColor="white"
              height="50"
              orientation="horizontal"
            >
              <Label text.decode="&#xf007;" class="fas mini" />
              <TextField hint="Enter your role..." class="search-field" />
              <Label text.decode="&#xf00d;" class="fas mini" />
            </StackLayout>

            <Label text="Suggestions" class="sug" />

            <WrapLayout class="skills-box">
              <StackLayout
                :class="comp.check ? 'comp' : 'comp-black'"
                orientation="horizontal"
                v-for="(comp, index) in competences"
                :key="index"
              >
                <Label :text="comp.title" class="comp-txt" />
                <Label
                  v-if="comp.check"
                  text.decode="&#xf00c;"
                  class="fas mini"
                />
                <Label v-else text.decode="&#xf00d;" class="fas mini" />
              </StackLayout>
            </WrapLayout>
          </CarouselItem>
          <CarouselItem id="slide4" verticalAlignment="middle">
            <Label
              text="What industry do you prefer to work in?"
              class="title m10"
              marginRight="50"
              textWrap="true"
            />

            <StackLayout
              class="skill-search"
              margin="18 12"
              borderRadius="16"
              backgroundColor="white"
              height="50"
              orientation="horizontal"
            >
              <Label text.decode="&#xf007;" class="fas mini" />
              <TextField hint="Enter your role..." class="search-field" />
              <Label text.decode="&#xf00d;" class="fas mini" />
            </StackLayout>

            <Label text="Suggestions" class="sug" />

            <WrapLayout class="skills-box">
              <StackLayout
                :class="comp.check ? 'comp' : 'comp-black'"
                orientation="horizontal"
                v-for="(comp, index) in works"
                :key="index"
              >
                <Label :text="comp.title" class="comp-txt" />
                <Label
                  v-if="comp.check"
                  text.decode="&#xf00c;"
                  class="fas mini"
                />
                <Label v-else text.decode="&#xf00d;" class="fas mini" />
              </StackLayout>
            </WrapLayout>
          </CarouselItem>

          <CarouselItem id="slide5" verticalAlignment="middle">
            <Label
              text="Get Yyour CV Aanalyzed & receive job offers"
              class="title m10"
              marginRight="50"
              textWrap="true"
            />

            <Label
              text="There is no perfect CV, but uploading them now will allow you to get exclusive job offers. Plus, you can always reupload anytime!"
              textWrap="true"
              class="cvdesc"
            />

            <Label class="medium-title" text="CV" />

            <Button orientation="horizontal" class="cv-btn">
              <FormattedString>
                <Span text.decode="&#xf055;" class="fas cv-btn" />
                <Span text=" \t Upload your CV in PDF" class="cv-txt" />
                <Span text="\t     (max. 5 MB)" class="cv-info" />
              </FormattedString>
            </Button>

            <Label class="medium-title" text="Portofolio (optional)" />

            <StackLayout orientation="vertical" class="cv-btn long">
              <StackLayout orientation="horizontal" class="">
                <Label text=" URL Links" class="cv-txt" width="82%" />
                <Label text.decode="&#xf1ce;" class="fas cv-btn" />
              </StackLayout>

              <AbsoluteLayout class="cv-link">
                <Label text="https://" class="link-txt" />
                <TextField class="link-input" />
              </AbsoluteLayout>

              <Button class="icon-btn">
                <FormattedString>
                  <Span text.decode="&#xf1ce;" class="fas \t" />
                  <Span text="\t Add Another Link" class=" " />
                </FormattedString>
              </Button>
            </StackLayout>
            <StackLayout orientation="horizontal" class="cv-btn">
              <Label text=" File PDF" class="cv-txt" width="82%" />
              <Label text.decode="&#xf1ce;" class="fas cv-btn" />
            </StackLayout>
          </CarouselItem>
        </Carousel>
      </StackLayout>

      <FlexboxLayout row="2" class="back">
        <Button text="Back" class="large-btn down" />
        <Button text="Next" class="large-btn" />
      </FlexboxLayout>
    </GridLayout>
  </Page>
</template>

<script src="../js/skills.js"></script>

<style>
@import "../android.scss";
</style>
