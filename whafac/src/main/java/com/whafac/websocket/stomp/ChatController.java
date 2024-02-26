package com.whafac.websocket.stomp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ChatController {
	
	@Autowired
    private SimpMessageSendingOperations simpMessageSendingOperations;
	
    @GetMapping("/chat")
    public String chat() {
        return "chat/chat";
    }	

    @MessageMapping("/hello")
    public void message(ChatMessage message) {
        
        simpMessageSendingOperations.convertAndSend("/sub/channel/" + message.getChannelId(), message);
    }    
}
