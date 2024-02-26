package com.whafac.websocket.stomp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessage {

	private String type;
    private String sender;
    private String channelId;
    private Object data;	
	private String receiver;

    public void newConnect() {
        this.type = "new";
    }

    public void closeConnect() {
        this.type = "close";
    }
    
    public void setSender(String sender) {
    	this.sender = sender;
    }
}
// {"type":"", "sender":"me", "receiver":"b6268d02-ac43-fc6d-39bb-6e09151eb735", "data":"test..."}

// connect   =  ws://localhost:9080/ws 
// subscribe = /sub/channel/alarm
// 



