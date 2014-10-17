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
clustermap.components.table.order_col = (function order_col(controls,p__21436,col_key,col_name){var map__21446 = p__21436;var map__21446__$1 = ((cljs.core.seq_QMARK_.call(null,map__21446))?cljs.core.apply.call(null,cljs.core.hash_map,map__21446):map__21446);var table_data = map__21446__$1;var current_sort_spec = cljs.core.get.call(null,map__21446__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__21447 = current_sort_spec__$1;var G__21447__$1 = (((G__21447 == null))?null:cljs.core.keys.call(null,G__21447));var G__21447__$2 = (((G__21447__$1 == null))?null:cljs.core.first.call(null,G__21447__$1));return G__21447__$2;
})();var current_sort_dir = (function (){var G__21448 = current_sort_spec__$1;var G__21448__$1 = (((G__21448 == null))?null:current_sort_key.call(null,G__21448));var G__21448__$2 = (((G__21448__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__21448__$1));return G__21448__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__21446,map__21446__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__21449 = cljs.core._EQ_;var expr__21450 = current_sort_dir;if(cljs.core.truth_(pred__21449.call(null,"asc",expr__21450)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__21449.call(null,"desc",expr__21450)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__21446,map__21446__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__21452 = cljs.core._EQ_;var expr__21453 = current_sort_dir;if(cljs.core.truth_(pred__21452.call(null,"asc",expr__21453)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__21455,owner,opts){var map__21472 = p__21455;var map__21472__$1 = ((cljs.core.seq_QMARK_.call(null,map__21472))?cljs.core.apply.call(null,cljs.core.hash_map,map__21472):map__21472);var controls = cljs.core.get.call(null,map__21472__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__21473 = cljs.core.get.call(null,map__21472__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__21473__$1 = ((cljs.core.seq_QMARK_.call(null,map__21473))?cljs.core.apply.call(null,cljs.core.hash_map,map__21473):map__21473);var table_data = map__21473__$1;var count = cljs.core.get.call(null,map__21473__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__21473__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__21473__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t21474 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t21474 = (function (map__21472,owner,paginate,table_data,controls,map__21473,size,p__21455,from,count,opts,meta21475){
this.map__21472 = map__21472;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.map__21473 = map__21473;
this.size = size;
this.p__21455 = p__21455;
this.from = from;
this.count = count;
this.opts = opts;
this.meta21475 = meta21475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t21474.cljs$lang$type = true;
clustermap.components.table.t21474.cljs$lang$ctorStr = "clustermap.components.table/t21474";
clustermap.components.table.t21474.cljs$lang$ctorPrWriter = ((function (map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.table/t21474");
});})(map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size))
;
clustermap.components.table.t21474.prototype.om$core$IRender$ = true;
clustermap.components.table.t21474.prototype.om$core$IRender$render$arity$1 = ((function (map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size){
return (function (this__13555__auto__){var self__ = this;
var this__13555__auto____$1 = this;var attrs21477 = (cljs.core.truth_((function (){var and__7888__auto__ = self__.from;if(cljs.core.truth_(and__7888__auto__))
{return (self__.from > (0));
} else
{return and__7888__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__13555__auto____$1,map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__8207__auto__ = (0);var y__8208__auto__ = (self__.from - self__.size);return ((x__8207__auto__ > y__8208__auto__) ? x__8207__auto__ : y__8208__auto__);
})());
});})(this__13555__auto____$1,map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs21477))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs21477)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21477))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs21478 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__8214__auto__ = (self__.from + self__.size);var y__8215__auto__ = self__.count;return ((x__8214__auto__ < y__8215__auto__) ? x__8214__auto__ : y__8215__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs21478))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs21478)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21478))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21478)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs21477,this__13555__auto____$1,map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs21477,this__13555__auto____$1,map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21477),(function (){var attrs21479 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__8214__auto__ = (self__.from + self__.size);var y__8215__auto__ = self__.count;return ((x__8214__auto__ < y__8215__auto__) ? x__8214__auto__ : y__8215__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs21479))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs21479)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21479))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21479)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs21477,this__13555__auto____$1,map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs21477,this__13555__auto____$1,map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size))
;
clustermap.components.table.t21474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size){
return (function (_21476){var self__ = this;
var _21476__$1 = this;return self__.meta21475;
});})(map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size))
;
clustermap.components.table.t21474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size){
return (function (_21476,meta21475__$1){var self__ = this;
var _21476__$1 = this;return (new clustermap.components.table.t21474(self__.map__21472,self__.owner,self__.paginate,self__.table_data,self__.controls,self__.map__21473,self__.size,self__.p__21455,self__.from,self__.count,self__.opts,meta21475__$1));
});})(map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t21474 = ((function (map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size){
return (function __GT_t21474(map__21472__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,map__21473__$2,size__$1,p__21455__$1,from__$1,count__$1,opts__$1,meta21475){return (new clustermap.components.table.t21474(map__21472__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,map__21473__$2,size__$1,p__21455__$1,from__$1,count__$1,opts__$1,meta21475));
});})(map__21472,map__21472__$1,controls,map__21473,map__21473__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t21474(map__21472__$1,owner,paginate,table_data,controls,map__21473__$1,size,p__21455,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__21488){var map__21501 = p__21488;var map__21501__$1 = ((cljs.core.seq_QMARK_.call(null,map__21501))?cljs.core.apply.call(null,cljs.core.hash_map,map__21501):map__21501);var record = cljs.core.get.call(null,map__21501__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__21501__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t21502 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t21502 = (function (columns,record,map__21501,p__21488,render_table_row,meta21503){
this.columns = columns;
this.record = record;
this.map__21501 = map__21501;
this.p__21488 = p__21488;
this.render_table_row = render_table_row;
this.meta21503 = meta21503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t21502.cljs$lang$type = true;
clustermap.components.table.t21502.cljs$lang$ctorStr = "clustermap.components.table/t21502";
clustermap.components.table.t21502.cljs$lang$ctorPrWriter = ((function (map__21501,map__21501__$1,record,columns){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.table/t21502");
});})(map__21501,map__21501__$1,record,columns))
;
clustermap.components.table.t21502.prototype.om$core$IRender$ = true;
clustermap.components.table.t21502.prototype.om$core$IRender$render$arity$1 = ((function (map__21501,map__21501__$1,record,columns){
return (function (this__13555__auto__){var self__ = this;
var this__13555__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__8625__auto__ = ((function (this__13555__auto____$1,map__21501,map__21501__$1,record,columns){
return (function iter__21505(s__21506){return (new cljs.core.LazySeq(null,((function (this__13555__auto____$1,map__21501,map__21501__$1,record,columns){
return (function (){var s__21506__$1 = s__21506;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21506__$1);if(temp__4126__auto__)
{var s__21506__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21506__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21506__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21508 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21507 = (0);while(true){
if((i__21507 < size__8624__auto__))
{var col = cljs.core._nth.call(null,c__8623__auto__,i__21507);cljs.core.chunk_append.call(null,b__21508,(function (){var vec__21511 = col;var col_key = cljs.core.nth.call(null,vec__21511,(0),null);var col_name = cljs.core.nth.call(null,vec__21511,(1),null);var formatter = cljs.core.nth.call(null,vec__21511,(2),null);var formatter__$1 = (function (){var or__7900__auto__ = formatter;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__21513 = (i__21507 + (1));
i__21507 = G__21513;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21508),iter__21505.call(null,cljs.core.chunk_rest.call(null,s__21506__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21508),null);
}
} else
{var col = cljs.core.first.call(null,s__21506__$2);return cljs.core.cons.call(null,(function (){var vec__21512 = col;var col_key = cljs.core.nth.call(null,vec__21512,(0),null);var col_name = cljs.core.nth.call(null,vec__21512,(1),null);var formatter = cljs.core.nth.call(null,vec__21512,(2),null);var formatter__$1 = (function (){var or__7900__auto__ = formatter;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__21505.call(null,cljs.core.rest.call(null,s__21506__$2)));
}
} else
{return null;
}
break;
}
});})(this__13555__auto____$1,map__21501,map__21501__$1,record,columns))
,null,null));
});})(this__13555__auto____$1,map__21501,map__21501__$1,record,columns))
;return iter__8625__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__21501,map__21501__$1,record,columns))
;
clustermap.components.table.t21502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21501,map__21501__$1,record,columns){
return (function (_21504){var self__ = this;
var _21504__$1 = this;return self__.meta21503;
});})(map__21501,map__21501__$1,record,columns))
;
clustermap.components.table.t21502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21501,map__21501__$1,record,columns){
return (function (_21504,meta21503__$1){var self__ = this;
var _21504__$1 = this;return (new clustermap.components.table.t21502(self__.columns,self__.record,self__.map__21501,self__.p__21488,self__.render_table_row,meta21503__$1));
});})(map__21501,map__21501__$1,record,columns))
;
clustermap.components.table.__GT_t21502 = ((function (map__21501,map__21501__$1,record,columns){
return (function __GT_t21502(columns__$1,record__$1,map__21501__$2,p__21488__$1,render_table_row__$1,meta21503){return (new clustermap.components.table.t21502(columns__$1,record__$1,map__21501__$2,p__21488__$1,render_table_row__$1,meta21503));
});})(map__21501,map__21501__$1,record,columns))
;
}
return (new clustermap.components.table.t21502(columns,record,map__21501__$1,p__21488,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__21514,owner,opts){var map__21538 = p__21514;var map__21538__$1 = ((cljs.core.seq_QMARK_.call(null,map__21538))?cljs.core.apply.call(null,cljs.core.hash_map,map__21538):map__21538);var props = map__21538__$1;var table_data = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__21539 = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__21539__$1 = ((cljs.core.seq_QMARK_.call(null,map__21539))?cljs.core.apply.call(null,cljs.core.hash_map,map__21539):map__21539);var controls = map__21539__$1;var columns = cljs.core.get.call(null,map__21539__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__21539__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs21540 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs21540))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs21540)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21540))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs21541 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__8625__auto__ = ((function (attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view){
return (function iter__21545(s__21546){return (new cljs.core.LazySeq(null,((function (attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view){
return (function (){var s__21546__$1 = s__21546;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21546__$1);if(temp__4126__auto__)
{var s__21546__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21546__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21546__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21548 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21547 = (0);while(true){
if((i__21547 < size__8624__auto__))
{var col = cljs.core._nth.call(null,c__8623__auto__,i__21547);cljs.core.chunk_append.call(null,b__21548,(function (){var vec__21551 = col;var col_key = cljs.core.nth.call(null,vec__21551,(0),null);var col_name = cljs.core.nth.call(null,vec__21551,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__21561 = (i__21547 + (1));
i__21547 = G__21561;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21548),iter__21545.call(null,cljs.core.chunk_rest.call(null,s__21546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21548),null);
}
} else
{var col = cljs.core.first.call(null,s__21546__$2);return cljs.core.cons.call(null,(function (){var vec__21552 = col;var col_key = cljs.core.nth.call(null,vec__21552,(0),null);var col_name = cljs.core.nth.call(null,vec__21552,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__21545.call(null,cljs.core.rest.call(null,s__21546__$2)));
}
} else
{return null;
}
break;
}
});})(attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view))
;return iter__8625__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs21541))?sablono.interpreter.attributes.call(null,attrs21541):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21541))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21541)], null))));
})(),(function (){var attrs21542 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs21542))?sablono.interpreter.attributes.call(null,attrs21542):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21542))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21542)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21540),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs21543 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__8625__auto__ = ((function (attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view){
return (function iter__21553(s__21554){return (new cljs.core.LazySeq(null,((function (attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view){
return (function (){var s__21554__$1 = s__21554;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21554__$1);if(temp__4126__auto__)
{var s__21554__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21554__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21554__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21556 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21555 = (0);while(true){
if((i__21555 < size__8624__auto__))
{var col = cljs.core._nth.call(null,c__8623__auto__,i__21555);cljs.core.chunk_append.call(null,b__21556,(function (){var vec__21559 = col;var col_key = cljs.core.nth.call(null,vec__21559,(0),null);var col_name = cljs.core.nth.call(null,vec__21559,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__21562 = (i__21555 + (1));
i__21555 = G__21562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21556),iter__21553.call(null,cljs.core.chunk_rest.call(null,s__21554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21556),null);
}
} else
{var col = cljs.core.first.call(null,s__21554__$2);return cljs.core.cons.call(null,(function (){var vec__21560 = col;var col_key = cljs.core.nth.call(null,vec__21560,(0),null);var col_name = cljs.core.nth.call(null,vec__21560,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__21553.call(null,cljs.core.rest.call(null,s__21554__$2)));
}
} else
{return null;
}
break;
}
});})(attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view))
;return iter__8625__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs21543))?sablono.interpreter.attributes.call(null,attrs21543):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21543))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21543)], null))));
})(),(function (){var attrs21544 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs21540,map__21538,map__21538__$1,props,table_data,map__21539,map__21539__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs21544))?sablono.interpreter.attributes.call(null,attrs21544):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21544))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21544)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__21563,owner){var map__21578 = p__21563;var map__21578__$1 = ((cljs.core.seq_QMARK_.call(null,map__21578))?cljs.core.apply.call(null,cljs.core.hash_map,map__21578):map__21578);var props = map__21578__$1;var map__21579 = cljs.core.get.call(null,map__21578__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__21579__$1 = ((cljs.core.seq_QMARK_.call(null,map__21579))?cljs.core.apply.call(null,cljs.core.hash_map,map__21579):map__21579);var table_state = map__21579__$1;var table_data = cljs.core.get.call(null,map__21579__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__21580 = cljs.core.get.call(null,map__21579__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__21580__$1 = ((cljs.core.seq_QMARK_.call(null,map__21580))?cljs.core.apply.call(null,cljs.core.hash_map,map__21580):map__21580);var controls = map__21580__$1;var index = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__21581 = cljs.core.get.call(null,map__21578__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__21581__$1 = ((cljs.core.seq_QMARK_.call(null,map__21581))?cljs.core.apply.call(null,cljs.core.hash_map,map__21581):map__21581);var filter_by_view = cljs.core.get.call(null,map__21581__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__21581__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__21578__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t21582 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t21582 = (function (sort_spec,table_component,owner,map__21579,filter_by_view,props,map__21580,p__21563,map__21578,table_data,index,filter_spec,columns,map__21581,table_state,controls,bounds,size,from,meta21583){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.map__21579 = map__21579;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__21580 = map__21580;
this.p__21563 = p__21563;
this.map__21578 = map__21578;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__21581 = map__21581;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.from = from;
this.meta21583 = meta21583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t21582.cljs$lang$type = true;
clustermap.components.table.t21582.cljs$lang$ctorStr = "clustermap.components.table/t21582";
clustermap.components.table.t21582.cljs$lang$ctorPrWriter = ((function (map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.table/t21582");
});})(map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t21582.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t21582.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__21585,p__21586){var self__ = this;
var map__21587 = p__21585;var map__21587__$1 = ((cljs.core.seq_QMARK_.call(null,map__21587))?cljs.core.apply.call(null,cljs.core.hash_map,map__21587):map__21587);var next_props = map__21587__$1;var map__21588 = cljs.core.get.call(null,map__21587__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__21588__$1 = ((cljs.core.seq_QMARK_.call(null,map__21588))?cljs.core.apply.call(null,cljs.core.hash_map,map__21588):map__21588);var next_table_state = map__21588__$1;var next_table_data = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__21589 = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__21589__$1 = ((cljs.core.seq_QMARK_.call(null,map__21589))?cljs.core.apply.call(null,cljs.core.hash_map,map__21589):map__21589);var next_controls = map__21589__$1;var next_index = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__21590 = cljs.core.get.call(null,map__21587__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__21590__$1 = ((cljs.core.seq_QMARK_.call(null,map__21590))?cljs.core.apply.call(null,cljs.core.hash_map,map__21590):map__21590);var next_filter_by_view = cljs.core.get.call(null,map__21590__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__21590__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__21587__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__21591 = p__21586;var map__21591__$1 = ((cljs.core.seq_QMARK_.call(null,map__21591))?cljs.core.apply.call(null,cljs.core.hash_map,map__21591):map__21591);var next_state = map__21591__$1;var table_data_resource = cljs.core.get.call(null,map__21591__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__7900__auto__ = cljs.core.not.call(null,next_table_data);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = cljs.core.not_EQ_.call(null,next_controls,self__.controls);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{var or__7900__auto____$2 = cljs.core.not_EQ_.call(null,next_sort_spec,self__.sort_spec);if(or__7900__auto____$2)
{return or__7900__auto____$2;
} else
{var or__7900__auto____$3 = cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec);if(or__7900__auto____$3)
{return or__7900__auto____$3;
} else
{var or__7900__auto____$4 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__7900__auto____$4)
{return or__7900__auto____$4;
} else
{var and__7888__auto__ = next_filter_by_view;if(cljs.core.truth_(and__7888__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__7888__auto__;
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
});})(map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t21582.prototype.om$core$IRender$ = true;
clustermap.components.table.t21582.prototype.om$core$IRender$render$arity$1 = ((function (map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t21582.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t21582.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds))
);
});})(map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t21582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds){
return (function (_21584){var self__ = this;
var _21584__$1 = this;return self__.meta21583;
});})(map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t21582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds){
return (function (_21584,meta21583__$1){var self__ = this;
var _21584__$1 = this;return (new clustermap.components.table.t21582(self__.sort_spec,self__.table_component,self__.owner,self__.map__21579,self__.filter_by_view,self__.props,self__.map__21580,self__.p__21563,self__.map__21578,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.map__21581,self__.table_state,self__.controls,self__.bounds,self__.size,self__.from,meta21583__$1));
});})(map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t21582 = ((function (map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t21582(sort_spec__$1,table_component__$1,owner__$1,map__21579__$2,filter_by_view__$1,props__$1,map__21580__$2,p__21563__$1,map__21578__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__21581__$2,table_state__$1,controls__$1,bounds__$1,size__$1,from__$1,meta21583){return (new clustermap.components.table.t21582(sort_spec__$1,table_component__$1,owner__$1,map__21579__$2,filter_by_view__$1,props__$1,map__21580__$2,p__21563__$1,map__21578__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__21581__$2,table_state__$1,controls__$1,bounds__$1,size__$1,from__$1,meta21583));
});})(map__21578,map__21578__$1,props,map__21579,map__21579__$1,table_state,table_data,map__21580,map__21580__$1,controls,index,sort_spec,from,size,columns,map__21581,map__21581__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t21582(sort_spec,table_component,owner,map__21579__$1,filter_by_view,props,map__21580__$1,p__21563,map__21578__$1,table_data,index,filter_spec,columns,map__21581__$1,table_state,controls,bounds,size,from,null));
});

//# sourceMappingURL=table.js.map