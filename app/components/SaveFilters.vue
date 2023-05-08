<template>
  <Page actionBarHidden="true" height="35%" >
    <StackLayout class="modal-container"  >
      <FlexboxLayout class="modal-top">
        <Label text="Job Seeking Status" class="modal-title" />
      </FlexboxLayout>
      <FlexboxLayout class="modal-checks">
        <StackLayout orientation="vertical" class="modal-save" >
          <Label text="Yes, actively looking" class="modal-text" />
          <Label text="Receive exclusive jobs invites and contacted by employers." textWrap="true" class="modal-desc" />
        </StackLayout>
        <CheckBox boxType="circle" class="modal-radio" :checked="isChecked" @checkedChange="isChecked = $event.value" />
      </FlexboxLayout>
      <FlexboxLayout class="modal-checks">
        <StackLayout orientation="vertical" class="modal-save" >
          <Label text="Yes, actively looking" class="modal-text" />
          <Label text="Receive exclusive jobs invites and contacted by employers." textWrap="true" class="modal-desc" />
        </StackLayout>
        <CheckBox boxType="circle" class="modal-radio" :checked="isChecked" @checkedChange="isChecked = $event.value" />
      </FlexboxLayout>
      <FlexboxLayout class="modal-checks">
        <StackLayout orientation="vertical" class="modal-save" >
          <Label text="Yes, actively looking" class="modal-text" />
          <Label text="Receive exclusive jobs invites and contacted by employers." textWrap="true" class="modal-desc" />
        </StackLayout>
        <CheckBox boxType="circle" class="modal-radio" :checked="isChecked" @checkedChange="isChecked = $event.value" />
      </FlexboxLayout>

      <Button  class="large-btn" height="50" text="Save" />

    </StackLayout>
  </Page>
</template>

<script src="../js/save_filters.js"></script>

<style>
@import "../android.scss";
</style>
