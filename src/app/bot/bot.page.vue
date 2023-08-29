<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start" @click="gotoHomePage">
            <ion-icon :md="arrowBackOutline" class="back"></ion-icon>
          </ion-buttons>
          <ion-title></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-list>
          <ion-item-group v-for="(item, i) in messages.slice().reverse()" :key="i">
            <ion-item v-if="item.sender==1" lines="none" class="user-item">
              <ion-label slot="start" class="user-label">
                <ion-text class="user-text">{{item.message}}</ion-text>
                <ion-note class="user-note">
                  <ion-icon :md="checkmarkDoneOutline" color='#ffffff'></ion-icon>
                </ion-note>
              </ion-label>
            </ion-item>
            <ion-item v-if="item.sender==2" lines="none" class="sender-item">
              <ion-label slot="end" class="sender-label">
                <ion-text class="sender-text">{{item.message}}</ion-text>
                <ion-note class="sender-note">
                  <ion-icon :md="checkmarkDoneOutline" color='#ffffff'></ion-icon>
                </ion-note>
              </ion-label>
            </ion-item>
          </ion-item-group>
        </ion-list>
      </ion-content>
      <ion-footer class="footer">
      <ion-toolbar class="footer">
        <ion-textarea
          placeholder="Send message"
          class="message"
          v-model="message">
        </ion-textarea>
        <ion-buttons slot="end" class="footer">
          <ion-fab-button size="small" class="fab" @click="sendMessage">
            <ion-icon :md="send"></ion-icon>
          </ion-fab-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
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
    IonBackButton,
    IonFooter,
    IonFabButton,
    IonTextarea,
    IonList,
    IonText,
    IonItemGroup,
    IonLabel,
    IonItem,
    IonNote
  } from '@ionic/vue';
import { arrowBackOutline, checkmarkCircleOutline, checkmarkDoneOutline, send } from 'ionicons/icons';
import { Observable, concat, of } from 'rxjs';
import { ref } from 'vue'

</script>

<script lang="ts">

  export interface UserMessage {
      id: number;
      sender: number;
      message: string;
  };
  const messages = ref<UserMessage[]>([]);
  let message: string;

  export const UseSenderMessage = () => {
    const takeMessage = (value: string, send: number) => {
      const Message = value; 
      const SavedMessage = {
        id: 1,
        sender: send,
        message: Message
      };
      messages.value = [SavedMessage, ...messages.value];
    }
    const sendMessage = () => {
      takeMessage(message, 2);
    }
    const gotoHomePage = () => {
      router.push('/home');
    }
    return {
      takeMessage,
      sendMessage,
      gotoHomePage
    }
  };

  const { takeMessage, sendMessage, gotoHomePage } = UseSenderMessage();

  const initialize = () => {
    takeMessage('What can I do?', 1);
  };

  initialize();

</script>

<style scoped>
  #container {
    text-align: center;
    
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
    
  #container strong {
    font-size: 20px;
    line-height: 26px;
    color: #03d9c4;
  }
    
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #03d9c4;
    margin: 0;
  }
    
  #container a {
    text-decoration: none;
    color: #03d9c4;
  }
    
  ion-content {
      --background: #ffffff;
  }
    
  ion-toolbar {
    --background: #374955;
  }
    
  ion-toolbar {
    --color: #03d9c4;
  } 
    
  .image {
    width: 15%;
    background: #ffffff;
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

  .footer {
    --background: #ffffff;
  }

  .message {
    --background: #ffffff;
    --padding-end: 20px;
    --padding-start: 20px;
    color: #01574f;
  }

  .fab {
    --background: #03d9c4;
    --background-activated: #03d9c4;
    --background-hover: #03d9c4;
  }

  .back {
    color: #03d9c4;
    width: 50px;
    font-size: 25px;
  }
  .user-item {
    --background: tranparente;
    --padding-start: 8px;
    --padding-end: 0px;
    --ion-state-area-left: 0px;
    --min-height: 32px;
    --border-width: 0;
  }
  .user-text {
    font-weight: 400;
    font-size: 0.9rem;
    width: 72px;
  }
  .user-label {
      background-color: #374955;
      color:#03d9c4;
      position: relative;
      border-radius: 12px;
      padding: 4px 8px;
      margin-top: 12px;
      max-width: 70%;
    }
  .user-note {
      margin-right: 2px;
      line-height: 23px;
      color: #374955;
      position: absolute;
      display: flex;
      right: 0;
      bottom: 0;
      padding: 4px 8px 4px 4px;
      line-height: 16px;
      pointer-events: auto;
      color: #ffffff;
  }
  .user-icon {
      font-size: 16px;
    }

  .sender-item {
    --background: tranparente;
    --padding-start: 8px;
    --padding-end: 0px;
    --ion-state-area-left: 0px;
    --min-height: 32px;
    --border-width: 0;
  }
  .sender-text {
    font-weight: 400;
    font-size: 0.9rem;
    margin-right: 32px;
  }
  .sender-label {
    margin-left: 8px;
    background-color: #374955;
    color:#03d9c4;
    position: relative;
    border-radius: 12px;
    padding: 4px 8px;
    margin-top: 12px;
    max-width: 70%;
  }
  .sender-note {
    margin-right: 2px;
    line-height: 16px;
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    padding: 4px 8px 4px 4px;
    line-height: 16px;
    pointer-events: auto;
    color: #ffffff;
  }
  
  sender-icon {
    font-size: 16px;
  }
        

</style>
  