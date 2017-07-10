eventUtil={
	addEventHandle:function(element,eventType,fn){
        if(element.addEventListener){
        	element.addEventListener(eventType,fn,false);
        }
        else if(element.attachEvent){
        	 element.attachEvent('on'+eventType,fn);
        }
        else{
        	element['on'+eventType]=fn;
        }
	},
	removeEventHandle:function(element,eventType,fn){
		if(element.removeEventListener){
			 element.removeEventListener(eventType,fn,false);			 
		}
		else if(element.detachEvent){
			element.detachEvent('on'+eventType,fn);
		}
       else{
       	   element['on'+eventType]=fn;
       }
    },
     getEvent:function(event){
     	 return event?event:window.event;
     },
     getType:function(event){
     	return event.type;
     }
     getTarget:function(event){
     	 return event.getTarget||event.srcElement;
     }
     preventDefault:function(event){
     	if(event.preventDefault){
     		event.preventDefault();
     	}
     	else{
     		event.returnValue=false;
     	}
     },
     stopPropagation:function(event){
     	 if(event.stopPropagation){
     	 	  event.stopPropagation();
     	 }
     	 else{
     	 	event.cancleBubble=true;
     	 }
     }

	
}