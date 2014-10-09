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
var pred__31994 = cljs.core._EQ_;var expr__31995 = current_order_dir;if(cljs.core.truth_(pred__31994.call(null,"asc",expr__31995)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__31994.call(null,"desc",expr__31995)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__31997 = cljs.core._EQ_;var expr__31998 = current_order_dir;if(cljs.core.truth_(pred__31997.call(null,"asc",expr__31998)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__32000,owner,opts){var map__32017 = p__32000;var map__32017__$1 = ((cljs.core.seq_QMARK_.call(null,map__32017))?cljs.core.apply.call(null,cljs.core.hash_map,map__32017):map__32017);var controls = cljs.core.get.call(null,map__32017__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32018 = cljs.core.get.call(null,map__32017__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32018__$1 = ((cljs.core.seq_QMARK_.call(null,map__32018))?cljs.core.apply.call(null,cljs.core.hash_map,map__32018):map__32018);var table_data = map__32018__$1;var count = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t32019 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32019 = (function (owner,map__32017,paginate,table_data,map__32018,controls,p__32000,size,from,count,opts,meta32020){
this.owner = owner;
this.map__32017 = map__32017;
this.paginate = paginate;
this.table_data = table_data;
this.map__32018 = map__32018;
this.controls = controls;
this.p__32000 = p__32000;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta32020 = meta32020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32019.cljs$lang$type = true;
clustermap.components.table.t32019.cljs$lang$ctorStr = "clustermap.components.table/t32019";
clustermap.components.table.t32019.cljs$lang$ctorPrWriter = ((function (map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32019");
});})(map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size))
;
clustermap.components.table.t32019.prototype.om$core$IRender$ = true;
clustermap.components.table.t32019.prototype.om$core$IRender$render$arity$1 = ((function (map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs32022 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32022))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs32022)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32022))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs32023 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32023))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs32023)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32023))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32023)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs32022,this__9504__auto____$1,map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs32022,this__9504__auto____$1,map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32022),(function (){var attrs32024 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32024))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs32024)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32024))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32024)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs32022,this__9504__auto____$1,map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs32022,this__9504__auto____$1,map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size))
;
clustermap.components.table.t32019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size){
return (function (_32021){var self__ = this;
var _32021__$1 = this;return self__.meta32020;
});})(map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size))
;
clustermap.components.table.t32019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size){
return (function (_32021,meta32020__$1){var self__ = this;
var _32021__$1 = this;return (new clustermap.components.table.t32019(self__.owner,self__.map__32017,self__.paginate,self__.table_data,self__.map__32018,self__.controls,self__.p__32000,self__.size,self__.from,self__.count,self__.opts,meta32020__$1));
});})(map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t32019 = ((function (map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size){
return (function __GT_t32019(owner__$1,map__32017__$2,paginate__$1,table_data__$1,map__32018__$2,controls__$1,p__32000__$1,size__$1,from__$1,count__$1,opts__$1,meta32020){return (new clustermap.components.table.t32019(owner__$1,map__32017__$2,paginate__$1,table_data__$1,map__32018__$2,controls__$1,p__32000__$1,size__$1,from__$1,count__$1,opts__$1,meta32020));
});})(map__32017,map__32017__$1,controls,map__32018,map__32018__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t32019(owner,map__32017__$1,paginate,table_data,map__32018__$1,controls,p__32000,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__32033){var map__32074 = p__32033;var map__32074__$1 = ((cljs.core.seq_QMARK_.call(null,map__32074))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);var record = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t32075 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32075 = (function (columns,record,map__32074,p__32033,render_table_row,meta32076){
this.columns = columns;
this.record = record;
this.map__32074 = map__32074;
this.p__32033 = p__32033;
this.render_table_row = render_table_row;
this.meta32076 = meta32076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32075.cljs$lang$type = true;
clustermap.components.table.t32075.cljs$lang$ctorStr = "clustermap.components.table/t32075";
clustermap.components.table.t32075.cljs$lang$ctorPrWriter = ((function (map__32074,map__32074__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32075");
});})(map__32074,map__32074__$1,record,columns))
;
clustermap.components.table.t32075.prototype.om$core$IRender$ = true;
clustermap.components.table.t32075.prototype.om$core$IRender$render$arity$1 = ((function (map__32074,map__32074__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__32074,map__32074__$1,record,columns){
return (function iter__32078(s__32079){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__32074,map__32074__$1,record,columns){
return (function (){var s__32079__$1 = s__32079;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32079__$1);if(temp__4126__auto__)
{var s__32079__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32079__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32079__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32081 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32080 = (0);while(true){
if((i__32080 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32080);cljs.core.chunk_append.call(null,b__32081,(function (){var iter__4283__auto__ = ((function (i__32080,col,c__4281__auto__,size__4282__auto__,b__32081,s__32079__$2,temp__4126__auto__,this__9504__auto____$1,map__32074,map__32074__$1,record,columns){
return (function iter__32098(s__32099){return (new cljs.core.LazySeq(null,((function (i__32080,col,c__4281__auto__,size__4282__auto__,b__32081,s__32079__$2,temp__4126__auto__,this__9504__auto____$1,map__32074,map__32074__$1,record,columns){
return (function (){var s__32099__$1 = s__32099;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32099__$1);if(temp__4126__auto____$1)
{var s__32099__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32099__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__32099__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__32101 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__32100 = (0);while(true){
if((i__32100 < size__4282__auto____$1))
{var vec__32104 = cljs.core._nth.call(null,c__4281__auto____$1,i__32100);var col_key = cljs.core.nth.call(null,vec__32104,(0),null);var col_name = cljs.core.nth.call(null,vec__32104,(1),null);cljs.core.chunk_append.call(null,b__32101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__32114 = (i__32100 + (1));
i__32100 = G__32114;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32101),iter__32098.call(null,cljs.core.chunk_rest.call(null,s__32099__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32101),null);
}
} else
{var vec__32105 = cljs.core.first.call(null,s__32099__$2);var col_key = cljs.core.nth.call(null,vec__32105,(0),null);var col_name = cljs.core.nth.call(null,vec__32105,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__32098.call(null,cljs.core.rest.call(null,s__32099__$2)));
}
} else
{return null;
}
break;
}
});})(i__32080,col,c__4281__auto__,size__4282__auto__,b__32081,s__32079__$2,temp__4126__auto__,this__9504__auto____$1,map__32074,map__32074__$1,record,columns))
,null,null));
});})(i__32080,col,c__4281__auto__,size__4282__auto__,b__32081,s__32079__$2,temp__4126__auto__,this__9504__auto____$1,map__32074,map__32074__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__32115 = (i__32080 + (1));
i__32080 = G__32115;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32081),iter__32078.call(null,cljs.core.chunk_rest.call(null,s__32079__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32081),null);
}
} else
{var col = cljs.core.first.call(null,s__32079__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__32079__$2,temp__4126__auto__,this__9504__auto____$1,map__32074,map__32074__$1,record,columns){
return (function iter__32106(s__32107){return (new cljs.core.LazySeq(null,((function (col,s__32079__$2,temp__4126__auto__,this__9504__auto____$1,map__32074,map__32074__$1,record,columns){
return (function (){var s__32107__$1 = s__32107;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32107__$1);if(temp__4126__auto____$1)
{var s__32107__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32107__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32107__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32109 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32108 = (0);while(true){
if((i__32108 < size__4282__auto__))
{var vec__32112 = cljs.core._nth.call(null,c__4281__auto__,i__32108);var col_key = cljs.core.nth.call(null,vec__32112,(0),null);var col_name = cljs.core.nth.call(null,vec__32112,(1),null);cljs.core.chunk_append.call(null,b__32109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__32116 = (i__32108 + (1));
i__32108 = G__32116;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32109),iter__32106.call(null,cljs.core.chunk_rest.call(null,s__32107__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32109),null);
}
} else
{var vec__32113 = cljs.core.first.call(null,s__32107__$2);var col_key = cljs.core.nth.call(null,vec__32113,(0),null);var col_name = cljs.core.nth.call(null,vec__32113,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__32106.call(null,cljs.core.rest.call(null,s__32107__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__32079__$2,temp__4126__auto__,this__9504__auto____$1,map__32074,map__32074__$1,record,columns))
,null,null));
});})(col,s__32079__$2,temp__4126__auto__,this__9504__auto____$1,map__32074,map__32074__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__32078.call(null,cljs.core.rest.call(null,s__32079__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__32074,map__32074__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__32074,map__32074__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));return row;
})());
});})(map__32074,map__32074__$1,record,columns))
;
clustermap.components.table.t32075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32074,map__32074__$1,record,columns){
return (function (_32077){var self__ = this;
var _32077__$1 = this;return self__.meta32076;
});})(map__32074,map__32074__$1,record,columns))
;
clustermap.components.table.t32075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32074,map__32074__$1,record,columns){
return (function (_32077,meta32076__$1){var self__ = this;
var _32077__$1 = this;return (new clustermap.components.table.t32075(self__.columns,self__.record,self__.map__32074,self__.p__32033,self__.render_table_row,meta32076__$1));
});})(map__32074,map__32074__$1,record,columns))
;
clustermap.components.table.__GT_t32075 = ((function (map__32074,map__32074__$1,record,columns){
return (function __GT_t32075(columns__$1,record__$1,map__32074__$2,p__32033__$1,render_table_row__$1,meta32076){return (new clustermap.components.table.t32075(columns__$1,record__$1,map__32074__$2,p__32033__$1,render_table_row__$1,meta32076));
});})(map__32074,map__32074__$1,record,columns))
;
}
return (new clustermap.components.table.t32075(columns,record,map__32074__$1,p__32033,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__32117,owner,opts){var map__32197 = p__32117;var map__32197__$1 = ((cljs.core.seq_QMARK_.call(null,map__32197))?cljs.core.apply.call(null,cljs.core.hash_map,map__32197):map__32197);var props = map__32197__$1;var table_data = cljs.core.get.call(null,map__32197__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32198 = cljs.core.get.call(null,map__32197__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32198__$1 = ((cljs.core.seq_QMARK_.call(null,map__32198))?cljs.core.apply.call(null,cljs.core.hash_map,map__32198):map__32198);var controls = map__32198__$1;var columns = cljs.core.get.call(null,map__32198__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__32198__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var attrs32199 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32199))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs32199)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32199))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32200 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function iter__32204(s__32205){return (new cljs.core.LazySeq(null,((function (attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function (){var s__32205__$1 = s__32205;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32205__$1);if(temp__4126__auto__)
{var s__32205__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32205__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32205__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32207 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32206 = (0);while(true){
if((i__32206 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32206);cljs.core.chunk_append.call(null,b__32207,(function (){var iter__4283__auto__ = ((function (i__32206,col,c__4281__auto__,size__4282__auto__,b__32207,s__32205__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function iter__32224(s__32225){return (new cljs.core.LazySeq(null,((function (i__32206,col,c__4281__auto__,size__4282__auto__,b__32207,s__32205__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function (){var s__32225__$1 = s__32225;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32225__$1);if(temp__4126__auto____$1)
{var s__32225__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32225__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__32225__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__32227 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__32226 = (0);while(true){
if((i__32226 < size__4282__auto____$1))
{var vec__32230 = cljs.core._nth.call(null,c__4281__auto____$1,i__32226);var col_key = cljs.core.nth.call(null,vec__32230,(0),null);var col_name = cljs.core.nth.call(null,vec__32230,(1),null);cljs.core.chunk_append.call(null,b__32227,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__32276 = (i__32226 + (1));
i__32226 = G__32276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32227),iter__32224.call(null,cljs.core.chunk_rest.call(null,s__32225__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32227),null);
}
} else
{var vec__32231 = cljs.core.first.call(null,s__32225__$2);var col_key = cljs.core.nth.call(null,vec__32231,(0),null);var col_name = cljs.core.nth.call(null,vec__32231,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__32224.call(null,cljs.core.rest.call(null,s__32225__$2)));
}
} else
{return null;
}
break;
}
});})(i__32206,col,c__4281__auto__,size__4282__auto__,b__32207,s__32205__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
,null,null));
});})(i__32206,col,c__4281__auto__,size__4282__auto__,b__32207,s__32205__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__32277 = (i__32206 + (1));
i__32206 = G__32277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32207),iter__32204.call(null,cljs.core.chunk_rest.call(null,s__32205__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32207),null);
}
} else
{var col = cljs.core.first.call(null,s__32205__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__32205__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function iter__32232(s__32233){return (new cljs.core.LazySeq(null,((function (col,s__32205__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function (){var s__32233__$1 = s__32233;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32233__$1);if(temp__4126__auto____$1)
{var s__32233__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32233__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32233__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32235 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32234 = (0);while(true){
if((i__32234 < size__4282__auto__))
{var vec__32238 = cljs.core._nth.call(null,c__4281__auto__,i__32234);var col_key = cljs.core.nth.call(null,vec__32238,(0),null);var col_name = cljs.core.nth.call(null,vec__32238,(1),null);cljs.core.chunk_append.call(null,b__32235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__32278 = (i__32234 + (1));
i__32234 = G__32278;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32235),iter__32232.call(null,cljs.core.chunk_rest.call(null,s__32233__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32235),null);
}
} else
{var vec__32239 = cljs.core.first.call(null,s__32233__$2);var col_key = cljs.core.nth.call(null,vec__32239,(0),null);var col_name = cljs.core.nth.call(null,vec__32239,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__32232.call(null,cljs.core.rest.call(null,s__32233__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__32205__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__32205__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__32204.call(null,cljs.core.rest.call(null,s__32205__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32200))?sablono.interpreter.attributes.call(null,attrs32200):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32200))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32200)], null))));
})(),(function (){var attrs32201 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32201))?sablono.interpreter.attributes.call(null,attrs32201):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32201))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32201)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32199),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32202 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function iter__32240(s__32241){return (new cljs.core.LazySeq(null,((function (attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function (){var s__32241__$1 = s__32241;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32241__$1);if(temp__4126__auto__)
{var s__32241__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32241__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32241__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32243 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32242 = (0);while(true){
if((i__32242 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32242);cljs.core.chunk_append.call(null,b__32243,(function (){var iter__4283__auto__ = ((function (i__32242,col,c__4281__auto__,size__4282__auto__,b__32243,s__32241__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function iter__32260(s__32261){return (new cljs.core.LazySeq(null,((function (i__32242,col,c__4281__auto__,size__4282__auto__,b__32243,s__32241__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function (){var s__32261__$1 = s__32261;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32261__$1);if(temp__4126__auto____$1)
{var s__32261__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32261__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__32261__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__32263 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__32262 = (0);while(true){
if((i__32262 < size__4282__auto____$1))
{var vec__32266 = cljs.core._nth.call(null,c__4281__auto____$1,i__32262);var col_key = cljs.core.nth.call(null,vec__32266,(0),null);var col_name = cljs.core.nth.call(null,vec__32266,(1),null);cljs.core.chunk_append.call(null,b__32263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__32279 = (i__32262 + (1));
i__32262 = G__32279;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32263),iter__32260.call(null,cljs.core.chunk_rest.call(null,s__32261__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32263),null);
}
} else
{var vec__32267 = cljs.core.first.call(null,s__32261__$2);var col_key = cljs.core.nth.call(null,vec__32267,(0),null);var col_name = cljs.core.nth.call(null,vec__32267,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__32260.call(null,cljs.core.rest.call(null,s__32261__$2)));
}
} else
{return null;
}
break;
}
});})(i__32242,col,c__4281__auto__,size__4282__auto__,b__32243,s__32241__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
,null,null));
});})(i__32242,col,c__4281__auto__,size__4282__auto__,b__32243,s__32241__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__32280 = (i__32242 + (1));
i__32242 = G__32280;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32243),iter__32240.call(null,cljs.core.chunk_rest.call(null,s__32241__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32243),null);
}
} else
{var col = cljs.core.first.call(null,s__32241__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__32241__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function iter__32268(s__32269){return (new cljs.core.LazySeq(null,((function (col,s__32241__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function (){var s__32269__$1 = s__32269;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32269__$1);if(temp__4126__auto____$1)
{var s__32269__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32269__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32269__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32271 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32270 = (0);while(true){
if((i__32270 < size__4282__auto__))
{var vec__32274 = cljs.core._nth.call(null,c__4281__auto__,i__32270);var col_key = cljs.core.nth.call(null,vec__32274,(0),null);var col_name = cljs.core.nth.call(null,vec__32274,(1),null);cljs.core.chunk_append.call(null,b__32271,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__32281 = (i__32270 + (1));
i__32270 = G__32281;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32271),iter__32268.call(null,cljs.core.chunk_rest.call(null,s__32269__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32271),null);
}
} else
{var vec__32275 = cljs.core.first.call(null,s__32269__$2);var col_key = cljs.core.nth.call(null,vec__32275,(0),null);var col_name = cljs.core.nth.call(null,vec__32275,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__32268.call(null,cljs.core.rest.call(null,s__32269__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__32241__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__32241__$2,temp__4126__auto__,attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__32240.call(null,cljs.core.rest.call(null,s__32241__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32202))?sablono.interpreter.attributes.call(null,attrs32202):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32202))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32202)], null))));
})(),(function (){var attrs32203 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32199,map__32197,map__32197__$1,props,table_data,map__32198,map__32198__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32203))?sablono.interpreter.attributes.call(null,attrs32203):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32203))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32203)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__32282,owner){var map__32297 = p__32282;var map__32297__$1 = ((cljs.core.seq_QMARK_.call(null,map__32297))?cljs.core.apply.call(null,cljs.core.hash_map,map__32297):map__32297);var props = map__32297__$1;var map__32298 = cljs.core.get.call(null,map__32297__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32298__$1 = ((cljs.core.seq_QMARK_.call(null,map__32298))?cljs.core.apply.call(null,cljs.core.hash_map,map__32298):map__32298);var table_state = map__32298__$1;var table_data = cljs.core.get.call(null,map__32298__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32299 = cljs.core.get.call(null,map__32298__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32299__$1 = ((cljs.core.seq_QMARK_.call(null,map__32299))?cljs.core.apply.call(null,cljs.core.hash_map,map__32299):map__32299);var controls = map__32299__$1;var index = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__32300 = cljs.core.get.call(null,map__32297__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32300__$1 = ((cljs.core.seq_QMARK_.call(null,map__32300))?cljs.core.apply.call(null,cljs.core.hash_map,map__32300):map__32300);var filter_by_view = cljs.core.get.call(null,map__32300__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__32300__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__32297__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t32301 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32301 = (function (sort_spec,table_component,owner,map__32297,filter_by_view,props,table_data,index,filter_spec,columns,map__32299,table_state,controls,map__32300,p__32282,bounds,size,map__32298,from,meta32302){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.map__32297 = map__32297;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__32299 = map__32299;
this.table_state = table_state;
this.controls = controls;
this.map__32300 = map__32300;
this.p__32282 = p__32282;
this.bounds = bounds;
this.size = size;
this.map__32298 = map__32298;
this.from = from;
this.meta32302 = meta32302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32301.cljs$lang$type = true;
clustermap.components.table.t32301.cljs$lang$ctorStr = "clustermap.components.table/t32301";
clustermap.components.table.t32301.cljs$lang$ctorPrWriter = ((function (map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32301");
});})(map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32301.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t32301.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__32304,p__32305){var self__ = this;
var map__32306 = p__32304;var map__32306__$1 = ((cljs.core.seq_QMARK_.call(null,map__32306))?cljs.core.apply.call(null,cljs.core.hash_map,map__32306):map__32306);var next_props = map__32306__$1;var map__32307 = cljs.core.get.call(null,map__32306__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32307__$1 = ((cljs.core.seq_QMARK_.call(null,map__32307))?cljs.core.apply.call(null,cljs.core.hash_map,map__32307):map__32307);var next_table_state = map__32307__$1;var next_table_data = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32308 = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32308__$1 = ((cljs.core.seq_QMARK_.call(null,map__32308))?cljs.core.apply.call(null,cljs.core.hash_map,map__32308):map__32308);var next_controls = map__32308__$1;var next_index = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__32309 = cljs.core.get.call(null,map__32306__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32309__$1 = ((cljs.core.seq_QMARK_.call(null,map__32309))?cljs.core.apply.call(null,cljs.core.hash_map,map__32309):map__32309);var next_filter_by_view = cljs.core.get.call(null,map__32309__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__32309__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__32306__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__32310 = p__32305;var map__32310__$1 = ((cljs.core.seq_QMARK_.call(null,map__32310))?cljs.core.apply.call(null,cljs.core.hash_map,map__32310):map__32310);var next_state = map__32310__$1;var table_data_resource = cljs.core.get.call(null,map__32310__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32301.prototype.om$core$IRender$ = true;
clustermap.components.table.t32301.prototype.om$core$IRender$render$arity$1 = ((function (map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32301.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t32301.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds))
);
});})(map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds){
return (function (_32303){var self__ = this;
var _32303__$1 = this;return self__.meta32302;
});})(map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds){
return (function (_32303,meta32302__$1){var self__ = this;
var _32303__$1 = this;return (new clustermap.components.table.t32301(self__.sort_spec,self__.table_component,self__.owner,self__.map__32297,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.map__32299,self__.table_state,self__.controls,self__.map__32300,self__.p__32282,self__.bounds,self__.size,self__.map__32298,self__.from,meta32302__$1));
});})(map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t32301 = ((function (map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t32301(sort_spec__$1,table_component__$1,owner__$1,map__32297__$2,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__32299__$2,table_state__$1,controls__$1,map__32300__$2,p__32282__$1,bounds__$1,size__$1,map__32298__$2,from__$1,meta32302){return (new clustermap.components.table.t32301(sort_spec__$1,table_component__$1,owner__$1,map__32297__$2,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__32299__$2,table_state__$1,controls__$1,map__32300__$2,p__32282__$1,bounds__$1,size__$1,map__32298__$2,from__$1,meta32302));
});})(map__32297,map__32297__$1,props,map__32298,map__32298__$1,table_state,table_data,map__32299,map__32299__$1,controls,index,sort_spec,from,size,columns,map__32300,map__32300__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t32301(sort_spec,table_component,owner,map__32297__$1,filter_by_view,props,table_data,index,filter_spec,columns,map__32299__$1,table_state,controls,map__32300__$1,p__32282,bounds,size,map__32298__$1,from,null));
});
