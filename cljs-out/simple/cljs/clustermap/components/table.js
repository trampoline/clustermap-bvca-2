// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_.call(null,current_order))?cljs.core.first.call(null,current_order):current_order);var current_order_key = cljs.core.first.call(null,cljs.core.keys.call(null,current_order__$1));var current_order_dir = cljs.core.first.call(null,cljs.core.vals.call(null,current_order__$1));return React.DOM.a({"href": "#", "onClick": ((function (current_order,current_order__$1,current_order_key,current_order_dir){
return (function (e){e.preventDefault();
var pred__27282 = cljs.core._EQ_;var expr__27283 = current_order_dir;if(cljs.core.truth_(pred__27282.call(null,"asc",expr__27283)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__27282.call(null,"desc",expr__27283)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__27285 = cljs.core._EQ_;var expr__27286 = current_order_dir;if(cljs.core.truth_(pred__27285.call(null,"asc",expr__27286)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__27288,owner,opts){var map__27305 = p__27288;var map__27305__$1 = ((cljs.core.seq_QMARK_.call(null,map__27305))?cljs.core.apply.call(null,cljs.core.hash_map,map__27305):map__27305);var controls = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27306 = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27306__$1 = ((cljs.core.seq_QMARK_.call(null,map__27306))?cljs.core.apply.call(null,cljs.core.hash_map,map__27306):map__27306);var table_data = map__27306__$1;var count = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t27307 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t27307 = (function (owner,paginate,table_data,map__27305,controls,size,p__27288,map__27306,from,count,opts,meta27308){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__27305 = map__27305;
this.controls = controls;
this.size = size;
this.p__27288 = p__27288;
this.map__27306 = map__27306;
this.from = from;
this.count = count;
this.opts = opts;
this.meta27308 = meta27308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t27307.cljs$lang$type = true;
clustermap.components.table.t27307.cljs$lang$ctorStr = "clustermap.components.table/t27307";
clustermap.components.table.t27307.cljs$lang$ctorPrWriter = ((function (map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t27307");
});})(map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size))
;
clustermap.components.table.t27307.prototype.om$core$IRender$ = true;
clustermap.components.table.t27307.prototype.om$core$IRender$render$arity$1 = ((function (map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs27310 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27310))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs27310)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27310))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs27311 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs27311))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs27311)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27311))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27311)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs27310,this__9504__auto____$1,map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs27310,this__9504__auto____$1,map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27310),(function (){var attrs27312 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs27312))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs27312)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27312))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27312)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs27310,this__9504__auto____$1,map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs27310,this__9504__auto____$1,map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size))
;
clustermap.components.table.t27307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size){
return (function (_27309){var self__ = this;
var _27309__$1 = this;return self__.meta27308;
});})(map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size))
;
clustermap.components.table.t27307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size){
return (function (_27309,meta27308__$1){var self__ = this;
var _27309__$1 = this;return (new clustermap.components.table.t27307(self__.owner,self__.paginate,self__.table_data,self__.map__27305,self__.controls,self__.size,self__.p__27288,self__.map__27306,self__.from,self__.count,self__.opts,meta27308__$1));
});})(map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t27307 = ((function (map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size){
return (function __GT_t27307(owner__$1,paginate__$1,table_data__$1,map__27305__$2,controls__$1,size__$1,p__27288__$1,map__27306__$2,from__$1,count__$1,opts__$1,meta27308){return (new clustermap.components.table.t27307(owner__$1,paginate__$1,table_data__$1,map__27305__$2,controls__$1,size__$1,p__27288__$1,map__27306__$2,from__$1,count__$1,opts__$1,meta27308));
});})(map__27305,map__27305__$1,controls,map__27306,map__27306__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t27307(owner,paginate,table_data,map__27305__$1,controls,size,p__27288,map__27306__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__27321){var map__27362 = p__27321;var map__27362__$1 = ((cljs.core.seq_QMARK_.call(null,map__27362))?cljs.core.apply.call(null,cljs.core.hash_map,map__27362):map__27362);var record = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t27363 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t27363 = (function (columns,record,map__27362,p__27321,render_table_row,meta27364){
this.columns = columns;
this.record = record;
this.map__27362 = map__27362;
this.p__27321 = p__27321;
this.render_table_row = render_table_row;
this.meta27364 = meta27364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t27363.cljs$lang$type = true;
clustermap.components.table.t27363.cljs$lang$ctorStr = "clustermap.components.table/t27363";
clustermap.components.table.t27363.cljs$lang$ctorPrWriter = ((function (map__27362,map__27362__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t27363");
});})(map__27362,map__27362__$1,record,columns))
;
clustermap.components.table.t27363.prototype.om$core$IRender$ = true;
clustermap.components.table.t27363.prototype.om$core$IRender$render$arity$1 = ((function (map__27362,map__27362__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__27362,map__27362__$1,record,columns){
return (function iter__27366(s__27367){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__27362,map__27362__$1,record,columns){
return (function (){var s__27367__$1 = s__27367;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27367__$1);if(temp__4126__auto__)
{var s__27367__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27367__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27367__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27369 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27368 = (0);while(true){
if((i__27368 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__27368);cljs.core.chunk_append.call(null,b__27369,(function (){var iter__4283__auto__ = ((function (i__27368,col,c__4281__auto__,size__4282__auto__,b__27369,s__27367__$2,temp__4126__auto__,this__9504__auto____$1,map__27362,map__27362__$1,record,columns){
return (function iter__27386(s__27387){return (new cljs.core.LazySeq(null,((function (i__27368,col,c__4281__auto__,size__4282__auto__,b__27369,s__27367__$2,temp__4126__auto__,this__9504__auto____$1,map__27362,map__27362__$1,record,columns){
return (function (){var s__27387__$1 = s__27387;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27387__$1);if(temp__4126__auto____$1)
{var s__27387__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27387__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__27387__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__27389 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__27388 = (0);while(true){
if((i__27388 < size__4282__auto____$1))
{var vec__27392 = cljs.core._nth.call(null,c__4281__auto____$1,i__27388);var col_key = cljs.core.nth.call(null,vec__27392,(0),null);var col_name = cljs.core.nth.call(null,vec__27392,(1),null);cljs.core.chunk_append.call(null,b__27389,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__27402 = (i__27388 + (1));
i__27388 = G__27402;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27389),iter__27386.call(null,cljs.core.chunk_rest.call(null,s__27387__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27389),null);
}
} else
{var vec__27393 = cljs.core.first.call(null,s__27387__$2);var col_key = cljs.core.nth.call(null,vec__27393,(0),null);var col_name = cljs.core.nth.call(null,vec__27393,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__27386.call(null,cljs.core.rest.call(null,s__27387__$2)));
}
} else
{return null;
}
break;
}
});})(i__27368,col,c__4281__auto__,size__4282__auto__,b__27369,s__27367__$2,temp__4126__auto__,this__9504__auto____$1,map__27362,map__27362__$1,record,columns))
,null,null));
});})(i__27368,col,c__4281__auto__,size__4282__auto__,b__27369,s__27367__$2,temp__4126__auto__,this__9504__auto____$1,map__27362,map__27362__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__27403 = (i__27368 + (1));
i__27368 = G__27403;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27369),iter__27366.call(null,cljs.core.chunk_rest.call(null,s__27367__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27369),null);
}
} else
{var col = cljs.core.first.call(null,s__27367__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__27367__$2,temp__4126__auto__,this__9504__auto____$1,map__27362,map__27362__$1,record,columns){
return (function iter__27394(s__27395){return (new cljs.core.LazySeq(null,((function (col,s__27367__$2,temp__4126__auto__,this__9504__auto____$1,map__27362,map__27362__$1,record,columns){
return (function (){var s__27395__$1 = s__27395;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27395__$1);if(temp__4126__auto____$1)
{var s__27395__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27395__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27395__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27397 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27396 = (0);while(true){
if((i__27396 < size__4282__auto__))
{var vec__27400 = cljs.core._nth.call(null,c__4281__auto__,i__27396);var col_key = cljs.core.nth.call(null,vec__27400,(0),null);var col_name = cljs.core.nth.call(null,vec__27400,(1),null);cljs.core.chunk_append.call(null,b__27397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__27404 = (i__27396 + (1));
i__27396 = G__27404;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27397),iter__27394.call(null,cljs.core.chunk_rest.call(null,s__27395__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27397),null);
}
} else
{var vec__27401 = cljs.core.first.call(null,s__27395__$2);var col_key = cljs.core.nth.call(null,vec__27401,(0),null);var col_name = cljs.core.nth.call(null,vec__27401,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__27394.call(null,cljs.core.rest.call(null,s__27395__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__27367__$2,temp__4126__auto__,this__9504__auto____$1,map__27362,map__27362__$1,record,columns))
,null,null));
});})(col,s__27367__$2,temp__4126__auto__,this__9504__auto____$1,map__27362,map__27362__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__27366.call(null,cljs.core.rest.call(null,s__27367__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__27362,map__27362__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__27362,map__27362__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));return row;
})());
});})(map__27362,map__27362__$1,record,columns))
;
clustermap.components.table.t27363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27362,map__27362__$1,record,columns){
return (function (_27365){var self__ = this;
var _27365__$1 = this;return self__.meta27364;
});})(map__27362,map__27362__$1,record,columns))
;
clustermap.components.table.t27363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27362,map__27362__$1,record,columns){
return (function (_27365,meta27364__$1){var self__ = this;
var _27365__$1 = this;return (new clustermap.components.table.t27363(self__.columns,self__.record,self__.map__27362,self__.p__27321,self__.render_table_row,meta27364__$1));
});})(map__27362,map__27362__$1,record,columns))
;
clustermap.components.table.__GT_t27363 = ((function (map__27362,map__27362__$1,record,columns){
return (function __GT_t27363(columns__$1,record__$1,map__27362__$2,p__27321__$1,render_table_row__$1,meta27364){return (new clustermap.components.table.t27363(columns__$1,record__$1,map__27362__$2,p__27321__$1,render_table_row__$1,meta27364));
});})(map__27362,map__27362__$1,record,columns))
;
}
return (new clustermap.components.table.t27363(columns,record,map__27362__$1,p__27321,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__27405,owner,opts){var map__27485 = p__27405;var map__27485__$1 = ((cljs.core.seq_QMARK_.call(null,map__27485))?cljs.core.apply.call(null,cljs.core.hash_map,map__27485):map__27485);var props = map__27485__$1;var table_data = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27486 = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27486__$1 = ((cljs.core.seq_QMARK_.call(null,map__27486))?cljs.core.apply.call(null,cljs.core.hash_map,map__27486):map__27486);var controls = map__27486__$1;var columns = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var attrs27487 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27487))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs27487)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27487))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs27488 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function iter__27492(s__27493){return (new cljs.core.LazySeq(null,((function (attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function (){var s__27493__$1 = s__27493;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27493__$1);if(temp__4126__auto__)
{var s__27493__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27493__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27493__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27495 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27494 = (0);while(true){
if((i__27494 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__27494);cljs.core.chunk_append.call(null,b__27495,(function (){var iter__4283__auto__ = ((function (i__27494,col,c__4281__auto__,size__4282__auto__,b__27495,s__27493__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function iter__27512(s__27513){return (new cljs.core.LazySeq(null,((function (i__27494,col,c__4281__auto__,size__4282__auto__,b__27495,s__27493__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function (){var s__27513__$1 = s__27513;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27513__$1);if(temp__4126__auto____$1)
{var s__27513__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27513__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__27513__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__27515 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__27514 = (0);while(true){
if((i__27514 < size__4282__auto____$1))
{var vec__27518 = cljs.core._nth.call(null,c__4281__auto____$1,i__27514);var col_key = cljs.core.nth.call(null,vec__27518,(0),null);var col_name = cljs.core.nth.call(null,vec__27518,(1),null);cljs.core.chunk_append.call(null,b__27515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__27564 = (i__27514 + (1));
i__27514 = G__27564;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27515),iter__27512.call(null,cljs.core.chunk_rest.call(null,s__27513__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27515),null);
}
} else
{var vec__27519 = cljs.core.first.call(null,s__27513__$2);var col_key = cljs.core.nth.call(null,vec__27519,(0),null);var col_name = cljs.core.nth.call(null,vec__27519,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__27512.call(null,cljs.core.rest.call(null,s__27513__$2)));
}
} else
{return null;
}
break;
}
});})(i__27494,col,c__4281__auto__,size__4282__auto__,b__27495,s__27493__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
,null,null));
});})(i__27494,col,c__4281__auto__,size__4282__auto__,b__27495,s__27493__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__27565 = (i__27494 + (1));
i__27494 = G__27565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27495),iter__27492.call(null,cljs.core.chunk_rest.call(null,s__27493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27495),null);
}
} else
{var col = cljs.core.first.call(null,s__27493__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__27493__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function iter__27520(s__27521){return (new cljs.core.LazySeq(null,((function (col,s__27493__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function (){var s__27521__$1 = s__27521;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27521__$1);if(temp__4126__auto____$1)
{var s__27521__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27521__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27521__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27523 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27522 = (0);while(true){
if((i__27522 < size__4282__auto__))
{var vec__27526 = cljs.core._nth.call(null,c__4281__auto__,i__27522);var col_key = cljs.core.nth.call(null,vec__27526,(0),null);var col_name = cljs.core.nth.call(null,vec__27526,(1),null);cljs.core.chunk_append.call(null,b__27523,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__27566 = (i__27522 + (1));
i__27522 = G__27566;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27523),iter__27520.call(null,cljs.core.chunk_rest.call(null,s__27521__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27523),null);
}
} else
{var vec__27527 = cljs.core.first.call(null,s__27521__$2);var col_key = cljs.core.nth.call(null,vec__27527,(0),null);var col_name = cljs.core.nth.call(null,vec__27527,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__27520.call(null,cljs.core.rest.call(null,s__27521__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__27493__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__27493__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__27492.call(null,cljs.core.rest.call(null,s__27493__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27488))?sablono.interpreter.attributes.call(null,attrs27488):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27488))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27488)], null))));
})(),(function (){var attrs27489 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs27489))?sablono.interpreter.attributes.call(null,attrs27489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27489))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27489)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27487),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs27490 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function iter__27528(s__27529){return (new cljs.core.LazySeq(null,((function (attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function (){var s__27529__$1 = s__27529;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27529__$1);if(temp__4126__auto__)
{var s__27529__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27529__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27529__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27531 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27530 = (0);while(true){
if((i__27530 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__27530);cljs.core.chunk_append.call(null,b__27531,(function (){var iter__4283__auto__ = ((function (i__27530,col,c__4281__auto__,size__4282__auto__,b__27531,s__27529__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function iter__27548(s__27549){return (new cljs.core.LazySeq(null,((function (i__27530,col,c__4281__auto__,size__4282__auto__,b__27531,s__27529__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function (){var s__27549__$1 = s__27549;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27549__$1);if(temp__4126__auto____$1)
{var s__27549__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27549__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__27549__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__27551 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__27550 = (0);while(true){
if((i__27550 < size__4282__auto____$1))
{var vec__27554 = cljs.core._nth.call(null,c__4281__auto____$1,i__27550);var col_key = cljs.core.nth.call(null,vec__27554,(0),null);var col_name = cljs.core.nth.call(null,vec__27554,(1),null);cljs.core.chunk_append.call(null,b__27551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__27567 = (i__27550 + (1));
i__27550 = G__27567;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27551),iter__27548.call(null,cljs.core.chunk_rest.call(null,s__27549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27551),null);
}
} else
{var vec__27555 = cljs.core.first.call(null,s__27549__$2);var col_key = cljs.core.nth.call(null,vec__27555,(0),null);var col_name = cljs.core.nth.call(null,vec__27555,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__27548.call(null,cljs.core.rest.call(null,s__27549__$2)));
}
} else
{return null;
}
break;
}
});})(i__27530,col,c__4281__auto__,size__4282__auto__,b__27531,s__27529__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
,null,null));
});})(i__27530,col,c__4281__auto__,size__4282__auto__,b__27531,s__27529__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__27568 = (i__27530 + (1));
i__27530 = G__27568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27531),iter__27528.call(null,cljs.core.chunk_rest.call(null,s__27529__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27531),null);
}
} else
{var col = cljs.core.first.call(null,s__27529__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__27529__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function iter__27556(s__27557){return (new cljs.core.LazySeq(null,((function (col,s__27529__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function (){var s__27557__$1 = s__27557;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27557__$1);if(temp__4126__auto____$1)
{var s__27557__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27557__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27557__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27559 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27558 = (0);while(true){
if((i__27558 < size__4282__auto__))
{var vec__27562 = cljs.core._nth.call(null,c__4281__auto__,i__27558);var col_key = cljs.core.nth.call(null,vec__27562,(0),null);var col_name = cljs.core.nth.call(null,vec__27562,(1),null);cljs.core.chunk_append.call(null,b__27559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__27569 = (i__27558 + (1));
i__27558 = G__27569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27559),iter__27556.call(null,cljs.core.chunk_rest.call(null,s__27557__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27559),null);
}
} else
{var vec__27563 = cljs.core.first.call(null,s__27557__$2);var col_key = cljs.core.nth.call(null,vec__27563,(0),null);var col_name = cljs.core.nth.call(null,vec__27563,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__27556.call(null,cljs.core.rest.call(null,s__27557__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__27529__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__27529__$2,temp__4126__auto__,attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__27528.call(null,cljs.core.rest.call(null,s__27529__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27490))?sablono.interpreter.attributes.call(null,attrs27490):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27490))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27490)], null))));
})(),(function (){var attrs27491 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs27487,map__27485,map__27485__$1,props,table_data,map__27486,map__27486__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs27491))?sablono.interpreter.attributes.call(null,attrs27491):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27491))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27491)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__27570,owner){var map__27585 = p__27570;var map__27585__$1 = ((cljs.core.seq_QMARK_.call(null,map__27585))?cljs.core.apply.call(null,cljs.core.hash_map,map__27585):map__27585);var props = map__27585__$1;var map__27586 = cljs.core.get.call(null,map__27585__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27586__$1 = ((cljs.core.seq_QMARK_.call(null,map__27586))?cljs.core.apply.call(null,cljs.core.hash_map,map__27586):map__27586);var table_state = map__27586__$1;var table_data = cljs.core.get.call(null,map__27586__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27587 = cljs.core.get.call(null,map__27586__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27587__$1 = ((cljs.core.seq_QMARK_.call(null,map__27587))?cljs.core.apply.call(null,cljs.core.hash_map,map__27587):map__27587);var controls = map__27587__$1;var index = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__27588 = cljs.core.get.call(null,map__27585__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27588__$1 = ((cljs.core.seq_QMARK_.call(null,map__27588))?cljs.core.apply.call(null,cljs.core.hash_map,map__27588):map__27588);var filter_by_view = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__27585__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t27589 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t27589 = (function (sort_spec,table_component,owner,filter_by_view,props,p__27570,table_data,index,filter_spec,columns,table_state,map__27585,controls,map__27586,bounds,size,map__27587,map__27588,from,meta27590){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.p__27570 = p__27570;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.map__27585 = map__27585;
this.controls = controls;
this.map__27586 = map__27586;
this.bounds = bounds;
this.size = size;
this.map__27587 = map__27587;
this.map__27588 = map__27588;
this.from = from;
this.meta27590 = meta27590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t27589.cljs$lang$type = true;
clustermap.components.table.t27589.cljs$lang$ctorStr = "clustermap.components.table/t27589";
clustermap.components.table.t27589.cljs$lang$ctorPrWriter = ((function (map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t27589");
});})(map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t27589.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t27589.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__27592,p__27593){var self__ = this;
var map__27594 = p__27592;var map__27594__$1 = ((cljs.core.seq_QMARK_.call(null,map__27594))?cljs.core.apply.call(null,cljs.core.hash_map,map__27594):map__27594);var next_props = map__27594__$1;var map__27595 = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27595__$1 = ((cljs.core.seq_QMARK_.call(null,map__27595))?cljs.core.apply.call(null,cljs.core.hash_map,map__27595):map__27595);var next_table_state = map__27595__$1;var next_table_data = cljs.core.get.call(null,map__27595__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27596 = cljs.core.get.call(null,map__27595__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27596__$1 = ((cljs.core.seq_QMARK_.call(null,map__27596))?cljs.core.apply.call(null,cljs.core.hash_map,map__27596):map__27596);var next_controls = map__27596__$1;var next_index = cljs.core.get.call(null,map__27596__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__27596__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__27596__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__27596__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__27596__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__27597 = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27597__$1 = ((cljs.core.seq_QMARK_.call(null,map__27597))?cljs.core.apply.call(null,cljs.core.hash_map,map__27597):map__27597);var next_filter_by_view = cljs.core.get.call(null,map__27597__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__27597__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__27598 = p__27593;var map__27598__$1 = ((cljs.core.seq_QMARK_.call(null,map__27598))?cljs.core.apply.call(null,cljs.core.hash_map,map__27598):map__27598);var next_state = map__27598__$1;var table_data_resource = cljs.core.get.call(null,map__27598__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.call(null,next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var or__3558__auto____$3 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$3)
{return or__3558__auto____$3;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
}
}
})()))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,(cljs.core.truth_(next_filter_by_view)?next_bounds:null),next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t27589.prototype.om$core$IRender$ = true;
clustermap.components.table.t27589.prototype.om$core$IRender$render$arity$1 = ((function (map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t27589.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t27589.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds))
);
});})(map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t27589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds){
return (function (_27591){var self__ = this;
var _27591__$1 = this;return self__.meta27590;
});})(map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t27589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds){
return (function (_27591,meta27590__$1){var self__ = this;
var _27591__$1 = this;return (new clustermap.components.table.t27589(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.p__27570,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.map__27585,self__.controls,self__.map__27586,self__.bounds,self__.size,self__.map__27587,self__.map__27588,self__.from,meta27590__$1));
});})(map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t27589 = ((function (map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t27589(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,p__27570__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__27585__$2,controls__$1,map__27586__$2,bounds__$1,size__$1,map__27587__$2,map__27588__$2,from__$1,meta27590){return (new clustermap.components.table.t27589(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,p__27570__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__27585__$2,controls__$1,map__27586__$2,bounds__$1,size__$1,map__27587__$2,map__27588__$2,from__$1,meta27590));
});})(map__27585,map__27585__$1,props,map__27586,map__27586__$1,table_state,table_data,map__27587,map__27587__$1,controls,index,sort_spec,from,size,columns,map__27588,map__27588__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t27589(sort_spec,table_component,owner,filter_by_view,props,p__27570,table_data,index,filter_spec,columns,table_state,map__27585__$1,controls,map__27586__$1,bounds,size,map__27587__$1,map__27588__$1,from,null));
});
