// Compiled by ClojureScript 0.0-2356
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj67014 = {};return obj67014;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.display_name[(function (){var G__67018 = x__4273__auto__;return goog.typeOf(G__67018);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.display_name["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj67020 = {};return obj67020;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.init_state[(function (){var G__67024 = x__4273__auto__;return goog.typeOf(G__67024);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.init_state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj67026 = {};return obj67026;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.should_update[(function (){var G__67030 = x__4273__auto__;return goog.typeOf(G__67030);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.should_update["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj67032 = {};return obj67032;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.will_mount[(function (){var G__67036 = x__4273__auto__;return goog.typeOf(G__67036);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.will_mount["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj67038 = {};return obj67038;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.did_mount[(function (){var G__67042 = x__4273__auto__;return goog.typeOf(G__67042);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.did_mount["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj67044 = {};return obj67044;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.will_unmount[(function (){var G__67048 = x__4273__auto__;return goog.typeOf(G__67048);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.will_unmount["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj67050 = {};return obj67050;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.will_update[(function (){var G__67054 = x__4273__auto__;return goog.typeOf(G__67054);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.will_update["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj67056 = {};return obj67056;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.did_update[(function (){var G__67060 = x__4273__auto__;return goog.typeOf(G__67060);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.did_update["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj67062 = {};return obj67062;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.will_receive_props[(function (){var G__67066 = x__4273__auto__;return goog.typeOf(G__67066);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.will_receive_props["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj67068 = {};return obj67068;
})();
om.core.render = (function render(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.render[(function (){var G__67072 = x__4273__auto__;return goog.typeOf(G__67072);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.render["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj67074 = {};return obj67074;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.render_props[(function (){var G__67078 = x__4273__auto__;return goog.typeOf(G__67078);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.render_props["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj67080 = {};return obj67080;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.render_state[(function (){var G__67084 = x__4273__auto__;return goog.typeOf(G__67084);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core.render_state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj67086 = {};return obj67086;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._om_swap_BANG_[(function (){var G__67090 = x__4273__auto__;return goog.typeOf(G__67090);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj67092 = {};return obj67092;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_state[(function (){var G__67098 = x__4273__auto__;return goog.typeOf(G__67098);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._get_state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_state[(function (){var G__67100 = x__4273__auto__;return goog.typeOf(G__67100);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._get_state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
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
om.core.IGetRenderState = (function (){var obj67102 = {};return obj67102;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_render_state[(function (){var G__67108 = x__4273__auto__;return goog.typeOf(G__67108);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._get_render_state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_render_state[(function (){var G__67110 = x__4273__auto__;return goog.typeOf(G__67110);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._get_render_state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
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
om.core.ISetState = (function (){var obj67112 = {};return obj67112;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._set_state_BANG_[(function (){var G__67118 = x__4273__auto__;return goog.typeOf(G__67118);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._set_state_BANG_[(function (){var G__67120 = x__4273__auto__;return goog.typeOf(G__67120);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
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
om.core.IRenderQueue = (function (){var obj67122 = {};return obj67122;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_queue[(function (){var G__67126 = x__4273__auto__;return goog.typeOf(G__67126);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._get_queue["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._queue_render_BANG_[(function (){var G__67130 = x__4273__auto__;return goog.typeOf(G__67130);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._empty_queue_BANG_[(function (){var G__67134 = x__4273__auto__;return goog.typeOf(G__67134);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj67136 = {};return obj67136;
})();
om.core._value = (function _value(x){if((function (){var and__3625__auto__ = x;if(and__3625__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3625__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4273__auto__ = (((x == null))?null:x);return (function (){var or__3637__auto__ = (om.core._value[(function (){var G__67140 = x__4273__auto__;return goog.typeOf(G__67140);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._value["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj67142 = {};return obj67142;
})();
om.core._path = (function _path(cursor){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._path[(function (){var G__67146 = x__4273__auto__;return goog.typeOf(G__67146);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._path["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._state[(function (){var G__67150 = x__4273__auto__;return goog.typeOf(G__67150);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj67152 = {};return obj67152;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3625__auto__ = value;if(and__3625__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3625__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4273__auto__ = (((value == null))?null:value);return (function (){var or__3637__auto__ = (om.core._to_cursor[(function (){var G__67158 = x__4273__auto__;return goog.typeOf(G__67158);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._to_cursor["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3625__auto__ = value;if(and__3625__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3625__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4273__auto__ = (((value == null))?null:value);return (function (){var or__3637__auto__ = (om.core._to_cursor[(function (){var G__67160 = x__4273__auto__;return goog.typeOf(G__67160);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._to_cursor["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
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
om.core.ICursorDerive = (function (){var obj67162 = {};return obj67162;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._derive[(function (){var G__67166 = x__4273__auto__;return goog.typeOf(G__67166);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._derive["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){var G__67167 = derived;var G__67168 = state;var G__67169 = path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__67167,G__67168,G__67169) : om.core.to_cursor.call(null,G__67167,G__67168,G__67169));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj67171 = {};return obj67171;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._transact_BANG_[(function (){var G__67175 = x__4273__auto__;return goog.typeOf(G__67175);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj67177 = {};return obj67177;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3625__auto__ = x;if(and__3625__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4273__auto__ = (((x == null))?null:x);return (function (){var or__3637__auto__ = (om.core._listen_BANG_[(function (){var G__67181 = x__4273__auto__;return goog.typeOf(G__67181);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3625__auto__ = x;if(and__3625__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4273__auto__ = (((x == null))?null:x);return (function (){var or__3637__auto__ = (om.core._unlisten_BANG_[(function (){var G__67185 = x__4273__auto__;return goog.typeOf(G__67185);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3625__auto__ = x;if(and__3625__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4273__auto__ = (((x == null))?null:x);return (function (){var or__3637__auto__ = (om.core._notify_BANG_[(function (){var G__67189 = x__4273__auto__;return goog.typeOf(G__67189);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj67191 = {};return obj67191;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._set_property_BANG_[(function (){var G__67195 = x__4273__auto__;return goog.typeOf(G__67195);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._remove_property_BANG_[(function (){var G__67199 = x__4273__auto__;return goog.typeOf(G__67199);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._remove_properties_BANG_[(function (){var G__67203 = x__4273__auto__;return goog.typeOf(G__67203);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_property[(function (){var G__67207 = x__4273__auto__;return goog.typeOf(G__67207);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._get_property["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj67209 = {};return obj67209;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._root_key[(function (){var G__67213 = x__4273__auto__;return goog.typeOf(G__67213);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._root_key["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj67215 = {};return obj67215;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._adapt[(function (){var G__67219 = x__4273__auto__;return goog.typeOf(G__67219);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._adapt["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt(x,other);
});
om.core.IOmRef = (function (){var obj67221 = {};return obj67221;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._add_dep_BANG_[(function (){var G__67225 = x__4273__auto__;return goog.typeOf(G__67225);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._remove_dep_BANG_[(function (){var G__67229 = x__4273__auto__;return goog.typeOf(G__67229);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__67233 = x__4273__auto__;return goog.typeOf(G__67233);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_deps[(function (){var G__67237 = x__4273__auto__;return goog.typeOf(G__67237);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (om.core._get_deps["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = (function (){var G__67247 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67247) : cljs.core.deref.call(null,G__67247));
})();var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__67248 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__67248) : om.core.path.call(null,G__67248));
})(),korks);var ret = (((function (){var G__67249 = state;if(G__67249)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67249.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__67249.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__67249);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__67249);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$1216))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1217,path,cljs.core.constant$keyword$1218,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$1219,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67250 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67250) : cljs.core.deref.call(null,G__67250));
})(),path),cljs.core.constant$keyword$1220,old_state,cljs.core.constant$keyword$1221,(function (){var G__67251 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67251) : cljs.core.deref.call(null,G__67251));
})()], null);if(!((tag == null)))
{var G__67252 = cursor;var G__67253 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$1222,tag);return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__67252,G__67253) : om.core.notify_STAR_.call(null,G__67252,G__67253));
} else
{var G__67254 = cursor;var G__67255 = tx_data;return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__67254,G__67255) : om.core.notify_STAR_.call(null,G__67254,G__67255));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__67257 = x;if(G__67257)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67257.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__67257.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__67257);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__67257);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_67260 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__67261 = node;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__67261) : c.call(null,G__67261));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67260;
}})();
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
var get_state__1 = (function (owner){return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
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
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

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
{var pending_state = temp__4126__auto__;var G__67266 = state;(G__67266["__om_prev_state"] = (state["__om_state"]));
(G__67266["__om_state"] = pending_state);
(G__67266["__om_pending_state"] = null);
return G__67266;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3637__auto__ = props;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3637__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state], 0)));
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
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value(ref);var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__67271 = om.core.state(ref);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67271) : cljs.core.deref.call(null,G__67271));
})(),(function (){var G__67272 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__67272) : om.core.path.call(null,G__67272));
})(),cljs.core.constant$keyword$1223);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count(refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){var ref_val = om.core.value(ref);var ref_state = om.core.state(ref);var ref_path = (function (){var G__67278 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__67278) : om.core.path.call(null,G__67278));
})();var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__67279 = ref_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67279) : cljs.core.deref.call(null,G__67279));
})(),ref_path,cljs.core.constant$keyword$1223);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$1223))
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt(ref,(function (){var G__67280 = ref_val_SINGLEQUOTE_;var G__67281 = ref_state;var G__67282 = ref_path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__67280,G__67281,G__67282) : om.core.to_cursor.call(null,G__67280,G__67281,G__67282));
})());
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
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1224,cljs.core.constant$keyword$1225,cljs.core.constant$keyword$1226,cljs.core.constant$keyword$1227,cljs.core.constant$keyword$1228,cljs.core.constant$keyword$1229,cljs.core.constant$keyword$1230,cljs.core.constant$keyword$1231,cljs.core.constant$keyword$1232,cljs.core.constant$keyword$1233],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__67284 = c;if(G__67284)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67284.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__67284.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__67284);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__67284);
}
})())
{var state_67319 = this$.state;var _STAR_read_enabled_STAR_67285_67320 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3637__auto__ = (state_67319["__om_prev_state"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (state_67319["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67285_67320;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__67286 = c;if(G__67286)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67286.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__67286.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__67286);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__67286);
}
})())
{var _STAR_read_enabled_STAR_67287_67321 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67287_67321;
}} else
{}
var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__67288 = cljs.core.seq(refs);var chunk__67289 = null;var count__67290 = (0);var i__67291 = (0);while(true){
if((i__67291 < count__67290))
{var ref = chunk__67289.cljs$core$IIndexed$_nth$arity$2(null,i__67291);var G__67292_67322 = this$;var G__67293_67323 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__67292_67322,G__67293_67323) : om.core.unobserve.call(null,G__67292_67322,G__67293_67323));
{
var G__67324 = seq__67288;
var G__67325 = chunk__67289;
var G__67326 = count__67290;
var G__67327 = (i__67291 + (1));
seq__67288 = G__67324;
chunk__67289 = G__67325;
count__67290 = G__67326;
i__67291 = G__67327;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq(seq__67288);if(temp__4126__auto____$1)
{var seq__67288__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(seq__67288__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__67288__$1);{
var G__67328 = cljs.core.chunk_rest(seq__67288__$1);
var G__67329 = c__4406__auto__;
var G__67330 = cljs.core.count(c__4406__auto__);
var G__67331 = (0);
seq__67288 = G__67328;
chunk__67289 = G__67329;
count__67290 = G__67330;
i__67291 = G__67331;
continue;
}
} else
{var ref = cljs.core.first(seq__67288__$1);var G__67294_67332 = this$;var G__67295_67333 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__67294_67332,G__67295_67333) : om.core.unobserve.call(null,G__67294_67332,G__67295_67333));
{
var G__67334 = cljs.core.next(seq__67288__$1);
var G__67335 = null;
var G__67336 = (0);
var G__67337 = (0);
seq__67288 = G__67334;
chunk__67289 = G__67335;
count__67290 = G__67336;
i__67291 = G__67337;
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
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__67296 = c;if(G__67296)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67296.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__67296.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__67296);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__67296);
}
})())
{var _STAR_read_enabled_STAR_67297 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67297;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_67298 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__67299 = c;if(G__67299)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67299.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__67299.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__67299);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__67299);
}
})())
{return om.core.should_update(c,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor))))
{return true;
} else
{if((!(((state["__om_pending_state"]) == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((state["__om_pending_state"]),(state["__om_state"]))))
{return true;
} else
{if(cljs.core.truth_((function (){var and__3625__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));if(and__3625__auto__)
{return cljs.core.some(((function (and__3625__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_67298,this$){
return (function (p1__67283_SHARP_){return om.core.ref_changed_QMARK_(p1__67283_SHARP_);
});})(and__3625__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_67298,this$))
,(state["__om_refs"]));
} else
{return and__3625__auto__;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67298;
}}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_parent_STAR_67300 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_67301 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_67302 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_67303 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_67304 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
var _STAR_read_enabled_STAR_67305 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__67306 = c;if(G__67306)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67306.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__67306.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__67306);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__67306);
}
})())
{return om.core.render(c);
} else
{if((function (){var G__67307 = c;if(G__67307)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67307.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__67307.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__67307);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__67307);
}
})())
{return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{if((function (){var G__67308 = c;if(G__67308)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67308.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__67308.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__67308);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__67308);
}
})())
{return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67305;
}}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_67304;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_67303;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_67302;
om.core._STAR_state_STAR_ = _STAR_state_STAR_67301;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_67300;
}}),(function (next_props,next_state){var this$ = this;var c_67338 = om.core.children(this$);if((function (){var G__67309 = c_67338;if(G__67309)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67309.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__67309.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__67309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__67309);
}
})())
{var state_67339 = this$.state;var _STAR_read_enabled_STAR_67310_67340 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_67338,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67310_67340;
}} else
{}
om.core.merge_pending_state(this$);
return om.core.update_refs(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3637__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = cljs.core.constant$keyword$1234.cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__67311 = c;if(G__67311)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67311.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__67311.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__67311);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__67311);
}
})())?(function (){var _STAR_read_enabled_STAR_67312 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67312;
}})():null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$1234)], 0)), "__om_id": (function (){var or__3637__auto__ = id;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__67313 = c;if(G__67313)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67313.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__67313.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__67313);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__67313);
}
})())
{var _STAR_read_enabled_STAR_67314 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67314;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__67315 = c;if(G__67315)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67315.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__67315.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__67315);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__67315);
}
})())
{var _STAR_read_enabled_STAR_67316 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67316;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_67341 = om.core.children(this$);if((function (){var G__67317 = c_67341;if(G__67317)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67317.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__67317.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__67317);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__67317);
}
})())
{var _STAR_read_enabled_STAR_67318_67342 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_67341);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67318_67342;
}} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x67346 = obj;x67346.om$core$IGetState$ = true;
x67346.om$core$IGetState$_get_state$arity$1 = ((function (x67346){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3637__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (state["__om_state"]);
}
});})(x67346))
;
x67346.om$core$IGetState$_get_state$arity$2 = ((function (x67346){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x67346))
;
x67346.om$core$IGetRenderState$ = true;
x67346.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x67346){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x67346))
;
x67346.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x67346){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x67346))
;
x67346.om$core$ISetState$ = true;
x67346.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x67346){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_67347 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__3625__auto__ = !((app_state == null));if(and__3625__auto__)
{return render;
} else
{return and__3625__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67347;
}});})(x67346))
;
x67346.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x67346){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_67348 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));
if(cljs.core.truth_((function (){var and__3625__auto__ = !((app_state == null));if(and__3625__auto__)
{return render;
} else
{return and__3625__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67348;
}});})(x67346))
;
return x67346;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0))))));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate(owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(owner)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67350 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67350) : cljs.core.deref.call(null,G__67350));
})(),spath);if(cljs.core.truth_(cljs.core.constant$keyword$1236.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$1237,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1237.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$1236.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$1236);
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$1230,(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3637__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__3637__auto__ = cljs.core.constant$keyword$1234.cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$1234),(((function (){var G__67351 = c;if(G__67351)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67351.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__67351.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__67351);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__67351);
}
})())?(function (){var _STAR_read_enabled_STAR_67352 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67352;
}})():null)], 0));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$),cljs.core.constant$keyword$1237], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$1233,(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_67362 = om.core.children(this$);if((function (){var G__67353 = c_67362;if(G__67353)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67353.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__67353.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__67353);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__67353);
}
})())
{var _STAR_read_enabled_STAR_67354_67363 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_67362);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67354_67363;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$1225,(function (){var this$ = this;var c = om.core.children(this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$)], null);if((function (){var G__67355 = c;if(G__67355)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67355.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__67355.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__67355);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__67355);
}
})())
{var _STAR_read_enabled_STAR_67356_67364 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67356_67364;
}} else
{}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.update_in,spath,cljs.core.dissoc);
}),cljs.core.constant$keyword$1229,(function (next_props,next_state){var this$ = this;var props_67365 = this$.props;var c_67366 = om.core.children(this$);if((function (){var G__67357 = c_67366;if(G__67357)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67357.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__67357.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__67357);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__67357);
}
})())
{var state_67367 = this$.state;var _STAR_read_enabled_STAR_67358_67368 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_67366,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67358_67368;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$1224,(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);var gstate = om.core.get_gstate(this$);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67359 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67359) : cljs.core.deref.call(null,G__67359));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$)], null);if((function (){var G__67360 = c;if(G__67360)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67360.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__67360.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__67360);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__67360);
}
})())
{var state_67369 = this$.state;var _STAR_read_enabled_STAR_67361_67370 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3637__auto__ = cljs.core.constant$keyword$1238.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.constant$keyword$1237.cljs$core$IFn$_invoke$arity$1(states);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67361_67370;
}} else
{}
if(cljs.core.truth_(cljs.core.constant$keyword$1238.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$1238], 0));
} else
{return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x67376 = cljs.core.clj__GT_js(methods$);x67376.om$core$IGetState$ = true;
x67376.om$core$IGetState$_get_state$arity$1 = ((function (x67376){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$__$1)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67377 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67377) : cljs.core.deref.call(null,G__67377));
})(),spath);var or__3637__auto__ = cljs.core.constant$keyword$1236.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.constant$keyword$1237.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x67376))
;
x67376.om$core$IGetState$_get_state$arity$2 = ((function (x67376){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x67376))
;
x67376.om$core$IGetRenderState$ = true;
x67376.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x67376){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$__$1),cljs.core.constant$keyword$1237], null);return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67378 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67378) : cljs.core.deref.call(null,G__67378));
})(),spath);
});})(x67376))
;
x67376.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x67376){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x67376))
;
x67376.om$core$ISetState$ = true;
x67376.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x67376){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_67379 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$__$1),cljs.core.constant$keyword$1236], null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__3625__auto__ = !((app_state == null));if(and__3625__auto__)
{return render;
} else
{return and__3625__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67379;
}});})(x67376))
;
x67376.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x67376){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_67380 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$__$1),cljs.core.constant$keyword$1236], null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$__$1),cljs.core.update_in,spath,cljs.core.assoc_in,cljs.core.array_seq([ks,val], 0));
if(cljs.core.truth_((function (){var and__3625__auto__ = !((app_state == null));if(and__3625__auto__)
{return render;
} else
{return and__3625__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67380;
}});})(x67376))
;
return x67376;
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
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,not_found);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found)))
{return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.hash(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__67382){var vec__67383 = p__67382;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67383,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67383,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__67385 = null;
var G__67385__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__67385__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__67385 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__67385__2.call(this,self__,k);
case 3:
return G__67385__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67385.cljs$core$IFn$_invoke$arity$2 = G__67385__2;
G__67385.cljs$core$IFn$_invoke$arity$3 = G__67385__3;
return G__67385;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args67381){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args67381)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67384 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67384) : cljs.core.deref.call(null,G__67384));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
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
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count(self__.value)))
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.hash(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__67388 = null;
var G__67388__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__67388__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__67388 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__67388__2.call(this,self__,k);
case 3:
return G__67388__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67388.cljs$core$IFn$_invoke$arity$2 = G__67388__2;
G__67388.cljs$core$IFn$_invoke$arity$3 = G__67388__3;
return G__67388;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args67386){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args67386)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67387 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67387) : cljs.core.deref.call(null,G__67387));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x67391 = cljs.core.clone(val);x67391.cljs$core$IEquiv$ = true;
x67391.cljs$core$IEquiv$_equiv$arity$2 = ((function (x67391){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x67391))
;
x67391.om$core$ITransact$ = true;
x67391.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x67391){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x67391))
;
x67391.om$core$ICursor$ = true;
x67391.om$core$ICursor$_path$arity$1 = ((function (x67391){
return (function (_){var ___$1 = this;return path;
});})(x67391))
;
x67391.om$core$ICursor$_state$arity$1 = ((function (x67391){
return (function (_){var ___$1 = this;return state;
});})(x67391))
;
x67391.cljs$core$IDeref$ = true;
x67391.cljs$core$IDeref$_deref$arity$1 = ((function (x67391){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67392 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67392) : cljs.core.deref.call(null,G__67392));
})(),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x67391))
;
return x67391;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_(val))
{return val;
} else
{if((function (){var G__67401 = val;if(G__67401)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67401.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__67401.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__67401);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__67401);
}
})())
{return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else
{if(cljs.core.indexed_QMARK_(val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_(val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__67402 = val;if(G__67402)
{var bit__4300__auto__ = (G__67402.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4300__auto__) || (G__67402.cljs$core$ICloneable$))
{return true;
} else
{if((!G__67402.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__67402);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__67402);
}
})())
{return om.core.to_cursor_STAR_(val,state,path);
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
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__67404 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67404) : cljs.core.deref.call(null,G__67404));
})(),state));
});
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__67406 = atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67406) : cljs.core.deref.call(null,G__67406));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__67407 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67407) : cljs.core.atom.call(null,G__67407));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x67415 = cljs.core.clone(x);x67415.om$core$ITransact$ = true;
x67415.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x67415){
return (function (cursor,korks,f,tag){var cursor__$1 = this;var G__67416_67419 = cursor__$1;var G__67417_67420 = korks;var G__67418_67421 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__67416_67419,G__67417_67420,G__67418_67421) : om.core.commit_BANG_.call(null,G__67416_67419,G__67417_67420,G__67418_67421));
return om.core._refresh_deps_BANG_(parent);
});})(x67415))
;
x67415.om$core$ICursorDerive$ = true;
x67415.om$core$ICursorDerive$_derive$arity$4 = ((function (x67415){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x67415))
;
x67415.om$core$IAdapt$ = true;
x67415.om$core$IAdapt$_adapt$arity$2 = ((function (x67415){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor(om.core.adapt(x,other));
});})(x67415))
;
x67415.cljs$core$ICloneable$ = true;
x67415.cljs$core$ICloneable$_clone$arity$1 = ((function (x67415){
return (function (this$){var this$__$1 = this;return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x67415))
;
return x67415;
});
om.core.ref_cursor = (function ref_cursor(cursor){var path = (function (){var G__67436 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__67436) : om.core.path.call(null,G__67436));
})();var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__67437 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67437) : cljs.core.atom.call(null,G__67437));
})())),path);var x67438 = cljs.core.clone(cursor);x67438.om$core$ITransact$ = true;
x67438.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x67438,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;var G__67439_67450 = cursor__$2;var G__67440_67451 = korks;var G__67441_67452 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__67439_67450,G__67440_67451,G__67441_67452) : om.core.commit_BANG_.call(null,G__67439_67450,G__67440_67451,G__67441_67452));
return om.core._refresh_deps_BANG_(cursor__$2);
});})(x67438,path,storage))
;
x67438.om$core$IOmRef$ = true;
x67438.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x67438,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__67442 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__67442) : om.core.id.call(null,G__67442));
})(),c);
});})(x67438,path,storage))
;
x67438.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x67438,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__67443 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__67443) : om.core.id.call(null,G__67443));
})());
});})(x67438,path,storage))
;
x67438.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x67438,path,storage){
return (function (_){var ___$1 = this;var seq__67444 = cljs.core.seq(cljs.core.vals((function (){var G__67448 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67448) : cljs.core.deref.call(null,G__67448));
})()));var chunk__67445 = null;var count__67446 = (0);var i__67447 = (0);while(true){
if((i__67447 < count__67446))
{var c = chunk__67445.cljs$core$IIndexed$_nth$arity$2(null,i__67447);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__67453 = seq__67444;
var G__67454 = chunk__67445;
var G__67455 = count__67446;
var G__67456 = (i__67447 + (1));
seq__67444 = G__67453;
chunk__67445 = G__67454;
count__67446 = G__67455;
i__67447 = G__67456;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__67444);if(temp__4126__auto__)
{var seq__67444__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__67444__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__67444__$1);{
var G__67457 = cljs.core.chunk_rest(seq__67444__$1);
var G__67458 = c__4406__auto__;
var G__67459 = cljs.core.count(c__4406__auto__);
var G__67460 = (0);
seq__67444 = G__67457;
chunk__67445 = G__67458;
count__67446 = G__67459;
i__67447 = G__67460;
continue;
}
} else
{var c = cljs.core.first(seq__67444__$1);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__67461 = cljs.core.next(seq__67444__$1);
var G__67462 = null;
var G__67463 = (0);
var G__67464 = (0);
seq__67444 = G__67461;
chunk__67445 = G__67462;
count__67446 = G__67463;
i__67447 = G__67464;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x67438,path,storage))
;
x67438.om$core$IOmRef$_get_deps$arity$1 = ((function (x67438,path,storage){
return (function (_){var ___$1 = this;var G__67449 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67449) : cljs.core.deref.call(null,G__67449));
});})(x67438,path,storage))
;
x67438.om$core$ICursorDerive$ = true;
x67438.om$core$ICursorDerive$_derive$arity$4 = ((function (x67438,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x67438,path,storage))
;
return x67438;
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__3637__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_(refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_(refs,ref))
{return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else
{return null;
}
});
om.core.observe = (function observe(c,ref){om.core.add_ref_to_component_BANG_(c,ref);
om.core._add_dep_BANG_(ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_(c,ref);
om.core._remove_dep_BANG_(ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__67465 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67465) : cljs.core.atom.call(null,G__67465));
})();
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__67471 = cljs.core.seq((function (){var G__67475 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67475) : cljs.core.deref.call(null,G__67475));
})());var chunk__67472 = null;var count__67473 = (0);var i__67474 = (0);while(true){
if((i__67474 < count__67473))
{var f = chunk__67472.cljs$core$IIndexed$_nth$arity$2(null,i__67474);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__67476 = seq__67471;
var G__67477 = chunk__67472;
var G__67478 = count__67473;
var G__67479 = (i__67474 + (1));
seq__67471 = G__67476;
chunk__67472 = G__67477;
count__67473 = G__67478;
i__67474 = G__67479;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__67471);if(temp__4126__auto__)
{var seq__67471__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__67471__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__67471__$1);{
var G__67480 = cljs.core.chunk_rest(seq__67471__$1);
var G__67481 = c__4406__auto__;
var G__67482 = cljs.core.count(c__4406__auto__);
var G__67483 = (0);
seq__67471 = G__67480;
chunk__67472 = G__67481;
count__67473 = G__67482;
i__67474 = G__67483;
continue;
}
} else
{var f = cljs.core.first(seq__67471__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__67484 = cljs.core.next(seq__67471__$1);
var G__67485 = null;
var G__67486 = (0);
var G__67487 = (0);
seq__67471 = G__67484;
chunk__67472 = G__67485;
count__67473 = G__67486;
i__67474 = G__67487;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = (function (){var G__67488 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67488) : cljs.core.atom.call(null,G__67488));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3637__auto__ = (function (){var G__67495 = x;if(G__67495)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67495.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__67495.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__67495);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__67495);
}
})();if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (function (){var G__67497 = x;if(G__67497)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto____$1 = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
} else
{return G__67497.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__67497.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__67497);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__67497);
}
})();if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{var G__67498 = x;if(G__67498)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto____$2 = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto____$2))
{return or__3637__auto____$2;
} else
{return G__67498.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__67498.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__67498);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__67498);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0))))));
}
});
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$1239,null,cljs.core.constant$keyword$1240,null,cljs.core.constant$keyword$1241,null,cljs.core.constant$keyword$1242,null,cljs.core.constant$keyword$1243,null,cljs.core.constant$keyword$1244,null,cljs.core.constant$keyword$1245,null,cljs.core.constant$keyword$1246,null,cljs.core.constant$keyword$1247,null,cljs.core.constant$keyword$1248,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = (function (){var G__67502 = (function (){var or__3637__auto__ = descriptor;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})();return React.createClass(G__67502);
})());
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
var build_STAR___2 = (function (f,cursor){return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_(m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1428119148,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0))))));
}
if((m == null))
{var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);var G__67522 = {"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_67523 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__67524 = cursor;var G__67525 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67524,G__67525) : f.call(null,G__67524,G__67525));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67523;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__67522) : ctor.call(null,G__67522));
} else
{var map__67526 = m;var map__67526__$1 = ((cljs.core.seq_QMARK_(map__67526))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67526):map__67526);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67526__$1,cljs.core.constant$keyword$1246);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67526__$1,cljs.core.constant$keyword$1244);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67526__$1,cljs.core.constant$keyword$1245);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67526__$1,cljs.core.constant$keyword$1243);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$1240);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$1247.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;var G__67527 = cursor;var G__67528 = i;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__67527,G__67528) : dataf.call(null,G__67527,G__67528));
} else
{var G__67529 = cursor;return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__67529) : dataf.call(null,G__67529));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$1242));var shared = (function (){var or__3637__auto__ = cljs.core.constant$keyword$1248.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$1239.cljs$core$IFn$_invoke$arity$1(m));var G__67530 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__67526,map__67526__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_67531 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__67532 = cursor_SINGLEQUOTE_;var G__67533 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67532,G__67533) : f.call(null,G__67532,G__67533));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67531;
}});})(map__67526,map__67526__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__67526,map__67526__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_67534 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__67535 = cursor_SINGLEQUOTE_;var G__67536 = this$;var G__67537 = opts;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__67535,G__67536,G__67537) : f.call(null,G__67535,G__67536,G__67537));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67534;
}});})(map__67526,map__67526__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$1247.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__67530) : ctor.call(null,G__67530));

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
var build__2 = (function (f,x){return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_67545 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__67546 = f;var G__67547 = x;var G__67548 = m;return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__67546,G__67547,G__67548) : om.core._STAR_instrument_STAR_.call(null,G__67546,G__67547,G__67548));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_67545;
}})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$1249))
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
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
var build_all__2 = (function (f,xs){return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$1247,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
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
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__67571 = state;if(G__67571)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67571.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__67571.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__67571);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__67571);
}
})())
{} else
{var properties_67590 = (function (){var G__67572 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67572) : cljs.core.atom.call(null,G__67572));
})();var listeners_67591 = (function (){var G__67573 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67573) : cljs.core.atom.call(null,G__67573));
})();var render_queue_67592 = (function (){var G__67574 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67574) : cljs.core.atom.call(null,G__67574));
})();var x67575_67593 = state;x67575_67593.om$core$IRenderQueue$ = true;
x67575_67593.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (this$){var this$__$1 = this;var G__67576 = render_queue_67592;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67576) : cljs.core.deref.call(null,G__67576));
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_((function (){var G__67577 = render_queue_67592;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67577) : cljs.core.deref.call(null,G__67577));
})(),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_67592,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_67592,cljs.core.empty);
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$INotify$ = true;
x67575_67593.om$core$INotify$_listen_BANG_$arity$3 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_67591,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_67591,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$INotify$_notify_BANG_$arity$3 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__67578_67594 = cljs.core.seq((function (){var G__67582 = listeners_67591;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67582) : cljs.core.deref.call(null,G__67582));
})());var chunk__67579_67595 = null;var count__67580_67596 = (0);var i__67581_67597 = (0);while(true){
if((i__67581_67597 < count__67580_67596))
{var vec__67583_67598 = chunk__67579_67595.cljs$core$IIndexed$_nth$arity$2(null,i__67581_67597);var __67599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67583_67598,(0),null);var f_67600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67583_67598,(1),null);var G__67584_67601 = tx_data;var G__67585_67602 = root_cursor;(f_67600.cljs$core$IFn$_invoke$arity$2 ? f_67600.cljs$core$IFn$_invoke$arity$2(G__67584_67601,G__67585_67602) : f_67600.call(null,G__67584_67601,G__67585_67602));
{
var G__67603 = seq__67578_67594;
var G__67604 = chunk__67579_67595;
var G__67605 = count__67580_67596;
var G__67606 = (i__67581_67597 + (1));
seq__67578_67594 = G__67603;
chunk__67579_67595 = G__67604;
count__67580_67596 = G__67605;
i__67581_67597 = G__67606;
continue;
}
} else
{var temp__4126__auto___67607 = cljs.core.seq(seq__67578_67594);if(temp__4126__auto___67607)
{var seq__67578_67608__$1 = temp__4126__auto___67607;if(cljs.core.chunked_seq_QMARK_(seq__67578_67608__$1))
{var c__4406__auto___67609 = cljs.core.chunk_first(seq__67578_67608__$1);{
var G__67610 = cljs.core.chunk_rest(seq__67578_67608__$1);
var G__67611 = c__4406__auto___67609;
var G__67612 = cljs.core.count(c__4406__auto___67609);
var G__67613 = (0);
seq__67578_67594 = G__67610;
chunk__67579_67595 = G__67611;
count__67580_67596 = G__67612;
i__67581_67597 = G__67613;
continue;
}
} else
{var vec__67586_67614 = cljs.core.first(seq__67578_67608__$1);var __67615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67586_67614,(0),null);var f_67616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67586_67614,(1),null);var G__67587_67617 = tx_data;var G__67588_67618 = root_cursor;(f_67616.cljs$core$IFn$_invoke$arity$2 ? f_67616.cljs$core$IFn$_invoke$arity$2(G__67587_67617,G__67588_67618) : f_67616.call(null,G__67587_67617,G__67588_67618));
{
var G__67619 = cljs.core.next(seq__67578_67608__$1);
var G__67620 = null;
var G__67621 = (0);
var G__67622 = (0);
seq__67578_67594 = G__67619;
chunk__67579_67595 = G__67620;
count__67580_67596 = G__67621;
i__67581_67597 = G__67622;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$IRootProperties$ = true;
x67575_67593.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_67590,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_67590,cljs.core.dissoc,id,k);
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_67590,cljs.core.dissoc,id);
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
x67575_67593.om$core$IRootProperties$_get_property$arity$3 = ((function (x67575_67593,properties_67590,listeners_67591,render_queue_67592){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__67589 = properties_67590;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67589) : cljs.core.deref.call(null,G__67589));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x67575_67593,properties_67590,listeners_67591,render_queue_67592))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_(cursor))
{var x67628 = cljs.core.clone(cursor);x67628.om$core$IRootKey$ = true;
x67628.om$core$IRootKey$_root_key$arity$1 = ((function (x67628){
return (function (this$){var this$__$1 = this;return root_key;
});})(x67628))
;
x67628.om$core$IAdapt$ = true;
x67628.om$core$IAdapt$_adapt$arity$2 = ((function (x67628){
return (function (this$,other){var this$__$1 = this;return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x67628))
;
x67628.cljs$core$ICloneable$ = true;
x67628.cljs$core$ICloneable$_clone$arity$1 = ((function (x67628){
return (function (this$){var this$__$1 = this;return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x67628))
;
return x67628;
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
om.core.root = (function root(f,value,p__67629){var map__67710 = p__67629;var map__67710__$1 = ((cljs.core.seq_QMARK_(map__67710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67710):map__67710);var options = map__67710__$1;var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,cljs.core.constant$keyword$1250);var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,cljs.core.constant$keyword$1239);var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,cljs.core.constant$keyword$1241);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,cljs.core.constant$keyword$1217);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,cljs.core.constant$keyword$1251);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,cljs.core.constant$keyword$1252);if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0))))));
}
var roots_SINGLEQUOTE__67790 = (function (){var G__67711 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67711) : cljs.core.deref.call(null,G__67711));
})();if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__67790,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__67790,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__67712 = value;if(G__67712)
{var bit__4300__auto__ = (G__67712.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4300__auto__) || (G__67712.cljs$core$IAtom$))
{return true;
} else
{if((!G__67712.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__67712);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__67712);
}
})())?value:(function (){var G__67713 = value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67713) : cljs.core.atom.call(null,G__67713));
})());var state__$1 = om.core.setup(state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3637__auto__ = adapt;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$1252,cljs.core.array_seq([cljs.core.constant$keyword$1251,cljs.core.constant$keyword$1217,cljs.core.constant$keyword$1250], 0));var ret = (function (){var G__67714 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67714) : cljs.core.atom.call(null,G__67714));
})();var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__67710,map__67710__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = (function (){var G__67750 = state__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67750) : cljs.core.deref.call(null,G__67750));
})();var cursor = (function (){var G__67751 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__67751) : adapt__$1.call(null,G__67751));
})();if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$1253)))
{} else
{var c_67791 = om.dom.render((function (){var _STAR_descriptor_STAR_67752 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_67753 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_67754 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_67755 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_67755;
om.core._STAR_state_STAR_ = _STAR_state_STAR_67754;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_67753;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_67752;
}})(),target);if(((function (){var G__67756 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67756) : cljs.core.deref.call(null,G__67756));
})() == null))
{var G__67757_67792 = ret;var G__67758_67793 = c_67791;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__67757_67792,G__67758_67793) : cljs.core.reset_BANG_.call(null,G__67757_67792,G__67758_67793));
} else
{}
}
var queue_67794 = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue_67794))
{} else
{var seq__67759_67795 = cljs.core.seq(queue_67794);var chunk__67760_67796 = null;var count__67761_67797 = (0);var i__67762_67798 = (0);while(true){
if((i__67762_67798 < count__67761_67797))
{var c_67799 = chunk__67760_67796.cljs$core$IIndexed$_nth$arity$2(null,i__67762_67798);if(cljs.core.truth_(c_67799.isMounted()))
{var temp__4126__auto___67800 = (c_67799.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___67800))
{var next_props_67801 = temp__4126__auto___67800;(c_67799.props["__om_cursor"] = next_props_67801);
(c_67799.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_67799.shouldComponentUpdate(c_67799.props,c_67799.state)))
{c_67799.forceUpdate();
} else
{}
} else
{}
{
var G__67802 = seq__67759_67795;
var G__67803 = chunk__67760_67796;
var G__67804 = count__67761_67797;
var G__67805 = (i__67762_67798 + (1));
seq__67759_67795 = G__67802;
chunk__67760_67796 = G__67803;
count__67761_67797 = G__67804;
i__67762_67798 = G__67805;
continue;
}
} else
{var temp__4126__auto___67806 = cljs.core.seq(seq__67759_67795);if(temp__4126__auto___67806)
{var seq__67759_67807__$1 = temp__4126__auto___67806;if(cljs.core.chunked_seq_QMARK_(seq__67759_67807__$1))
{var c__4406__auto___67808 = cljs.core.chunk_first(seq__67759_67807__$1);{
var G__67809 = cljs.core.chunk_rest(seq__67759_67807__$1);
var G__67810 = c__4406__auto___67808;
var G__67811 = cljs.core.count(c__4406__auto___67808);
var G__67812 = (0);
seq__67759_67795 = G__67809;
chunk__67760_67796 = G__67810;
count__67761_67797 = G__67811;
i__67762_67798 = G__67812;
continue;
}
} else
{var c_67813 = cljs.core.first(seq__67759_67807__$1);if(cljs.core.truth_(c_67813.isMounted()))
{var temp__4126__auto___67814__$1 = (c_67813.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___67814__$1))
{var next_props_67815 = temp__4126__auto___67814__$1;(c_67813.props["__om_cursor"] = next_props_67815);
(c_67813.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_67813.shouldComponentUpdate(c_67813.props,c_67813.state)))
{c_67813.forceUpdate();
} else
{}
} else
{}
{
var G__67816 = cljs.core.next(seq__67759_67807__$1);
var G__67817 = null;
var G__67818 = (0);
var G__67819 = (0);
seq__67759_67795 = G__67816;
chunk__67760_67796 = G__67817;
count__67761_67797 = G__67818;
i__67762_67798 = G__67819;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_(state__$1);
}
var _refs_67820 = (function (){var G__67763 = om.core._refs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67763) : cljs.core.deref.call(null,G__67763));
})();if(cljs.core.empty_QMARK_(_refs_67820))
{} else
{var seq__67764_67821 = cljs.core.seq(_refs_67820);var chunk__67765_67822 = null;var count__67766_67823 = (0);var i__67767_67824 = (0);while(true){
if((i__67767_67824 < count__67766_67823))
{var vec__67768_67825 = chunk__67765_67822.cljs$core$IIndexed$_nth$arity$2(null,i__67767_67824);var path_67826__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67768_67825,(0),null);var cs_67827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67768_67825,(1),null);var cs_67828__$1 = (function (){var G__67769 = cs_67827;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67769) : cljs.core.deref.call(null,G__67769));
})();var seq__67770_67829 = cljs.core.seq(cs_67828__$1);var chunk__67771_67830 = null;var count__67772_67831 = (0);var i__67773_67832 = (0);while(true){
if((i__67773_67832 < count__67772_67831))
{var vec__67774_67833 = chunk__67771_67830.cljs$core$IIndexed$_nth$arity$2(null,i__67773_67832);var id_67834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67774_67833,(0),null);var c_67835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67774_67833,(1),null);if(cljs.core.truth_(c_67835.shouldComponentUpdate(c_67835.props,c_67835.state)))
{c_67835.forceUpdate();
} else
{}
{
var G__67836 = seq__67770_67829;
var G__67837 = chunk__67771_67830;
var G__67838 = count__67772_67831;
var G__67839 = (i__67773_67832 + (1));
seq__67770_67829 = G__67836;
chunk__67771_67830 = G__67837;
count__67772_67831 = G__67838;
i__67773_67832 = G__67839;
continue;
}
} else
{var temp__4126__auto___67840 = cljs.core.seq(seq__67770_67829);if(temp__4126__auto___67840)
{var seq__67770_67841__$1 = temp__4126__auto___67840;if(cljs.core.chunked_seq_QMARK_(seq__67770_67841__$1))
{var c__4406__auto___67842 = cljs.core.chunk_first(seq__67770_67841__$1);{
var G__67843 = cljs.core.chunk_rest(seq__67770_67841__$1);
var G__67844 = c__4406__auto___67842;
var G__67845 = cljs.core.count(c__4406__auto___67842);
var G__67846 = (0);
seq__67770_67829 = G__67843;
chunk__67771_67830 = G__67844;
count__67772_67831 = G__67845;
i__67773_67832 = G__67846;
continue;
}
} else
{var vec__67775_67847 = cljs.core.first(seq__67770_67841__$1);var id_67848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67775_67847,(0),null);var c_67849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67775_67847,(1),null);if(cljs.core.truth_(c_67849.shouldComponentUpdate(c_67849.props,c_67849.state)))
{c_67849.forceUpdate();
} else
{}
{
var G__67850 = cljs.core.next(seq__67770_67841__$1);
var G__67851 = null;
var G__67852 = (0);
var G__67853 = (0);
seq__67770_67829 = G__67850;
chunk__67771_67830 = G__67851;
count__67772_67831 = G__67852;
i__67773_67832 = G__67853;
continue;
}
}
} else
{}
}
break;
}
{
var G__67854 = seq__67764_67821;
var G__67855 = chunk__67765_67822;
var G__67856 = count__67766_67823;
var G__67857 = (i__67767_67824 + (1));
seq__67764_67821 = G__67854;
chunk__67765_67822 = G__67855;
count__67766_67823 = G__67856;
i__67767_67824 = G__67857;
continue;
}
} else
{var temp__4126__auto___67858 = cljs.core.seq(seq__67764_67821);if(temp__4126__auto___67858)
{var seq__67764_67859__$1 = temp__4126__auto___67858;if(cljs.core.chunked_seq_QMARK_(seq__67764_67859__$1))
{var c__4406__auto___67860 = cljs.core.chunk_first(seq__67764_67859__$1);{
var G__67861 = cljs.core.chunk_rest(seq__67764_67859__$1);
var G__67862 = c__4406__auto___67860;
var G__67863 = cljs.core.count(c__4406__auto___67860);
var G__67864 = (0);
seq__67764_67821 = G__67861;
chunk__67765_67822 = G__67862;
count__67766_67823 = G__67863;
i__67767_67824 = G__67864;
continue;
}
} else
{var vec__67776_67865 = cljs.core.first(seq__67764_67859__$1);var path_67866__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67776_67865,(0),null);var cs_67867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67776_67865,(1),null);var cs_67868__$1 = (function (){var G__67777 = cs_67867;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67777) : cljs.core.deref.call(null,G__67777));
})();var seq__67778_67869 = cljs.core.seq(cs_67868__$1);var chunk__67779_67870 = null;var count__67780_67871 = (0);var i__67781_67872 = (0);while(true){
if((i__67781_67872 < count__67780_67871))
{var vec__67782_67873 = chunk__67779_67870.cljs$core$IIndexed$_nth$arity$2(null,i__67781_67872);var id_67874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67782_67873,(0),null);var c_67875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67782_67873,(1),null);if(cljs.core.truth_(c_67875.shouldComponentUpdate(c_67875.props,c_67875.state)))
{c_67875.forceUpdate();
} else
{}
{
var G__67876 = seq__67778_67869;
var G__67877 = chunk__67779_67870;
var G__67878 = count__67780_67871;
var G__67879 = (i__67781_67872 + (1));
seq__67778_67869 = G__67876;
chunk__67779_67870 = G__67877;
count__67780_67871 = G__67878;
i__67781_67872 = G__67879;
continue;
}
} else
{var temp__4126__auto___67880__$1 = cljs.core.seq(seq__67778_67869);if(temp__4126__auto___67880__$1)
{var seq__67778_67881__$1 = temp__4126__auto___67880__$1;if(cljs.core.chunked_seq_QMARK_(seq__67778_67881__$1))
{var c__4406__auto___67882 = cljs.core.chunk_first(seq__67778_67881__$1);{
var G__67883 = cljs.core.chunk_rest(seq__67778_67881__$1);
var G__67884 = c__4406__auto___67882;
var G__67885 = cljs.core.count(c__4406__auto___67882);
var G__67886 = (0);
seq__67778_67869 = G__67883;
chunk__67779_67870 = G__67884;
count__67780_67871 = G__67885;
i__67781_67872 = G__67886;
continue;
}
} else
{var vec__67783_67887 = cljs.core.first(seq__67778_67881__$1);var id_67888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67783_67887,(0),null);var c_67889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67783_67887,(1),null);if(cljs.core.truth_(c_67889.shouldComponentUpdate(c_67889.props,c_67889.state)))
{c_67889.forceUpdate();
} else
{}
{
var G__67890 = cljs.core.next(seq__67778_67881__$1);
var G__67891 = null;
var G__67892 = (0);
var G__67893 = (0);
seq__67778_67869 = G__67890;
chunk__67779_67870 = G__67891;
count__67780_67871 = G__67892;
i__67781_67872 = G__67893;
continue;
}
}
} else
{}
}
break;
}
{
var G__67894 = cljs.core.next(seq__67764_67859__$1);
var G__67895 = null;
var G__67896 = (0);
var G__67897 = (0);
seq__67764_67821 = G__67894;
chunk__67765_67822 = G__67895;
count__67766_67823 = G__67896;
i__67767_67824 = G__67897;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$1253,true);
var G__67784 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67784) : cljs.core.deref.call(null,G__67784));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__67710,map__67710__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__67710,map__67710__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$1254))) && (!((o === n))))
{om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$1253,false);
} else
{}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$1254,false);
if(cljs.core.contains_QMARK_((function (){var G__67785 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67785) : cljs.core.deref.call(null,G__67785));
})(),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{var G__67786 = om.core.render_all;return requestAnimationFrame(G__67786);
} else
{var G__67787 = om.core.render_all;var G__67788 = (16);return setTimeout(G__67787,G__67788);
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__67710,map__67710__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__67710,map__67710__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_(state__$1,watch_key);
cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
var G__67789 = target;return React.unmountComponentAtNode(G__67789);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__67710,map__67710__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__67899 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67899) : cljs.core.deref.call(null,G__67899));
})(),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
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
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_(cursor,korks__$1,f,tag);
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
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
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
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_(cursor))
{} else
{throw (new Error("First argument to commit! must be a cursor"));
}
var key = (((function (){var G__67910 = cursor;if(G__67910)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__67910.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__67910.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__67910);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__67910);
}
})())?om.core._root_key(cursor):null);var app_state = om.core.state(cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = (function (){var G__67911 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__67911) : om.core.path.call(null,G__67911));
})();var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$1254,true);
} else
{}
if(cljs.core.empty_QMARK_(rpath))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
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
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
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
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
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
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__67914 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67914) : f.call(null,G__67914));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__67915 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67915) : f.call(null,G__67915));
})());
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
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__67918 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67918) : f.call(null,G__67918));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__67919 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67919) : f.call(null,G__67919));
})());
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
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
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
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){return om.core._STAR_read_enabled_STAR_ === true;
});
