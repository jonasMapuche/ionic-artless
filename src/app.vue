<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list class="menu">
            <ion-list-header class="head"></ion-list-header>
            <ion-list-header class="icon"><ion-img class="image" src="../public/logo-snapchat.svg"></ion-img></ion-list-header>
            <ion-list-header class="note"><ion-note class="note">Welcome to Bot Artless</ion-note></ion-list-header>
            
            <ion-menu-toggle :auto-hide="false" v-for="(item, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="item.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :md="item.icon"></ion-icon>
                <ion-label class="label">{{ item.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          
          </ion-list>
          <ion-list class="exit">
            <ion-item lines="none">
              <ion-icon aria-hidden="true" slot="start" :md="exitOutline"></ion-icon>
              <ion-label class="label">Logout</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonImg
} from '@ionic/vue';
import { ref } from 'vue';
import {
  man,
  home,
  exitOutline
} from 'ionicons/icons';

const selectedIndex = ref(0);
const appPages = [
    { 
      title: 'Home', 
      url: '/home', 
      icon: home 
    },
    { 
      title: 'Bot', 
      url: '/bot', 
      icon: man
    }
  ];
  
</script>

<style scoped>
ion-content {
    --background: #ffffff;
}

ion-list {
    --ion-background-color: #ffffff;
}

.icon {
    --background: #03d9c4;
    --color: #01574f;
    width: 100%;
    height: 60px;
    --padding-start: 10px;
    --padding-top: 120px;
}

.note {
    --background: #03d9c4;
    --color: #01574f;
    width: 100%;
    height: 10px;
    font-size: 10px;
    --padding-start: 10px;
    font-weight: 500;
    min-height: 20px;
}

.head {
    --background: #03d9c4;
    --color: #01574f;
    width: 100%;
    height: 30px;
}


.image {
    width: 20%;
    background: #03d9c4;
}

.menu {
    border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

.label {
    font-weight: 500;
    color: #01574f;
    min-height: 20px;
    font-size: 15px;
}

</style>
