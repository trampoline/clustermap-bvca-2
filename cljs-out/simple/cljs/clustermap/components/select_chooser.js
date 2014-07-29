// Compiled by ClojureScript 0.0-2268
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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__26197,owner){var map__26211 = p__26197;var map__26211__$1 = ((cljs.core.seq_QMARK_.call(null,map__26211))?cljs.core.apply.call(null,cljs.core.hash_map,map__26211):map__26211);var cursor = map__26211__$1;if(typeof clustermap.components.select_chooser.t26212 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t26212 = (function (cursor,map__26211,owner,p__26197,value_descriptions,key,title,select_chooser_component,meta26213){
this.cursor = cursor;
this.map__26211 = map__26211;
this.owner = owner;
this.p__26197 = p__26197;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta26213 = meta26213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t26212.cljs$lang$type = true;
clustermap.components.select_chooser.t26212.cljs$lang$ctorStr = "clustermap.components.select-chooser/t26212";
clustermap.components.select_chooser.t26212.cljs$lang$ctorPrWriter = ((function (map__26211,map__26211__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.select-chooser/t26212");
});})(map__26211,map__26211__$1,cursor))
;
clustermap.components.select_chooser.t26212.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t26212.prototype.om$core$IRender$render$arity$1 = ((function (map__26211,map__26211__$1,cursor){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs26215 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26215))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs26215)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26215))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26215)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9490__auto____$1,map__26211,map__26211__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__9490__auto____$1,map__26211,map__26211__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4268__auto__ = ((function (this__9490__auto____$1,map__26211,map__26211__$1,cursor){
return (function iter__26216(s__26217){return (new cljs.core.LazySeq(null,((function (this__9490__auto____$1,map__26211,map__26211__$1,cursor){
return (function (){var s__26217__$1 = s__26217;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26217__$1);if(temp__4126__auto__)
{var s__26217__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26217__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__26217__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__26219 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__26218 = (0);while(true){
if((i__26218 < size__4267__auto__))
{var vec__26222 = cljs.core._nth.call(null,c__4266__auto__,i__26218);var value = cljs.core.nth.call(null,vec__26222,(0),null);var description = cljs.core.nth.call(null,vec__26222,(1),null);cljs.core.chunk_append.call(null,b__26219,React.DOM.option({"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__26224 = (i__26218 + (1));
i__26218 = G__26224;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26219),iter__26216.call(null,cljs.core.chunk_rest.call(null,s__26217__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26219),null);
}
} else
{var vec__26223 = cljs.core.first.call(null,s__26217__$2);var value = cljs.core.nth.call(null,vec__26223,(0),null);var description = cljs.core.nth.call(null,vec__26223,(1),null);return cljs.core.cons.call(null,React.DOM.option({"value": value},sablono.interpreter.interpret.call(null,description)),iter__26216.call(null,cljs.core.rest.call(null,s__26217__$2)));
}
} else
{return null;
}
break;
}
});})(this__9490__auto____$1,map__26211,map__26211__$1,cursor))
,null,null));
});})(this__9490__auto____$1,map__26211,map__26211__$1,cursor))
;return iter__4268__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__26211,map__26211__$1,cursor))
;
clustermap.components.select_chooser.t26212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26211,map__26211__$1,cursor){
return (function (_26214){var self__ = this;
var _26214__$1 = this;return self__.meta26213;
});})(map__26211,map__26211__$1,cursor))
;
clustermap.components.select_chooser.t26212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26211,map__26211__$1,cursor){
return (function (_26214,meta26213__$1){var self__ = this;
var _26214__$1 = this;return (new clustermap.components.select_chooser.t26212(self__.cursor,self__.map__26211,self__.owner,self__.p__26197,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta26213__$1));
});})(map__26211,map__26211__$1,cursor))
;
clustermap.components.select_chooser.__GT_t26212 = ((function (map__26211,map__26211__$1,cursor){
return (function __GT_t26212(cursor__$1,map__26211__$2,owner__$1,p__26197__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta26213){return (new clustermap.components.select_chooser.t26212(cursor__$1,map__26211__$2,owner__$1,p__26197__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta26213));
});})(map__26211,map__26211__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t26212(cursor,map__26211__$1,owner,p__26197,value_descriptions,key,title,select_chooser_component,null));
});
clustermap.components.select_chooser.mount = (function mount(app_state,path,elem_id,shared,title,key,value_descriptions){return om.core.root.call(null,cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,title,key,value_descriptions),app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
