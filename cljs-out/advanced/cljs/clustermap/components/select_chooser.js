// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__38881,owner){var map__38895 = p__38881;var map__38895__$1 = ((cljs.core.seq_QMARK_(map__38895))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38895):map__38895);var cursor = map__38895__$1;if(typeof clustermap.components.select_chooser.t38896 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t38896 = (function (cursor,map__38895,owner,p__38881,value_descriptions,key,title,select_chooser_component,meta38897){
this.cursor = cursor;
this.map__38895 = map__38895;
this.owner = owner;
this.p__38881 = p__38881;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta38897 = meta38897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t38896.cljs$lang$type = true;
clustermap.components.select_chooser.t38896.cljs$lang$ctorStr = "clustermap.components.select-chooser/t38896";
clustermap.components.select_chooser.t38896.cljs$lang$ctorPrWriter = ((function (map__38895,map__38895__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.select-chooser/t38896");
});})(map__38895,map__38895__$1,cursor))
;
clustermap.components.select_chooser.t38896.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t38896.prototype.om$core$IRender$render$arity$1 = ((function (map__38895,map__38895__$1,cursor){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs38899 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38899))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$894,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs38899], 0))):{"className": "tbl-cell"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38899))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38899)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9536__auto____$1,map__38895,map__38895__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(this__9536__auto____$1,map__38895,map__38895__$1,cursor))
},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (this__9536__auto____$1,map__38895,map__38895__$1,cursor){
return (function iter__38900(s__38901){return (new cljs.core.LazySeq(null,((function (this__9536__auto____$1,map__38895,map__38895__$1,cursor){
return (function (){var s__38901__$1 = s__38901;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38901__$1);if(temp__4126__auto__)
{var s__38901__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38901__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38901__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38903 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38902 = (0);while(true){
if((i__38902 < size__4282__auto__))
{var vec__38906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38902);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38906,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38906,(1),null);cljs.core.chunk_append(b__38903,(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": value},sablono.interpreter.interpret(description)) : sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret(description))));
{
var G__38908 = (i__38902 + (1));
i__38902 = G__38908;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38903),iter__38900(cljs.core.chunk_rest(s__38901__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38903),null);
}
} else
{var vec__38907 = cljs.core.first(s__38901__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38907,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38907,(1),null);return cljs.core.cons((sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": value},sablono.interpreter.interpret(description)) : sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret(description))),iter__38900(cljs.core.rest(s__38901__$2)));
}
} else
{return null;
}
break;
}
});})(this__9536__auto____$1,map__38895,map__38895__$1,cursor))
,null,null));
});})(this__9536__auto____$1,map__38895,map__38895__$1,cursor))
;return iter__4283__auto__(self__.value_descriptions);
})()))))));
});})(map__38895,map__38895__$1,cursor))
;
clustermap.components.select_chooser.t38896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38895,map__38895__$1,cursor){
return (function (_38898){var self__ = this;
var _38898__$1 = this;return self__.meta38897;
});})(map__38895,map__38895__$1,cursor))
;
clustermap.components.select_chooser.t38896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38895,map__38895__$1,cursor){
return (function (_38898,meta38897__$1){var self__ = this;
var _38898__$1 = this;return (new clustermap.components.select_chooser.t38896(self__.cursor,self__.map__38895,self__.owner,self__.p__38881,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta38897__$1));
});})(map__38895,map__38895__$1,cursor))
;
clustermap.components.select_chooser.__GT_t38896 = ((function (map__38895,map__38895__$1,cursor){
return (function __GT_t38896(cursor__$1,map__38895__$2,owner__$1,p__38881__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta38897){return (new clustermap.components.select_chooser.t38896(cursor__$1,map__38895__$2,owner__$1,p__38881__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta38897));
});})(map__38895,map__38895__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t38896(cursor,map__38895__$1,owner,p__38881,value_descriptions,key,title,select_chooser_component,null));
});
