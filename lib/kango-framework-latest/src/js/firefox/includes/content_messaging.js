function ContentMessageRouter(){EventTarget.call(this),this._messageName=getResourceUrl("message"),this._listener=func.bind(function(e){this.fireEvent("message",e.data)},this),contentFrameMessageManager.addMessageListener(this._messageName,this._listener)}var utils=require("kango/utils"),func=utils.func,object=utils.object,EventTarget=utils.EventTarget;ContentMessageRouter.prototype=object.extend(EventTarget,{dispatchMessage:function(e,t){var s={name:e,data:null!=t?object.sanitize(t):t,origin:"tab"};return contentFrameMessageManager.sendAsyncMessage(this._messageName,s),!0},dispose:function(){contentFrameMessageManager.removeMessageListener(this._messageName,this._listener)}}),module.exports=new ContentMessageRouter;