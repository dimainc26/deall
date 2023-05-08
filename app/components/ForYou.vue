<template>
  <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false" >
    <StackLayout orientation="horizontal">

      <StackLayout class="foryou-container" @tap="viewJob" v-for="(prior, index) in priorities" :key="index" orientation="vertical">
        <Label class="priority-txt fas">
          <FormattedString>
            <Span text.decode="&#xf002; " class="fas fa priority-icon" />
            <Span text=" 5 priority slots left" />
          </FormattedString>
        </Label>
        <FlexboxLayout class="priority-fav">
          <Image :src="prior.img" class="fav-img" />
          <Label text.decode="&#xf02e;" class="fav fas" />
        </FlexboxLayout>

        <Label
          text="Operations Specialist (Product Enablement)"
          class="priority-title"
          textWrap="true"
        />

        <Label class="priority-mandator fas">
          <FormattedString>
            <Span :text="prior.mandatory" />
            <Span text.decode="&#xf058;" />
          </FormattedString>
        </Label>

        <FlexboxLayout class="priority-infos">
          <Label class="priority-info fas">
            <FormattedString>
              <Span text.decode="&#xf041;" />
              <Span :text="`\t` + prior.link" />
            </FormattedString>
          </Label>
          <Label class="priority-info fas">
            <FormattedString>
              <Span text.decode="&#xf0f2;" />
              <Span :text="`\t` + prior.time" />
            </FormattedString>
          </Label>
          <Label class="priority-info fas">
            <FormattedString>
              <Span text.decode="&#xf0d6;" />
              <Span :text="`\t` +  prior.pay" />
            </FormattedString>
          </Label>
        </FlexboxLayout>
      </StackLayout>


    </StackLayout>
  </ScrollView>
</template>

<script src="../js/foryou.js"></script>

<style>
@import "../android.scss";
</style>
