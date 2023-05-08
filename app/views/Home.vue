<template>
  <Page actionBarHidden="true">
    <AbsoluteLayout width="100%" height="100%">
      <GridLayout width="100%" height="100%" rows="120, *, 70">
        <StackLayout row="0" class="nav-bar" orientation="horizontal">
          <Label textWrap="true" class="nav-notice">
            <FormattedString>
              <Span text="12.3X higher chance" class="nav-big" />
              <Span text=" to work in top companies" />
            </FormattedString>
          </Label>
          <AbsoluteLayout class="nav-btns">
            <Label text.decode="&#xf002;" class="fas nav-btn" />
            <Label text.decode="&#xf249;" class="fas nav-btn notice" />
            <Label text.decode="&#xf111;" class="fas note" />
          </AbsoluteLayout>
        </StackLayout>

        <!-- alternate Component  -->
        <ScrollView row="1" orientation="vertical">
          <StackLayout orientation="vertical" class="scroll">
            <Label class="info" textWrap="true">
              <FormattedString>
                <Span
                  text="Update your CV to get priority slots & exclusive job offers \n "
                />
                <Span text="Upload Now" class="yellow" />
              </FormattedString>
            </Label>

            <FlexboxLayout class="status">
              <StackLayout class="left-status" orientation="horizontal">
                <Image src="res://a" class="status-img" />
                <Label text="Not open" class="status-title" />
              </StackLayout>
              <Label text.decode="&#xf044;" class="fas status-btn" />
            </FlexboxLayout>

            <StackLayout class="foryou" orientation="vertical">
              <FlexboxLayout class="foryou-top">
                <Label class="foryou-txt fas">
                  <FormattedString>
                    <Span text="Curated for you \t " />
                    <Span text.decode="&#xf044;" />
                  </FormattedString>
                </Label>

                <Button class="fas foryou-btn" @tap="curatedJobs" text.decode="&#xf105;" />
              </FlexboxLayout>

              <!-- Component -->
              <ForYou />
            </StackLayout>

            <StackLayout class="foryou" orientation="vertical">
              <FlexboxLayout class="foryou-top">
                <Label class="foryou-txt fas">
                  <FormattedString>
                    <Span text="Exciting roles here \t " />
                    <Span text.decode="&#xf044;" />
                  </FormattedString>
                </Label>
              </FlexboxLayout>

              <!-- Component -->
              <Jobs />
            </StackLayout>

            <StackLayout class="foryou" orientation="vertical">
              <WrapLayout class="filters">
                <Label class="filter-txt fas">
                  <FormattedString>
                    <Span text.decode="&#xf044; \t " />
                    <Span text="\t  Filters" />
                  </FormattedString>
                </Label>
                <Label class="filter-txt fas">
                  <FormattedString>
                    <Span text="Remote" />
                  </FormattedString>
                </Label>
                <Label class="filter-txt fas">
                  <FormattedString>
                    <Span text="Full Time" />
                  </FormattedString>
                </Label>
                <Label class="filter-txt fas">
                  <FormattedString>
                    <Span text="Part Time" />
                  </FormattedString>
                </Label>
              </WrapLayout>

              <Filters />
            </StackLayout>
          </StackLayout>
        </ScrollView>

        <FlexboxLayout row="2" >
          <MDBottomNavigationBar
            class="bottom-nav"
            @tabSelected="onBottomNavigationTabSelected"
            titleVisibility="false"
          >
            <MDBottomNavigationTab title="Explore" icon="res://a" />
            <MDBottomNavigationTab title="My Jobs" icon="res://c" isSelectable="true" />
            <MDBottomNavigationTab title="Company" icon="res://b" />
            <MDBottomNavigationTab title="Profile" icon="res://a" />
          </MDBottomNavigationBar>
        </FlexboxLayout>
      </GridLayout>

      <Fab text.decode="&#xf077;" class="fab-button fas" />
    </AbsoluteLayout>
  </Page>
</template>

<script src="../js/home.js"></script>

<style>
@import "../android.scss";
</style>
