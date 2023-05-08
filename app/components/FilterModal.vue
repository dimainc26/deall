<template>
  <Page actionBarHidden="true"  >
    <StackLayout class="modal-container" >
      <FlexboxLayout class="modal-top">
        <Label text="Filter" class="modal-title" />
        <Label text="Reset" class="modal-cmd" />
      </FlexboxLayout>
      <StackLayout class="filter-forms">
        <Label text="Sort By" class="modal-txt" />
        <DropDown
          @selectedIndexChanged="unityChanged"
          class="modal-dropdown"
          :items="sortList"
          selectedIndex="0"
        />
      </StackLayout>
      <StackLayout class="filter-forms">
        <Label text="Location" class="modal-txt" />
        <WrapLayout class="filters">
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="Remote" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="On-site" />
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
      </StackLayout>

      <StackLayout class="filter-forms">
        <Label text="Graduated & Experienced" class="modal-txt" />
        <WrapLayout class="filters">
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="0 Year" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="1- 3 Years" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="4 - 5 Years" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="5+ Years" />
            </FormattedString>
          </Label>
        </WrapLayout>
      </StackLayout>

      <StackLayout class="filter-forms">
        <Label text="College Students" class="modal-txt" />
        <WrapLayout class="filters">
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="1st Year" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="2nd Year" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="3 Year" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="3+ Year" />
            </FormattedString>
          </Label>
        </WrapLayout>
      </StackLayout>

      <StackLayout class="filter-forms">
        <FlexboxLayout class="modal-more" >
          <Label text="Benefits" class="modal-txt" />
          <Label text="See More" class="modal-cmd" />
        </FlexboxLayout>
        <WrapLayout class="filters">
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text.decode="&#xf044; \t " />
              <Span text="Medical Insurance" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text.decode="&#xf044; \t " />
              <Span text="Paid Sick Days" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text.decode="&#xf044; \t " />
              <Span text="Free Lunch" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text.decode="&#xf044; \t " />
              <Span text="Elevated Rang" />
            </FormattedString>
          </Label>
        </WrapLayout>
      </StackLayout>

      <StackLayout class="filter-forms">
        <FlexboxLayout class="modal-more">
          <Label text="City" class="modal-txt" />
          <Label text="See More" class="modal-cmd" />
        </FlexboxLayout>
        <WrapLayout class="filters">
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="Pordenone" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="Portogruaro" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="Treviso" />
            </FormattedString>
          </Label>
          <Label class="filter-txt fas">
            <FormattedString>
              <Span text="Udine" />
            </FormattedString>
          </Label>
        </WrapLayout>
      </StackLayout>

      <StackLayout class="filter-forms">
        <Label text="Salary" class="modal-txt" />
        <FlexboxLayout class="modal-more" >
          <Label text="Min. 0$ " class="modal-txt" />
          <Label text="Max. 99 999$ " class="modal-cmd" />
        </FlexboxLayout>

        <Slider ref="modal-slider" value="10" minValue="0" maxValue="100" class="modal-slider"  />
        

        <StackLayout orientation="horizontal">
          <CheckBox :checked="isChecked" @checkedChange="isChecked = $event.value" />
          <Label text="Include Negotiable Salary" />
        </StackLayout>
      </StackLayout>

      <Button @tap="saveFilter" class="large-btn" height="50" text="Apply Filter" />


    </StackLayout>
  </Page>
</template>

<script src="../js/filter_modal.js"></script>

<style>
@import "../android.scss";
</style>
