<template>
    <WrapLayout orientation="horizontal">
      <AbsoluteLayout class="jobs" v-for="(job, index) in jobs" :key="index" >
        <Label text="All Jobs" textWrap="true" class="jobs-title" />
        <Image src="res://a" class="jobs-img" />
      </AbsoluteLayout>
    </WrapLayout>
</template>

<script src="../js/jobs.js"></script>

<style>
@import "../android.scss";
</style>
