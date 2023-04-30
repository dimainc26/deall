<template>
  <Page actionBarHidden="true">
    <AbsoluteLayout class="reg-container" background="linear-gradient(to right, #2427a5, #151651)"  >
        <Label text="<" class="tiny-btn" />
        <Label text="Become the V.I.P candidate" class="title reg" />
        <Label text="Exclusive career portal for African's top talent" class="reg-desc" textWrap="true" />

        <GridLayout rows="6*, 120, *" class="form" >
            <FlexboxLayout row="0" class="fields">

                <AbsoluteLayout class="field">
                <TextField  returnKeyType="next" hint="Zanre Mahamadi" class="input" />
                <Label text="Full Name" class="label"/>
                </AbsoluteLayout>

                <AbsoluteLayout class="field">
                    <TextField  returnKeyType="next" hint="email@email.com" class="input" />
                    <Label text="E-mail" class="label"/>
                </AbsoluteLayout>

                <AbsoluteLayout class="field">
                    <Label text.decode="&#xf070;" class="fas secure" />
                    <TextField returnKeyType="next" secure="true" hint="********" class="input" />
                    <Label text="Password" class="label"/>
                </AbsoluteLayout>

                <AbsoluteLayout class="field">
                    <Label text.decode="&#xf070;" class="fas secure" />
                    <TextField returnKeyType="go" secure="true" hint="********" class="input" />
                    <Label text="Confirn Password" class="label"/>
                </AbsoluteLayout>

            </FlexboxLayout>
            <StackLayout row="1" class="reg-btn" orientation="vertical">
                <Button class="large-btn" text="Next" @tap="welcome" />
                <Label class="exist">
                    <FormattedString>
                        <Span text="Already have an account? "/>
                        <Span text=" Sign in" class="exist-1"/>
                    </FormattedString>
                </Label>
            </StackLayout>
        </GridLayout>
    </AbsoluteLayout>
  </Page>
</template>

<script src="../js/register.js">

</script>

<style>
@import "../android.scss";

</style>