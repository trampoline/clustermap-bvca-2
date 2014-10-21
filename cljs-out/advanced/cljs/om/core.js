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
om.core.IDisplayName = (function (){var obj68251 = {};return obj68251;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.display_name[(function (){var G__68255 = x__4273__auto__;return goog.typeOf(G__68255);
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
om.core.IInitState = (function (){var obj68257 = {};return obj68257;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.init_state[(function (){var G__68261 = x__4273__auto__;return goog.typeOf(G__68261);
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
om.core.IShouldUpdate = (function (){var obj68263 = {};return obj68263;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.should_update[(function (){var G__68267 = x__4273__auto__;return goog.typeOf(G__68267);
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
om.core.IWillMount = (function (){var obj68269 = {};return obj68269;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.will_mount[(function (){var G__68273 = x__4273__auto__;return goog.typeOf(G__68273);
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
om.core.IDidMount = (function (){var obj68275 = {};return obj68275;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.did_mount[(function (){var G__68279 = x__4273__auto__;return goog.typeOf(G__68279);
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
om.core.IWillUnmount = (function (){var obj68281 = {};return obj68281;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.will_unmount[(function (){var G__68285 = x__4273__auto__;return goog.typeOf(G__68285);
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
om.core.IWillUpdate = (function (){var obj68287 = {};return obj68287;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.will_update[(function (){var G__68291 = x__4273__auto__;return goog.typeOf(G__68291);
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
om.core.IDidUpdate = (function (){var obj68293 = {};return obj68293;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.did_update[(function (){var G__68297 = x__4273__auto__;return goog.typeOf(G__68297);
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
om.core.IWillReceiveProps = (function (){var obj68299 = {};return obj68299;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.will_receive_props[(function (){var G__68303 = x__4273__auto__;return goog.typeOf(G__68303);
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
om.core.IRender = (function (){var obj68305 = {};return obj68305;
})();
om.core.render = (function render(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.render[(function (){var G__68309 = x__4273__auto__;return goog.typeOf(G__68309);
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
om.core.IRenderProps = (function (){var obj68311 = {};return obj68311;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.render_props[(function (){var G__68315 = x__4273__auto__;return goog.typeOf(G__68315);
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
om.core.IRenderState = (function (){var obj68317 = {};return obj68317;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core.render_state[(function (){var G__68321 = x__4273__auto__;return goog.typeOf(G__68321);
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
om.core.IOmSwap = (function (){var obj68323 = {};return obj68323;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._om_swap_BANG_[(function (){var G__68327 = x__4273__auto__;return goog.typeOf(G__68327);
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
om.core.IGetState = (function (){var obj68329 = {};return obj68329;
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_state[(function (){var G__68335 = x__4273__auto__;return goog.typeOf(G__68335);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_state[(function (){var G__68337 = x__4273__auto__;return goog.typeOf(G__68337);
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
om.core.IGetRenderState = (function (){var obj68339 = {};return obj68339;
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_render_state[(function (){var G__68345 = x__4273__auto__;return goog.typeOf(G__68345);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_render_state[(function (){var G__68347 = x__4273__auto__;return goog.typeOf(G__68347);
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
om.core.ISetState = (function (){var obj68349 = {};return obj68349;
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._set_state_BANG_[(function (){var G__68355 = x__4273__auto__;return goog.typeOf(G__68355);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._set_state_BANG_[(function (){var G__68357 = x__4273__auto__;return goog.typeOf(G__68357);
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
om.core.IRenderQueue = (function (){var obj68359 = {};return obj68359;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_queue[(function (){var G__68363 = x__4273__auto__;return goog.typeOf(G__68363);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._queue_render_BANG_[(function (){var G__68367 = x__4273__auto__;return goog.typeOf(G__68367);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._empty_queue_BANG_[(function (){var G__68371 = x__4273__auto__;return goog.typeOf(G__68371);
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
om.core.IValue = (function (){var obj68373 = {};return obj68373;
})();
om.core._value = (function _value(x){if((function (){var and__3625__auto__ = x;if(and__3625__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3625__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4273__auto__ = (((x == null))?null:x);return (function (){var or__3637__auto__ = (om.core._value[(function (){var G__68377 = x__4273__auto__;return goog.typeOf(G__68377);
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
om.core.ICursor = (function (){var obj68379 = {};return obj68379;
})();
om.core._path = (function _path(cursor){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._path[(function (){var G__68383 = x__4273__auto__;return goog.typeOf(G__68383);
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
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._state[(function (){var G__68387 = x__4273__auto__;return goog.typeOf(G__68387);
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
om.core.IToCursor = (function (){var obj68389 = {};return obj68389;
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
{var x__4273__auto__ = (((value == null))?null:value);return (function (){var or__3637__auto__ = (om.core._to_cursor[(function (){var G__68395 = x__4273__auto__;return goog.typeOf(G__68395);
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
{var x__4273__auto__ = (((value == null))?null:value);return (function (){var or__3637__auto__ = (om.core._to_cursor[(function (){var G__68397 = x__4273__auto__;return goog.typeOf(G__68397);
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
om.core.ICursorDerive = (function (){var obj68399 = {};return obj68399;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._derive[(function (){var G__68403 = x__4273__auto__;return goog.typeOf(G__68403);
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
(om.core._derive["_"] = (function (this$,derived,state,path){var G__68404 = derived;var G__68405 = state;var G__68406 = path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__68404,G__68405,G__68406) : om.core.to_cursor.call(null,G__68404,G__68405,G__68406));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj68408 = {};return obj68408;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._transact_BANG_[(function (){var G__68412 = x__4273__auto__;return goog.typeOf(G__68412);
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
om.core.INotify = (function (){var obj68414 = {};return obj68414;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3625__auto__ = x;if(and__3625__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4273__auto__ = (((x == null))?null:x);return (function (){var or__3637__auto__ = (om.core._listen_BANG_[(function (){var G__68418 = x__4273__auto__;return goog.typeOf(G__68418);
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
{var x__4273__auto__ = (((x == null))?null:x);return (function (){var or__3637__auto__ = (om.core._unlisten_BANG_[(function (){var G__68422 = x__4273__auto__;return goog.typeOf(G__68422);
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
{var x__4273__auto__ = (((x == null))?null:x);return (function (){var or__3637__auto__ = (om.core._notify_BANG_[(function (){var G__68426 = x__4273__auto__;return goog.typeOf(G__68426);
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
om.core.IRootProperties = (function (){var obj68428 = {};return obj68428;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._set_property_BANG_[(function (){var G__68432 = x__4273__auto__;return goog.typeOf(G__68432);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._remove_property_BANG_[(function (){var G__68436 = x__4273__auto__;return goog.typeOf(G__68436);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._remove_properties_BANG_[(function (){var G__68440 = x__4273__auto__;return goog.typeOf(G__68440);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_property[(function (){var G__68444 = x__4273__auto__;return goog.typeOf(G__68444);
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
om.core.IRootKey = (function (){var obj68446 = {};return obj68446;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3625__auto__ = cursor;if(and__3625__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3625__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4273__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3637__auto__ = (om.core._root_key[(function (){var G__68450 = x__4273__auto__;return goog.typeOf(G__68450);
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
om.core.IAdapt = (function (){var obj68452 = {};return obj68452;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._adapt[(function (){var G__68456 = x__4273__auto__;return goog.typeOf(G__68456);
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
om.core.IOmRef = (function (){var obj68458 = {};return obj68458;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._add_dep_BANG_[(function (){var G__68462 = x__4273__auto__;return goog.typeOf(G__68462);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._remove_dep_BANG_[(function (){var G__68466 = x__4273__auto__;return goog.typeOf(G__68466);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__68470 = x__4273__auto__;return goog.typeOf(G__68470);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (om.core._get_deps[(function (){var G__68474 = x__4273__auto__;return goog.typeOf(G__68474);
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
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = (function (){var G__68484 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68484) : cljs.core.deref.call(null,G__68484));
})();var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__68485 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__68485) : om.core.path.call(null,G__68485));
})(),korks);var ret = (((function (){var G__68486 = state;if(G__68486)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68486.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__68486.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__68486);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__68486);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$1216))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1217,path,cljs.core.constant$keyword$1218,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$1219,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68487 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68487) : cljs.core.deref.call(null,G__68487));
})(),path),cljs.core.constant$keyword$1220,old_state,cljs.core.constant$keyword$1221,(function (){var G__68488 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68488) : cljs.core.deref.call(null,G__68488));
})()], null);if(!((tag == null)))
{var G__68489 = cursor;var G__68490 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$1222,tag);return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__68489,G__68490) : om.core.notify_STAR_.call(null,G__68489,G__68490));
} else
{var G__68491 = cursor;var G__68492 = tx_data;return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__68491,G__68492) : om.core.notify_STAR_.call(null,G__68491,G__68492));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__68494 = x;if(G__68494)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68494.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__68494.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__68494);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__68494);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_68497 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__68498 = node;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__68498) : c.call(null,G__68498));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68497;
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
{var pending_state = temp__4126__auto__;var G__68503 = state;(G__68503["__om_prev_state"] = (state["__om_state"]));
(G__68503["__om_state"] = pending_state);
(G__68503["__om_pending_state"] = null);
return G__68503;
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
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value(ref);var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__68508 = om.core.state(ref);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68508) : cljs.core.deref.call(null,G__68508));
})(),(function (){var G__68509 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__68509) : om.core.path.call(null,G__68509));
})(),cljs.core.constant$keyword$1223);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count(refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){var ref_val = om.core.value(ref);var ref_state = om.core.state(ref);var ref_path = (function (){var G__68515 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__68515) : om.core.path.call(null,G__68515));
})();var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__68516 = ref_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68516) : cljs.core.deref.call(null,G__68516));
})(),ref_path,cljs.core.constant$keyword$1223);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$1223))
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt(ref,(function (){var G__68517 = ref_val_SINGLEQUOTE_;var G__68518 = ref_state;var G__68519 = ref_path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__68517,G__68518,G__68519) : om.core.to_cursor.call(null,G__68517,G__68518,G__68519));
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
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1224,cljs.core.constant$keyword$1225,cljs.core.constant$keyword$1226,cljs.core.constant$keyword$1227,cljs.core.constant$keyword$1228,cljs.core.constant$keyword$1229,cljs.core.constant$keyword$1230,cljs.core.constant$keyword$1231,cljs.core.constant$keyword$1232,cljs.core.constant$keyword$1233],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__68521 = c;if(G__68521)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68521.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__68521.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__68521);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__68521);
}
})())
{var state_68556 = this$.state;var _STAR_read_enabled_STAR_68522_68557 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3637__auto__ = (state_68556["__om_prev_state"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (state_68556["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68522_68557;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__68523 = c;if(G__68523)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68523.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__68523.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__68523);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__68523);
}
})())
{var _STAR_read_enabled_STAR_68524_68558 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68524_68558;
}} else
{}
var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__68525 = cljs.core.seq(refs);var chunk__68526 = null;var count__68527 = (0);var i__68528 = (0);while(true){
if((i__68528 < count__68527))
{var ref = chunk__68526.cljs$core$IIndexed$_nth$arity$2(null,i__68528);var G__68529_68559 = this$;var G__68530_68560 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__68529_68559,G__68530_68560) : om.core.unobserve.call(null,G__68529_68559,G__68530_68560));
{
var G__68561 = seq__68525;
var G__68562 = chunk__68526;
var G__68563 = count__68527;
var G__68564 = (i__68528 + (1));
seq__68525 = G__68561;
chunk__68526 = G__68562;
count__68527 = G__68563;
i__68528 = G__68564;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq(seq__68525);if(temp__4126__auto____$1)
{var seq__68525__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(seq__68525__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__68525__$1);{
var G__68565 = cljs.core.chunk_rest(seq__68525__$1);
var G__68566 = c__4406__auto__;
var G__68567 = cljs.core.count(c__4406__auto__);
var G__68568 = (0);
seq__68525 = G__68565;
chunk__68526 = G__68566;
count__68527 = G__68567;
i__68528 = G__68568;
continue;
}
} else
{var ref = cljs.core.first(seq__68525__$1);var G__68531_68569 = this$;var G__68532_68570 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__68531_68569,G__68532_68570) : om.core.unobserve.call(null,G__68531_68569,G__68532_68570));
{
var G__68571 = cljs.core.next(seq__68525__$1);
var G__68572 = null;
var G__68573 = (0);
var G__68574 = (0);
seq__68525 = G__68571;
chunk__68526 = G__68572;
count__68527 = G__68573;
i__68528 = G__68574;
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
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__68533 = c;if(G__68533)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68533.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__68533.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__68533);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__68533);
}
})())
{var _STAR_read_enabled_STAR_68534 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68534;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_68535 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__68536 = c;if(G__68536)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68536.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__68536.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__68536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__68536);
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
{return cljs.core.some(((function (and__3625__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_68535,this$){
return (function (p1__68520_SHARP_){return om.core.ref_changed_QMARK_(p1__68520_SHARP_);
});})(and__3625__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_68535,this$))
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68535;
}}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_parent_STAR_68537 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_68538 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_68539 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_68540 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_68541 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
var _STAR_read_enabled_STAR_68542 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__68543 = c;if(G__68543)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68543.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__68543.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__68543);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__68543);
}
})())
{return om.core.render(c);
} else
{if((function (){var G__68544 = c;if(G__68544)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68544.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__68544.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__68544);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__68544);
}
})())
{return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{if((function (){var G__68545 = c;if(G__68545)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68545.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__68545.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__68545);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__68545);
}
})())
{return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68542;
}}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_68541;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_68540;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_68539;
om.core._STAR_state_STAR_ = _STAR_state_STAR_68538;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_68537;
}}),(function (next_props,next_state){var this$ = this;var c_68575 = om.core.children(this$);if((function (){var G__68546 = c_68575;if(G__68546)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68546.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__68546.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__68546);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__68546);
}
})())
{var state_68576 = this$.state;var _STAR_read_enabled_STAR_68547_68577 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_68575,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68547_68577;
}} else
{}
om.core.merge_pending_state(this$);
return om.core.update_refs(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3637__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = cljs.core.constant$keyword$1234.cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__68548 = c;if(G__68548)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68548.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__68548.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__68548);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__68548);
}
})())?(function (){var _STAR_read_enabled_STAR_68549 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68549;
}})():null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$1234)], 0)), "__om_id": (function (){var or__3637__auto__ = id;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__68550 = c;if(G__68550)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68550.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__68550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__68550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__68550);
}
})())
{var _STAR_read_enabled_STAR_68551 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68551;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__68552 = c;if(G__68552)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68552.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__68552.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__68552);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__68552);
}
})())
{var _STAR_read_enabled_STAR_68553 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68553;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_68578 = om.core.children(this$);if((function (){var G__68554 = c_68578;if(G__68554)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68554.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__68554.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__68554);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__68554);
}
})())
{var _STAR_read_enabled_STAR_68555_68579 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_68578);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68555_68579;
}} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x68583 = obj;x68583.om$core$IGetState$ = true;
x68583.om$core$IGetState$_get_state$arity$1 = ((function (x68583){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3637__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (state["__om_state"]);
}
});})(x68583))
;
x68583.om$core$IGetState$_get_state$arity$2 = ((function (x68583){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x68583))
;
x68583.om$core$IGetRenderState$ = true;
x68583.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x68583){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x68583))
;
x68583.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x68583){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x68583))
;
x68583.om$core$ISetState$ = true;
x68583.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x68583){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_68584 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68584;
}});})(x68583))
;
x68583.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x68583){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_68585 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68585;
}});})(x68583))
;
return x68583;
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
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate(owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(owner)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68587 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68587) : cljs.core.deref.call(null,G__68587));
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
})();var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$1234),(((function (){var G__68588 = c;if(G__68588)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68588.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__68588.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__68588);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__68588);
}
})())?(function (){var _STAR_read_enabled_STAR_68589 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68589;
}})():null)], 0));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$),cljs.core.constant$keyword$1237], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$1233,(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_68599 = om.core.children(this$);if((function (){var G__68590 = c_68599;if(G__68590)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68590.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__68590.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__68590);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__68590);
}
})())
{var _STAR_read_enabled_STAR_68591_68600 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_68599);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68591_68600;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$1225,(function (){var this$ = this;var c = om.core.children(this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$)], null);if((function (){var G__68592 = c;if(G__68592)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68592.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__68592.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__68592);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__68592);
}
})())
{var _STAR_read_enabled_STAR_68593_68601 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68593_68601;
}} else
{}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.update_in,spath,cljs.core.dissoc);
}),cljs.core.constant$keyword$1229,(function (next_props,next_state){var this$ = this;var props_68602 = this$.props;var c_68603 = om.core.children(this$);if((function (){var G__68594 = c_68603;if(G__68594)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68594.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__68594.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__68594);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__68594);
}
})())
{var state_68604 = this$.state;var _STAR_read_enabled_STAR_68595_68605 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_68603,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68595_68605;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$1224,(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);var gstate = om.core.get_gstate(this$);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68596 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68596) : cljs.core.deref.call(null,G__68596));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$)], null);if((function (){var G__68597 = c;if(G__68597)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68597.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__68597.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__68597);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__68597);
}
})())
{var state_68606 = this$.state;var _STAR_read_enabled_STAR_68598_68607 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3637__auto__ = cljs.core.constant$keyword$1238.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.constant$keyword$1237.cljs$core$IFn$_invoke$arity$1(states);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68598_68607;
}} else
{}
if(cljs.core.truth_(cljs.core.constant$keyword$1238.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$1238], 0));
} else
{return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x68613 = cljs.core.clj__GT_js(methods$);x68613.om$core$IGetState$ = true;
x68613.om$core$IGetState$_get_state$arity$1 = ((function (x68613){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$__$1)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68614 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68614) : cljs.core.deref.call(null,G__68614));
})(),spath);var or__3637__auto__ = cljs.core.constant$keyword$1236.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.constant$keyword$1237.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x68613))
;
x68613.om$core$IGetState$_get_state$arity$2 = ((function (x68613){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x68613))
;
x68613.om$core$IGetRenderState$ = true;
x68613.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x68613){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1235,om.core.react_id(this$__$1),cljs.core.constant$keyword$1237], null);return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68615 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68615) : cljs.core.deref.call(null,G__68615));
})(),spath);
});})(x68613))
;
x68613.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x68613){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x68613))
;
x68613.om$core$ISetState$ = true;
x68613.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x68613){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_68616 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68616;
}});})(x68613))
;
x68613.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x68613){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_68617 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68617;
}});})(x68613))
;
return x68613;
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
return (function (p__68619){var vec__68620 = p__68619;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68620,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68620,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
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
var G__68622 = null;
var G__68622__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__68622__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__68622 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__68622__2.call(this,self__,k);
case 3:
return G__68622__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68622.cljs$core$IFn$_invoke$arity$2 = G__68622__2;
G__68622.cljs$core$IFn$_invoke$arity$3 = G__68622__3;
return G__68622;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args68618){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args68618)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68621 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68621) : cljs.core.deref.call(null,G__68621));
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
var G__68625 = null;
var G__68625__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__68625__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__68625 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__68625__2.call(this,self__,k);
case 3:
return G__68625__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68625.cljs$core$IFn$_invoke$arity$2 = G__68625__2;
G__68625.cljs$core$IFn$_invoke$arity$3 = G__68625__3;
return G__68625;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args68623){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args68623)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68624 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68624) : cljs.core.deref.call(null,G__68624));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x68628 = cljs.core.clone(val);x68628.cljs$core$IEquiv$ = true;
x68628.cljs$core$IEquiv$_equiv$arity$2 = ((function (x68628){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x68628))
;
x68628.om$core$ITransact$ = true;
x68628.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x68628){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x68628))
;
x68628.om$core$ICursor$ = true;
x68628.om$core$ICursor$_path$arity$1 = ((function (x68628){
return (function (_){var ___$1 = this;return path;
});})(x68628))
;
x68628.om$core$ICursor$_state$arity$1 = ((function (x68628){
return (function (_){var ___$1 = this;return state;
});})(x68628))
;
x68628.cljs$core$IDeref$ = true;
x68628.cljs$core$IDeref$_deref$arity$1 = ((function (x68628){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68629 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68629) : cljs.core.deref.call(null,G__68629));
})(),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x68628))
;
return x68628;
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
{if((function (){var G__68638 = val;if(G__68638)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68638.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__68638.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__68638);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__68638);
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
{if((function (){var G__68639 = val;if(G__68639)
{var bit__4300__auto__ = (G__68639.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4300__auto__) || (G__68639.cljs$core$ICloneable$))
{return true;
} else
{if((!G__68639.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__68639);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__68639);
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
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__68641 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68641) : cljs.core.deref.call(null,G__68641));
})(),state));
});
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__68643 = atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68643) : cljs.core.deref.call(null,G__68643));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__68644 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68644) : cljs.core.atom.call(null,G__68644));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x68652 = cljs.core.clone(x);x68652.om$core$ITransact$ = true;
x68652.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x68652){
return (function (cursor,korks,f,tag){var cursor__$1 = this;var G__68653_68656 = cursor__$1;var G__68654_68657 = korks;var G__68655_68658 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__68653_68656,G__68654_68657,G__68655_68658) : om.core.commit_BANG_.call(null,G__68653_68656,G__68654_68657,G__68655_68658));
return om.core._refresh_deps_BANG_(parent);
});})(x68652))
;
x68652.om$core$ICursorDerive$ = true;
x68652.om$core$ICursorDerive$_derive$arity$4 = ((function (x68652){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x68652))
;
x68652.om$core$IAdapt$ = true;
x68652.om$core$IAdapt$_adapt$arity$2 = ((function (x68652){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor(om.core.adapt(x,other));
});})(x68652))
;
x68652.cljs$core$ICloneable$ = true;
x68652.cljs$core$ICloneable$_clone$arity$1 = ((function (x68652){
return (function (this$){var this$__$1 = this;return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x68652))
;
return x68652;
});
om.core.ref_cursor = (function ref_cursor(cursor){var path = (function (){var G__68673 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__68673) : om.core.path.call(null,G__68673));
})();var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__68674 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68674) : cljs.core.atom.call(null,G__68674));
})())),path);var x68675 = cljs.core.clone(cursor);x68675.om$core$ITransact$ = true;
x68675.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x68675,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;var G__68676_68687 = cursor__$2;var G__68677_68688 = korks;var G__68678_68689 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__68676_68687,G__68677_68688,G__68678_68689) : om.core.commit_BANG_.call(null,G__68676_68687,G__68677_68688,G__68678_68689));
return om.core._refresh_deps_BANG_(cursor__$2);
});})(x68675,path,storage))
;
x68675.om$core$IOmRef$ = true;
x68675.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x68675,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__68679 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__68679) : om.core.id.call(null,G__68679));
})(),c);
});})(x68675,path,storage))
;
x68675.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x68675,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__68680 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__68680) : om.core.id.call(null,G__68680));
})());
});})(x68675,path,storage))
;
x68675.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x68675,path,storage){
return (function (_){var ___$1 = this;var seq__68681 = cljs.core.seq(cljs.core.vals((function (){var G__68685 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68685) : cljs.core.deref.call(null,G__68685));
})()));var chunk__68682 = null;var count__68683 = (0);var i__68684 = (0);while(true){
if((i__68684 < count__68683))
{var c = chunk__68682.cljs$core$IIndexed$_nth$arity$2(null,i__68684);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__68690 = seq__68681;
var G__68691 = chunk__68682;
var G__68692 = count__68683;
var G__68693 = (i__68684 + (1));
seq__68681 = G__68690;
chunk__68682 = G__68691;
count__68683 = G__68692;
i__68684 = G__68693;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__68681);if(temp__4126__auto__)
{var seq__68681__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__68681__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__68681__$1);{
var G__68694 = cljs.core.chunk_rest(seq__68681__$1);
var G__68695 = c__4406__auto__;
var G__68696 = cljs.core.count(c__4406__auto__);
var G__68697 = (0);
seq__68681 = G__68694;
chunk__68682 = G__68695;
count__68683 = G__68696;
i__68684 = G__68697;
continue;
}
} else
{var c = cljs.core.first(seq__68681__$1);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__68698 = cljs.core.next(seq__68681__$1);
var G__68699 = null;
var G__68700 = (0);
var G__68701 = (0);
seq__68681 = G__68698;
chunk__68682 = G__68699;
count__68683 = G__68700;
i__68684 = G__68701;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x68675,path,storage))
;
x68675.om$core$IOmRef$_get_deps$arity$1 = ((function (x68675,path,storage){
return (function (_){var ___$1 = this;var G__68686 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68686) : cljs.core.deref.call(null,G__68686));
});})(x68675,path,storage))
;
x68675.om$core$ICursorDerive$ = true;
x68675.om$core$ICursorDerive$_derive$arity$4 = ((function (x68675,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x68675,path,storage))
;
return x68675;
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
om.core.refresh_set = (function (){var G__68702 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68702) : cljs.core.atom.call(null,G__68702));
})();
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__68708 = cljs.core.seq((function (){var G__68712 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68712) : cljs.core.deref.call(null,G__68712));
})());var chunk__68709 = null;var count__68710 = (0);var i__68711 = (0);while(true){
if((i__68711 < count__68710))
{var f = chunk__68709.cljs$core$IIndexed$_nth$arity$2(null,i__68711);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__68713 = seq__68708;
var G__68714 = chunk__68709;
var G__68715 = count__68710;
var G__68716 = (i__68711 + (1));
seq__68708 = G__68713;
chunk__68709 = G__68714;
count__68710 = G__68715;
i__68711 = G__68716;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__68708);if(temp__4126__auto__)
{var seq__68708__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__68708__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__68708__$1);{
var G__68717 = cljs.core.chunk_rest(seq__68708__$1);
var G__68718 = c__4406__auto__;
var G__68719 = cljs.core.count(c__4406__auto__);
var G__68720 = (0);
seq__68708 = G__68717;
chunk__68709 = G__68718;
count__68710 = G__68719;
i__68711 = G__68720;
continue;
}
} else
{var f = cljs.core.first(seq__68708__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__68721 = cljs.core.next(seq__68708__$1);
var G__68722 = null;
var G__68723 = (0);
var G__68724 = (0);
seq__68708 = G__68721;
chunk__68709 = G__68722;
count__68710 = G__68723;
i__68711 = G__68724;
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
om.core.roots = (function (){var G__68725 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68725) : cljs.core.atom.call(null,G__68725));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3637__auto__ = (function (){var G__68732 = x;if(G__68732)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68732.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__68732.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__68732);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__68732);
}
})();if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (function (){var G__68734 = x;if(G__68734)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto____$1 = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
} else
{return G__68734.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__68734.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__68734);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__68734);
}
})();if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{var G__68735 = x;if(G__68735)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto____$2 = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto____$2))
{return or__3637__auto____$2;
} else
{return G__68735.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__68735.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__68735);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__68735);
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
{(f["om$descriptor"] = (function (){var G__68739 = (function (){var or__3637__auto__ = descriptor;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})();return React.createClass(G__68739);
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
{var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);var G__68759 = {"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_68760 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__68761 = cursor;var G__68762 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__68761,G__68762) : f.call(null,G__68761,G__68762));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68760;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__68759) : ctor.call(null,G__68759));
} else
{var map__68763 = m;var map__68763__$1 = ((cljs.core.seq_QMARK_(map__68763))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68763):map__68763);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68763__$1,cljs.core.constant$keyword$1246);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68763__$1,cljs.core.constant$keyword$1244);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68763__$1,cljs.core.constant$keyword$1245);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68763__$1,cljs.core.constant$keyword$1243);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$1240);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$1247.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;var G__68764 = cursor;var G__68765 = i;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__68764,G__68765) : dataf.call(null,G__68764,G__68765));
} else
{var G__68766 = cursor;return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__68766) : dataf.call(null,G__68766));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$1242));var shared = (function (){var or__3637__auto__ = cljs.core.constant$keyword$1248.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$1239.cljs$core$IFn$_invoke$arity$1(m));var G__68767 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__68763,map__68763__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_68768 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__68769 = cursor_SINGLEQUOTE_;var G__68770 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__68769,G__68770) : f.call(null,G__68769,G__68770));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68768;
}});})(map__68763,map__68763__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__68763,map__68763__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_68771 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__68772 = cursor_SINGLEQUOTE_;var G__68773 = this$;var G__68774 = opts;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__68772,G__68773,G__68774) : f.call(null,G__68772,G__68773,G__68774));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68771;
}});})(map__68763,map__68763__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$1247.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__68767) : ctor.call(null,G__68767));

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
{var ret = (function (){var _STAR_read_enabled_STAR_68782 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__68783 = f;var G__68784 = x;var G__68785 = m;return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__68783,G__68784,G__68785) : om.core._STAR_instrument_STAR_.call(null,G__68783,G__68784,G__68785));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68782;
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
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__68808 = state;if(G__68808)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__68808.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__68808.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__68808);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__68808);
}
})())
{} else
{var properties_68827 = (function (){var G__68809 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68809) : cljs.core.atom.call(null,G__68809));
})();var listeners_68828 = (function (){var G__68810 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68810) : cljs.core.atom.call(null,G__68810));
})();var render_queue_68829 = (function (){var G__68811 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68811) : cljs.core.atom.call(null,G__68811));
})();var x68812_68830 = state;x68812_68830.om$core$IRenderQueue$ = true;
x68812_68830.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (this$){var this$__$1 = this;var G__68813 = render_queue_68829;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68813) : cljs.core.deref.call(null,G__68813));
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_((function (){var G__68814 = render_queue_68829;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68814) : cljs.core.deref.call(null,G__68814));
})(),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_68829,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_68829,cljs.core.empty);
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$INotify$ = true;
x68812_68830.om$core$INotify$_listen_BANG_$arity$3 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_68828,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_68828,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$INotify$_notify_BANG_$arity$3 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__68815_68831 = cljs.core.seq((function (){var G__68819 = listeners_68828;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68819) : cljs.core.deref.call(null,G__68819));
})());var chunk__68816_68832 = null;var count__68817_68833 = (0);var i__68818_68834 = (0);while(true){
if((i__68818_68834 < count__68817_68833))
{var vec__68820_68835 = chunk__68816_68832.cljs$core$IIndexed$_nth$arity$2(null,i__68818_68834);var __68836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68820_68835,(0),null);var f_68837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68820_68835,(1),null);var G__68821_68838 = tx_data;var G__68822_68839 = root_cursor;(f_68837.cljs$core$IFn$_invoke$arity$2 ? f_68837.cljs$core$IFn$_invoke$arity$2(G__68821_68838,G__68822_68839) : f_68837.call(null,G__68821_68838,G__68822_68839));
{
var G__68840 = seq__68815_68831;
var G__68841 = chunk__68816_68832;
var G__68842 = count__68817_68833;
var G__68843 = (i__68818_68834 + (1));
seq__68815_68831 = G__68840;
chunk__68816_68832 = G__68841;
count__68817_68833 = G__68842;
i__68818_68834 = G__68843;
continue;
}
} else
{var temp__4126__auto___68844 = cljs.core.seq(seq__68815_68831);if(temp__4126__auto___68844)
{var seq__68815_68845__$1 = temp__4126__auto___68844;if(cljs.core.chunked_seq_QMARK_(seq__68815_68845__$1))
{var c__4406__auto___68846 = cljs.core.chunk_first(seq__68815_68845__$1);{
var G__68847 = cljs.core.chunk_rest(seq__68815_68845__$1);
var G__68848 = c__4406__auto___68846;
var G__68849 = cljs.core.count(c__4406__auto___68846);
var G__68850 = (0);
seq__68815_68831 = G__68847;
chunk__68816_68832 = G__68848;
count__68817_68833 = G__68849;
i__68818_68834 = G__68850;
continue;
}
} else
{var vec__68823_68851 = cljs.core.first(seq__68815_68845__$1);var __68852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68823_68851,(0),null);var f_68853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68823_68851,(1),null);var G__68824_68854 = tx_data;var G__68825_68855 = root_cursor;(f_68853.cljs$core$IFn$_invoke$arity$2 ? f_68853.cljs$core$IFn$_invoke$arity$2(G__68824_68854,G__68825_68855) : f_68853.call(null,G__68824_68854,G__68825_68855));
{
var G__68856 = cljs.core.next(seq__68815_68845__$1);
var G__68857 = null;
var G__68858 = (0);
var G__68859 = (0);
seq__68815_68831 = G__68856;
chunk__68816_68832 = G__68857;
count__68817_68833 = G__68858;
i__68818_68834 = G__68859;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$IRootProperties$ = true;
x68812_68830.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_68827,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_68827,cljs.core.dissoc,id,k);
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_68827,cljs.core.dissoc,id);
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
x68812_68830.om$core$IRootProperties$_get_property$arity$3 = ((function (x68812_68830,properties_68827,listeners_68828,render_queue_68829){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__68826 = properties_68827;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68826) : cljs.core.deref.call(null,G__68826));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x68812_68830,properties_68827,listeners_68828,render_queue_68829))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_(cursor))
{var x68865 = cljs.core.clone(cursor);x68865.om$core$IRootKey$ = true;
x68865.om$core$IRootKey$_root_key$arity$1 = ((function (x68865){
return (function (this$){var this$__$1 = this;return root_key;
});})(x68865))
;
x68865.om$core$IAdapt$ = true;
x68865.om$core$IAdapt$_adapt$arity$2 = ((function (x68865){
return (function (this$,other){var this$__$1 = this;return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x68865))
;
x68865.cljs$core$ICloneable$ = true;
x68865.cljs$core$ICloneable$_clone$arity$1 = ((function (x68865){
return (function (this$){var this$__$1 = this;return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x68865))
;
return x68865;
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
om.core.root = (function root(f,value,p__68866){var map__68947 = p__68866;var map__68947__$1 = ((cljs.core.seq_QMARK_(map__68947))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68947):map__68947);var options = map__68947__$1;var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68947__$1,cljs.core.constant$keyword$1250);var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68947__$1,cljs.core.constant$keyword$1239);var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68947__$1,cljs.core.constant$keyword$1241);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68947__$1,cljs.core.constant$keyword$1217);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68947__$1,cljs.core.constant$keyword$1251);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68947__$1,cljs.core.constant$keyword$1252);if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0))))));
}
var roots_SINGLEQUOTE__69027 = (function (){var G__68948 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68948) : cljs.core.deref.call(null,G__68948));
})();if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__69027,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__69027,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__68949 = value;if(G__68949)
{var bit__4300__auto__ = (G__68949.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4300__auto__) || (G__68949.cljs$core$IAtom$))
{return true;
} else
{if((!G__68949.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__68949);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__68949);
}
})())?value:(function (){var G__68950 = value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68950) : cljs.core.atom.call(null,G__68950));
})());var state__$1 = om.core.setup(state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3637__auto__ = adapt;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$1252,cljs.core.array_seq([cljs.core.constant$keyword$1251,cljs.core.constant$keyword$1217,cljs.core.constant$keyword$1250], 0));var ret = (function (){var G__68951 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68951) : cljs.core.atom.call(null,G__68951));
})();var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__68947,map__68947__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = (function (){var G__68987 = state__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68987) : cljs.core.deref.call(null,G__68987));
})();var cursor = (function (){var G__68988 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__68988) : adapt__$1.call(null,G__68988));
})();if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$1253)))
{} else
{var c_69028 = om.dom.render((function (){var _STAR_descriptor_STAR_68989 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_68990 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_68991 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_68992 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_68992;
om.core._STAR_state_STAR_ = _STAR_state_STAR_68991;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_68990;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_68989;
}})(),target);if(((function (){var G__68993 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__68993) : cljs.core.deref.call(null,G__68993));
})() == null))
{var G__68994_69029 = ret;var G__68995_69030 = c_69028;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__68994_69029,G__68995_69030) : cljs.core.reset_BANG_.call(null,G__68994_69029,G__68995_69030));
} else
{}
}
var queue_69031 = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue_69031))
{} else
{var seq__68996_69032 = cljs.core.seq(queue_69031);var chunk__68997_69033 = null;var count__68998_69034 = (0);var i__68999_69035 = (0);while(true){
if((i__68999_69035 < count__68998_69034))
{var c_69036 = chunk__68997_69033.cljs$core$IIndexed$_nth$arity$2(null,i__68999_69035);if(cljs.core.truth_(c_69036.isMounted()))
{var temp__4126__auto___69037 = (c_69036.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___69037))
{var next_props_69038 = temp__4126__auto___69037;(c_69036.props["__om_cursor"] = next_props_69038);
(c_69036.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_69036.shouldComponentUpdate(c_69036.props,c_69036.state)))
{c_69036.forceUpdate();
} else
{}
} else
{}
{
var G__69039 = seq__68996_69032;
var G__69040 = chunk__68997_69033;
var G__69041 = count__68998_69034;
var G__69042 = (i__68999_69035 + (1));
seq__68996_69032 = G__69039;
chunk__68997_69033 = G__69040;
count__68998_69034 = G__69041;
i__68999_69035 = G__69042;
continue;
}
} else
{var temp__4126__auto___69043 = cljs.core.seq(seq__68996_69032);if(temp__4126__auto___69043)
{var seq__68996_69044__$1 = temp__4126__auto___69043;if(cljs.core.chunked_seq_QMARK_(seq__68996_69044__$1))
{var c__4406__auto___69045 = cljs.core.chunk_first(seq__68996_69044__$1);{
var G__69046 = cljs.core.chunk_rest(seq__68996_69044__$1);
var G__69047 = c__4406__auto___69045;
var G__69048 = cljs.core.count(c__4406__auto___69045);
var G__69049 = (0);
seq__68996_69032 = G__69046;
chunk__68997_69033 = G__69047;
count__68998_69034 = G__69048;
i__68999_69035 = G__69049;
continue;
}
} else
{var c_69050 = cljs.core.first(seq__68996_69044__$1);if(cljs.core.truth_(c_69050.isMounted()))
{var temp__4126__auto___69051__$1 = (c_69050.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___69051__$1))
{var next_props_69052 = temp__4126__auto___69051__$1;(c_69050.props["__om_cursor"] = next_props_69052);
(c_69050.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_69050.shouldComponentUpdate(c_69050.props,c_69050.state)))
{c_69050.forceUpdate();
} else
{}
} else
{}
{
var G__69053 = cljs.core.next(seq__68996_69044__$1);
var G__69054 = null;
var G__69055 = (0);
var G__69056 = (0);
seq__68996_69032 = G__69053;
chunk__68997_69033 = G__69054;
count__68998_69034 = G__69055;
i__68999_69035 = G__69056;
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
var _refs_69057 = (function (){var G__69000 = om.core._refs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69000) : cljs.core.deref.call(null,G__69000));
})();if(cljs.core.empty_QMARK_(_refs_69057))
{} else
{var seq__69001_69058 = cljs.core.seq(_refs_69057);var chunk__69002_69059 = null;var count__69003_69060 = (0);var i__69004_69061 = (0);while(true){
if((i__69004_69061 < count__69003_69060))
{var vec__69005_69062 = chunk__69002_69059.cljs$core$IIndexed$_nth$arity$2(null,i__69004_69061);var path_69063__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69005_69062,(0),null);var cs_69064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69005_69062,(1),null);var cs_69065__$1 = (function (){var G__69006 = cs_69064;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69006) : cljs.core.deref.call(null,G__69006));
})();var seq__69007_69066 = cljs.core.seq(cs_69065__$1);var chunk__69008_69067 = null;var count__69009_69068 = (0);var i__69010_69069 = (0);while(true){
if((i__69010_69069 < count__69009_69068))
{var vec__69011_69070 = chunk__69008_69067.cljs$core$IIndexed$_nth$arity$2(null,i__69010_69069);var id_69071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69011_69070,(0),null);var c_69072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69011_69070,(1),null);if(cljs.core.truth_(c_69072.shouldComponentUpdate(c_69072.props,c_69072.state)))
{c_69072.forceUpdate();
} else
{}
{
var G__69073 = seq__69007_69066;
var G__69074 = chunk__69008_69067;
var G__69075 = count__69009_69068;
var G__69076 = (i__69010_69069 + (1));
seq__69007_69066 = G__69073;
chunk__69008_69067 = G__69074;
count__69009_69068 = G__69075;
i__69010_69069 = G__69076;
continue;
}
} else
{var temp__4126__auto___69077 = cljs.core.seq(seq__69007_69066);if(temp__4126__auto___69077)
{var seq__69007_69078__$1 = temp__4126__auto___69077;if(cljs.core.chunked_seq_QMARK_(seq__69007_69078__$1))
{var c__4406__auto___69079 = cljs.core.chunk_first(seq__69007_69078__$1);{
var G__69080 = cljs.core.chunk_rest(seq__69007_69078__$1);
var G__69081 = c__4406__auto___69079;
var G__69082 = cljs.core.count(c__4406__auto___69079);
var G__69083 = (0);
seq__69007_69066 = G__69080;
chunk__69008_69067 = G__69081;
count__69009_69068 = G__69082;
i__69010_69069 = G__69083;
continue;
}
} else
{var vec__69012_69084 = cljs.core.first(seq__69007_69078__$1);var id_69085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69012_69084,(0),null);var c_69086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69012_69084,(1),null);if(cljs.core.truth_(c_69086.shouldComponentUpdate(c_69086.props,c_69086.state)))
{c_69086.forceUpdate();
} else
{}
{
var G__69087 = cljs.core.next(seq__69007_69078__$1);
var G__69088 = null;
var G__69089 = (0);
var G__69090 = (0);
seq__69007_69066 = G__69087;
chunk__69008_69067 = G__69088;
count__69009_69068 = G__69089;
i__69010_69069 = G__69090;
continue;
}
}
} else
{}
}
break;
}
{
var G__69091 = seq__69001_69058;
var G__69092 = chunk__69002_69059;
var G__69093 = count__69003_69060;
var G__69094 = (i__69004_69061 + (1));
seq__69001_69058 = G__69091;
chunk__69002_69059 = G__69092;
count__69003_69060 = G__69093;
i__69004_69061 = G__69094;
continue;
}
} else
{var temp__4126__auto___69095 = cljs.core.seq(seq__69001_69058);if(temp__4126__auto___69095)
{var seq__69001_69096__$1 = temp__4126__auto___69095;if(cljs.core.chunked_seq_QMARK_(seq__69001_69096__$1))
{var c__4406__auto___69097 = cljs.core.chunk_first(seq__69001_69096__$1);{
var G__69098 = cljs.core.chunk_rest(seq__69001_69096__$1);
var G__69099 = c__4406__auto___69097;
var G__69100 = cljs.core.count(c__4406__auto___69097);
var G__69101 = (0);
seq__69001_69058 = G__69098;
chunk__69002_69059 = G__69099;
count__69003_69060 = G__69100;
i__69004_69061 = G__69101;
continue;
}
} else
{var vec__69013_69102 = cljs.core.first(seq__69001_69096__$1);var path_69103__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69013_69102,(0),null);var cs_69104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69013_69102,(1),null);var cs_69105__$1 = (function (){var G__69014 = cs_69104;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69014) : cljs.core.deref.call(null,G__69014));
})();var seq__69015_69106 = cljs.core.seq(cs_69105__$1);var chunk__69016_69107 = null;var count__69017_69108 = (0);var i__69018_69109 = (0);while(true){
if((i__69018_69109 < count__69017_69108))
{var vec__69019_69110 = chunk__69016_69107.cljs$core$IIndexed$_nth$arity$2(null,i__69018_69109);var id_69111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69019_69110,(0),null);var c_69112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69019_69110,(1),null);if(cljs.core.truth_(c_69112.shouldComponentUpdate(c_69112.props,c_69112.state)))
{c_69112.forceUpdate();
} else
{}
{
var G__69113 = seq__69015_69106;
var G__69114 = chunk__69016_69107;
var G__69115 = count__69017_69108;
var G__69116 = (i__69018_69109 + (1));
seq__69015_69106 = G__69113;
chunk__69016_69107 = G__69114;
count__69017_69108 = G__69115;
i__69018_69109 = G__69116;
continue;
}
} else
{var temp__4126__auto___69117__$1 = cljs.core.seq(seq__69015_69106);if(temp__4126__auto___69117__$1)
{var seq__69015_69118__$1 = temp__4126__auto___69117__$1;if(cljs.core.chunked_seq_QMARK_(seq__69015_69118__$1))
{var c__4406__auto___69119 = cljs.core.chunk_first(seq__69015_69118__$1);{
var G__69120 = cljs.core.chunk_rest(seq__69015_69118__$1);
var G__69121 = c__4406__auto___69119;
var G__69122 = cljs.core.count(c__4406__auto___69119);
var G__69123 = (0);
seq__69015_69106 = G__69120;
chunk__69016_69107 = G__69121;
count__69017_69108 = G__69122;
i__69018_69109 = G__69123;
continue;
}
} else
{var vec__69020_69124 = cljs.core.first(seq__69015_69118__$1);var id_69125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69020_69124,(0),null);var c_69126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69020_69124,(1),null);if(cljs.core.truth_(c_69126.shouldComponentUpdate(c_69126.props,c_69126.state)))
{c_69126.forceUpdate();
} else
{}
{
var G__69127 = cljs.core.next(seq__69015_69118__$1);
var G__69128 = null;
var G__69129 = (0);
var G__69130 = (0);
seq__69015_69106 = G__69127;
chunk__69016_69107 = G__69128;
count__69017_69108 = G__69129;
i__69018_69109 = G__69130;
continue;
}
}
} else
{}
}
break;
}
{
var G__69131 = cljs.core.next(seq__69001_69096__$1);
var G__69132 = null;
var G__69133 = (0);
var G__69134 = (0);
seq__69001_69058 = G__69131;
chunk__69002_69059 = G__69132;
count__69003_69060 = G__69133;
i__69004_69061 = G__69134;
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
var G__69021 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69021) : cljs.core.deref.call(null,G__69021));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__68947,map__68947__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__68947,map__68947__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$1254))) && (!((o === n))))
{om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$1253,false);
} else
{}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$1254,false);
if(cljs.core.contains_QMARK_((function (){var G__69022 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69022) : cljs.core.deref.call(null,G__69022));
})(),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{var G__69023 = om.core.render_all;return requestAnimationFrame(G__69023);
} else
{var G__69024 = om.core.render_all;var G__69025 = (16);return setTimeout(G__69024,G__69025);
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__68947,map__68947__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__68947,map__68947__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_(state__$1,watch_key);
cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
var G__69026 = target;return React.unmountComponentAtNode(G__69026);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__68947,map__68947__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__69136 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69136) : cljs.core.deref.call(null,G__69136));
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
var key = (((function (){var G__69147 = cursor;if(G__69147)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__69147.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__69147.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__69147);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__69147);
}
})())?om.core._root_key(cursor):null);var app_state = om.core.state(cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = (function (){var G__69148 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__69148) : om.core.path.call(null,G__69148));
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
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__69151 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69151) : f.call(null,G__69151));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__69152 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69152) : f.call(null,G__69152));
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
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__69155 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69155) : f.call(null,G__69155));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__69156 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69156) : f.call(null,G__69156));
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
