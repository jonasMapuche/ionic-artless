<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button id="setting-alert">
            <ion-icon slot="icon-only" :md="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-alert class="setting"
          trigger="setting-alert"
          :buttons="alertSetting">
        </ion-alert>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item button lines="full" class="list">
        <ion-label>&nbsp;</ion-label>
      </ion-item>
      
      <ion-item button lines="full" class="list">
        <ion-label>&nbsp;</ion-label>
      </ion-item>
      
      <ion-item button lines="full" class="list">
        <ion-label>&nbsp;</ion-label>
      </ion-item>

      <ion-item button lines="full" class="list">
        <ion-label>&nbsp;</ion-label>
      </ion-item>

      <ion-item button lines="full" class="list">
        <ion-label>&nbsp;</ion-label>
      </ion-item>

      <ion-item button lines="full" class="list">
        <ion-label>&nbsp;</ion-label>
      </ion-item>

      <ion-item button lines="full" class="list">
        <ion-label>&nbsp;</ion-label>
      </ion-item>

        <ion-item button lines="full" class="list">
        <ion-label>&nbsp;</ion-label>
      </ion-item>

    </ion-content>

    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button class="fab">
        <ion-icon :md="add" @click="() => {router.push('/bot');}"></ion-icon>
      </ion-fab-button>
    </ion-fab>
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
  IonAlert,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton
} from '@ionic/vue';
import { 
  ellipsisVertical, 
  add } 
from 'ionicons/icons';

const alertSetting = [
  {
      text: 'Setting',
      handler: () => {
        router.push('/setting');
      }
    }
  ];
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

.fab {
  --background: #03d9c4;
  --background-activated: #03d9c4;
  --background-hover: #03d9c4;
  --color: #374955;
}

.list {
  --background: #374955;
  --color: #ffffff;
  --border-color: #ffffff;
  --border-width: 5px;
  --border-radius: 25px;
  --inner-padding-top: 20px;
  font-weight: 500;
  min-height: 20px;
  font-size: 15px;
}

</style>
