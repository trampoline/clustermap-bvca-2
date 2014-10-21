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
clustermap.components.table.order_col = (function order_col(controls,p__16459,col_key,col_name){var map__16469 = p__16459;var map__16469__$1 = ((cljs.core.seq_QMARK_.call(null,map__16469))?cljs.core.apply.call(null,cljs.core.hash_map,map__16469):map__16469);var table_data = map__16469__$1;var current_sort_spec = cljs.core.get.call(null,map__16469__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__16470 = current_sort_spec__$1;var G__16470__$1 = (((G__16470 == null))?null:cljs.core.keys.call(null,G__16470));var G__16470__$2 = (((G__16470__$1 == null))?null:cljs.core.first.call(null,G__16470__$1));return G__16470__$2;
})();var current_sort_dir = (function (){var G__16471 = current_sort_spec__$1;var G__16471__$1 = (((G__16471 == null))?null:current_sort_key.call(null,G__16471));var G__16471__$2 = (((G__16471__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__16471__$1));return G__16471__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__16469,map__16469__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__16472 = cljs.core._EQ_;var expr__16473 = current_sort_dir;if(cljs.core.truth_(pred__16472.call(null,"asc",expr__16473)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__16472.call(null,"desc",expr__16473)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__16469,map__16469__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__16475 = cljs.core._EQ_;var expr__16476 = current_sort_dir;if(cljs.core.truth_(pred__16475.call(null,"asc",expr__16476)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__16478,owner,opts){var map__16495 = p__16478;var map__16495__$1 = ((cljs.core.seq_QMARK_.call(null,map__16495))?cljs.core.apply.call(null,cljs.core.hash_map,map__16495):map__16495);var controls = cljs.core.get.call(null,map__16495__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__16496 = cljs.core.get.call(null,map__16495__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__16496__$1 = ((cljs.core.seq_QMARK_.call(null,map__16496))?cljs.core.apply.call(null,cljs.core.hash_map,map__16496):map__16496);var table_data = map__16496__$1;var count = cljs.core.get.call(null,map__16496__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__16496__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__16496__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t16497 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t16497 = (function (owner,paginate,table_data,map__16495,p__16478,map__16496,controls,size,from,count,opts,meta16498){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__16495 = map__16495;
this.p__16478 = p__16478;
this.map__16496 = map__16496;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta16498 = meta16498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t16497.cljs$lang$type = true;
clustermap.components.table.t16497.cljs$lang$ctorStr = "clustermap.components.table/t16497";
clustermap.components.table.t16497.cljs$lang$ctorPrWriter = ((function (map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t16497");
});})(map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size))
;
clustermap.components.table.t16497.prototype.om$core$IRender$ = true;
clustermap.components.table.t16497.prototype.om$core$IRender$render$arity$1 = ((function (map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs16500 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs16500))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs16500)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16500))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs16501 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16501))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs16501)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16501))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16501)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs16500,this__9504__auto____$1,map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs16500,this__9504__auto____$1,map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16500),(function (){var attrs16502 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16502))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs16502)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16502))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16502)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs16500,this__9504__auto____$1,map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs16500,this__9504__auto____$1,map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size))
;
clustermap.components.table.t16497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size){
return (function (_16499){var self__ = this;
var _16499__$1 = this;return self__.meta16498;
});})(map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size))
;
clustermap.components.table.t16497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size){
return (function (_16499,meta16498__$1){var self__ = this;
var _16499__$1 = this;return (new clustermap.components.table.t16497(self__.owner,self__.paginate,self__.table_data,self__.map__16495,self__.p__16478,self__.map__16496,self__.controls,self__.size,self__.from,self__.count,self__.opts,meta16498__$1));
});})(map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t16497 = ((function (map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size){
return (function __GT_t16497(owner__$1,paginate__$1,table_data__$1,map__16495__$2,p__16478__$1,map__16496__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta16498){return (new clustermap.components.table.t16497(owner__$1,paginate__$1,table_data__$1,map__16495__$2,p__16478__$1,map__16496__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta16498));
});})(map__16495,map__16495__$1,controls,map__16496,map__16496__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t16497(owner,paginate,table_data,map__16495__$1,p__16478,map__16496__$1,controls,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__16511){var map__16524 = p__16511;var map__16524__$1 = ((cljs.core.seq_QMARK_.call(null,map__16524))?cljs.core.apply.call(null,cljs.core.hash_map,map__16524):map__16524);var record = cljs.core.get.call(null,map__16524__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__16524__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t16525 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t16525 = (function (columns,record,map__16524,p__16511,render_table_row,meta16526){
this.columns = columns;
this.record = record;
this.map__16524 = map__16524;
this.p__16511 = p__16511;
this.render_table_row = render_table_row;
this.meta16526 = meta16526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t16525.cljs$lang$type = true;
clustermap.components.table.t16525.cljs$lang$ctorStr = "clustermap.components.table/t16525";
clustermap.components.table.t16525.cljs$lang$ctorPrWriter = ((function (map__16524,map__16524__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t16525");
});})(map__16524,map__16524__$1,record,columns))
;
clustermap.components.table.t16525.prototype.om$core$IRender$ = true;
clustermap.components.table.t16525.prototype.om$core$IRender$render$arity$1 = ((function (map__16524,map__16524__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__16524,map__16524__$1,record,columns){
return (function iter__16528(s__16529){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__16524,map__16524__$1,record,columns){
return (function (){var s__16529__$1 = s__16529;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16529__$1);if(temp__4126__auto__)
{var s__16529__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16529__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__16529__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__16531 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__16530 = (0);while(true){
if((i__16530 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__16530);cljs.core.chunk_append.call(null,b__16531,(function (){var vec__16534 = col;var col_key = cljs.core.nth.call(null,vec__16534,(0),null);var col_name = cljs.core.nth.call(null,vec__16534,(1),null);var formatter = cljs.core.nth.call(null,vec__16534,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__16536 = (i__16530 + (1));
i__16530 = G__16536;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16531),iter__16528.call(null,cljs.core.chunk_rest.call(null,s__16529__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16531),null);
}
} else
{var col = cljs.core.first.call(null,s__16529__$2);return cljs.core.cons.call(null,(function (){var vec__16535 = col;var col_key = cljs.core.nth.call(null,vec__16535,(0),null);var col_name = cljs.core.nth.call(null,vec__16535,(1),null);var formatter = cljs.core.nth.call(null,vec__16535,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__16528.call(null,cljs.core.rest.call(null,s__16529__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__16524,map__16524__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__16524,map__16524__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__16524,map__16524__$1,record,columns))
;
clustermap.components.table.t16525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16524,map__16524__$1,record,columns){
return (function (_16527){var self__ = this;
var _16527__$1 = this;return self__.meta16526;
});})(map__16524,map__16524__$1,record,columns))
;
clustermap.components.table.t16525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16524,map__16524__$1,record,columns){
return (function (_16527,meta16526__$1){var self__ = this;
var _16527__$1 = this;return (new clustermap.components.table.t16525(self__.columns,self__.record,self__.map__16524,self__.p__16511,self__.render_table_row,meta16526__$1));
});})(map__16524,map__16524__$1,record,columns))
;
clustermap.components.table.__GT_t16525 = ((function (map__16524,map__16524__$1,record,columns){
return (function __GT_t16525(columns__$1,record__$1,map__16524__$2,p__16511__$1,render_table_row__$1,meta16526){return (new clustermap.components.table.t16525(columns__$1,record__$1,map__16524__$2,p__16511__$1,render_table_row__$1,meta16526));
});})(map__16524,map__16524__$1,record,columns))
;
}
return (new clustermap.components.table.t16525(columns,record,map__16524__$1,p__16511,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__16537,owner,opts){var map__16561 = p__16537;var map__16561__$1 = ((cljs.core.seq_QMARK_.call(null,map__16561))?cljs.core.apply.call(null,cljs.core.hash_map,map__16561):map__16561);var props = map__16561__$1;var table_data = cljs.core.get.call(null,map__16561__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__16562 = cljs.core.get.call(null,map__16561__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__16562__$1 = ((cljs.core.seq_QMARK_.call(null,map__16562))?cljs.core.apply.call(null,cljs.core.hash_map,map__16562):map__16562);var controls = map__16562__$1;var columns = cljs.core.get.call(null,map__16562__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__16562__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs16563 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs16563))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs16563)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16563))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs16564 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view){
return (function iter__16568(s__16569){return (new cljs.core.LazySeq(null,((function (attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view){
return (function (){var s__16569__$1 = s__16569;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16569__$1);if(temp__4126__auto__)
{var s__16569__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16569__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__16569__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__16571 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__16570 = (0);while(true){
if((i__16570 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__16570);cljs.core.chunk_append.call(null,b__16571,(function (){var vec__16574 = col;var col_key = cljs.core.nth.call(null,vec__16574,(0),null);var col_name = cljs.core.nth.call(null,vec__16574,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__16584 = (i__16570 + (1));
i__16570 = G__16584;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16571),iter__16568.call(null,cljs.core.chunk_rest.call(null,s__16569__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16571),null);
}
} else
{var col = cljs.core.first.call(null,s__16569__$2);return cljs.core.cons.call(null,(function (){var vec__16575 = col;var col_key = cljs.core.nth.call(null,vec__16575,(0),null);var col_name = cljs.core.nth.call(null,vec__16575,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__16568.call(null,cljs.core.rest.call(null,s__16569__$2)));
}
} else
{return null;
}
break;
}
});})(attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs16564))?sablono.interpreter.attributes.call(null,attrs16564):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16564))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16564)], null))));
})(),(function (){var attrs16565 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs16565))?sablono.interpreter.attributes.call(null,attrs16565):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16565))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16565)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16563),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs16566 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view){
return (function iter__16576(s__16577){return (new cljs.core.LazySeq(null,((function (attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view){
return (function (){var s__16577__$1 = s__16577;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16577__$1);if(temp__4126__auto__)
{var s__16577__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16577__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__16577__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__16579 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__16578 = (0);while(true){
if((i__16578 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__16578);cljs.core.chunk_append.call(null,b__16579,(function (){var vec__16582 = col;var col_key = cljs.core.nth.call(null,vec__16582,(0),null);var col_name = cljs.core.nth.call(null,vec__16582,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__16585 = (i__16578 + (1));
i__16578 = G__16585;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16579),iter__16576.call(null,cljs.core.chunk_rest.call(null,s__16577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16579),null);
}
} else
{var col = cljs.core.first.call(null,s__16577__$2);return cljs.core.cons.call(null,(function (){var vec__16583 = col;var col_key = cljs.core.nth.call(null,vec__16583,(0),null);var col_name = cljs.core.nth.call(null,vec__16583,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__16576.call(null,cljs.core.rest.call(null,s__16577__$2)));
}
} else
{return null;
}
break;
}
});})(attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs16566))?sablono.interpreter.attributes.call(null,attrs16566):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16566))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16566)], null))));
})(),(function (){var attrs16567 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs16563,map__16561,map__16561__$1,props,table_data,map__16562,map__16562__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs16567))?sablono.interpreter.attributes.call(null,attrs16567):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16567))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16567)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__16586,owner){var map__16601 = p__16586;var map__16601__$1 = ((cljs.core.seq_QMARK_.call(null,map__16601))?cljs.core.apply.call(null,cljs.core.hash_map,map__16601):map__16601);var props = map__16601__$1;var map__16602 = cljs.core.get.call(null,map__16601__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__16602__$1 = ((cljs.core.seq_QMARK_.call(null,map__16602))?cljs.core.apply.call(null,cljs.core.hash_map,map__16602):map__16602);var table_state = map__16602__$1;var table_data = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__16603 = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__16603__$1 = ((cljs.core.seq_QMARK_.call(null,map__16603))?cljs.core.apply.call(null,cljs.core.hash_map,map__16603):map__16603);var controls = map__16603__$1;var index = cljs.core.get.call(null,map__16603__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__16603__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__16603__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__16603__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__16603__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__16604 = cljs.core.get.call(null,map__16601__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__16604__$1 = ((cljs.core.seq_QMARK_.call(null,map__16604))?cljs.core.apply.call(null,cljs.core.hash_map,map__16604):map__16604);var filter_by_view = cljs.core.get.call(null,map__16604__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__16604__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__16601__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t16605 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t16605 = (function (sort_spec,map__16603,table_component,owner,map__16604,filter_by_view,props,table_data,map__16602,index,filter_spec,columns,table_state,controls,map__16601,bounds,size,p__16586,from,meta16606){
this.sort_spec = sort_spec;
this.map__16603 = map__16603;
this.table_component = table_component;
this.owner = owner;
this.map__16604 = map__16604;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.map__16602 = map__16602;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__16601 = map__16601;
this.bounds = bounds;
this.size = size;
this.p__16586 = p__16586;
this.from = from;
this.meta16606 = meta16606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t16605.cljs$lang$type = true;
clustermap.components.table.t16605.cljs$lang$ctorStr = "clustermap.components.table/t16605";
clustermap.components.table.t16605.cljs$lang$ctorPrWriter = ((function (map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t16605");
});})(map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t16605.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t16605.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__16608,p__16609){var self__ = this;
var map__16610 = p__16608;var map__16610__$1 = ((cljs.core.seq_QMARK_.call(null,map__16610))?cljs.core.apply.call(null,cljs.core.hash_map,map__16610):map__16610);var next_props = map__16610__$1;var map__16611 = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__16611__$1 = ((cljs.core.seq_QMARK_.call(null,map__16611))?cljs.core.apply.call(null,cljs.core.hash_map,map__16611):map__16611);var next_table_state = map__16611__$1;var next_table_data = cljs.core.get.call(null,map__16611__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__16612 = cljs.core.get.call(null,map__16611__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__16612__$1 = ((cljs.core.seq_QMARK_.call(null,map__16612))?cljs.core.apply.call(null,cljs.core.hash_map,map__16612):map__16612);var next_controls = map__16612__$1;var next_index = cljs.core.get.call(null,map__16612__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__16612__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__16612__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__16612__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__16612__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__16613 = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__16613__$1 = ((cljs.core.seq_QMARK_.call(null,map__16613))?cljs.core.apply.call(null,cljs.core.hash_map,map__16613):map__16613);var next_filter_by_view = cljs.core.get.call(null,map__16613__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__16613__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__16614 = p__16609;var map__16614__$1 = ((cljs.core.seq_QMARK_.call(null,map__16614))?cljs.core.apply.call(null,cljs.core.hash_map,map__16614):map__16614);var next_state = map__16614__$1;var table_data_resource = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t16605.prototype.om$core$IRender$ = true;
clustermap.components.table.t16605.prototype.om$core$IRender$render$arity$1 = ((function (map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t16605.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t16605.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds))
);
});})(map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t16605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds){
return (function (_16607){var self__ = this;
var _16607__$1 = this;return self__.meta16606;
});})(map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t16605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds){
return (function (_16607,meta16606__$1){var self__ = this;
var _16607__$1 = this;return (new clustermap.components.table.t16605(self__.sort_spec,self__.map__16603,self__.table_component,self__.owner,self__.map__16604,self__.filter_by_view,self__.props,self__.table_data,self__.map__16602,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__16601,self__.bounds,self__.size,self__.p__16586,self__.from,meta16606__$1));
});})(map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t16605 = ((function (map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t16605(sort_spec__$1,map__16603__$2,table_component__$1,owner__$1,map__16604__$2,filter_by_view__$1,props__$1,table_data__$1,map__16602__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__16601__$2,bounds__$1,size__$1,p__16586__$1,from__$1,meta16606){return (new clustermap.components.table.t16605(sort_spec__$1,map__16603__$2,table_component__$1,owner__$1,map__16604__$2,filter_by_view__$1,props__$1,table_data__$1,map__16602__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__16601__$2,bounds__$1,size__$1,p__16586__$1,from__$1,meta16606));
});})(map__16601,map__16601__$1,props,map__16602,map__16602__$1,table_state,table_data,map__16603,map__16603__$1,controls,index,sort_spec,from,size,columns,map__16604,map__16604__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t16605(sort_spec,map__16603__$1,table_component,owner,map__16604__$1,filter_by_view,props,table_data,map__16602__$1,index,filter_spec,columns,table_state,controls,map__16601__$1,bounds,size,p__16586,from,null));
});
