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
      <ion-item v-for="(item, i) in messages" button lines="full" class="list" :key="i" @click="ButtonBot(item.name[0])">
        <ion-label>{{item.name[0]}}</ion-label>
      </ion-item>
    </ion-content>

    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button class="fab">
        <ion-icon :md="add" @click="() => {router.push('/bot/null');}"></ion-icon>
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

  import { getArtless, getName } from '../service/http-artless';
  import { Artless, ItemArtless } from '../model/artless';
  import { ref } from 'vue';

  const ButtonBot = (art: any) => {
    router.push('/bot/' + art);
  };

  const messages = ref<Artless[]>([]);

  function initialize () {
    getName("Revolta dos Alfaiates")
      .then(response => {
                          response.data.forEach((index: any) => {
                            const item: ItemArtless= new ItemArtless(index.artless.time_line, index.artless.framework, index.artless.name, index.artless.date_in, index.artless.date_out, index.artless.check, index.artless.description);
                            const obj: Artless = new Artless(index.name, item);  
                            messages.value = [obj, ...messages.value];
                          });
                        });
    getName("1792")
      .then(response => {
                          response.data.forEach((index: any) => {
                            const item: ItemArtless= new ItemArtless(index.artless.time_line, index.artless.framework, index.artless.name, index.artless.date_in, index.artless.date_out, index.artless.check, index.artless.description);
                            const obj: Artless = new Artless(index.name, item);  
                            messages.value = [obj, ...messages.value];
                          });
                        });
    getName("1720")
      .then(response => {
                          response.data.forEach((index: any) => {
                            const item: ItemArtless= new ItemArtless(index.artless.time_line, index.artless.framework, index.artless.name, index.artless.date_in, index.artless.date_out, index.artless.check, index.artless.description);
                            const obj: Artless = new Artless(index.name, item);  
                            messages.value = [obj, ...messages.value];
                          });
                        });
  };

  initialize();

  /*
  function search(art: any[]) {
     art.filter((index: { malware: any; })=>index.malware).filter((index: { name: string; })=>(index.name=="borboleta" || index.name=="jab"  || index.name=="crawl" || index.name=="uppercut" || index.name=="direto" || index.name=="cruzado" || index.name=="costas"));
  };
  */

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
