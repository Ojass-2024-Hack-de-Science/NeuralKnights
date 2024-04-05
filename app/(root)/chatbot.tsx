"use client"
import React from 'react'
declare global {
    interface Window {
      botpressWebChat: any;
    }
 }
 
 
 import Script from 'next/script';
const Chatbot = () => {
    const initBotpress = () => {
        window.botpressWebChat.init({
          composerPlaceholder: "E-Sewa",
          botConversationDescription: "Made with ❤️ by Somesh",
          botId: "c1867ea2-ed55-45f2-9785-16053b9ca2e1",
          hostUrl: "https://cdn.botpress.cloud/webchat/v1",
          messagingUrl: "https://messaging.botpress.cloud",
          clientId: "c1867ea2-ed55-45f2-9785-16053b9ca2e1",
        });
      };
  return (
    <Script
    src="https://cdn.botpress.cloud/webchat/v0/inject.js"
    onLoad={() => {
      initBotpress();
    }}
  />
  )
}

export default Chatbot