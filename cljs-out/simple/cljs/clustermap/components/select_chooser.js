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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__26409,owner){var map__26423 = p__26409;var map__26423__$1 = ((cljs.core.seq_QMARK_.call(null,map__26423))?cljs.core.apply.call(null,cljs.core.hash_map,map__26423):map__26423);var cursor = map__26423__$1;if(typeof clustermap.components.select_chooser.t26424 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t26424 = (function (cursor,map__26423,owner,p__26409,value_descriptions,key,title,select_chooser_component,meta26425){
this.cursor = cursor;
this.map__26423 = map__26423;
this.owner = owner;
this.p__26409 = p__26409;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta26425 = meta26425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t26424.cljs$lang$type = true;
clustermap.components.select_chooser.t26424.cljs$lang$ctorStr = "clustermap.components.select-chooser/t26424";
clustermap.components.select_chooser.t26424.cljs$lang$ctorPrWriter = ((function (map__26423,map__26423__$1,cursor){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.select-chooser/t26424");
});})(map__26423,map__26423__$1,cursor))
;
clustermap.components.select_chooser.t26424.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t26424.prototype.om$core$IRender$render$arity$1 = ((function (map__26423,map__26423__$1,cursor){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs26427 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26427))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs26427)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26427))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26427)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9492__auto____$1,map__26423,map__26423__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__9492__auto____$1,map__26423,map__26423__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4266__auto__ = ((function (this__9492__auto____$1,map__26423,map__26423__$1,cursor){
return (function iter__26428(s__26429){return (new cljs.core.LazySeq(null,((function (this__9492__auto____$1,map__26423,map__26423__$1,cursor){
return (function (){var s__26429__$1 = s__26429;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26429__$1);if(temp__4126__auto__)
{var s__26429__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26429__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__26429__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__26431 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__26430 = (0);while(true){
if((i__26430 < size__4265__auto__))
{var vec__26434 = cljs.core._nth.call(null,c__4264__auto__,i__26430);var value = cljs.core.nth.call(null,vec__26434,(0),null);var description = cljs.core.nth.call(null,vec__26434,(1),null);cljs.core.chunk_append.call(null,b__26431,React.DOM.option({"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__26436 = (i__26430 + (1));
i__26430 = G__26436;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26431),iter__26428.call(null,cljs.core.chunk_rest.call(null,s__26429__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26431),null);
}
} else
{var vec__26435 = cljs.core.first.call(null,s__26429__$2);var value = cljs.core.nth.call(null,vec__26435,(0),null);var description = cljs.core.nth.call(null,vec__26435,(1),null);return cljs.core.cons.call(null,React.DOM.option({"value": value},sablono.interpreter.interpret.call(null,description)),iter__26428.call(null,cljs.core.rest.call(null,s__26429__$2)));
}
} else
{return null;
}
break;
}
});})(this__9492__auto____$1,map__26423,map__26423__$1,cursor))
,null,null));
});})(this__9492__auto____$1,map__26423,map__26423__$1,cursor))
;return iter__4266__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__26423,map__26423__$1,cursor))
;
clustermap.components.select_chooser.t26424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26423,map__26423__$1,cursor){
return (function (_26426){var self__ = this;
var _26426__$1 = this;return self__.meta26425;
});})(map__26423,map__26423__$1,cursor))
;
clustermap.components.select_chooser.t26424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26423,map__26423__$1,cursor){
return (function (_26426,meta26425__$1){var self__ = this;
var _26426__$1 = this;return (new clustermap.components.select_chooser.t26424(self__.cursor,self__.map__26423,self__.owner,self__.p__26409,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta26425__$1));
});})(map__26423,map__26423__$1,cursor))
;
clustermap.components.select_chooser.__GT_t26424 = ((function (map__26423,map__26423__$1,cursor){
return (function __GT_t26424(cursor__$1,map__26423__$2,owner__$1,p__26409__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta26425){return (new clustermap.components.select_chooser.t26424(cursor__$1,map__26423__$2,owner__$1,p__26409__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta26425));
});})(map__26423,map__26423__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t26424(cursor,map__26423__$1,owner,p__26409,value_descriptions,key,title,select_chooser_component,null));
});
clustermap.components.select_chooser.mount = (function mount(app_state,path,elem_id,shared,title,key,value_descriptions){return om.core.root.call(null,cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,title,key,value_descriptions),app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
