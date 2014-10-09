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
clustermap.components.table.order_col = (function order_col(controls,p__32316,col_key,col_name){var map__32326 = p__32316;var map__32326__$1 = ((cljs.core.seq_QMARK_.call(null,map__32326))?cljs.core.apply.call(null,cljs.core.hash_map,map__32326):map__32326);var table_data = map__32326__$1;var current_sort_spec = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__32327 = current_sort_spec__$1;var G__32327__$1 = (((G__32327 == null))?null:cljs.core.keys.call(null,G__32327));var G__32327__$2 = (((G__32327__$1 == null))?null:cljs.core.first.call(null,G__32327__$1));return G__32327__$2;
})();var current_sort_dir = (function (){var G__32328 = current_sort_spec__$1;var G__32328__$1 = (((G__32328 == null))?null:current_sort_key.call(null,G__32328));var G__32328__$2 = (((G__32328__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__32328__$1));return G__32328__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__32326,map__32326__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__32329 = cljs.core._EQ_;var expr__32330 = current_sort_dir;if(cljs.core.truth_(pred__32329.call(null,"asc",expr__32330)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__32329.call(null,"desc",expr__32330)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__32326,map__32326__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__32332 = cljs.core._EQ_;var expr__32333 = current_sort_dir;if(cljs.core.truth_(pred__32332.call(null,"asc",expr__32333)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__32335,owner,opts){var map__32352 = p__32335;var map__32352__$1 = ((cljs.core.seq_QMARK_.call(null,map__32352))?cljs.core.apply.call(null,cljs.core.hash_map,map__32352):map__32352);var controls = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32353 = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32353__$1 = ((cljs.core.seq_QMARK_.call(null,map__32353))?cljs.core.apply.call(null,cljs.core.hash_map,map__32353):map__32353);var table_data = map__32353__$1;var count = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t32354 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32354 = (function (map__32353,owner,paginate,table_data,p__32335,controls,size,from,count,opts,map__32352,meta32355){
this.map__32353 = map__32353;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.p__32335 = p__32335;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.map__32352 = map__32352;
this.meta32355 = meta32355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32354.cljs$lang$type = true;
clustermap.components.table.t32354.cljs$lang$ctorStr = "clustermap.components.table/t32354";
clustermap.components.table.t32354.cljs$lang$ctorPrWriter = ((function (map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32354");
});})(map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size))
;
clustermap.components.table.t32354.prototype.om$core$IRender$ = true;
clustermap.components.table.t32354.prototype.om$core$IRender$render$arity$1 = ((function (map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs32357 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32357))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs32357)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32357))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs32358 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32358))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs32358)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32358))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32358)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs32357,this__9504__auto____$1,map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs32357,this__9504__auto____$1,map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32357),(function (){var attrs32359 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32359))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs32359)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32359))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32359)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs32357,this__9504__auto____$1,map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs32357,this__9504__auto____$1,map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size))
;
clustermap.components.table.t32354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size){
return (function (_32356){var self__ = this;
var _32356__$1 = this;return self__.meta32355;
});})(map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size))
;
clustermap.components.table.t32354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size){
return (function (_32356,meta32355__$1){var self__ = this;
var _32356__$1 = this;return (new clustermap.components.table.t32354(self__.map__32353,self__.owner,self__.paginate,self__.table_data,self__.p__32335,self__.controls,self__.size,self__.from,self__.count,self__.opts,self__.map__32352,meta32355__$1));
});})(map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t32354 = ((function (map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size){
return (function __GT_t32354(map__32353__$2,owner__$1,paginate__$1,table_data__$1,p__32335__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__32352__$2,meta32355){return (new clustermap.components.table.t32354(map__32353__$2,owner__$1,paginate__$1,table_data__$1,p__32335__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__32352__$2,meta32355));
});})(map__32352,map__32352__$1,controls,map__32353,map__32353__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t32354(map__32353__$1,owner,paginate,table_data,p__32335,controls,size,from,count,opts,map__32352__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__32368){var map__32381 = p__32368;var map__32381__$1 = ((cljs.core.seq_QMARK_.call(null,map__32381))?cljs.core.apply.call(null,cljs.core.hash_map,map__32381):map__32381);var record = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t32382 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32382 = (function (columns,record,map__32381,p__32368,render_table_row,meta32383){
this.columns = columns;
this.record = record;
this.map__32381 = map__32381;
this.p__32368 = p__32368;
this.render_table_row = render_table_row;
this.meta32383 = meta32383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32382.cljs$lang$type = true;
clustermap.components.table.t32382.cljs$lang$ctorStr = "clustermap.components.table/t32382";
clustermap.components.table.t32382.cljs$lang$ctorPrWriter = ((function (map__32381,map__32381__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32382");
});})(map__32381,map__32381__$1,record,columns))
;
clustermap.components.table.t32382.prototype.om$core$IRender$ = true;
clustermap.components.table.t32382.prototype.om$core$IRender$render$arity$1 = ((function (map__32381,map__32381__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__32381,map__32381__$1,record,columns){
return (function iter__32385(s__32386){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__32381,map__32381__$1,record,columns){
return (function (){var s__32386__$1 = s__32386;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32386__$1);if(temp__4126__auto__)
{var s__32386__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32386__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32386__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32388 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32387 = (0);while(true){
if((i__32387 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32387);cljs.core.chunk_append.call(null,b__32388,(function (){var vec__32391 = col;var col_key = cljs.core.nth.call(null,vec__32391,(0),null);var col_name = cljs.core.nth.call(null,vec__32391,(1),null);var formatter = cljs.core.nth.call(null,vec__32391,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__32393 = (i__32387 + (1));
i__32387 = G__32393;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32388),iter__32385.call(null,cljs.core.chunk_rest.call(null,s__32386__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32388),null);
}
} else
{var col = cljs.core.first.call(null,s__32386__$2);return cljs.core.cons.call(null,(function (){var vec__32392 = col;var col_key = cljs.core.nth.call(null,vec__32392,(0),null);var col_name = cljs.core.nth.call(null,vec__32392,(1),null);var formatter = cljs.core.nth.call(null,vec__32392,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__32385.call(null,cljs.core.rest.call(null,s__32386__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__32381,map__32381__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__32381,map__32381__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__32381,map__32381__$1,record,columns))
;
clustermap.components.table.t32382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32381,map__32381__$1,record,columns){
return (function (_32384){var self__ = this;
var _32384__$1 = this;return self__.meta32383;
});})(map__32381,map__32381__$1,record,columns))
;
clustermap.components.table.t32382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32381,map__32381__$1,record,columns){
return (function (_32384,meta32383__$1){var self__ = this;
var _32384__$1 = this;return (new clustermap.components.table.t32382(self__.columns,self__.record,self__.map__32381,self__.p__32368,self__.render_table_row,meta32383__$1));
});})(map__32381,map__32381__$1,record,columns))
;
clustermap.components.table.__GT_t32382 = ((function (map__32381,map__32381__$1,record,columns){
return (function __GT_t32382(columns__$1,record__$1,map__32381__$2,p__32368__$1,render_table_row__$1,meta32383){return (new clustermap.components.table.t32382(columns__$1,record__$1,map__32381__$2,p__32368__$1,render_table_row__$1,meta32383));
});})(map__32381,map__32381__$1,record,columns))
;
}
return (new clustermap.components.table.t32382(columns,record,map__32381__$1,p__32368,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__32394,owner,opts){var map__32418 = p__32394;var map__32418__$1 = ((cljs.core.seq_QMARK_.call(null,map__32418))?cljs.core.apply.call(null,cljs.core.hash_map,map__32418):map__32418);var props = map__32418__$1;var table_data = cljs.core.get.call(null,map__32418__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32419 = cljs.core.get.call(null,map__32418__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32419__$1 = ((cljs.core.seq_QMARK_.call(null,map__32419))?cljs.core.apply.call(null,cljs.core.hash_map,map__32419):map__32419);var controls = map__32419__$1;var columns = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs32420 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32420))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs32420)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32420))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32421 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view){
return (function iter__32425(s__32426){return (new cljs.core.LazySeq(null,((function (attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view){
return (function (){var s__32426__$1 = s__32426;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32426__$1);if(temp__4126__auto__)
{var s__32426__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32426__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32426__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32428 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32427 = (0);while(true){
if((i__32427 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32427);cljs.core.chunk_append.call(null,b__32428,(function (){var vec__32431 = col;var col_key = cljs.core.nth.call(null,vec__32431,(0),null);var col_name = cljs.core.nth.call(null,vec__32431,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__32441 = (i__32427 + (1));
i__32427 = G__32441;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32428),iter__32425.call(null,cljs.core.chunk_rest.call(null,s__32426__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32428),null);
}
} else
{var col = cljs.core.first.call(null,s__32426__$2);return cljs.core.cons.call(null,(function (){var vec__32432 = col;var col_key = cljs.core.nth.call(null,vec__32432,(0),null);var col_name = cljs.core.nth.call(null,vec__32432,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__32425.call(null,cljs.core.rest.call(null,s__32426__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32421))?sablono.interpreter.attributes.call(null,attrs32421):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32421))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32421)], null))));
})(),(function (){var attrs32422 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32422))?sablono.interpreter.attributes.call(null,attrs32422):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32422))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32422)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32420),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32423 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view){
return (function iter__32433(s__32434){return (new cljs.core.LazySeq(null,((function (attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view){
return (function (){var s__32434__$1 = s__32434;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32434__$1);if(temp__4126__auto__)
{var s__32434__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32434__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32434__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32436 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32435 = (0);while(true){
if((i__32435 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32435);cljs.core.chunk_append.call(null,b__32436,(function (){var vec__32439 = col;var col_key = cljs.core.nth.call(null,vec__32439,(0),null);var col_name = cljs.core.nth.call(null,vec__32439,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__32442 = (i__32435 + (1));
i__32435 = G__32442;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32436),iter__32433.call(null,cljs.core.chunk_rest.call(null,s__32434__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32436),null);
}
} else
{var col = cljs.core.first.call(null,s__32434__$2);return cljs.core.cons.call(null,(function (){var vec__32440 = col;var col_key = cljs.core.nth.call(null,vec__32440,(0),null);var col_name = cljs.core.nth.call(null,vec__32440,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__32433.call(null,cljs.core.rest.call(null,s__32434__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32423))?sablono.interpreter.attributes.call(null,attrs32423):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32423))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32423)], null))));
})(),(function (){var attrs32424 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32420,map__32418,map__32418__$1,props,table_data,map__32419,map__32419__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32424))?sablono.interpreter.attributes.call(null,attrs32424):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32424))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32424)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__32443,owner){var map__32458 = p__32443;var map__32458__$1 = ((cljs.core.seq_QMARK_.call(null,map__32458))?cljs.core.apply.call(null,cljs.core.hash_map,map__32458):map__32458);var props = map__32458__$1;var map__32459 = cljs.core.get.call(null,map__32458__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32459__$1 = ((cljs.core.seq_QMARK_.call(null,map__32459))?cljs.core.apply.call(null,cljs.core.hash_map,map__32459):map__32459);var table_state = map__32459__$1;var table_data = cljs.core.get.call(null,map__32459__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32460 = cljs.core.get.call(null,map__32459__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32460__$1 = ((cljs.core.seq_QMARK_.call(null,map__32460))?cljs.core.apply.call(null,cljs.core.hash_map,map__32460):map__32460);var controls = map__32460__$1;var index = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__32461 = cljs.core.get.call(null,map__32458__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32461__$1 = ((cljs.core.seq_QMARK_.call(null,map__32461))?cljs.core.apply.call(null,cljs.core.hash_map,map__32461):map__32461);var filter_by_view = cljs.core.get.call(null,map__32461__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__32461__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__32458__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t32462 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32462 = (function (sort_spec,table_component,owner,filter_by_view,props,p__32443,table_data,index,map__32460,filter_spec,columns,map__32461,table_state,controls,bounds,size,from,map__32459,map__32458,meta32463){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.p__32443 = p__32443;
this.table_data = table_data;
this.index = index;
this.map__32460 = map__32460;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__32461 = map__32461;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.from = from;
this.map__32459 = map__32459;
this.map__32458 = map__32458;
this.meta32463 = meta32463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32462.cljs$lang$type = true;
clustermap.components.table.t32462.cljs$lang$ctorStr = "clustermap.components.table/t32462";
clustermap.components.table.t32462.cljs$lang$ctorPrWriter = ((function (map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32462");
});})(map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32462.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t32462.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__32465,p__32466){var self__ = this;
var map__32467 = p__32465;var map__32467__$1 = ((cljs.core.seq_QMARK_.call(null,map__32467))?cljs.core.apply.call(null,cljs.core.hash_map,map__32467):map__32467);var next_props = map__32467__$1;var map__32468 = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32468__$1 = ((cljs.core.seq_QMARK_.call(null,map__32468))?cljs.core.apply.call(null,cljs.core.hash_map,map__32468):map__32468);var next_table_state = map__32468__$1;var next_table_data = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32469 = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32469__$1 = ((cljs.core.seq_QMARK_.call(null,map__32469))?cljs.core.apply.call(null,cljs.core.hash_map,map__32469):map__32469);var next_controls = map__32469__$1;var next_index = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__32470 = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32470__$1 = ((cljs.core.seq_QMARK_.call(null,map__32470))?cljs.core.apply.call(null,cljs.core.hash_map,map__32470):map__32470);var next_filter_by_view = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__32471 = p__32466;var map__32471__$1 = ((cljs.core.seq_QMARK_.call(null,map__32471))?cljs.core.apply.call(null,cljs.core.hash_map,map__32471):map__32471);var next_state = map__32471__$1;var table_data_resource = cljs.core.get.call(null,map__32471__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.call(null,next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.call(null,next_sort_spec,self__.sort_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var or__3558__auto____$3 = cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec);if(or__3558__auto____$3)
{return or__3558__auto____$3;
} else
{var or__3558__auto____$4 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$4)
{return or__3558__auto____$4;
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
}
})()))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,(cljs.core.truth_(next_filter_by_view)?next_bounds:null),next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32462.prototype.om$core$IRender$ = true;
clustermap.components.table.t32462.prototype.om$core$IRender$render$arity$1 = ((function (map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32462.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t32462.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds))
);
});})(map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds){
return (function (_32464){var self__ = this;
var _32464__$1 = this;return self__.meta32463;
});})(map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds){
return (function (_32464,meta32463__$1){var self__ = this;
var _32464__$1 = this;return (new clustermap.components.table.t32462(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.p__32443,self__.table_data,self__.index,self__.map__32460,self__.filter_spec,self__.columns,self__.map__32461,self__.table_state,self__.controls,self__.bounds,self__.size,self__.from,self__.map__32459,self__.map__32458,meta32463__$1));
});})(map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t32462 = ((function (map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t32462(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,p__32443__$1,table_data__$1,index__$1,map__32460__$2,filter_spec__$1,columns__$1,map__32461__$2,table_state__$1,controls__$1,bounds__$1,size__$1,from__$1,map__32459__$2,map__32458__$2,meta32463){return (new clustermap.components.table.t32462(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,p__32443__$1,table_data__$1,index__$1,map__32460__$2,filter_spec__$1,columns__$1,map__32461__$2,table_state__$1,controls__$1,bounds__$1,size__$1,from__$1,map__32459__$2,map__32458__$2,meta32463));
});})(map__32458,map__32458__$1,props,map__32459,map__32459__$1,table_state,table_data,map__32460,map__32460__$1,controls,index,sort_spec,from,size,columns,map__32461,map__32461__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t32462(sort_spec,table_component,owner,filter_by_view,props,p__32443,table_data,index,map__32460__$1,filter_spec,columns,map__32461__$1,table_state,controls,bounds,size,from,map__32459__$1,map__32458__$1,null));
});
