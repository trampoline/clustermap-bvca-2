// Compiled by ClojureScript 0.0-2356
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj18527 = {};return obj18527;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.display_name[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.display_name["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj18529 = {};return obj18529;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.init_state[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.init_state["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj18531 = {};return obj18531;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.should_update[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.should_update["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj18533 = {};return obj18533;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.will_mount[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.will_mount["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj18535 = {};return obj18535;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.did_mount[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.did_mount["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj18537 = {};return obj18537;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.will_unmount[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.will_unmount["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj18539 = {};return obj18539;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.will_update[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.will_update["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj18541 = {};return obj18541;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.did_update[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.did_update["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj18543 = {};return obj18543;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.will_receive_props[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.will_receive_props["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj18545 = {};return obj18545;
})();
om.core.render = (function render(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.render[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.render["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj18547 = {};return obj18547;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.render_props[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.render_props["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj18549 = {};return obj18549;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core.render_state[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core.render_state["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.ICheckState = (function (){var obj18551 = {};return obj18551;
})();
om.core.IOmSwap = (function (){var obj18553 = {};return obj18553;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj18555 = {};return obj18555;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._get_state[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._get_state["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._get_state[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._get_state["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj18557 = {};return obj18557;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._get_render_state[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._get_render_state["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._get_render_state[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._get_render_state["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj18559 = {};return obj18559;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj18561 = {};return obj18561;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._get_queue[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._get_queue["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj18563 = {};return obj18563;
})();
om.core._value = (function _value(x){if((function (){var and__3619__auto__ = x;if(and__3619__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3619__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4267__auto__ = (((x == null))?null:x);return (function (){var or__3631__auto__ = (om.core._value[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._value["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj18565 = {};return obj18565;
})();
om.core._path = (function _path(cursor){if((function (){var and__3619__auto__ = cursor;if(and__3619__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3619__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4267__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3631__auto__ = (om.core._path[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._path["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3619__auto__ = cursor;if(and__3619__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3619__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4267__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3631__auto__ = (om.core._state[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._state["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj18567 = {};return obj18567;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3619__auto__ = value;if(and__3619__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3619__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4267__auto__ = (((value == null))?null:value);return (function (){var or__3631__auto__ = (om.core._to_cursor[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._to_cursor["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3619__auto__ = value;if(and__3619__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3619__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4267__auto__ = (((value == null))?null:value);return (function (){var or__3631__auto__ = (om.core._to_cursor[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._to_cursor["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj18569 = {};return obj18569;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3619__auto__ = cursor;if(and__3619__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3619__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4267__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3631__auto__ = (om.core._derive[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._derive["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj18571 = {};return obj18571;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3619__auto__ = cursor;if(and__3619__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3619__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4267__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3631__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj18573 = {};return obj18573;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3619__auto__ = x;if(and__3619__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3619__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4267__auto__ = (((x == null))?null:x);return (function (){var or__3631__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3619__auto__ = x;if(and__3619__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4267__auto__ = (((x == null))?null:x);return (function (){var or__3631__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3619__auto__ = x;if(and__3619__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3619__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4267__auto__ = (((x == null))?null:x);return (function (){var or__3631__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj18575 = {};return obj18575;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._get_property[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._get_property["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj18577 = {};return obj18577;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3619__auto__ = cursor;if(and__3619__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3619__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4267__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3631__auto__ = (om.core._root_key[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._root_key["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj18579 = {};return obj18579;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._adapt[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._adapt["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt.call(null,x,other);
});
om.core.IOmRef = (function (){var obj18581 = {};return obj18581;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__3619__auto__ = this$;if(and__3619__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__3619__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__4267__auto__ = (((this$ == null))?null:this$);return (function (){var or__3631__auto__ = (om.core._get_deps[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (om.core._get_deps["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__18583 = state;if(G__18583)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18583.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__18583.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__18583);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__18583);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__18585 = x;if(G__18585)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18585.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__18585.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__18585);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__18585);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = c.call(null,node);
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__18587 = state;(G__18587["__om_prev_state"] = (state["__om_state"]));
(G__18587["__om_state"] = pending_state);
(G__18587["__om_pending_state"] = null);
return G__18587;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3631__auto__ = props;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3631__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value.call(null,ref);var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count.call(null,refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){var ref_val = om.core.value.call(null,ref);var ref_state = om.core.state.call(null,ref);var ref_path = om.core.path.call(null,ref);var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))
{if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else
{return ref;
}
} else
{return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__18589 = c;if(G__18589)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18589.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__18589.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__18589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__18589);
}
})())
{var state_18610 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__3631__auto__ = (state_18610["__om_prev_state"]);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return (state_18610["__om_state"]);
}
})());
} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__18590 = c;if(G__18590)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18590.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__18590.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__18590);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__18590);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__18591 = cljs.core.seq.call(null,refs);var chunk__18592 = null;var count__18593 = (0);var i__18594 = (0);while(true){
if((i__18594 < count__18593))
{var ref = cljs.core._nth.call(null,chunk__18592,i__18594);om.core.unobserve.call(null,this$,ref);
{
var G__18611 = seq__18591;
var G__18612 = chunk__18592;
var G__18613 = count__18593;
var G__18614 = (i__18594 + (1));
seq__18591 = G__18611;
chunk__18592 = G__18612;
count__18593 = G__18613;
i__18594 = G__18614;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__18591);if(temp__4126__auto____$1)
{var seq__18591__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18591__$1))
{var c__4400__auto__ = cljs.core.chunk_first.call(null,seq__18591__$1);{
var G__18615 = cljs.core.chunk_rest.call(null,seq__18591__$1);
var G__18616 = c__4400__auto__;
var G__18617 = cljs.core.count.call(null,c__4400__auto__);
var G__18618 = (0);
seq__18591 = G__18615;
chunk__18592 = G__18616;
count__18593 = G__18617;
i__18594 = G__18618;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__18591__$1);om.core.unobserve.call(null,this$,ref);
{
var G__18619 = cljs.core.next.call(null,seq__18591__$1);
var G__18620 = null;
var G__18621 = (0);
var G__18622 = (0);
seq__18591 = G__18619;
chunk__18592 = G__18620;
count__18593 = G__18621;
i__18594 = G__18622;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__18595 = c;if(G__18595)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18595.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__18595.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__18595);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__18595);
}
})())
{return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__18596 = c;if(G__18596)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18596.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__18596.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__18596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__18596);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor))))
{return true;
} else
{if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$)))
{return true;
} else
{if(cljs.core.truth_((function (){var and__3619__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));if(and__3619__auto__)
{return cljs.core.some.call(null,((function (and__3619__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__18588_SHARP_){return om.core.ref_changed_QMARK_.call(null,p1__18588_SHARP_);
});})(and__3619__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else
{return and__3619__auto__;
}
})()))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_parent_STAR_18597 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_18598 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_18599 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_18600 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_18601 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
if((function (){var G__18602 = c;if(G__18602)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18602.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__18602.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__18602);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__18602);
}
})())
{return om.core.render.call(null,c);
} else
{if((function (){var G__18603 = c;if(G__18603)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18603.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__18603.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__18603);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__18603);
}
})())
{return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else
{if((function (){var G__18604 = c;if(G__18604)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18604.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__18604.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__18604);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__18604);
}
})())
{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_18601;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_18600;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18599;
om.core._STAR_state_STAR_ = _STAR_state_STAR_18598;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_18597;
}}),(function (next_props,next_state){var this$ = this;var c_18623 = om.core.children.call(null,this$);if((function (){var G__18605 = c_18623;if(G__18605)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18605.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__18605.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__18605);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__18605);
}
})())
{var state_18624 = this$.state;om.core.will_update.call(null,c_18623,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3631__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__18606 = c;if(G__18606)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18606.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__18606.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__18606);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__18606);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__3631__auto__ = id;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__18607 = c;if(G__18607)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18607.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__18607.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__18607);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__18607);
}
})())
{return om.core.did_mount.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__18608 = c;if(G__18608)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18608.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__18608.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__18608);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__18608);
}
})())
{return om.core.display_name.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_18625 = om.core.children.call(null,this$);if((function (){var G__18609 = c_18625;if(G__18609)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18609.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__18609.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__18609);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__18609);
}
})())
{om.core.will_mount.call(null,c_18625);
} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x18627 = obj;x18627.om$core$IGetState$ = true;
x18627.om$core$IGetState$_get_state$arity$1 = ((function (x18627){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3631__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return (state["__om_state"]);
}
});})(x18627))
;
x18627.om$core$IGetState$_get_state$arity$2 = ((function (x18627){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x18627))
;
x18627.om$core$IGetRenderState$ = true;
x18627.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x18627){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x18627))
;
x18627.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x18627){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x18627))
;
x18627.om$core$ISetState$ = true;
x18627.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x18627){
return (function (this$,val,render){var this$__$1 = this;var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__3619__auto__ = !((app_state == null));if(and__3619__auto__)
{return render;
} else
{return and__3619__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x18627))
;
x18627.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x18627){
return (function (this$,ks,val,render){var this$__$1 = this;var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if(cljs.core.truth_((function (){var and__3619__auto__ = !((app_state == null));if(and__3619__auto__)
{return render;
} else
{return and__3619__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x18627))
;
return x18627;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null))))));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate.call(null,owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3631__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__3631__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__18628 = c;if(G__18628)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18628.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__18628.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__18628);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__18628);
}
})())?om.core.init_state.call(null,c):null));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_18637 = om.core.children.call(null,this$);if((function (){var G__18629 = c_18637;if(G__18629)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18629.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__18629.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__18629);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__18629);
}
})())
{om.core.will_mount.call(null,c_18637);
} else
{}
return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){var this$ = this;var c = om.core.children.call(null,this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__18630 = c;if(G__18630)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18630.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__18630.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__18630);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__18630);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,spath,cljs.core.dissoc);
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__18631 = cljs.core.seq.call(null,refs);var chunk__18632 = null;var count__18633 = (0);var i__18634 = (0);while(true){
if((i__18634 < count__18633))
{var ref = cljs.core._nth.call(null,chunk__18632,i__18634);om.core.unobserve.call(null,this$,ref);
{
var G__18638 = seq__18631;
var G__18639 = chunk__18632;
var G__18640 = count__18633;
var G__18641 = (i__18634 + (1));
seq__18631 = G__18638;
chunk__18632 = G__18639;
count__18633 = G__18640;
i__18634 = G__18641;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__18631);if(temp__4126__auto____$1)
{var seq__18631__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18631__$1))
{var c__4400__auto__ = cljs.core.chunk_first.call(null,seq__18631__$1);{
var G__18642 = cljs.core.chunk_rest.call(null,seq__18631__$1);
var G__18643 = c__4400__auto__;
var G__18644 = cljs.core.count.call(null,c__4400__auto__);
var G__18645 = (0);
seq__18631 = G__18642;
chunk__18632 = G__18643;
count__18633 = G__18644;
i__18634 = G__18645;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__18631__$1);om.core.unobserve.call(null,this$,ref);
{
var G__18646 = cljs.core.next.call(null,seq__18631__$1);
var G__18647 = null;
var G__18648 = (0);
var G__18649 = (0);
seq__18631 = G__18646;
chunk__18632 = G__18647;
count__18633 = G__18648;
i__18634 = G__18649;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){var this$ = this;var props_18650 = this$.props;var c_18651 = om.core.children.call(null,this$);if((function (){var G__18635 = c_18651;if(G__18635)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18635.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__18635.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__18635);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__18635);
}
})())
{var state_18652 = this$.state;om.core.will_update.call(null,c_18651,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.no_local_merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);var gstate = om.core.get_gstate.call(null,this$);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__18636 = c;if(G__18636)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18636.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__18636.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__18636);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__18636);
}
})())
{var state_18653 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__3631__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else
{return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x18655 = cljs.core.clj__GT_js.call(null,methods$);x18655.om$core$IGetState$ = true;
x18655.om$core$IGetState$_get_state$arity$1 = ((function (x18655){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);var or__3631__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x18655))
;
x18655.om$core$IGetState$_get_state$arity$2 = ((function (x18655){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x18655))
;
x18655.om$core$IGetRenderState$ = true;
x18655.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x18655){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x18655))
;
x18655.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x18655){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x18655))
;
x18655.om$core$ISetState$ = true;
x18655.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x18655){
return (function (this$,val,render){var this$__$1 = this;var gstate = om.core.get_gstate.call(null,this$__$1);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__3619__auto__ = !((gstate == null));if(and__3619__auto__)
{return render;
} else
{return and__3619__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else
{return null;
}
});})(x18655))
;
x18655.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x18655){
return (function (this$,ks,val,render){var this$__$1 = this;return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x18655))
;
return x18655;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){if((function (){var G__18657 = x;if(G__18657)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18657.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__18657.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__18657);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__18657);
}
})())
{return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else
{return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (p__18659){var vec__18660 = p__18659;var k = cljs.core.nth.call(null,vec__18660,(0),null);var v = cljs.core.nth.call(null,vec__18660,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.MapCursor.prototype.call = (function() {
var G__18661 = null;
var G__18661__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__18661__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__18661 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18661__2.call(this,self__,k);
case 3:
return G__18661__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18661.cljs$core$IFn$_invoke$arity$2 = G__18661__2;
G__18661.cljs$core$IFn$_invoke$arity$3 = G__18661__3;
return G__18661;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args18658){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18658)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,null);
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else
{return null;
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.call = (function() {
var G__18663 = null;
var G__18663__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__18663__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__18663 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18663__2.call(this,self__,k);
case 3:
return G__18663__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18663.cljs$core$IFn$_invoke$arity$2 = G__18663__2;
G__18663.cljs$core$IFn$_invoke$arity$3 = G__18663__3;
return G__18663;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args18662){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18662)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x18665 = cljs.core.clone.call(null,val);x18665.cljs$core$IEquiv$ = true;
x18665.cljs$core$IEquiv$_equiv$arity$2 = ((function (x18665){
return (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
});})(x18665))
;
x18665.om$core$ITransact$ = true;
x18665.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18665){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x18665))
;
x18665.om$core$ICursor$ = true;
x18665.om$core$ICursor$_path$arity$1 = ((function (x18665){
return (function (_){var ___$1 = this;return path;
});})(x18665))
;
x18665.om$core$ICursor$_state$arity$1 = ((function (x18665){
return (function (_){var ___$1 = this;return state;
});})(x18665))
;
x18665.cljs$core$IDeref$ = true;
x18665.cljs$core$IDeref$_deref$arity$1 = ((function (x18665){
return (function (this$){var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x18665))
;
return x18665;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__18668 = val;if(G__18668)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18668.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__18668.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__18668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__18668);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__18669 = val;if(G__18669)
{var bit__4294__auto__ = (G__18669.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4294__auto__) || (G__18669.cljs$core$ICloneable$))
{return true;
} else
{if((!G__18669.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__18669);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__18669);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x18671 = cljs.core.clone.call(null,x);x18671.om$core$ITransact$ = true;
x18671.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18671){
return (function (cursor,korks,f,tag){var cursor__$1 = this;om.core.commit_BANG_.call(null,cursor__$1,korks,f);
return om.core._refresh_deps_BANG_.call(null,parent);
});})(x18671))
;
x18671.om$core$ICursorDerive$ = true;
x18671.om$core$ICursorDerive$_derive$arity$4 = ((function (x18671){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x18671))
;
x18671.om$core$IAdapt$ = true;
x18671.om$core$IAdapt$_adapt$arity$2 = ((function (x18671){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x18671))
;
x18671.cljs$core$ICloneable$ = true;
x18671.cljs$core$ICloneable$_clone$arity$1 = ((function (x18671){
return (function (this$){var this$__$1 = this;return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x18671))
;
return x18671;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){if((function (){var G__18678 = cursor;if(G__18678)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18678.om$core$IOmRef$;
}
})()))
{return true;
} else
{if((!G__18678.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__18678);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__18678);
}
})())
{return cursor;
} else
{var path = om.core.path.call(null,cursor);var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);var x18679 = cljs.core.clone.call(null,cursor);x18679.om$core$ITransact$ = true;
x18679.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18679,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;om.core.commit_BANG_.call(null,cursor__$2,korks,f);
return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x18679,path,storage))
;
x18679.om$core$IOmRef$ = true;
x18679.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x18679,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x18679,path,storage))
;
x18679.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x18679,path,storage){
return (function (_,c){var ___$1 = this;var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));if((cljs.core.count.call(null,m) === (0)))
{return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else
{return null;
}
});})(x18679,path,storage))
;
x18679.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x18679,path,storage){
return (function (_){var ___$1 = this;var seq__18680 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));var chunk__18681 = null;var count__18682 = (0);var i__18683 = (0);while(true){
if((i__18683 < count__18682))
{var c = cljs.core._nth.call(null,chunk__18681,i__18683);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__18684 = seq__18680;
var G__18685 = chunk__18681;
var G__18686 = count__18682;
var G__18687 = (i__18683 + (1));
seq__18680 = G__18684;
chunk__18681 = G__18685;
count__18682 = G__18686;
i__18683 = G__18687;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18680);if(temp__4126__auto__)
{var seq__18680__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18680__$1))
{var c__4400__auto__ = cljs.core.chunk_first.call(null,seq__18680__$1);{
var G__18688 = cljs.core.chunk_rest.call(null,seq__18680__$1);
var G__18689 = c__4400__auto__;
var G__18690 = cljs.core.count.call(null,c__4400__auto__);
var G__18691 = (0);
seq__18680 = G__18688;
chunk__18681 = G__18689;
count__18682 = G__18690;
i__18683 = G__18691;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__18680__$1);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__18692 = cljs.core.next.call(null,seq__18680__$1);
var G__18693 = null;
var G__18694 = (0);
var G__18695 = (0);
seq__18680 = G__18692;
chunk__18681 = G__18693;
count__18682 = G__18694;
i__18683 = G__18695;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x18679,path,storage))
;
x18679.om$core$IOmRef$_get_deps$arity$1 = ((function (x18679,path,storage){
return (function (_){var ___$1 = this;return cljs.core.deref.call(null,storage);
});})(x18679,path,storage))
;
x18679.om$core$ICursorDerive$ = true;
x18679.om$core$ICursorDerive$_derive$arity$4 = ((function (x18679,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x18679,path,storage))
;
return x18679;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__3631__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else
{return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){om.core.add_ref_to_component_BANG_.call(null,c,ref);
om.core._add_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_.call(null,c,ref);
om.core._remove_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){var or__3631__auto__ = state.om$render$T;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return (0);
}
});
om.core.render_all = (function render_all(state){om.core.refresh_queued = false;
var seq__18700_18704 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__18701_18705 = null;var count__18702_18706 = (0);var i__18703_18707 = (0);while(true){
if((i__18703_18707 < count__18702_18706))
{var f_18708 = cljs.core._nth.call(null,chunk__18701_18705,i__18703_18707);f_18708.call(null);
{
var G__18709 = seq__18700_18704;
var G__18710 = chunk__18701_18705;
var G__18711 = count__18702_18706;
var G__18712 = (i__18703_18707 + (1));
seq__18700_18704 = G__18709;
chunk__18701_18705 = G__18710;
count__18702_18706 = G__18711;
i__18703_18707 = G__18712;
continue;
}
} else
{var temp__4126__auto___18713 = cljs.core.seq.call(null,seq__18700_18704);if(temp__4126__auto___18713)
{var seq__18700_18714__$1 = temp__4126__auto___18713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18700_18714__$1))
{var c__4400__auto___18715 = cljs.core.chunk_first.call(null,seq__18700_18714__$1);{
var G__18716 = cljs.core.chunk_rest.call(null,seq__18700_18714__$1);
var G__18717 = c__4400__auto___18715;
var G__18718 = cljs.core.count.call(null,c__4400__auto___18715);
var G__18719 = (0);
seq__18700_18704 = G__18716;
chunk__18701_18705 = G__18717;
count__18702_18706 = G__18718;
i__18703_18707 = G__18719;
continue;
}
} else
{var f_18720 = cljs.core.first.call(null,seq__18700_18714__$1);f_18720.call(null);
{
var G__18721 = cljs.core.next.call(null,seq__18700_18714__$1);
var G__18722 = null;
var G__18723 = (0);
var G__18724 = (0);
seq__18700_18704 = G__18721;
chunk__18701_18705 = G__18722;
count__18702_18706 = G__18723;
i__18703_18707 = G__18724;
continue;
}
}
} else
{}
}
break;
}
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3631__auto__ = (function (){var G__18731 = x;if(G__18731)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18731.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__18731.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__18731);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__18731);
}
})();if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (function (){var G__18733 = x;if(G__18733)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto____$1 = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto____$1))
{return or__3631__auto____$1;
} else
{return G__18733.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__18733.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__18733);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__18733);
}
})();if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{var G__18734 = x;if(G__18734)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto____$2 = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto____$2))
{return or__3631__auto____$2;
} else
{return G__18734.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__18734.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__18734);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__18734);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))))));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = React.createClass((function (){var or__3631__auto__ = descriptor;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3631__auto____$1))
{return or__3631__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})()));
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_opts_QMARK_.call(null,m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))));
}
if((m == null))
{var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.call(null,f);return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var ret = f.call(null,cursor,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else
{var map__18736 = m;var map__18736__$1 = ((cljs.core.seq_QMARK_.call(null,map__18736))?cljs.core.apply.call(null,cljs.core.hash_map,map__18736):map__18736);var opts = cljs.core.get.call(null,map__18736__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var init_state = cljs.core.get.call(null,map__18736__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));var state = cljs.core.get.call(null,map__18736__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var key = cljs.core.get.call(null,map__18736__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));var shared = (function (){var or__3631__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.call(null,f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__18736,map__18736__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__18736,map__18736__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__18736,map__18736__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__18736,map__18736__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268)))
{return om.core.build_STAR_.call(null,f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__18745 = state;if(G__18745)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18745.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__18745.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__18745);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__18745);
}
})())
{} else
{var properties_18753 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var listeners_18754 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_18755 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x18746_18756 = state;x18746_18756.om$core$IRenderQueue$ = true;
x18746_18756.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_18755);
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_18755),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_18755,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_18755,cljs.core.empty);
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$INotify$ = true;
x18746_18756.om$core$INotify$_listen_BANG_$arity$3 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_18754,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_18754,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$INotify$_notify_BANG_$arity$3 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__18747_18757 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_18754));var chunk__18748_18758 = null;var count__18749_18759 = (0);var i__18750_18760 = (0);while(true){
if((i__18750_18760 < count__18749_18759))
{var vec__18751_18761 = cljs.core._nth.call(null,chunk__18748_18758,i__18750_18760);var __18762 = cljs.core.nth.call(null,vec__18751_18761,(0),null);var f_18763 = cljs.core.nth.call(null,vec__18751_18761,(1),null);f_18763.call(null,tx_data,root_cursor);
{
var G__18764 = seq__18747_18757;
var G__18765 = chunk__18748_18758;
var G__18766 = count__18749_18759;
var G__18767 = (i__18750_18760 + (1));
seq__18747_18757 = G__18764;
chunk__18748_18758 = G__18765;
count__18749_18759 = G__18766;
i__18750_18760 = G__18767;
continue;
}
} else
{var temp__4126__auto___18768 = cljs.core.seq.call(null,seq__18747_18757);if(temp__4126__auto___18768)
{var seq__18747_18769__$1 = temp__4126__auto___18768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18747_18769__$1))
{var c__4400__auto___18770 = cljs.core.chunk_first.call(null,seq__18747_18769__$1);{
var G__18771 = cljs.core.chunk_rest.call(null,seq__18747_18769__$1);
var G__18772 = c__4400__auto___18770;
var G__18773 = cljs.core.count.call(null,c__4400__auto___18770);
var G__18774 = (0);
seq__18747_18757 = G__18771;
chunk__18748_18758 = G__18772;
count__18749_18759 = G__18773;
i__18750_18760 = G__18774;
continue;
}
} else
{var vec__18752_18775 = cljs.core.first.call(null,seq__18747_18769__$1);var __18776 = cljs.core.nth.call(null,vec__18752_18775,(0),null);var f_18777 = cljs.core.nth.call(null,vec__18752_18775,(1),null);f_18777.call(null,tx_data,root_cursor);
{
var G__18778 = cljs.core.next.call(null,seq__18747_18769__$1);
var G__18779 = null;
var G__18780 = (0);
var G__18781 = (0);
seq__18747_18757 = G__18778;
chunk__18748_18758 = G__18779;
count__18749_18759 = G__18780;
i__18750_18760 = G__18781;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$IRootProperties$ = true;
x18746_18756.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_18753,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_18753,cljs.core.dissoc,id,k);
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_18753,cljs.core.dissoc,id);
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
x18746_18756.om$core$IRootProperties$_get_property$arity$3 = ((function (x18746_18756,properties_18753,listeners_18754,render_queue_18755){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_18753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x18746_18756,properties_18753,listeners_18754,render_queue_18755))
;
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_.call(null,cursor))
{var x18783 = cljs.core.clone.call(null,cursor);x18783.om$core$IRootKey$ = true;
x18783.om$core$IRootKey$_root_key$arity$1 = ((function (x18783){
return (function (this$){var this$__$1 = this;return root_key;
});})(x18783))
;
x18783.om$core$IAdapt$ = true;
x18783.om$core$IAdapt$_adapt$arity$2 = ((function (x18783){
return (function (this$,other){var this$__$1 = this;return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x18783))
;
x18783.cljs$core$ICloneable$ = true;
x18783.cljs$core$ICloneable$_clone$arity$1 = ((function (x18783){
return (function (this$){var this$__$1 = this;return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x18783))
;
return x18783;
} else
{return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__18784){var map__18847 = p__18784;var map__18847__$1 = ((cljs.core.seq_QMARK_.call(null,map__18847))?cljs.core.apply.call(null,cljs.core.hash_map,map__18847):map__18847);var options = map__18847__$1;var adapt = cljs.core.get.call(null,map__18847__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var descriptor = cljs.core.get.call(null,map__18847__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));var instrument = cljs.core.get.call(null,map__18847__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));var path = cljs.core.get.call(null,map__18847__$1,new cljs.core.Keyword(null,"path","path",-188191168));var tx_listen = cljs.core.get.call(null,map__18847__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));var target = cljs.core.get.call(null,map__18847__$1,new cljs.core.Keyword(null,"target","target",253001721));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))))));
}
var roots_SINGLEQUOTE__18909 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__18909,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__18909,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__18848 = value;if(G__18848)
{var bit__4294__auto__ = (G__18848.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4294__auto__) || (G__18848.cljs$core$IAtom$))
{return true;
} else
{if((!G__18848.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__18848);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__18848);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3631__auto__ = adapt;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var ret = cljs.core.atom.call(null,null);var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643))))
{} else
{var c_18910 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_18879 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_18880 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_18881 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_18882 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_18882;
om.core._STAR_state_STAR_ = _STAR_state_STAR_18881;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18880;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_18879;
}})(),target);if((cljs.core.deref.call(null,ret) == null))
{cljs.core.reset_BANG_.call(null,ret,c_18910);
} else
{}
}
var queue_18911 = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue_18911))
{} else
{var seq__18883_18912 = cljs.core.seq.call(null,queue_18911);var chunk__18884_18913 = null;var count__18885_18914 = (0);var i__18886_18915 = (0);while(true){
if((i__18886_18915 < count__18885_18914))
{var c_18916 = cljs.core._nth.call(null,chunk__18884_18913,i__18886_18915);if(cljs.core.truth_(c_18916.isMounted()))
{var temp__4126__auto___18917 = (c_18916.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___18917))
{var next_props_18918 = temp__4126__auto___18917;(c_18916.props["__om_cursor"] = next_props_18918);
(c_18916.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3631__auto__ = !((function (){var G__18888 = om.core.children.call(null,c_18916);if(G__18888)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18888.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__18888.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18888);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18888);
}
})());if(or__3631__auto__)
{return or__3631__auto__;
} else
{return c_18916.shouldComponentUpdate(c_18916.props,c_18916.state);
}
})()))
{c_18916.forceUpdate();
} else
{}
} else
{}
{
var G__18919 = seq__18883_18912;
var G__18920 = chunk__18884_18913;
var G__18921 = count__18885_18914;
var G__18922 = (i__18886_18915 + (1));
seq__18883_18912 = G__18919;
chunk__18884_18913 = G__18920;
count__18885_18914 = G__18921;
i__18886_18915 = G__18922;
continue;
}
} else
{var temp__4126__auto___18923 = cljs.core.seq.call(null,seq__18883_18912);if(temp__4126__auto___18923)
{var seq__18883_18924__$1 = temp__4126__auto___18923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18883_18924__$1))
{var c__4400__auto___18925 = cljs.core.chunk_first.call(null,seq__18883_18924__$1);{
var G__18926 = cljs.core.chunk_rest.call(null,seq__18883_18924__$1);
var G__18927 = c__4400__auto___18925;
var G__18928 = cljs.core.count.call(null,c__4400__auto___18925);
var G__18929 = (0);
seq__18883_18912 = G__18926;
chunk__18884_18913 = G__18927;
count__18885_18914 = G__18928;
i__18886_18915 = G__18929;
continue;
}
} else
{var c_18930 = cljs.core.first.call(null,seq__18883_18924__$1);if(cljs.core.truth_(c_18930.isMounted()))
{var temp__4126__auto___18931__$1 = (c_18930.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___18931__$1))
{var next_props_18932 = temp__4126__auto___18931__$1;(c_18930.props["__om_cursor"] = next_props_18932);
(c_18930.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3631__auto__ = !((function (){var G__18890 = om.core.children.call(null,c_18930);if(G__18890)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__18890.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__18890.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18890);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18890);
}
})());if(or__3631__auto__)
{return or__3631__auto__;
} else
{return c_18930.shouldComponentUpdate(c_18930.props,c_18930.state);
}
})()))
{c_18930.forceUpdate();
} else
{}
} else
{}
{
var G__18933 = cljs.core.next.call(null,seq__18883_18924__$1);
var G__18934 = null;
var G__18935 = (0);
var G__18936 = (0);
seq__18883_18912 = G__18933;
chunk__18884_18913 = G__18934;
count__18885_18914 = G__18935;
i__18886_18915 = G__18936;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_.call(null,state__$1);
}
var _refs_18937 = cljs.core.deref.call(null,om.core._refs);if(cljs.core.empty_QMARK_.call(null,_refs_18937))
{} else
{var seq__18891_18938 = cljs.core.seq.call(null,_refs_18937);var chunk__18892_18939 = null;var count__18893_18940 = (0);var i__18894_18941 = (0);while(true){
if((i__18894_18941 < count__18893_18940))
{var vec__18895_18942 = cljs.core._nth.call(null,chunk__18892_18939,i__18894_18941);var path_18943__$1 = cljs.core.nth.call(null,vec__18895_18942,(0),null);var cs_18944 = cljs.core.nth.call(null,vec__18895_18942,(1),null);var cs_18945__$1 = cljs.core.deref.call(null,cs_18944);var seq__18896_18946 = cljs.core.seq.call(null,cs_18945__$1);var chunk__18897_18947 = null;var count__18898_18948 = (0);var i__18899_18949 = (0);while(true){
if((i__18899_18949 < count__18898_18948))
{var vec__18900_18950 = cljs.core._nth.call(null,chunk__18897_18947,i__18899_18949);var id_18951 = cljs.core.nth.call(null,vec__18900_18950,(0),null);var c_18952 = cljs.core.nth.call(null,vec__18900_18950,(1),null);if(cljs.core.truth_(c_18952.shouldComponentUpdate(c_18952.props,c_18952.state)))
{c_18952.forceUpdate();
} else
{}
{
var G__18953 = seq__18896_18946;
var G__18954 = chunk__18897_18947;
var G__18955 = count__18898_18948;
var G__18956 = (i__18899_18949 + (1));
seq__18896_18946 = G__18953;
chunk__18897_18947 = G__18954;
count__18898_18948 = G__18955;
i__18899_18949 = G__18956;
continue;
}
} else
{var temp__4126__auto___18957 = cljs.core.seq.call(null,seq__18896_18946);if(temp__4126__auto___18957)
{var seq__18896_18958__$1 = temp__4126__auto___18957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18896_18958__$1))
{var c__4400__auto___18959 = cljs.core.chunk_first.call(null,seq__18896_18958__$1);{
var G__18960 = cljs.core.chunk_rest.call(null,seq__18896_18958__$1);
var G__18961 = c__4400__auto___18959;
var G__18962 = cljs.core.count.call(null,c__4400__auto___18959);
var G__18963 = (0);
seq__18896_18946 = G__18960;
chunk__18897_18947 = G__18961;
count__18898_18948 = G__18962;
i__18899_18949 = G__18963;
continue;
}
} else
{var vec__18901_18964 = cljs.core.first.call(null,seq__18896_18958__$1);var id_18965 = cljs.core.nth.call(null,vec__18901_18964,(0),null);var c_18966 = cljs.core.nth.call(null,vec__18901_18964,(1),null);if(cljs.core.truth_(c_18966.shouldComponentUpdate(c_18966.props,c_18966.state)))
{c_18966.forceUpdate();
} else
{}
{
var G__18967 = cljs.core.next.call(null,seq__18896_18958__$1);
var G__18968 = null;
var G__18969 = (0);
var G__18970 = (0);
seq__18896_18946 = G__18967;
chunk__18897_18947 = G__18968;
count__18898_18948 = G__18969;
i__18899_18949 = G__18970;
continue;
}
}
} else
{}
}
break;
}
{
var G__18971 = seq__18891_18938;
var G__18972 = chunk__18892_18939;
var G__18973 = count__18893_18940;
var G__18974 = (i__18894_18941 + (1));
seq__18891_18938 = G__18971;
chunk__18892_18939 = G__18972;
count__18893_18940 = G__18973;
i__18894_18941 = G__18974;
continue;
}
} else
{var temp__4126__auto___18975 = cljs.core.seq.call(null,seq__18891_18938);if(temp__4126__auto___18975)
{var seq__18891_18976__$1 = temp__4126__auto___18975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18891_18976__$1))
{var c__4400__auto___18977 = cljs.core.chunk_first.call(null,seq__18891_18976__$1);{
var G__18978 = cljs.core.chunk_rest.call(null,seq__18891_18976__$1);
var G__18979 = c__4400__auto___18977;
var G__18980 = cljs.core.count.call(null,c__4400__auto___18977);
var G__18981 = (0);
seq__18891_18938 = G__18978;
chunk__18892_18939 = G__18979;
count__18893_18940 = G__18980;
i__18894_18941 = G__18981;
continue;
}
} else
{var vec__18902_18982 = cljs.core.first.call(null,seq__18891_18976__$1);var path_18983__$1 = cljs.core.nth.call(null,vec__18902_18982,(0),null);var cs_18984 = cljs.core.nth.call(null,vec__18902_18982,(1),null);var cs_18985__$1 = cljs.core.deref.call(null,cs_18984);var seq__18903_18986 = cljs.core.seq.call(null,cs_18985__$1);var chunk__18904_18987 = null;var count__18905_18988 = (0);var i__18906_18989 = (0);while(true){
if((i__18906_18989 < count__18905_18988))
{var vec__18907_18990 = cljs.core._nth.call(null,chunk__18904_18987,i__18906_18989);var id_18991 = cljs.core.nth.call(null,vec__18907_18990,(0),null);var c_18992 = cljs.core.nth.call(null,vec__18907_18990,(1),null);if(cljs.core.truth_(c_18992.shouldComponentUpdate(c_18992.props,c_18992.state)))
{c_18992.forceUpdate();
} else
{}
{
var G__18993 = seq__18903_18986;
var G__18994 = chunk__18904_18987;
var G__18995 = count__18905_18988;
var G__18996 = (i__18906_18989 + (1));
seq__18903_18986 = G__18993;
chunk__18904_18987 = G__18994;
count__18905_18988 = G__18995;
i__18906_18989 = G__18996;
continue;
}
} else
{var temp__4126__auto___18997__$1 = cljs.core.seq.call(null,seq__18903_18986);if(temp__4126__auto___18997__$1)
{var seq__18903_18998__$1 = temp__4126__auto___18997__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18903_18998__$1))
{var c__4400__auto___18999 = cljs.core.chunk_first.call(null,seq__18903_18998__$1);{
var G__19000 = cljs.core.chunk_rest.call(null,seq__18903_18998__$1);
var G__19001 = c__4400__auto___18999;
var G__19002 = cljs.core.count.call(null,c__4400__auto___18999);
var G__19003 = (0);
seq__18903_18986 = G__19000;
chunk__18904_18987 = G__19001;
count__18905_18988 = G__19002;
i__18906_18989 = G__19003;
continue;
}
} else
{var vec__18908_19004 = cljs.core.first.call(null,seq__18903_18998__$1);var id_19005 = cljs.core.nth.call(null,vec__18908_19004,(0),null);var c_19006 = cljs.core.nth.call(null,vec__18908_19004,(1),null);if(cljs.core.truth_(c_19006.shouldComponentUpdate(c_19006.props,c_19006.state)))
{c_19006.forceUpdate();
} else
{}
{
var G__19007 = cljs.core.next.call(null,seq__18903_18998__$1);
var G__19008 = null;
var G__19009 = (0);
var G__19010 = (0);
seq__18903_18986 = G__19007;
chunk__18904_18987 = G__19008;
count__18905_18988 = G__19009;
i__18906_18989 = G__19010;
continue;
}
}
} else
{}
}
break;
}
{
var G__19011 = cljs.core.next.call(null,seq__18891_18976__$1);
var G__19012 = null;
var G__19013 = (0);
var G__19014 = (0);
seq__18891_18938 = G__19011;
chunk__18892_18939 = G__19012;
count__18893_18940 = G__19013;
i__18894_18941 = G__19014;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);
return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n))))
{om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else
{}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
} else
{return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_.call(null,state__$1,watch_key);
cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18847,map__18847__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null);
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error("First argument to commit! must be a cursor"));
}
var key = (((function (){var G__19016 = cursor;if(G__19016)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__19016.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__19016.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__19016);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__19016);
}
})())?om.core._root_key.call(null,cursor):null);var app_state = om.core.state.call(null,cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = om.core.path.call(null,cursor);var rpath = cljs.core.into.call(null,cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else
{}
if(cljs.core.empty_QMARK_.call(null,rpath))
{return cljs.core.swap_BANG_.call(null,app_state,f);
} else
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
