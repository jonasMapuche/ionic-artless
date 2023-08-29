<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start" @click="HomePage">
            <ion-icon :md="arrowBackOutline" class="back"></ion-icon>
          </ion-buttons>
          <ion-title></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-item button lines="full" class="head">
          <ion-label>About</ion-label>
        </ion-item>
        <ion-text class="list">
          Project bot artless
        </ion-text>
      </ion-content>
    </ion-page>                   
</template>
  
<script setup lang="ts">
  import router from '@/app.router';
  import { IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonText,
    IonBackButton
  } from '@ionic/vue';
import { arrowBackOutline } from 'ionicons/icons';
</script>

<script lang="ts">

  export const HomePage = () => {
      router.push('/home');
  };
  
</script>
  
<style scoped>
ion-content {
    --background: #ffffff;
  }
  
  ion-toolbar {
    --background: #374955;
  }
  
  ion-toolbar {
    --color: #03d9c4;
  } 
  
  .setting {
    --background: #ffffff;
    --height: 80px;
    --width: 40px;
  }
  
  .head {
    --background: #374955;
    --color: #ffffff;
    --border-color: #ffffff;
    --border-width: 0px;
    --border-radius: 0px;
    --inner-padding-top: 20px;
    font-weight: 500;
    min-height: 20px;
    font-size: 15px;
  }

  .list {
    background: #374955;
    color: #ffffff;
    position: absolute;
    left: 10px;
    right: 10px;
    top: 140px;
    border-radius: 25px;
    height: 75%;
    padding-top: 30px;
    padding-left: 20px;
    font-weight: 500;
    min-height: 20px;
    font-size: 15px;
  }
  
  .back {
    color: #03d9c4;
    width: 50px;
    font-size: 25px;
  }
  
</style>
  