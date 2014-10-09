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
var pred__61371 = cljs.core._EQ_;var expr__61372 = current_order_dir;if(cljs.core.truth_(pred__61371.call(null,"asc",expr__61372)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__61371.call(null,"desc",expr__61372)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__61374 = cljs.core._EQ_;var expr__61375 = current_order_dir;if(cljs.core.truth_(pred__61374.call(null,"asc",expr__61375)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__61377,owner,opts){var map__61394 = p__61377;var map__61394__$1 = ((cljs.core.seq_QMARK_.call(null,map__61394))?cljs.core.apply.call(null,cljs.core.hash_map,map__61394):map__61394);var controls = cljs.core.get.call(null,map__61394__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__61395 = cljs.core.get.call(null,map__61394__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__61395__$1 = ((cljs.core.seq_QMARK_.call(null,map__61395))?cljs.core.apply.call(null,cljs.core.hash_map,map__61395):map__61395);var table_data = map__61395__$1;var count = cljs.core.get.call(null,map__61395__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__61395__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__61395__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t61396 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t61396 = (function (owner,p__61377,paginate,table_data,controls,size,map__61394,from,map__61395,count,opts,meta61397){
this.owner = owner;
this.p__61377 = p__61377;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.map__61394 = map__61394;
this.from = from;
this.map__61395 = map__61395;
this.count = count;
this.opts = opts;
this.meta61397 = meta61397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t61396.cljs$lang$type = true;
clustermap.components.table.t61396.cljs$lang$ctorStr = "clustermap.components.table/t61396";
clustermap.components.table.t61396.cljs$lang$ctorPrWriter = ((function (map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t61396");
});})(map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size))
;
clustermap.components.table.t61396.prototype.om$core$IRender$ = true;
clustermap.components.table.t61396.prototype.om$core$IRender$render$arity$1 = ((function (map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs61399 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs61399))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs61399)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61399))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs61400 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs61400))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs61400)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61400))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61400)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs61399,this__9504__auto____$1,map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs61399,this__9504__auto____$1,map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61399),(function (){var attrs61401 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs61401))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs61401)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61401))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61401)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs61399,this__9504__auto____$1,map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs61399,this__9504__auto____$1,map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size))
;
clustermap.components.table.t61396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size){
return (function (_61398){var self__ = this;
var _61398__$1 = this;return self__.meta61397;
});})(map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size))
;
clustermap.components.table.t61396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size){
return (function (_61398,meta61397__$1){var self__ = this;
var _61398__$1 = this;return (new clustermap.components.table.t61396(self__.owner,self__.p__61377,self__.paginate,self__.table_data,self__.controls,self__.size,self__.map__61394,self__.from,self__.map__61395,self__.count,self__.opts,meta61397__$1));
});})(map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t61396 = ((function (map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size){
return (function __GT_t61396(owner__$1,p__61377__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__61394__$2,from__$1,map__61395__$2,count__$1,opts__$1,meta61397){return (new clustermap.components.table.t61396(owner__$1,p__61377__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__61394__$2,from__$1,map__61395__$2,count__$1,opts__$1,meta61397));
});})(map__61394,map__61394__$1,controls,map__61395,map__61395__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t61396(owner,p__61377,paginate,table_data,controls,size,map__61394__$1,from,map__61395__$1,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__61410){var map__61451 = p__61410;var map__61451__$1 = ((cljs.core.seq_QMARK_.call(null,map__61451))?cljs.core.apply.call(null,cljs.core.hash_map,map__61451):map__61451);var record = cljs.core.get.call(null,map__61451__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__61451__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t61452 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t61452 = (function (columns,record,map__61451,p__61410,render_table_row,meta61453){
this.columns = columns;
this.record = record;
this.map__61451 = map__61451;
this.p__61410 = p__61410;
this.render_table_row = render_table_row;
this.meta61453 = meta61453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t61452.cljs$lang$type = true;
clustermap.components.table.t61452.cljs$lang$ctorStr = "clustermap.components.table/t61452";
clustermap.components.table.t61452.cljs$lang$ctorPrWriter = ((function (map__61451,map__61451__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t61452");
});})(map__61451,map__61451__$1,record,columns))
;
clustermap.components.table.t61452.prototype.om$core$IRender$ = true;
clustermap.components.table.t61452.prototype.om$core$IRender$render$arity$1 = ((function (map__61451,map__61451__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__61451,map__61451__$1,record,columns){
return (function iter__61455(s__61456){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__61451,map__61451__$1,record,columns){
return (function (){var s__61456__$1 = s__61456;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__61456__$1);if(temp__4126__auto__)
{var s__61456__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__61456__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61456__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61458 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61457 = (0);while(true){
if((i__61457 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__61457);cljs.core.chunk_append.call(null,b__61458,(function (){var iter__4283__auto__ = ((function (i__61457,col,c__4281__auto__,size__4282__auto__,b__61458,s__61456__$2,temp__4126__auto__,this__9504__auto____$1,map__61451,map__61451__$1,record,columns){
return (function iter__61475(s__61476){return (new cljs.core.LazySeq(null,((function (i__61457,col,c__4281__auto__,size__4282__auto__,b__61458,s__61456__$2,temp__4126__auto__,this__9504__auto____$1,map__61451,map__61451__$1,record,columns){
return (function (){var s__61476__$1 = s__61476;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__61476__$1);if(temp__4126__auto____$1)
{var s__61476__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__61476__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__61476__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__61478 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__61477 = (0);while(true){
if((i__61477 < size__4282__auto____$1))
{var vec__61481 = cljs.core._nth.call(null,c__4281__auto____$1,i__61477);var col_key = cljs.core.nth.call(null,vec__61481,(0),null);var col_name = cljs.core.nth.call(null,vec__61481,(1),null);cljs.core.chunk_append.call(null,b__61478,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__61491 = (i__61477 + (1));
i__61477 = G__61491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61478),iter__61475.call(null,cljs.core.chunk_rest.call(null,s__61476__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61478),null);
}
} else
{var vec__61482 = cljs.core.first.call(null,s__61476__$2);var col_key = cljs.core.nth.call(null,vec__61482,(0),null);var col_name = cljs.core.nth.call(null,vec__61482,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__61475.call(null,cljs.core.rest.call(null,s__61476__$2)));
}
} else
{return null;
}
break;
}
});})(i__61457,col,c__4281__auto__,size__4282__auto__,b__61458,s__61456__$2,temp__4126__auto__,this__9504__auto____$1,map__61451,map__61451__$1,record,columns))
,null,null));
});})(i__61457,col,c__4281__auto__,size__4282__auto__,b__61458,s__61456__$2,temp__4126__auto__,this__9504__auto____$1,map__61451,map__61451__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__61492 = (i__61457 + (1));
i__61457 = G__61492;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61458),iter__61455.call(null,cljs.core.chunk_rest.call(null,s__61456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61458),null);
}
} else
{var col = cljs.core.first.call(null,s__61456__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__61456__$2,temp__4126__auto__,this__9504__auto____$1,map__61451,map__61451__$1,record,columns){
return (function iter__61483(s__61484){return (new cljs.core.LazySeq(null,((function (col,s__61456__$2,temp__4126__auto__,this__9504__auto____$1,map__61451,map__61451__$1,record,columns){
return (function (){var s__61484__$1 = s__61484;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__61484__$1);if(temp__4126__auto____$1)
{var s__61484__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__61484__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61484__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61486 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61485 = (0);while(true){
if((i__61485 < size__4282__auto__))
{var vec__61489 = cljs.core._nth.call(null,c__4281__auto__,i__61485);var col_key = cljs.core.nth.call(null,vec__61489,(0),null);var col_name = cljs.core.nth.call(null,vec__61489,(1),null);cljs.core.chunk_append.call(null,b__61486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__61493 = (i__61485 + (1));
i__61485 = G__61493;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61486),iter__61483.call(null,cljs.core.chunk_rest.call(null,s__61484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61486),null);
}
} else
{var vec__61490 = cljs.core.first.call(null,s__61484__$2);var col_key = cljs.core.nth.call(null,vec__61490,(0),null);var col_name = cljs.core.nth.call(null,vec__61490,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__61483.call(null,cljs.core.rest.call(null,s__61484__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__61456__$2,temp__4126__auto__,this__9504__auto____$1,map__61451,map__61451__$1,record,columns))
,null,null));
});})(col,s__61456__$2,temp__4126__auto__,this__9504__auto____$1,map__61451,map__61451__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__61455.call(null,cljs.core.rest.call(null,s__61456__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__61451,map__61451__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__61451,map__61451__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));return row;
})());
});})(map__61451,map__61451__$1,record,columns))
;
clustermap.components.table.t61452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__61451,map__61451__$1,record,columns){
return (function (_61454){var self__ = this;
var _61454__$1 = this;return self__.meta61453;
});})(map__61451,map__61451__$1,record,columns))
;
clustermap.components.table.t61452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__61451,map__61451__$1,record,columns){
return (function (_61454,meta61453__$1){var self__ = this;
var _61454__$1 = this;return (new clustermap.components.table.t61452(self__.columns,self__.record,self__.map__61451,self__.p__61410,self__.render_table_row,meta61453__$1));
});})(map__61451,map__61451__$1,record,columns))
;
clustermap.components.table.__GT_t61452 = ((function (map__61451,map__61451__$1,record,columns){
return (function __GT_t61452(columns__$1,record__$1,map__61451__$2,p__61410__$1,render_table_row__$1,meta61453){return (new clustermap.components.table.t61452(columns__$1,record__$1,map__61451__$2,p__61410__$1,render_table_row__$1,meta61453));
});})(map__61451,map__61451__$1,record,columns))
;
}
return (new clustermap.components.table.t61452(columns,record,map__61451__$1,p__61410,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__61494,owner,opts){var map__61574 = p__61494;var map__61574__$1 = ((cljs.core.seq_QMARK_.call(null,map__61574))?cljs.core.apply.call(null,cljs.core.hash_map,map__61574):map__61574);var props = map__61574__$1;var table_data = cljs.core.get.call(null,map__61574__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__61575 = cljs.core.get.call(null,map__61574__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__61575__$1 = ((cljs.core.seq_QMARK_.call(null,map__61575))?cljs.core.apply.call(null,cljs.core.hash_map,map__61575):map__61575);var controls = map__61575__$1;var columns = cljs.core.get.call(null,map__61575__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__61575__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var attrs61576 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs61576))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs61576)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61576))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs61577 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function iter__61581(s__61582){return (new cljs.core.LazySeq(null,((function (attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function (){var s__61582__$1 = s__61582;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__61582__$1);if(temp__4126__auto__)
{var s__61582__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__61582__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61582__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61584 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61583 = (0);while(true){
if((i__61583 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__61583);cljs.core.chunk_append.call(null,b__61584,(function (){var iter__4283__auto__ = ((function (i__61583,col,c__4281__auto__,size__4282__auto__,b__61584,s__61582__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function iter__61601(s__61602){return (new cljs.core.LazySeq(null,((function (i__61583,col,c__4281__auto__,size__4282__auto__,b__61584,s__61582__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function (){var s__61602__$1 = s__61602;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__61602__$1);if(temp__4126__auto____$1)
{var s__61602__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__61602__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__61602__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__61604 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__61603 = (0);while(true){
if((i__61603 < size__4282__auto____$1))
{var vec__61607 = cljs.core._nth.call(null,c__4281__auto____$1,i__61603);var col_key = cljs.core.nth.call(null,vec__61607,(0),null);var col_name = cljs.core.nth.call(null,vec__61607,(1),null);cljs.core.chunk_append.call(null,b__61604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__61653 = (i__61603 + (1));
i__61603 = G__61653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61604),iter__61601.call(null,cljs.core.chunk_rest.call(null,s__61602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61604),null);
}
} else
{var vec__61608 = cljs.core.first.call(null,s__61602__$2);var col_key = cljs.core.nth.call(null,vec__61608,(0),null);var col_name = cljs.core.nth.call(null,vec__61608,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__61601.call(null,cljs.core.rest.call(null,s__61602__$2)));
}
} else
{return null;
}
break;
}
});})(i__61583,col,c__4281__auto__,size__4282__auto__,b__61584,s__61582__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
,null,null));
});})(i__61583,col,c__4281__auto__,size__4282__auto__,b__61584,s__61582__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__61654 = (i__61583 + (1));
i__61583 = G__61654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61584),iter__61581.call(null,cljs.core.chunk_rest.call(null,s__61582__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61584),null);
}
} else
{var col = cljs.core.first.call(null,s__61582__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__61582__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function iter__61609(s__61610){return (new cljs.core.LazySeq(null,((function (col,s__61582__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function (){var s__61610__$1 = s__61610;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__61610__$1);if(temp__4126__auto____$1)
{var s__61610__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__61610__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61610__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61612 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61611 = (0);while(true){
if((i__61611 < size__4282__auto__))
{var vec__61615 = cljs.core._nth.call(null,c__4281__auto__,i__61611);var col_key = cljs.core.nth.call(null,vec__61615,(0),null);var col_name = cljs.core.nth.call(null,vec__61615,(1),null);cljs.core.chunk_append.call(null,b__61612,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__61655 = (i__61611 + (1));
i__61611 = G__61655;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61612),iter__61609.call(null,cljs.core.chunk_rest.call(null,s__61610__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61612),null);
}
} else
{var vec__61616 = cljs.core.first.call(null,s__61610__$2);var col_key = cljs.core.nth.call(null,vec__61616,(0),null);var col_name = cljs.core.nth.call(null,vec__61616,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__61609.call(null,cljs.core.rest.call(null,s__61610__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__61582__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__61582__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__61581.call(null,cljs.core.rest.call(null,s__61582__$2)));
}
} else
{return null;
}
break;
}
});})(attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs61577))?sablono.interpreter.attributes.call(null,attrs61577):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61577))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61577)], null))));
})(),(function (){var attrs61578 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs61578))?sablono.interpreter.attributes.call(null,attrs61578):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61578))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61578)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61576),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs61579 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function iter__61617(s__61618){return (new cljs.core.LazySeq(null,((function (attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function (){var s__61618__$1 = s__61618;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__61618__$1);if(temp__4126__auto__)
{var s__61618__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__61618__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61618__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61620 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61619 = (0);while(true){
if((i__61619 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__61619);cljs.core.chunk_append.call(null,b__61620,(function (){var iter__4283__auto__ = ((function (i__61619,col,c__4281__auto__,size__4282__auto__,b__61620,s__61618__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function iter__61637(s__61638){return (new cljs.core.LazySeq(null,((function (i__61619,col,c__4281__auto__,size__4282__auto__,b__61620,s__61618__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function (){var s__61638__$1 = s__61638;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__61638__$1);if(temp__4126__auto____$1)
{var s__61638__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__61638__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__61638__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__61640 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__61639 = (0);while(true){
if((i__61639 < size__4282__auto____$1))
{var vec__61643 = cljs.core._nth.call(null,c__4281__auto____$1,i__61639);var col_key = cljs.core.nth.call(null,vec__61643,(0),null);var col_name = cljs.core.nth.call(null,vec__61643,(1),null);cljs.core.chunk_append.call(null,b__61640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__61656 = (i__61639 + (1));
i__61639 = G__61656;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61640),iter__61637.call(null,cljs.core.chunk_rest.call(null,s__61638__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61640),null);
}
} else
{var vec__61644 = cljs.core.first.call(null,s__61638__$2);var col_key = cljs.core.nth.call(null,vec__61644,(0),null);var col_name = cljs.core.nth.call(null,vec__61644,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__61637.call(null,cljs.core.rest.call(null,s__61638__$2)));
}
} else
{return null;
}
break;
}
});})(i__61619,col,c__4281__auto__,size__4282__auto__,b__61620,s__61618__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
,null,null));
});})(i__61619,col,c__4281__auto__,size__4282__auto__,b__61620,s__61618__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__61657 = (i__61619 + (1));
i__61619 = G__61657;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61620),iter__61617.call(null,cljs.core.chunk_rest.call(null,s__61618__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61620),null);
}
} else
{var col = cljs.core.first.call(null,s__61618__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__61618__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function iter__61645(s__61646){return (new cljs.core.LazySeq(null,((function (col,s__61618__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function (){var s__61646__$1 = s__61646;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__61646__$1);if(temp__4126__auto____$1)
{var s__61646__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__61646__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61646__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61648 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61647 = (0);while(true){
if((i__61647 < size__4282__auto__))
{var vec__61651 = cljs.core._nth.call(null,c__4281__auto__,i__61647);var col_key = cljs.core.nth.call(null,vec__61651,(0),null);var col_name = cljs.core.nth.call(null,vec__61651,(1),null);cljs.core.chunk_append.call(null,b__61648,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__61658 = (i__61647 + (1));
i__61647 = G__61658;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61648),iter__61645.call(null,cljs.core.chunk_rest.call(null,s__61646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61648),null);
}
} else
{var vec__61652 = cljs.core.first.call(null,s__61646__$2);var col_key = cljs.core.nth.call(null,vec__61652,(0),null);var col_name = cljs.core.nth.call(null,vec__61652,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__61645.call(null,cljs.core.rest.call(null,s__61646__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__61618__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__61618__$2,temp__4126__auto__,attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__61617.call(null,cljs.core.rest.call(null,s__61618__$2)));
}
} else
{return null;
}
break;
}
});})(attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs61579))?sablono.interpreter.attributes.call(null,attrs61579):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61579))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61579)], null))));
})(),(function (){var attrs61580 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs61576,map__61574,map__61574__$1,props,table_data,map__61575,map__61575__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs61580))?sablono.interpreter.attributes.call(null,attrs61580):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61580))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61580)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__61659,owner){var map__61674 = p__61659;var map__61674__$1 = ((cljs.core.seq_QMARK_.call(null,map__61674))?cljs.core.apply.call(null,cljs.core.hash_map,map__61674):map__61674);var props = map__61674__$1;var map__61675 = cljs.core.get.call(null,map__61674__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__61675__$1 = ((cljs.core.seq_QMARK_.call(null,map__61675))?cljs.core.apply.call(null,cljs.core.hash_map,map__61675):map__61675);var table_state = map__61675__$1;var table_data = cljs.core.get.call(null,map__61675__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__61676 = cljs.core.get.call(null,map__61675__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__61676__$1 = ((cljs.core.seq_QMARK_.call(null,map__61676))?cljs.core.apply.call(null,cljs.core.hash_map,map__61676):map__61676);var controls = map__61676__$1;var index = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__61677 = cljs.core.get.call(null,map__61674__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__61677__$1 = ((cljs.core.seq_QMARK_.call(null,map__61677))?cljs.core.apply.call(null,cljs.core.hash_map,map__61677):map__61677);var filter_by_view = cljs.core.get.call(null,map__61677__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__61677__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__61674__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t61678 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t61678 = (function (sort_spec,table_component,owner,filter_by_view,props,map__61674,table_data,index,filter_spec,map__61675,columns,table_state,controls,map__61677,bounds,size,p__61659,from,map__61676,meta61679){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__61674 = map__61674;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.map__61675 = map__61675;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__61677 = map__61677;
this.bounds = bounds;
this.size = size;
this.p__61659 = p__61659;
this.from = from;
this.map__61676 = map__61676;
this.meta61679 = meta61679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t61678.cljs$lang$type = true;
clustermap.components.table.t61678.cljs$lang$ctorStr = "clustermap.components.table/t61678";
clustermap.components.table.t61678.cljs$lang$ctorPrWriter = ((function (map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t61678");
});})(map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t61678.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t61678.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__61681,p__61682){var self__ = this;
var map__61683 = p__61681;var map__61683__$1 = ((cljs.core.seq_QMARK_.call(null,map__61683))?cljs.core.apply.call(null,cljs.core.hash_map,map__61683):map__61683);var next_props = map__61683__$1;var map__61684 = cljs.core.get.call(null,map__61683__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__61684__$1 = ((cljs.core.seq_QMARK_.call(null,map__61684))?cljs.core.apply.call(null,cljs.core.hash_map,map__61684):map__61684);var next_table_state = map__61684__$1;var next_table_data = cljs.core.get.call(null,map__61684__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__61685 = cljs.core.get.call(null,map__61684__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__61685__$1 = ((cljs.core.seq_QMARK_.call(null,map__61685))?cljs.core.apply.call(null,cljs.core.hash_map,map__61685):map__61685);var next_controls = map__61685__$1;var next_index = cljs.core.get.call(null,map__61685__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__61685__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__61685__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__61685__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__61685__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__61686 = cljs.core.get.call(null,map__61683__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__61686__$1 = ((cljs.core.seq_QMARK_.call(null,map__61686))?cljs.core.apply.call(null,cljs.core.hash_map,map__61686):map__61686);var next_filter_by_view = cljs.core.get.call(null,map__61686__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__61686__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__61683__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__61687 = p__61682;var map__61687__$1 = ((cljs.core.seq_QMARK_.call(null,map__61687))?cljs.core.apply.call(null,cljs.core.hash_map,map__61687):map__61687);var next_state = map__61687__$1;var table_data_resource = cljs.core.get.call(null,map__61687__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t61678.prototype.om$core$IRender$ = true;
clustermap.components.table.t61678.prototype.om$core$IRender$render$arity$1 = ((function (map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t61678.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t61678.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds))
);
});})(map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t61678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds){
return (function (_61680){var self__ = this;
var _61680__$1 = this;return self__.meta61679;
});})(map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t61678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds){
return (function (_61680,meta61679__$1){var self__ = this;
var _61680__$1 = this;return (new clustermap.components.table.t61678(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__61674,self__.table_data,self__.index,self__.filter_spec,self__.map__61675,self__.columns,self__.table_state,self__.controls,self__.map__61677,self__.bounds,self__.size,self__.p__61659,self__.from,self__.map__61676,meta61679__$1));
});})(map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t61678 = ((function (map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t61678(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__61674__$2,table_data__$1,index__$1,filter_spec__$1,map__61675__$2,columns__$1,table_state__$1,controls__$1,map__61677__$2,bounds__$1,size__$1,p__61659__$1,from__$1,map__61676__$2,meta61679){return (new clustermap.components.table.t61678(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__61674__$2,table_data__$1,index__$1,filter_spec__$1,map__61675__$2,columns__$1,table_state__$1,controls__$1,map__61677__$2,bounds__$1,size__$1,p__61659__$1,from__$1,map__61676__$2,meta61679));
});})(map__61674,map__61674__$1,props,map__61675,map__61675__$1,table_state,table_data,map__61676,map__61676__$1,controls,index,sort_spec,from,size,columns,map__61677,map__61677__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t61678(sort_spec,table_component,owner,filter_by_view,props,map__61674__$1,table_data,index,filter_spec,map__61675__$1,columns,table_state,controls,map__61677__$1,bounds,size,p__61659,from,map__61676__$1,null));
});

//# sourceMappingURL=table.js.map