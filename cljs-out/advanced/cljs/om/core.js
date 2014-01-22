// Compiled by ClojureScript 0.0-2138
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core.IInitState = (function (){var obj24679 = {};return obj24679;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.init_state[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.init_state["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj24681 = {};return obj24681;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.should_update[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.should_update["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj24683 = {};return obj24683;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.will_mount[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.will_mount["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj24685 = {};return obj24685;
})();
om.core.did_mount = (function did_mount(this$,node){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IDidMount$did_mount$arity$2;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$2(this$,node);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.did_mount[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.did_mount["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$,node);
}
});
om.core.IWillUnmount = (function (){var obj24687 = {};return obj24687;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.will_unmount[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.will_unmount["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj24689 = {};return obj24689;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.will_update[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.will_update["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj24691 = {};return obj24691;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state,root_node){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$4;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$4(this$,prev_props,prev_state,root_node);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.did_update[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.did_update["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state,root_node);
}
});
om.core.IRender = (function (){var obj24693 = {};return obj24693;
})();
om.core.render = (function render(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.render[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.render["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.ICursor = (function (){var obj24695 = {};return obj24695;
})();
om.core._value = (function _value(cursor){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ICursor$_value$arity$1;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ICursor$_value$arity$1(cursor);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._value[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._value["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-value",cursor);
}
}
})().call(null,cursor);
}
});
om.core._path = (function _path(cursor){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._path[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._path["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._state[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._state["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj24697 = {};return obj24697;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3394__auto__ = value;if(and__3394__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3394__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4027__auto__ = (((value == null))?null:value);return (function (){var or__3406__auto__ = (om.core._to_cursor[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._to_cursor["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3394__auto__ = value;if(and__3394__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3394__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4027__auto__ = (((value == null))?null:value);return (function (){var or__3406__auto__ = (om.core._to_cursor[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._to_cursor["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
om.core.ITransact = (function (){var obj24699 = {};return obj24699;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,f){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$2(cursor,f);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,f);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_24701 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24701;
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
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4092__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var pending_state = temp__4092__auto__;var G__24703 = state;(G__24703["__om_prev_state"] = (state["__om_state"]));
(G__24703["__om_state"] = pending_state);
(G__24703["__om_pending_state"] = null);
return G__24703;
} else
{return null;
}
});
om.core.Pure = React.createClass({"render": (function (){var this$ = this;var _STAR_read_enabled_STAR_24718 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.render(om.core.children(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24718;
}}), "componentDidUpdate": (function (prev_props,prev_state,root_node){var this$ = this;var c = om.core.children(this$);if((function (){var G__24716 = c;if(G__24716)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24716.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__24716.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__24716);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__24716);
}
})())
{var state_24719 = this$.state;var _STAR_read_enabled_STAR_24717_24720 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3406__auto__ = (state_24719["__om_prev_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state_24719["__om_state"]);
}
})(),root_node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24717_24720;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}), "componentWillUpdate": (function (next_props,next_state){var this$ = this;var c_24721 = om.core.children(this$);if((function (){var G__24714 = c_24721;if(G__24714)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24714.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__24714.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__24714);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__24714);
}
})())
{var state_24722 = this$.state;var _STAR_read_enabled_STAR_24715_24723 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_24721,om.core.get_props({"props": next_props}),(function (){var or__3406__auto__ = (state_24722["__om_pending_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state_24722["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24715_24723;
}} else
{}
return om.core.merge_pending_state(this$);
}), "componentWillUnmount": (function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__24712 = c;if(G__24712)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24712.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__24712.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__24712);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__24712);
}
})())
{var _STAR_read_enabled_STAR_24713 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24713;
}} else
{return null;
}
}), "componentDidMount": (function (node){var this$ = this;var c = om.core.children(this$);if((function (){var G__24710 = c;if(G__24710)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24710.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__24710.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__24710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__24710);
}
})())
{var _STAR_read_enabled_STAR_24711 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24711;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var c_24724 = om.core.children(this$);if((function (){var G__24708 = c_24724;if(G__24708)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24708.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__24708.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__24708);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__24708);
}
})())
{var _STAR_read_enabled_STAR_24709_24725 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_24724);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24709_24725;
}} else
{}
return om.core.merge_pending_state(this$);
}), "shouldComponentUpdate": (function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_24706 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var c = om.core.children(this$);if((function (){var G__24707 = c;if(G__24707)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24707.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__24707.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__24707);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__24707);
}
})())
{return om.core.should_update(c,om.core.get_props({"props": next_props}),(this$.state["__om_pending_state"]));
} else
{if(!((om.core._value((props["__om_cursor"])) === om.core._value((next_props["__om_cursor"])))))
{return true;
} else
{if(!(((this$.state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(cljs.core.constant$keyword$124)
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24706;
}}), "getInitialState": (function (){var this$ = this;var c = om.core.children(this$);return {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,(((function (){var G__24704 = c;if(G__24704)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24704.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__24704.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__24704);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__24704);
}
})())?(function (){var _STAR_read_enabled_STAR_24705 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24705;
}})():null)], 0))};
})});
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){if(om.core._STAR_read_enabled_STAR_)
{return om.core._value(cursor);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__24727 = x;if(G__24727)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24727.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__24727.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__24727);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__24727);
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2157971211;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,not_found);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found)))
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k)) : om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k)));
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__24731 = null;
var G__24731__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24731__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24731 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24731__2.call(this,self__,k);
case 3:
return G__24731__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__24731;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args24728){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24728)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24729){var vec__24730 = p__24729;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24730,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24730,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k)) : om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k)))], null);
}),self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
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
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$ = true;
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,f,self__.path);
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
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2174755611;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,n,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path) : om.core.to_cursor.call(null,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__24733 = null;
var G__24733__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24733__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24733 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24733__2.call(this,self__,k);
case 3:
return G__24733__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__24733;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args24732){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24732)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > 0))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (v,i){return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i)) : om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i)));
}),self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._peek(self__.value),self__.state,self__.path) : om.core.to_cursor.call(null,cljs.core._peek(self__.value),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._pop(self__.value),self__.state,self__.path) : om.core.to_cursor.call(null,cljs.core._pop(self__.value),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
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
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$ = true;
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n)) : om.core.to_cursor.call(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n)));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count(self__.value)))
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n)) : om.core.to_cursor.call(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n)));
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,f,self__.path);
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x24735 = cljs.core.clone(val);x24735.cljs$core$IEquiv$ = true;
x24735.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
x24735.om$core$ICursor$ = true;
x24735.om$core$ICursor$_value$arity$1 = (function (_){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return val;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
x24735.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
x24735.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
return x24735;
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
{if((function (){var G__24738 = val;if(G__24738)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24738.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__24738.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__24738);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__24738);
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
{if((function (){var G__24739 = val;if(G__24739)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24739.cljs$core$ICloneable$;
}
})()))
{return true;
} else
{if((!G__24739.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__24739);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__24739);
}
})())
{return om.core.to_cursor_STAR_(val,state,path);
} else
{if(cljs.core.constant$keyword$124)
{return val;
} else
{return null;
}
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
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){var seq__24744_24748 = cljs.core.seq(cljs.core.deref(om.core.refresh_set));var chunk__24745_24749 = null;var count__24746_24750 = 0;var i__24747_24751 = 0;while(true){
if((i__24747_24751 < count__24746_24750))
{var f_24752 = chunk__24745_24749.cljs$core$IIndexed$_nth$arity$2(null,i__24747_24751);(f_24752.cljs$core$IFn$_invoke$arity$0 ? f_24752.cljs$core$IFn$_invoke$arity$0() : f_24752.call(null));
{
var G__24753 = seq__24744_24748;
var G__24754 = chunk__24745_24749;
var G__24755 = count__24746_24750;
var G__24756 = (i__24747_24751 + 1);
seq__24744_24748 = G__24753;
chunk__24745_24749 = G__24754;
count__24746_24750 = G__24755;
i__24747_24751 = G__24756;
continue;
}
} else
{var temp__4092__auto___24757 = cljs.core.seq(seq__24744_24748);if(temp__4092__auto___24757)
{var seq__24744_24758__$1 = temp__4092__auto___24757;if(cljs.core.chunked_seq_QMARK_(seq__24744_24758__$1))
{var c__4148__auto___24759 = cljs.core.chunk_first(seq__24744_24758__$1);{
var G__24760 = cljs.core.chunk_rest(seq__24744_24758__$1);
var G__24761 = c__4148__auto___24759;
var G__24762 = cljs.core.count(c__4148__auto___24759);
var G__24763 = 0;
seq__24744_24748 = G__24760;
chunk__24745_24749 = G__24761;
count__24746_24750 = G__24762;
i__24747_24751 = G__24763;
continue;
}
} else
{var f_24764 = cljs.core.first(seq__24744_24758__$1);(f_24764.cljs$core$IFn$_invoke$arity$0 ? f_24764.cljs$core$IFn$_invoke$arity$0() : f_24764.call(null));
{
var G__24765 = cljs.core.next(seq__24744_24758__$1);
var G__24766 = null;
var G__24767 = 0;
var G__24768 = 0;
seq__24744_24748 = G__24765;
chunk__24745_24749 = G__24766;
count__24746_24750 = G__24767;
i__24747_24751 = G__24768;
continue;
}
}
} else
{}
}
break;
}
return om.core.refresh_queued = false;
});
/**
* Takes an immutable value or value wrapped in an atom, an initial
* function f, and a DOM target. Installs an Om/React render loop. f
* must return an instance that at a minimum implements IRender (it
* may implement other React life cycle protocols). f must take
* two arguments, the root cursor and the owning pure node. A
* cursor is just the original data wrapped in an ICursor instance
* which maintains path information.
* 
* Example:
* 
* (root {:message :hello}
* (fn [data owner]
* ...)
* js/document.body)
*/
om.core.root = (function root(value,f,target){var state = (((value instanceof cljs.core.Atom))?value:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value));var rootf = ((function (state){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref(state);var cursor = om.core.to_cursor.cljs$core$IFn$_invoke$arity$2(value__$1,state);return React.renderComponent((new om.core.Pure({"__om_cursor": cursor},((function (value__$1,cursor,state){
return (function (this$){var _STAR_read_enabled_STAR_24772 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24772;
}});})(value__$1,cursor,state))
)),target);
});})(state))
;cljs.core.add_watch(state,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_(cljs.core.deref(om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,16);
}
}
}));
return rootf();
});
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$182,null,cljs.core.constant$keyword$183,null,cljs.core.constant$keyword$184,null,cljs.core.constant$keyword$185,null,cljs.core.constant$keyword$186,null], null), null),cljs.core.keys(m));
});
/**
* Builds a Om component. Takes an IRender instance returning function
* f, a cursor, and an optional third argument which may be a map of
* build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will
* be the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender instance, this
* instance may implement other React life cycle protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key       - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key - an explicit react key
* :fn        - a function to apply to the data at the relative path before
* invoking f.
* :opts      - a map of options to pass to the component.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:opts {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(om.core.valid_QMARK_(m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, ",":react-key, :fn, :and opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1830611324,null),new cljs.core.Symbol(null,"m","m",-1640531418,null))], 0)))].join('')));
}
if((m == null))
{var pure__9179__auto__ = (new om.core.Pure({"__om_cursor": cursor},(function (this$){if(om.core.cursor_QMARK_(cursor))
{var _STAR_read_enabled_STAR_24777 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24777;
}} else
{throw (new Error([cljs.core.str("Cannot build Om component from non-cursor "),cljs.core.str(cursor)].join('')));
}
})));pure__9179__auto__.constructor = goog.getUid(f);
return pure__9179__auto__;
} else
{if(cljs.core.constant$keyword$124)
{var map__24778 = m;var map__24778__$1 = ((cljs.core.seq_QMARK_(map__24778))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24778):map__24778);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24778__$1,cljs.core.constant$keyword$185);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24778__$1,cljs.core.constant$keyword$184);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$186);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor)):cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$182));var pure__9179__auto__ = (new om.core.Pure({"key": rkey, "__om_index": cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_},(((opts == null))?(function (this$){if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{var _STAR_read_enabled_STAR_24779 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24779;
}} else
{throw (new Error([cljs.core.str("Cannot build Om component from non-cursor "),cljs.core.str(cursor_SINGLEQUOTE_)].join('')));
}
}):(function (this$){if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{var _STAR_read_enabled_STAR_24780 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24780;
}} else
{throw (new Error([cljs.core.str("Cannot build Om component from non-cursor "),cljs.core.str(cursor_SINGLEQUOTE_)].join('')));
}
}))));pure__9179__auto__.constructor = goog.getUid(f);
return pure__9179__auto__;
} else
{return null;
}
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
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
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$183,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
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
/**
* Given a cursor, an optional list of keys ks, mutate the tree at the
* path specified by the cursor + the optional keys by applying f to the
* specified value in the tree. An Om re-render will be triggered.
* @param {...*} var_args
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){var _STAR_read_enabled_STAR_24788 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state,path){if(cljs.core.empty_QMARK_(path))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,path,f);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24788;
}});
var transact_BANG___3 = (function (cursor,korks,f){var _STAR_read_enabled_STAR_24789 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9165__auto__,path__9166__auto__){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__9165__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__9166__auto__,korks),f);
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__9165__auto__,cljs.core.into(path__9166__auto__,korks),f);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24789;
}});
var transact_BANG___4 = (function (cursor,korks,f,a){var _STAR_read_enabled_STAR_24790 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9165__auto__,path__9166__auto__){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__9165__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__9166__auto__,korks),f,a);
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__9165__auto__,cljs.core.into(path__9166__auto__,korks),f,a);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24790;
}});
var transact_BANG___5 = (function (cursor,korks,f,a,b){var _STAR_read_enabled_STAR_24791 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9165__auto__,path__9166__auto__){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state__9165__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__9166__auto__,korks),f,a,b);
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state__9165__auto__,cljs.core.into(path__9166__auto__,korks),f,a,b);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24791;
}});
var transact_BANG___6 = (function (cursor,korks,f,a,b,c){var _STAR_read_enabled_STAR_24792 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9165__auto__,path__9166__auto__){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(state__9165__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__9166__auto__,korks),f,a,b,c);
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(state__9165__auto__,cljs.core.into(path__9166__auto__,korks),f,a,b,c);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24792;
}});
var transact_BANG___7 = (function (cursor,korks,f,a,b,c,d){var _STAR_read_enabled_STAR_24793 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9165__auto__,path__9166__auto__){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state__9165__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__9166__auto__,korks),f,a,b,c,cljs.core.array_seq([d], 0));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state__9165__auto__,cljs.core.into(path__9166__auto__,korks),f,a,b,c,cljs.core.array_seq([d], 0));
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24793;
}});
var transact_BANG___8 = (function() { 
var G__24795__delegate = function (cursor,korks,f,a,b,c,d,args){var _STAR_read_enabled_STAR_24794 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state,path){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,korks),f,a,cljs.core.array_seq([b,c,d,args], 0));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,state,cljs.core.into(path,korks),f,a,cljs.core.array_seq([b,c,d,args], 0));
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24794;
}};
var G__24795 = function (cursor,korks,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 7) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__24795__delegate.call(this,cursor,korks,f,a,b,c,d,args);};
G__24795.cljs$lang$maxFixedArity = 7;
G__24795.cljs$lang$applyTo = (function (arglist__24796){
var cursor = cljs.core.first(arglist__24796);
arglist__24796 = cljs.core.next(arglist__24796);
var korks = cljs.core.first(arglist__24796);
arglist__24796 = cljs.core.next(arglist__24796);
var f = cljs.core.first(arglist__24796);
arglist__24796 = cljs.core.next(arglist__24796);
var a = cljs.core.first(arglist__24796);
arglist__24796 = cljs.core.next(arglist__24796);
var b = cljs.core.first(arglist__24796);
arglist__24796 = cljs.core.next(arglist__24796);
var c = cljs.core.first(arglist__24796);
arglist__24796 = cljs.core.next(arglist__24796);
var d = cljs.core.first(arglist__24796);
var args = cljs.core.rest(arglist__24796);
return G__24795__delegate(cursor,korks,f,a,b,c,d,args);
});
G__24795.cljs$core$IFn$_invoke$arity$variadic = G__24795__delegate;
return G__24795;
})()
;
transact_BANG_ = function(cursor,korks,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,a);
case 5:
return transact_BANG___5.call(this,cursor,korks,f,a,b);
case 6:
return transact_BANG___6.call(this,cursor,korks,f,a,b,c);
case 7:
return transact_BANG___7.call(this,cursor,korks,f,a,b,c,d);
default:
return transact_BANG___8.cljs$core$IFn$_invoke$arity$variadic(cursor,korks,f,a,b,c,d, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$lang$maxFixedArity = 7;
transact_BANG_.cljs$lang$applyTo = transact_BANG___8.cljs$lang$applyTo;
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
transact_BANG_.cljs$core$IFn$_invoke$arity$5 = transact_BANG___5;
transact_BANG_.cljs$core$IFn$_invoke$arity$6 = transact_BANG___6;
transact_BANG_.cljs$core$IFn$_invoke$arity$7 = transact_BANG___7;
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___8.cljs$core$IFn$_invoke$arity$variadic;
return transact_BANG_;
})()
;
/**
* Like transact! but no list of keys given. An Om re-render
* will be triggered.
* @param {...*} var_args
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,f){var _STAR_read_enabled_STAR_24803 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9172__auto__,path__9173__auto__){if(cljs.core.empty_QMARK_(path__9173__auto__))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state__9172__auto__) : f.call(null,state__9172__auto__));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__9172__auto__,path__9173__auto__,f);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24803;
}});
var update_BANG___3 = (function (cursor,f,a){var _STAR_read_enabled_STAR_24804 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9172__auto__,path__9173__auto__){if(cljs.core.empty_QMARK_(path__9173__auto__))
{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state__9172__auto__,a) : f.call(null,state__9172__auto__,a));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__9172__auto__,path__9173__auto__,f,a);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24804;
}});
var update_BANG___4 = (function (cursor,f,a,b){var _STAR_read_enabled_STAR_24805 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9172__auto__,path__9173__auto__){if(cljs.core.empty_QMARK_(path__9173__auto__))
{return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(state__9172__auto__,a,b) : f.call(null,state__9172__auto__,a,b));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state__9172__auto__,path__9173__auto__,f,a,b);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24805;
}});
var update_BANG___5 = (function (cursor,f,a,b,c){var _STAR_read_enabled_STAR_24806 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9172__auto__,path__9173__auto__){if(cljs.core.empty_QMARK_(path__9173__auto__))
{return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(state__9172__auto__,a,b,c) : f.call(null,state__9172__auto__,a,b,c));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(state__9172__auto__,path__9173__auto__,f,a,b,c);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24806;
}});
var update_BANG___6 = (function (cursor,f,a,b,c,d){var _STAR_read_enabled_STAR_24807 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state__9172__auto__,path__9173__auto__){if(cljs.core.empty_QMARK_(path__9173__auto__))
{return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(state__9172__auto__,a,b,c,d) : f.call(null,state__9172__auto__,a,b,c,d));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state__9172__auto__,path__9173__auto__,f,a,b,c,cljs.core.array_seq([d], 0));
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24807;
}});
var update_BANG___7 = (function() { 
var G__24809__delegate = function (cursor,f,a,b,c,d,args){var _STAR_read_enabled_STAR_24808 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_(cursor,(function (state,path){if(cljs.core.empty_QMARK_(path))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,state,a,b,c,cljs.core.array_seq([d,args], 0));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,state,path,f,a,cljs.core.array_seq([b,c,d,args], 0));
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24808;
}};
var G__24809 = function (cursor,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__24809__delegate.call(this,cursor,f,a,b,c,d,args);};
G__24809.cljs$lang$maxFixedArity = 6;
G__24809.cljs$lang$applyTo = (function (arglist__24810){
var cursor = cljs.core.first(arglist__24810);
arglist__24810 = cljs.core.next(arglist__24810);
var f = cljs.core.first(arglist__24810);
arglist__24810 = cljs.core.next(arglist__24810);
var a = cljs.core.first(arglist__24810);
arglist__24810 = cljs.core.next(arglist__24810);
var b = cljs.core.first(arglist__24810);
arglist__24810 = cljs.core.next(arglist__24810);
var c = cljs.core.first(arglist__24810);
arglist__24810 = cljs.core.next(arglist__24810);
var d = cljs.core.first(arglist__24810);
var args = cljs.core.rest(arglist__24810);
return G__24809__delegate(cursor,f,a,b,c,d,args);
});
G__24809.cljs$core$IFn$_invoke$arity$variadic = G__24809__delegate;
return G__24809;
})()
;
update_BANG_ = function(cursor,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,f);
case 3:
return update_BANG___3.call(this,cursor,f,a);
case 4:
return update_BANG___4.call(this,cursor,f,a,b);
case 5:
return update_BANG___5.call(this,cursor,f,a,b,c);
case 6:
return update_BANG___6.call(this,cursor,f,a,b,c,d);
default:
return update_BANG___7.cljs$core$IFn$_invoke$arity$variadic(cursor,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$lang$maxFixedArity = 6;
update_BANG_.cljs$lang$applyTo = update_BANG___7.cljs$lang$applyTo;
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
update_BANG_.cljs$core$IFn$_invoke$arity$5 = update_BANG___5;
update_BANG_.cljs$core$IFn$_invoke$arity$6 = update_BANG___6;
update_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_BANG___7.cljs$core$IFn$_invoke$arity$variadic;
return update_BANG_;
})()
;
/**
* Given a cursor and a function f, read its current value. f will be
* passed a cursor which can only be read in the scope of f. Can take
* an optional sequence of keys ks. Used for interacting with cursors
* outside of render phase.
*/
om.core.read = (function() {
var read = null;
var read__2 = (function (cursor,f){return read.cljs$core$IFn$_invoke$arity$3(cursor,cljs.core.List.EMPTY,f);
});
var read__3 = (function (cursor,korks,f){var _STAR_read_enabled_STAR_24812 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var path = ((!(cljs.core.sequential_QMARK_(korks)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),korks):cljs.core.into(om.core._path(cursor),korks));var state = om.core._state(cursor);var value = cljs.core.deref(state);if(cljs.core.empty_QMARK_(path))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value,state,cljs.core.PersistentVector.EMPTY)) : f.call(null,om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value,state,cljs.core.PersistentVector.EMPTY)));
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value,path),state,path)) : f.call(null,om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value,path),state,path)));
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24812;
}});
read = function(cursor,korks,f){
switch(arguments.length){
case 2:
return read__2.call(this,cursor,korks);
case 3:
return read__3.call(this,cursor,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read.cljs$core$IFn$_invoke$arity$2 = read__2;
read.cljs$core$IFn$_invoke$arity$3 = read__3;
return read;
})()
;
/**
* EXPERIMENTAL: Given a cursor, get value from the root at the path
* specified by a sequential list of keys ks.
*/
om.core.join = (function join(cursor,korks){var _STAR_read_enabled_STAR_24814 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var state = om.core._state(cursor);var value = cljs.core.deref(state);if(!(cljs.core.sequential_QMARK_(korks)))
{return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,korks),state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
} else
{return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value,korks),state,((cljs.core.vector_QMARK_(korks))?korks:cljs.core.into(cljs.core.PersistentVector.EMPTY,korks)));
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24814;
}});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function get_node(owner,name){var temp__4092__auto__ = owner.refs;if(cljs.core.truth_(temp__4092__auto__))
{var refs = temp__4092__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function set_state_BANG_(owner,korks,v){var _STAR_read_enabled_STAR_24816 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = owner.props;var state = owner.state;var cursor = (props["__om_cursor"]);var path = om.core._path(cursor);var pstate = (function (){var or__3406__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state["__om_state"]);
}
})();if(!(cljs.core.sequential_QMARK_(korks)))
{(state["__om_pending_state"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pstate,korks,v));
} else
{(state["__om_pending_state"] = cljs.core.assoc_in(pstate,korks,v));
}
if(cljs.core.empty_QMARK_(path))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(om.core._state(cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._state(cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24816;
}});
/**
* Takes a pure owning component and sequential list of keys and
* returns a property in the component local state if it exists. Will
* never return pending state values.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return (owner.state["__om_state"]);
});
var get_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2((owner.state["__om_state"]),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_state.cljs$core$IFn$_invoke$arity$1(owner);
} else
{if(cljs.core.constant$keyword$124)
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((owner.state["__om_state"]),korks);
} else
{return null;
}
}
}
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
* EXPERIMENTAL: Takes a pure owning component and sequential list of
* keys and returns a property in the component local if it
* exists. Returns values from the pending state. If there is no
* pending state returns values from the current state.
*/
om.core.get_pending_state = (function() {
var get_pending_state = null;
var get_pending_state__1 = (function (owner){var state = owner.state;var or__3406__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state["__om_state"]);
}
});
var get_pending_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_pending_state.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_pending_state.cljs$core$IFn$_invoke$arity$1(owner);
} else
{if(cljs.core.constant$keyword$124)
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_pending_state.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{return null;
}
}
}
});
get_pending_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_pending_state__1.call(this,owner);
case 2:
return get_pending_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_pending_state.cljs$core$IFn$_invoke$arity$1 = get_pending_state__1;
get_pending_state.cljs$core$IFn$_invoke$arity$2 = get_pending_state__2;
return get_pending_state;
})()
;
/**
* Convenience function for creating event handlers on cursors. Takes
* a function f which should receive the event as the first argument,
* the cursor as the second argument, and any number of optional
* arguments beyond that. Inside of f the cursor will be readable.
* @param {...*} var_args
*/
om.core.bind = (function() {
var bind = null;
var bind__2 = (function (f,cursor){return (function (e){return om.core.read.cljs$core$IFn$_invoke$arity$2(cursor,(function (cursor__$1){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(e,cursor__$1) : f.call(null,e,cursor__$1));
}));
});
});
var bind__3 = (function (f,cursor,a){return (function (e){return om.core.read.cljs$core$IFn$_invoke$arity$2(cursor,(function (cursor__$1){return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(e,cursor__$1,a) : f.call(null,e,cursor__$1,a));
}));
});
});
var bind__4 = (function (f,cursor,a,b){return (function (e){return om.core.read.cljs$core$IFn$_invoke$arity$2(cursor,(function (cursor__$1){return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(e,cursor__$1,a,b) : f.call(null,e,cursor__$1,a,b));
}));
});
});
var bind__5 = (function (f,cursor,a,b,c){return (function (e){return om.core.read.cljs$core$IFn$_invoke$arity$2(cursor,(function (cursor__$1){return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(e,cursor__$1,a,b,c) : f.call(null,e,cursor__$1,a,b,c));
}));
});
});
var bind__6 = (function (f,cursor,a,b,c,d){return (function (e){return om.core.read.cljs$core$IFn$_invoke$arity$2(cursor,(function (cursor__$1){return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(e,cursor__$1,a,b,c,d) : f.call(null,e,cursor__$1,a,b,c,d));
}));
});
});
var bind__7 = (function() { 
var G__24817__delegate = function (f,cursor,a,b,c,d,args){return (function (e){return om.core.read.cljs$core$IFn$_invoke$arity$2(cursor,(function (cursor__$1){return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,e,cursor__$1,a,b,cljs.core.array_seq([c,d,args], 0));
}));
});
};
var G__24817 = function (f,cursor,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__24817__delegate.call(this,f,cursor,a,b,c,d,args);};
G__24817.cljs$lang$maxFixedArity = 6;
G__24817.cljs$lang$applyTo = (function (arglist__24818){
var f = cljs.core.first(arglist__24818);
arglist__24818 = cljs.core.next(arglist__24818);
var cursor = cljs.core.first(arglist__24818);
arglist__24818 = cljs.core.next(arglist__24818);
var a = cljs.core.first(arglist__24818);
arglist__24818 = cljs.core.next(arglist__24818);
var b = cljs.core.first(arglist__24818);
arglist__24818 = cljs.core.next(arglist__24818);
var c = cljs.core.first(arglist__24818);
arglist__24818 = cljs.core.next(arglist__24818);
var d = cljs.core.first(arglist__24818);
var args = cljs.core.rest(arglist__24818);
return G__24817__delegate(f,cursor,a,b,c,d,args);
});
G__24817.cljs$core$IFn$_invoke$arity$variadic = G__24817__delegate;
return G__24817;
})()
;
bind = function(f,cursor,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return bind__2.call(this,f,cursor);
case 3:
return bind__3.call(this,f,cursor,a);
case 4:
return bind__4.call(this,f,cursor,a,b);
case 5:
return bind__5.call(this,f,cursor,a,b,c);
case 6:
return bind__6.call(this,f,cursor,a,b,c,d);
default:
return bind__7.cljs$core$IFn$_invoke$arity$variadic(f,cursor,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bind.cljs$lang$maxFixedArity = 6;
bind.cljs$lang$applyTo = bind__7.cljs$lang$applyTo;
bind.cljs$core$IFn$_invoke$arity$2 = bind__2;
bind.cljs$core$IFn$_invoke$arity$3 = bind__3;
bind.cljs$core$IFn$_invoke$arity$4 = bind__4;
bind.cljs$core$IFn$_invoke$arity$5 = bind__5;
bind.cljs$core$IFn$_invoke$arity$6 = bind__6;
bind.cljs$core$IFn$_invoke$arity$variadic = bind__7.cljs$core$IFn$_invoke$arity$variadic;
return bind;
})()
;
/**
* EXPERIMENTAL: Like om.core/bind but for event handlers that will never
* mutate the app state.
* @param {...*} var_args
*/
om.core.pure_bind = (function() {
var pure_bind = null;
var pure_bind__2 = (function (f,cursor){return (function (e){var _STAR_read_enabled_STAR_24825 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(e,cursor) : f.call(null,e,cursor));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24825;
}});
});
var pure_bind__3 = (function (f,cursor,a){return (function (e){var _STAR_read_enabled_STAR_24826 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(e,cursor,a) : f.call(null,e,cursor,a));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24826;
}});
});
var pure_bind__4 = (function (f,cursor,a,b){return (function (e){var _STAR_read_enabled_STAR_24827 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(e,cursor,a,b) : f.call(null,e,cursor,a,b));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24827;
}});
});
var pure_bind__5 = (function (f,cursor,a,b,c){return (function (e){var _STAR_read_enabled_STAR_24828 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(e,cursor,a,b,c) : f.call(null,e,cursor,a,b,c));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24828;
}});
});
var pure_bind__6 = (function (f,cursor,a,b,c,d){return (function (e){var _STAR_read_enabled_STAR_24829 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(e,cursor,a,b,c,d) : f.call(null,e,cursor,a,b,c,d));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24829;
}});
});
var pure_bind__7 = (function() { 
var G__24831__delegate = function (f,cursor,a,b,c,d,args){return (function (e){var _STAR_read_enabled_STAR_24830 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,e,cursor,a,b,cljs.core.array_seq([c,d,args], 0));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_24830;
}});
};
var G__24831 = function (f,cursor,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__24831__delegate.call(this,f,cursor,a,b,c,d,args);};
G__24831.cljs$lang$maxFixedArity = 6;
G__24831.cljs$lang$applyTo = (function (arglist__24832){
var f = cljs.core.first(arglist__24832);
arglist__24832 = cljs.core.next(arglist__24832);
var cursor = cljs.core.first(arglist__24832);
arglist__24832 = cljs.core.next(arglist__24832);
var a = cljs.core.first(arglist__24832);
arglist__24832 = cljs.core.next(arglist__24832);
var b = cljs.core.first(arglist__24832);
arglist__24832 = cljs.core.next(arglist__24832);
var c = cljs.core.first(arglist__24832);
arglist__24832 = cljs.core.next(arglist__24832);
var d = cljs.core.first(arglist__24832);
var args = cljs.core.rest(arglist__24832);
return G__24831__delegate(f,cursor,a,b,c,d,args);
});
G__24831.cljs$core$IFn$_invoke$arity$variadic = G__24831__delegate;
return G__24831;
})()
;
pure_bind = function(f,cursor,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return pure_bind__2.call(this,f,cursor);
case 3:
return pure_bind__3.call(this,f,cursor,a);
case 4:
return pure_bind__4.call(this,f,cursor,a,b);
case 5:
return pure_bind__5.call(this,f,cursor,a,b,c);
case 6:
return pure_bind__6.call(this,f,cursor,a,b,c,d);
default:
return pure_bind__7.cljs$core$IFn$_invoke$arity$variadic(f,cursor,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pure_bind.cljs$lang$maxFixedArity = 6;
pure_bind.cljs$lang$applyTo = pure_bind__7.cljs$lang$applyTo;
pure_bind.cljs$core$IFn$_invoke$arity$2 = pure_bind__2;
pure_bind.cljs$core$IFn$_invoke$arity$3 = pure_bind__3;
pure_bind.cljs$core$IFn$_invoke$arity$4 = pure_bind__4;
pure_bind.cljs$core$IFn$_invoke$arity$5 = pure_bind__5;
pure_bind.cljs$core$IFn$_invoke$arity$6 = pure_bind__6;
pure_bind.cljs$core$IFn$_invoke$arity$variadic = pure_bind__7.cljs$core$IFn$_invoke$arity$variadic;
return pure_bind;
})()
;
/**
* Create a cursor instance by attaching to an existing cursor. This
* supports building components which don't need to set app state but
* need to be added to the render tree.
*/
om.core.graft = (function graft(value,cursor){var x24834 = cljs.core.clone(value);x24834.cljs$core$IEquiv$ = true;
x24834.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,other);
}
});
x24834.om$core$ICursor$ = true;
x24834.om$core$ICursor$_value$arity$1 = (function (_){var ___$1 = this;return value;
});
x24834.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;return om.core._state(cursor);
});
x24834.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;return om.core._path(cursor);
});
return x24834;
});
