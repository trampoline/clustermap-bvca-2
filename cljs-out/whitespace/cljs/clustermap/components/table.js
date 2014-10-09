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
var pred__17291 = cljs.core._EQ_;var expr__17292 = current_order_dir;if(cljs.core.truth_(pred__17291.call(null,"asc",expr__17292)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__17291.call(null,"desc",expr__17292)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__17294 = cljs.core._EQ_;var expr__17295 = current_order_dir;if(cljs.core.truth_(pred__17294.call(null,"asc",expr__17295)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__17297,owner,opts){var map__17314 = p__17297;var map__17314__$1 = ((cljs.core.seq_QMARK_.call(null,map__17314))?cljs.core.apply.call(null,cljs.core.hash_map,map__17314):map__17314);var controls = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17315 = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17315__$1 = ((cljs.core.seq_QMARK_.call(null,map__17315))?cljs.core.apply.call(null,cljs.core.hash_map,map__17315):map__17315);var table_data = map__17315__$1;var count = cljs.core.get.call(null,map__17315__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__17315__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__17315__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t17316 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17316 = (function (owner,paginate,table_data,map__17315,controls,map__17314,size,p__17297,from,count,opts,meta17317){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__17315 = map__17315;
this.controls = controls;
this.map__17314 = map__17314;
this.size = size;
this.p__17297 = p__17297;
this.from = from;
this.count = count;
this.opts = opts;
this.meta17317 = meta17317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17316.cljs$lang$type = true;
clustermap.components.table.t17316.cljs$lang$ctorStr = "clustermap.components.table/t17316";
clustermap.components.table.t17316.cljs$lang$ctorPrWriter = ((function (map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17316");
});})(map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size))
;
clustermap.components.table.t17316.prototype.om$core$IRender$ = true;
clustermap.components.table.t17316.prototype.om$core$IRender$render$arity$1 = ((function (map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs17319 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17319))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs17319)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17319))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs17320 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs17320))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs17320)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17320))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17320)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17319,this__9504__auto____$1,map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs17319,this__9504__auto____$1,map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17319),(function (){var attrs17321 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs17321))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs17321)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17321))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17321)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17319,this__9504__auto____$1,map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs17319,this__9504__auto____$1,map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size))
;
clustermap.components.table.t17316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size){
return (function (_17318){var self__ = this;
var _17318__$1 = this;return self__.meta17317;
});})(map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size))
;
clustermap.components.table.t17316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size){
return (function (_17318,meta17317__$1){var self__ = this;
var _17318__$1 = this;return (new clustermap.components.table.t17316(self__.owner,self__.paginate,self__.table_data,self__.map__17315,self__.controls,self__.map__17314,self__.size,self__.p__17297,self__.from,self__.count,self__.opts,meta17317__$1));
});})(map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t17316 = ((function (map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size){
return (function __GT_t17316(owner__$1,paginate__$1,table_data__$1,map__17315__$2,controls__$1,map__17314__$2,size__$1,p__17297__$1,from__$1,count__$1,opts__$1,meta17317){return (new clustermap.components.table.t17316(owner__$1,paginate__$1,table_data__$1,map__17315__$2,controls__$1,map__17314__$2,size__$1,p__17297__$1,from__$1,count__$1,opts__$1,meta17317));
});})(map__17314,map__17314__$1,controls,map__17315,map__17315__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t17316(owner,paginate,table_data,map__17315__$1,controls,map__17314__$1,size,p__17297,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__17330){var map__17371 = p__17330;var map__17371__$1 = ((cljs.core.seq_QMARK_.call(null,map__17371))?cljs.core.apply.call(null,cljs.core.hash_map,map__17371):map__17371);var record = cljs.core.get.call(null,map__17371__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__17371__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t17372 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17372 = (function (columns,record,map__17371,p__17330,render_table_row,meta17373){
this.columns = columns;
this.record = record;
this.map__17371 = map__17371;
this.p__17330 = p__17330;
this.render_table_row = render_table_row;
this.meta17373 = meta17373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17372.cljs$lang$type = true;
clustermap.components.table.t17372.cljs$lang$ctorStr = "clustermap.components.table/t17372";
clustermap.components.table.t17372.cljs$lang$ctorPrWriter = ((function (map__17371,map__17371__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17372");
});})(map__17371,map__17371__$1,record,columns))
;
clustermap.components.table.t17372.prototype.om$core$IRender$ = true;
clustermap.components.table.t17372.prototype.om$core$IRender$render$arity$1 = ((function (map__17371,map__17371__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__17371,map__17371__$1,record,columns){
return (function iter__17375(s__17376){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__17371,map__17371__$1,record,columns){
return (function (){var s__17376__$1 = s__17376;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17376__$1);if(temp__4126__auto__)
{var s__17376__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17376__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17376__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17378 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17377 = (0);while(true){
if((i__17377 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17377);cljs.core.chunk_append.call(null,b__17378,(function (){var iter__4283__auto__ = ((function (i__17377,col,c__4281__auto__,size__4282__auto__,b__17378,s__17376__$2,temp__4126__auto__,this__9504__auto____$1,map__17371,map__17371__$1,record,columns){
return (function iter__17395(s__17396){return (new cljs.core.LazySeq(null,((function (i__17377,col,c__4281__auto__,size__4282__auto__,b__17378,s__17376__$2,temp__4126__auto__,this__9504__auto____$1,map__17371,map__17371__$1,record,columns){
return (function (){var s__17396__$1 = s__17396;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17396__$1);if(temp__4126__auto____$1)
{var s__17396__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17396__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__17396__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__17398 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__17397 = (0);while(true){
if((i__17397 < size__4282__auto____$1))
{var vec__17401 = cljs.core._nth.call(null,c__4281__auto____$1,i__17397);var col_key = cljs.core.nth.call(null,vec__17401,(0),null);var col_name = cljs.core.nth.call(null,vec__17401,(1),null);cljs.core.chunk_append.call(null,b__17398,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__17411 = (i__17397 + (1));
i__17397 = G__17411;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17398),iter__17395.call(null,cljs.core.chunk_rest.call(null,s__17396__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17398),null);
}
} else
{var vec__17402 = cljs.core.first.call(null,s__17396__$2);var col_key = cljs.core.nth.call(null,vec__17402,(0),null);var col_name = cljs.core.nth.call(null,vec__17402,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__17395.call(null,cljs.core.rest.call(null,s__17396__$2)));
}
} else
{return null;
}
break;
}
});})(i__17377,col,c__4281__auto__,size__4282__auto__,b__17378,s__17376__$2,temp__4126__auto__,this__9504__auto____$1,map__17371,map__17371__$1,record,columns))
,null,null));
});})(i__17377,col,c__4281__auto__,size__4282__auto__,b__17378,s__17376__$2,temp__4126__auto__,this__9504__auto____$1,map__17371,map__17371__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__17412 = (i__17377 + (1));
i__17377 = G__17412;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17378),iter__17375.call(null,cljs.core.chunk_rest.call(null,s__17376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17378),null);
}
} else
{var col = cljs.core.first.call(null,s__17376__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__17376__$2,temp__4126__auto__,this__9504__auto____$1,map__17371,map__17371__$1,record,columns){
return (function iter__17403(s__17404){return (new cljs.core.LazySeq(null,((function (col,s__17376__$2,temp__4126__auto__,this__9504__auto____$1,map__17371,map__17371__$1,record,columns){
return (function (){var s__17404__$1 = s__17404;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17404__$1);if(temp__4126__auto____$1)
{var s__17404__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17404__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17404__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17406 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17405 = (0);while(true){
if((i__17405 < size__4282__auto__))
{var vec__17409 = cljs.core._nth.call(null,c__4281__auto__,i__17405);var col_key = cljs.core.nth.call(null,vec__17409,(0),null);var col_name = cljs.core.nth.call(null,vec__17409,(1),null);cljs.core.chunk_append.call(null,b__17406,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__17413 = (i__17405 + (1));
i__17405 = G__17413;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17406),iter__17403.call(null,cljs.core.chunk_rest.call(null,s__17404__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17406),null);
}
} else
{var vec__17410 = cljs.core.first.call(null,s__17404__$2);var col_key = cljs.core.nth.call(null,vec__17410,(0),null);var col_name = cljs.core.nth.call(null,vec__17410,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__17403.call(null,cljs.core.rest.call(null,s__17404__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__17376__$2,temp__4126__auto__,this__9504__auto____$1,map__17371,map__17371__$1,record,columns))
,null,null));
});})(col,s__17376__$2,temp__4126__auto__,this__9504__auto____$1,map__17371,map__17371__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__17375.call(null,cljs.core.rest.call(null,s__17376__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__17371,map__17371__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__17371,map__17371__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));return row;
})());
});})(map__17371,map__17371__$1,record,columns))
;
clustermap.components.table.t17372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17371,map__17371__$1,record,columns){
return (function (_17374){var self__ = this;
var _17374__$1 = this;return self__.meta17373;
});})(map__17371,map__17371__$1,record,columns))
;
clustermap.components.table.t17372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17371,map__17371__$1,record,columns){
return (function (_17374,meta17373__$1){var self__ = this;
var _17374__$1 = this;return (new clustermap.components.table.t17372(self__.columns,self__.record,self__.map__17371,self__.p__17330,self__.render_table_row,meta17373__$1));
});})(map__17371,map__17371__$1,record,columns))
;
clustermap.components.table.__GT_t17372 = ((function (map__17371,map__17371__$1,record,columns){
return (function __GT_t17372(columns__$1,record__$1,map__17371__$2,p__17330__$1,render_table_row__$1,meta17373){return (new clustermap.components.table.t17372(columns__$1,record__$1,map__17371__$2,p__17330__$1,render_table_row__$1,meta17373));
});})(map__17371,map__17371__$1,record,columns))
;
}
return (new clustermap.components.table.t17372(columns,record,map__17371__$1,p__17330,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__17414,owner,opts){var map__17494 = p__17414;var map__17494__$1 = ((cljs.core.seq_QMARK_.call(null,map__17494))?cljs.core.apply.call(null,cljs.core.hash_map,map__17494):map__17494);var props = map__17494__$1;var table_data = cljs.core.get.call(null,map__17494__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17495 = cljs.core.get.call(null,map__17494__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17495__$1 = ((cljs.core.seq_QMARK_.call(null,map__17495))?cljs.core.apply.call(null,cljs.core.hash_map,map__17495):map__17495);var controls = map__17495__$1;var columns = cljs.core.get.call(null,map__17495__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__17495__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var attrs17496 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17496))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs17496)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17496))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs17497 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function iter__17501(s__17502){return (new cljs.core.LazySeq(null,((function (attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function (){var s__17502__$1 = s__17502;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17502__$1);if(temp__4126__auto__)
{var s__17502__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17502__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17502__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17504 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17503 = (0);while(true){
if((i__17503 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17503);cljs.core.chunk_append.call(null,b__17504,(function (){var iter__4283__auto__ = ((function (i__17503,col,c__4281__auto__,size__4282__auto__,b__17504,s__17502__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function iter__17521(s__17522){return (new cljs.core.LazySeq(null,((function (i__17503,col,c__4281__auto__,size__4282__auto__,b__17504,s__17502__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function (){var s__17522__$1 = s__17522;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17522__$1);if(temp__4126__auto____$1)
{var s__17522__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17522__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__17522__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__17524 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__17523 = (0);while(true){
if((i__17523 < size__4282__auto____$1))
{var vec__17527 = cljs.core._nth.call(null,c__4281__auto____$1,i__17523);var col_key = cljs.core.nth.call(null,vec__17527,(0),null);var col_name = cljs.core.nth.call(null,vec__17527,(1),null);cljs.core.chunk_append.call(null,b__17524,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__17573 = (i__17523 + (1));
i__17523 = G__17573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17524),iter__17521.call(null,cljs.core.chunk_rest.call(null,s__17522__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17524),null);
}
} else
{var vec__17528 = cljs.core.first.call(null,s__17522__$2);var col_key = cljs.core.nth.call(null,vec__17528,(0),null);var col_name = cljs.core.nth.call(null,vec__17528,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__17521.call(null,cljs.core.rest.call(null,s__17522__$2)));
}
} else
{return null;
}
break;
}
});})(i__17503,col,c__4281__auto__,size__4282__auto__,b__17504,s__17502__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
,null,null));
});})(i__17503,col,c__4281__auto__,size__4282__auto__,b__17504,s__17502__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__17574 = (i__17503 + (1));
i__17503 = G__17574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17504),iter__17501.call(null,cljs.core.chunk_rest.call(null,s__17502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17504),null);
}
} else
{var col = cljs.core.first.call(null,s__17502__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__17502__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function iter__17529(s__17530){return (new cljs.core.LazySeq(null,((function (col,s__17502__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function (){var s__17530__$1 = s__17530;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17530__$1);if(temp__4126__auto____$1)
{var s__17530__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17530__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17530__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17532 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17531 = (0);while(true){
if((i__17531 < size__4282__auto__))
{var vec__17535 = cljs.core._nth.call(null,c__4281__auto__,i__17531);var col_key = cljs.core.nth.call(null,vec__17535,(0),null);var col_name = cljs.core.nth.call(null,vec__17535,(1),null);cljs.core.chunk_append.call(null,b__17532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__17575 = (i__17531 + (1));
i__17531 = G__17575;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17532),iter__17529.call(null,cljs.core.chunk_rest.call(null,s__17530__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17532),null);
}
} else
{var vec__17536 = cljs.core.first.call(null,s__17530__$2);var col_key = cljs.core.nth.call(null,vec__17536,(0),null);var col_name = cljs.core.nth.call(null,vec__17536,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__17529.call(null,cljs.core.rest.call(null,s__17530__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__17502__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__17502__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__17501.call(null,cljs.core.rest.call(null,s__17502__$2)));
}
} else
{return null;
}
break;
}
});})(attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs17497))?sablono.interpreter.attributes.call(null,attrs17497):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17497))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17497)], null))));
})(),(function (){var attrs17498 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs17498))?sablono.interpreter.attributes.call(null,attrs17498):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17498))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17498)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17496),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs17499 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function iter__17537(s__17538){return (new cljs.core.LazySeq(null,((function (attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function (){var s__17538__$1 = s__17538;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17538__$1);if(temp__4126__auto__)
{var s__17538__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17538__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17538__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17540 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17539 = (0);while(true){
if((i__17539 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17539);cljs.core.chunk_append.call(null,b__17540,(function (){var iter__4283__auto__ = ((function (i__17539,col,c__4281__auto__,size__4282__auto__,b__17540,s__17538__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function iter__17557(s__17558){return (new cljs.core.LazySeq(null,((function (i__17539,col,c__4281__auto__,size__4282__auto__,b__17540,s__17538__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function (){var s__17558__$1 = s__17558;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17558__$1);if(temp__4126__auto____$1)
{var s__17558__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17558__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__17558__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__17560 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__17559 = (0);while(true){
if((i__17559 < size__4282__auto____$1))
{var vec__17563 = cljs.core._nth.call(null,c__4281__auto____$1,i__17559);var col_key = cljs.core.nth.call(null,vec__17563,(0),null);var col_name = cljs.core.nth.call(null,vec__17563,(1),null);cljs.core.chunk_append.call(null,b__17560,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__17576 = (i__17559 + (1));
i__17559 = G__17576;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17560),iter__17557.call(null,cljs.core.chunk_rest.call(null,s__17558__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17560),null);
}
} else
{var vec__17564 = cljs.core.first.call(null,s__17558__$2);var col_key = cljs.core.nth.call(null,vec__17564,(0),null);var col_name = cljs.core.nth.call(null,vec__17564,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__17557.call(null,cljs.core.rest.call(null,s__17558__$2)));
}
} else
{return null;
}
break;
}
});})(i__17539,col,c__4281__auto__,size__4282__auto__,b__17540,s__17538__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
,null,null));
});})(i__17539,col,c__4281__auto__,size__4282__auto__,b__17540,s__17538__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__17577 = (i__17539 + (1));
i__17539 = G__17577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17540),iter__17537.call(null,cljs.core.chunk_rest.call(null,s__17538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17540),null);
}
} else
{var col = cljs.core.first.call(null,s__17538__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__17538__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function iter__17565(s__17566){return (new cljs.core.LazySeq(null,((function (col,s__17538__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function (){var s__17566__$1 = s__17566;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17566__$1);if(temp__4126__auto____$1)
{var s__17566__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17566__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17566__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17568 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17567 = (0);while(true){
if((i__17567 < size__4282__auto__))
{var vec__17571 = cljs.core._nth.call(null,c__4281__auto__,i__17567);var col_key = cljs.core.nth.call(null,vec__17571,(0),null);var col_name = cljs.core.nth.call(null,vec__17571,(1),null);cljs.core.chunk_append.call(null,b__17568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__17578 = (i__17567 + (1));
i__17567 = G__17578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17568),iter__17565.call(null,cljs.core.chunk_rest.call(null,s__17566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17568),null);
}
} else
{var vec__17572 = cljs.core.first.call(null,s__17566__$2);var col_key = cljs.core.nth.call(null,vec__17572,(0),null);var col_name = cljs.core.nth.call(null,vec__17572,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__17565.call(null,cljs.core.rest.call(null,s__17566__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__17538__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__17538__$2,temp__4126__auto__,attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__17537.call(null,cljs.core.rest.call(null,s__17538__$2)));
}
} else
{return null;
}
break;
}
});})(attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs17499))?sablono.interpreter.attributes.call(null,attrs17499):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17499))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17499)], null))));
})(),(function (){var attrs17500 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs17496,map__17494,map__17494__$1,props,table_data,map__17495,map__17495__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs17500))?sablono.interpreter.attributes.call(null,attrs17500):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17500))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17500)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__17579,owner){var map__17594 = p__17579;var map__17594__$1 = ((cljs.core.seq_QMARK_.call(null,map__17594))?cljs.core.apply.call(null,cljs.core.hash_map,map__17594):map__17594);var props = map__17594__$1;var map__17595 = cljs.core.get.call(null,map__17594__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__17595__$1 = ((cljs.core.seq_QMARK_.call(null,map__17595))?cljs.core.apply.call(null,cljs.core.hash_map,map__17595):map__17595);var table_state = map__17595__$1;var table_data = cljs.core.get.call(null,map__17595__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17596 = cljs.core.get.call(null,map__17595__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17596__$1 = ((cljs.core.seq_QMARK_.call(null,map__17596))?cljs.core.apply.call(null,cljs.core.hash_map,map__17596):map__17596);var controls = map__17596__$1;var index = cljs.core.get.call(null,map__17596__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__17596__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__17596__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__17596__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__17596__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__17597 = cljs.core.get.call(null,map__17594__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__17597__$1 = ((cljs.core.seq_QMARK_.call(null,map__17597))?cljs.core.apply.call(null,cljs.core.hash_map,map__17597):map__17597);var filter_by_view = cljs.core.get.call(null,map__17597__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__17597__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__17594__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t17598 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17598 = (function (map__17595,sort_spec,table_component,owner,p__17579,filter_by_view,props,table_data,index,filter_spec,columns,table_state,controls,map__17594,bounds,size,map__17597,from,map__17596,meta17599){
this.map__17595 = map__17595;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.p__17579 = p__17579;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__17594 = map__17594;
this.bounds = bounds;
this.size = size;
this.map__17597 = map__17597;
this.from = from;
this.map__17596 = map__17596;
this.meta17599 = meta17599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17598.cljs$lang$type = true;
clustermap.components.table.t17598.cljs$lang$ctorStr = "clustermap.components.table/t17598";
clustermap.components.table.t17598.cljs$lang$ctorPrWriter = ((function (map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17598");
});})(map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17598.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t17598.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__17601,p__17602){var self__ = this;
var map__17603 = p__17601;var map__17603__$1 = ((cljs.core.seq_QMARK_.call(null,map__17603))?cljs.core.apply.call(null,cljs.core.hash_map,map__17603):map__17603);var next_props = map__17603__$1;var map__17604 = cljs.core.get.call(null,map__17603__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__17604__$1 = ((cljs.core.seq_QMARK_.call(null,map__17604))?cljs.core.apply.call(null,cljs.core.hash_map,map__17604):map__17604);var next_table_state = map__17604__$1;var next_table_data = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17605 = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17605__$1 = ((cljs.core.seq_QMARK_.call(null,map__17605))?cljs.core.apply.call(null,cljs.core.hash_map,map__17605):map__17605);var next_controls = map__17605__$1;var next_index = cljs.core.get.call(null,map__17605__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__17605__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__17605__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__17605__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__17605__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__17606 = cljs.core.get.call(null,map__17603__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__17606__$1 = ((cljs.core.seq_QMARK_.call(null,map__17606))?cljs.core.apply.call(null,cljs.core.hash_map,map__17606):map__17606);var next_filter_by_view = cljs.core.get.call(null,map__17606__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__17606__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__17603__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__17607 = p__17602;var map__17607__$1 = ((cljs.core.seq_QMARK_.call(null,map__17607))?cljs.core.apply.call(null,cljs.core.hash_map,map__17607):map__17607);var next_state = map__17607__$1;var table_data_resource = cljs.core.get.call(null,map__17607__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17598.prototype.om$core$IRender$ = true;
clustermap.components.table.t17598.prototype.om$core$IRender$render$arity$1 = ((function (map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17598.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t17598.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds))
);
});})(map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds){
return (function (_17600){var self__ = this;
var _17600__$1 = this;return self__.meta17599;
});})(map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds){
return (function (_17600,meta17599__$1){var self__ = this;
var _17600__$1 = this;return (new clustermap.components.table.t17598(self__.map__17595,self__.sort_spec,self__.table_component,self__.owner,self__.p__17579,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__17594,self__.bounds,self__.size,self__.map__17597,self__.from,self__.map__17596,meta17599__$1));
});})(map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t17598 = ((function (map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t17598(map__17595__$2,sort_spec__$1,table_component__$1,owner__$1,p__17579__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__17594__$2,bounds__$1,size__$1,map__17597__$2,from__$1,map__17596__$2,meta17599){return (new clustermap.components.table.t17598(map__17595__$2,sort_spec__$1,table_component__$1,owner__$1,p__17579__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__17594__$2,bounds__$1,size__$1,map__17597__$2,from__$1,map__17596__$2,meta17599));
});})(map__17594,map__17594__$1,props,map__17595,map__17595__$1,table_state,table_data,map__17596,map__17596__$1,controls,index,sort_spec,from,size,columns,map__17597,map__17597__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t17598(map__17595__$1,sort_spec,table_component,owner,p__17579,filter_by_view,props,table_data,index,filter_spec,columns,table_state,controls,map__17594__$1,bounds,size,map__17597__$1,from,map__17596__$1,null));
});
