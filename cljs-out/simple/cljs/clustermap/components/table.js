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
clustermap.components.table.order_col = (function order_col(controls,p__30539,col_key,col_name){var map__30549 = p__30539;var map__30549__$1 = ((cljs.core.seq_QMARK_.call(null,map__30549))?cljs.core.apply.call(null,cljs.core.hash_map,map__30549):map__30549);var table_data = map__30549__$1;var current_sort_spec = cljs.core.get.call(null,map__30549__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__30550 = current_sort_spec__$1;var G__30550__$1 = (((G__30550 == null))?null:cljs.core.keys.call(null,G__30550));var G__30550__$2 = (((G__30550__$1 == null))?null:cljs.core.first.call(null,G__30550__$1));return G__30550__$2;
})();var current_sort_dir = (function (){var G__30551 = current_sort_spec__$1;var G__30551__$1 = (((G__30551 == null))?null:current_sort_key.call(null,G__30551));var G__30551__$2 = (((G__30551__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__30551__$1));return G__30551__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__30549,map__30549__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__30552 = cljs.core._EQ_;var expr__30553 = current_sort_dir;if(cljs.core.truth_(pred__30552.call(null,"asc",expr__30553)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__30552.call(null,"desc",expr__30553)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__30549,map__30549__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__30555 = cljs.core._EQ_;var expr__30556 = current_sort_dir;if(cljs.core.truth_(pred__30555.call(null,"asc",expr__30556)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__30558,owner,opts){var map__30575 = p__30558;var map__30575__$1 = ((cljs.core.seq_QMARK_.call(null,map__30575))?cljs.core.apply.call(null,cljs.core.hash_map,map__30575):map__30575);var controls = cljs.core.get.call(null,map__30575__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30576 = cljs.core.get.call(null,map__30575__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30576__$1 = ((cljs.core.seq_QMARK_.call(null,map__30576))?cljs.core.apply.call(null,cljs.core.hash_map,map__30576):map__30576);var table_data = map__30576__$1;var count = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t30577 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t30577 = (function (owner,map__30576,paginate,table_data,controls,map__30575,size,p__30558,from,count,opts,meta30578){
this.owner = owner;
this.map__30576 = map__30576;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.map__30575 = map__30575;
this.size = size;
this.p__30558 = p__30558;
this.from = from;
this.count = count;
this.opts = opts;
this.meta30578 = meta30578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t30577.cljs$lang$type = true;
clustermap.components.table.t30577.cljs$lang$ctorStr = "clustermap.components.table/t30577";
clustermap.components.table.t30577.cljs$lang$ctorPrWriter = ((function (map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t30577");
});})(map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size))
;
clustermap.components.table.t30577.prototype.om$core$IRender$ = true;
clustermap.components.table.t30577.prototype.om$core$IRender$render$arity$1 = ((function (map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs30580 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30580))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs30580)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30580))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs30581 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30581))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs30581)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30581))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30581)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs30580,this__9504__auto____$1,map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs30580,this__9504__auto____$1,map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30580),(function (){var attrs30582 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30582))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs30582)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30582))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30582)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs30580,this__9504__auto____$1,map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs30580,this__9504__auto____$1,map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size))
;
clustermap.components.table.t30577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size){
return (function (_30579){var self__ = this;
var _30579__$1 = this;return self__.meta30578;
});})(map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size))
;
clustermap.components.table.t30577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size){
return (function (_30579,meta30578__$1){var self__ = this;
var _30579__$1 = this;return (new clustermap.components.table.t30577(self__.owner,self__.map__30576,self__.paginate,self__.table_data,self__.controls,self__.map__30575,self__.size,self__.p__30558,self__.from,self__.count,self__.opts,meta30578__$1));
});})(map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t30577 = ((function (map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size){
return (function __GT_t30577(owner__$1,map__30576__$2,paginate__$1,table_data__$1,controls__$1,map__30575__$2,size__$1,p__30558__$1,from__$1,count__$1,opts__$1,meta30578){return (new clustermap.components.table.t30577(owner__$1,map__30576__$2,paginate__$1,table_data__$1,controls__$1,map__30575__$2,size__$1,p__30558__$1,from__$1,count__$1,opts__$1,meta30578));
});})(map__30575,map__30575__$1,controls,map__30576,map__30576__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t30577(owner,map__30576__$1,paginate,table_data,controls,map__30575__$1,size,p__30558,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__30591){var map__30604 = p__30591;var map__30604__$1 = ((cljs.core.seq_QMARK_.call(null,map__30604))?cljs.core.apply.call(null,cljs.core.hash_map,map__30604):map__30604);var record = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t30605 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t30605 = (function (columns,record,map__30604,p__30591,render_table_row,meta30606){
this.columns = columns;
this.record = record;
this.map__30604 = map__30604;
this.p__30591 = p__30591;
this.render_table_row = render_table_row;
this.meta30606 = meta30606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t30605.cljs$lang$type = true;
clustermap.components.table.t30605.cljs$lang$ctorStr = "clustermap.components.table/t30605";
clustermap.components.table.t30605.cljs$lang$ctorPrWriter = ((function (map__30604,map__30604__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t30605");
});})(map__30604,map__30604__$1,record,columns))
;
clustermap.components.table.t30605.prototype.om$core$IRender$ = true;
clustermap.components.table.t30605.prototype.om$core$IRender$render$arity$1 = ((function (map__30604,map__30604__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__30604,map__30604__$1,record,columns){
return (function iter__30608(s__30609){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__30604,map__30604__$1,record,columns){
return (function (){var s__30609__$1 = s__30609;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30609__$1);if(temp__4126__auto__)
{var s__30609__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30609__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__30609__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__30611 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__30610 = (0);while(true){
if((i__30610 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__30610);cljs.core.chunk_append.call(null,b__30611,(function (){var vec__30614 = col;var col_key = cljs.core.nth.call(null,vec__30614,(0),null);var col_name = cljs.core.nth.call(null,vec__30614,(1),null);var formatter = cljs.core.nth.call(null,vec__30614,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__30616 = (i__30610 + (1));
i__30610 = G__30616;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30611),iter__30608.call(null,cljs.core.chunk_rest.call(null,s__30609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30611),null);
}
} else
{var col = cljs.core.first.call(null,s__30609__$2);return cljs.core.cons.call(null,(function (){var vec__30615 = col;var col_key = cljs.core.nth.call(null,vec__30615,(0),null);var col_name = cljs.core.nth.call(null,vec__30615,(1),null);var formatter = cljs.core.nth.call(null,vec__30615,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__30608.call(null,cljs.core.rest.call(null,s__30609__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__30604,map__30604__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__30604,map__30604__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__30604,map__30604__$1,record,columns))
;
clustermap.components.table.t30605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30604,map__30604__$1,record,columns){
return (function (_30607){var self__ = this;
var _30607__$1 = this;return self__.meta30606;
});})(map__30604,map__30604__$1,record,columns))
;
clustermap.components.table.t30605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30604,map__30604__$1,record,columns){
return (function (_30607,meta30606__$1){var self__ = this;
var _30607__$1 = this;return (new clustermap.components.table.t30605(self__.columns,self__.record,self__.map__30604,self__.p__30591,self__.render_table_row,meta30606__$1));
});})(map__30604,map__30604__$1,record,columns))
;
clustermap.components.table.__GT_t30605 = ((function (map__30604,map__30604__$1,record,columns){
return (function __GT_t30605(columns__$1,record__$1,map__30604__$2,p__30591__$1,render_table_row__$1,meta30606){return (new clustermap.components.table.t30605(columns__$1,record__$1,map__30604__$2,p__30591__$1,render_table_row__$1,meta30606));
});})(map__30604,map__30604__$1,record,columns))
;
}
return (new clustermap.components.table.t30605(columns,record,map__30604__$1,p__30591,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__30617,owner,opts){var map__30641 = p__30617;var map__30641__$1 = ((cljs.core.seq_QMARK_.call(null,map__30641))?cljs.core.apply.call(null,cljs.core.hash_map,map__30641):map__30641);var props = map__30641__$1;var table_data = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30642 = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30642__$1 = ((cljs.core.seq_QMARK_.call(null,map__30642))?cljs.core.apply.call(null,cljs.core.hash_map,map__30642):map__30642);var controls = map__30642__$1;var columns = cljs.core.get.call(null,map__30642__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__30642__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs30643 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30643))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs30643)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30643))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs30644 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view){
return (function iter__30648(s__30649){return (new cljs.core.LazySeq(null,((function (attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view){
return (function (){var s__30649__$1 = s__30649;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30649__$1);if(temp__4126__auto__)
{var s__30649__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30649__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__30649__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__30651 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__30650 = (0);while(true){
if((i__30650 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__30650);cljs.core.chunk_append.call(null,b__30651,(function (){var vec__30654 = col;var col_key = cljs.core.nth.call(null,vec__30654,(0),null);var col_name = cljs.core.nth.call(null,vec__30654,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__30664 = (i__30650 + (1));
i__30650 = G__30664;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30651),iter__30648.call(null,cljs.core.chunk_rest.call(null,s__30649__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30651),null);
}
} else
{var col = cljs.core.first.call(null,s__30649__$2);return cljs.core.cons.call(null,(function (){var vec__30655 = col;var col_key = cljs.core.nth.call(null,vec__30655,(0),null);var col_name = cljs.core.nth.call(null,vec__30655,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__30648.call(null,cljs.core.rest.call(null,s__30649__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs30644))?sablono.interpreter.attributes.call(null,attrs30644):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30644))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30644)], null))));
})(),(function (){var attrs30645 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs30645))?sablono.interpreter.attributes.call(null,attrs30645):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30645))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30645)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30643),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs30646 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view){
return (function iter__30656(s__30657){return (new cljs.core.LazySeq(null,((function (attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view){
return (function (){var s__30657__$1 = s__30657;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30657__$1);if(temp__4126__auto__)
{var s__30657__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30657__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__30657__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__30659 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__30658 = (0);while(true){
if((i__30658 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__30658);cljs.core.chunk_append.call(null,b__30659,(function (){var vec__30662 = col;var col_key = cljs.core.nth.call(null,vec__30662,(0),null);var col_name = cljs.core.nth.call(null,vec__30662,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__30665 = (i__30658 + (1));
i__30658 = G__30665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30659),iter__30656.call(null,cljs.core.chunk_rest.call(null,s__30657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30659),null);
}
} else
{var col = cljs.core.first.call(null,s__30657__$2);return cljs.core.cons.call(null,(function (){var vec__30663 = col;var col_key = cljs.core.nth.call(null,vec__30663,(0),null);var col_name = cljs.core.nth.call(null,vec__30663,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__30656.call(null,cljs.core.rest.call(null,s__30657__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs30646))?sablono.interpreter.attributes.call(null,attrs30646):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30646))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30646)], null))));
})(),(function (){var attrs30647 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs30643,map__30641,map__30641__$1,props,table_data,map__30642,map__30642__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs30647))?sablono.interpreter.attributes.call(null,attrs30647):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30647))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30647)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__30666,owner){var map__30681 = p__30666;var map__30681__$1 = ((cljs.core.seq_QMARK_.call(null,map__30681))?cljs.core.apply.call(null,cljs.core.hash_map,map__30681):map__30681);var props = map__30681__$1;var map__30682 = cljs.core.get.call(null,map__30681__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__30682__$1 = ((cljs.core.seq_QMARK_.call(null,map__30682))?cljs.core.apply.call(null,cljs.core.hash_map,map__30682):map__30682);var table_state = map__30682__$1;var table_data = cljs.core.get.call(null,map__30682__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30683 = cljs.core.get.call(null,map__30682__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30683__$1 = ((cljs.core.seq_QMARK_.call(null,map__30683))?cljs.core.apply.call(null,cljs.core.hash_map,map__30683):map__30683);var controls = map__30683__$1;var index = cljs.core.get.call(null,map__30683__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__30683__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__30683__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__30683__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__30683__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__30684 = cljs.core.get.call(null,map__30681__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30684__$1 = ((cljs.core.seq_QMARK_.call(null,map__30684))?cljs.core.apply.call(null,cljs.core.hash_map,map__30684):map__30684);var filter_by_view = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__30681__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t30685 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t30685 = (function (sort_spec,map__30682,table_component,owner,filter_by_view,props,table_data,map__30683,index,p__30666,filter_spec,columns,table_state,controls,bounds,size,from,map__30684,map__30681,meta30686){
this.sort_spec = sort_spec;
this.map__30682 = map__30682;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.map__30683 = map__30683;
this.index = index;
this.p__30666 = p__30666;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.from = from;
this.map__30684 = map__30684;
this.map__30681 = map__30681;
this.meta30686 = meta30686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t30685.cljs$lang$type = true;
clustermap.components.table.t30685.cljs$lang$ctorStr = "clustermap.components.table/t30685";
clustermap.components.table.t30685.cljs$lang$ctorPrWriter = ((function (map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t30685");
});})(map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t30685.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t30685.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__30688,p__30689){var self__ = this;
var map__30690 = p__30688;var map__30690__$1 = ((cljs.core.seq_QMARK_.call(null,map__30690))?cljs.core.apply.call(null,cljs.core.hash_map,map__30690):map__30690);var next_props = map__30690__$1;var map__30691 = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__30691__$1 = ((cljs.core.seq_QMARK_.call(null,map__30691))?cljs.core.apply.call(null,cljs.core.hash_map,map__30691):map__30691);var next_table_state = map__30691__$1;var next_table_data = cljs.core.get.call(null,map__30691__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30692 = cljs.core.get.call(null,map__30691__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30692__$1 = ((cljs.core.seq_QMARK_.call(null,map__30692))?cljs.core.apply.call(null,cljs.core.hash_map,map__30692):map__30692);var next_controls = map__30692__$1;var next_index = cljs.core.get.call(null,map__30692__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__30692__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__30692__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__30692__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__30692__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__30693 = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30693__$1 = ((cljs.core.seq_QMARK_.call(null,map__30693))?cljs.core.apply.call(null,cljs.core.hash_map,map__30693):map__30693);var next_filter_by_view = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__30694 = p__30689;var map__30694__$1 = ((cljs.core.seq_QMARK_.call(null,map__30694))?cljs.core.apply.call(null,cljs.core.hash_map,map__30694):map__30694);var next_state = map__30694__$1;var table_data_resource = cljs.core.get.call(null,map__30694__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t30685.prototype.om$core$IRender$ = true;
clustermap.components.table.t30685.prototype.om$core$IRender$render$arity$1 = ((function (map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t30685.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t30685.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds))
);
});})(map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t30685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds){
return (function (_30687){var self__ = this;
var _30687__$1 = this;return self__.meta30686;
});})(map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t30685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds){
return (function (_30687,meta30686__$1){var self__ = this;
var _30687__$1 = this;return (new clustermap.components.table.t30685(self__.sort_spec,self__.map__30682,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.map__30683,self__.index,self__.p__30666,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.bounds,self__.size,self__.from,self__.map__30684,self__.map__30681,meta30686__$1));
});})(map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t30685 = ((function (map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t30685(sort_spec__$1,map__30682__$2,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,map__30683__$2,index__$1,p__30666__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,from__$1,map__30684__$2,map__30681__$2,meta30686){return (new clustermap.components.table.t30685(sort_spec__$1,map__30682__$2,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,map__30683__$2,index__$1,p__30666__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,from__$1,map__30684__$2,map__30681__$2,meta30686));
});})(map__30681,map__30681__$1,props,map__30682,map__30682__$1,table_state,table_data,map__30683,map__30683__$1,controls,index,sort_spec,from,size,columns,map__30684,map__30684__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t30685(sort_spec,map__30682__$1,table_component,owner,filter_by_view,props,table_data,map__30683__$1,index,p__30666,filter_spec,columns,table_state,controls,bounds,size,from,map__30684__$1,map__30681__$1,null));
});
