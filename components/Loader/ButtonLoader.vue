<template>
    <div class="custom-loader"></div>
</template>

<style scoped>
.custom-loader {
    width: 6px;
    height: 6px;
    background: #FFFFFF;
    border-radius: 50%;
    box-shadow: 10px 0 #FFFFFF22, -10px 0 #FFFFFF;
    animation: d5 1s infinite linear alternate;
}

@keyframes d5 {
    0% {
        box-shadow: 10px 0 #FFFFFF, -10px 0 #FFFFFF22;
        background: #FFFFFF
    }

    33% {
        box-shadow: 10px 0 #FFFFFF, -10px 0 #FFFFFF22;
        background: #FFFFFF22
    }

    66% {
        box-shadow: 10px 0 #FFFFFF22, -10px 0 #FFFFFF;
        background: #FFFFFF22
    }
}</style>