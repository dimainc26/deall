<template>
  <Page actionBarHidden="true">
    <GridLayout rows="220, *, 140" width="100%" height="100%">
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

        <Label
          text="Your profile will visible to top recruiters"
          class="title m10"
          textWrap="true"
        />

        <AbsoluteLayout class="recommandation" height="100%">
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
      </StackLayout>
      <FlexboxLayout row="1" class="fields">

        <AbsoluteLayout class="field">
          <TextField returnKeyType="next" hint="Zanre Mahamadi" class="input" />
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
          <TextField
            returnKeyType="next"
            hint="********"
            class="input"
          />
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
          <TextField
            returnKeyType="go"
            hint="1 800 $"
            class="input"
          />
          <Label text="Minimum Salary Entry" class="label" />
        </AbsoluteLayout>
      </FlexboxLayout>

      <FlexboxLayout row="2" class="back" >
        <Button text="Back" class="large-btn down"   />
        <Button text="Next" class="large-btn"  />
      </FlexboxLayout>
    </GridLayout>
  </Page>
</template>

<script src="../js/skills.js"></script>

<style>
@import "../android.scss";
</style>
