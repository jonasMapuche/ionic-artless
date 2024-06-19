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
      <ion-item v-for="(item, i) in search(messages)" button lines="full" class="list" :key="i" @click="ButtonBot(item.name[0])">
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

  import { postRange } from '../service/http-artless';
  import { Artless, Epigraph } from '../model/artless';
  import { ref } from 'vue';

  const ButtonBot = (art: any) => {
    router.push('/bot/' + art);
  };

  const messages = ref<Artless[]>([]);

  function initialize () {
    const in_date: String = "01/01/1700";
    const out_date: String = "31/12/1761";
    const range: any = {date_in: in_date, date_out: out_date};
    postRange(range)
      .then(response => {
                          response.data.forEach((index: any) => {
                            const title: Epigraph = new Epigraph(index.epigraph.name, index.epigraph.date_in, index.epigraph.date_in, index.title);
                            const obj: Artless = new Artless(index.name, index.framework, index.date_in, index.date_out, index.description, title);  
                            messages.value = [obj, ...messages.value];
                          });
                        });

  };

  initialize();

  function search(art: any[]) {
     return art.filter((index)=>(index.name=="Américas 1726" || index.name=="Ásia 1720" || index.name=="África 1705" || index.name=="Oceania Anos 1700" || index.name=="Europa 1741-61"));
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
