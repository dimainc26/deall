<template>
  <Page actionBarHidden="true">
   <StackLayout class="wel-container" background="linear-gradient(to top, #2427a5, #151651)"  orientation="vertical" >
    <Label text="Hi Zanre" class="wel-title"/>
    <Label text="Your registration is succesfull!" class="wel-msg"/>
    <Image src="res://a" class="wel-img"/>
    <Label text="Unlock job offers by completing your profile and let 450+ companies approach you!" textWrap="true" class="wel-desc"/>
    <Button text.decode="&#xf061;" @tap="skills" class="fas circle-btn"/>
   </StackLayout>
  </Page>
</template>

<script src="../js/welcome.js">

</script>

<style>
@import "../android.scss";

</style>