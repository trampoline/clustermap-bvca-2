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
clustermap.components.table.order_col = (function order_col(controls,p__17385,col_key,col_name){var map__17395 = p__17385;var map__17395__$1 = ((cljs.core.seq_QMARK_.call(null,map__17395))?cljs.core.apply.call(null,cljs.core.hash_map,map__17395):map__17395);var table_data = map__17395__$1;var current_sort_spec = cljs.core.get.call(null,map__17395__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__17396 = current_sort_spec__$1;var G__17396__$1 = (((G__17396 == null))?null:cljs.core.keys.call(null,G__17396));var G__17396__$2 = (((G__17396__$1 == null))?null:cljs.core.first.call(null,G__17396__$1));return G__17396__$2;
})();var current_sort_dir = (function (){var G__17397 = current_sort_spec__$1;var G__17397__$1 = (((G__17397 == null))?null:current_sort_key.call(null,G__17397));var G__17397__$2 = (((G__17397__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__17397__$1));return G__17397__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__17395,map__17395__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__17398 = cljs.core._EQ_;var expr__17399 = current_sort_dir;if(cljs.core.truth_(pred__17398.call(null,"asc",expr__17399)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__17398.call(null,"desc",expr__17399)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__17395,map__17395__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__17401 = cljs.core._EQ_;var expr__17402 = current_sort_dir;if(cljs.core.truth_(pred__17401.call(null,"asc",expr__17402)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__17404,owner,opts){var map__17421 = p__17404;var map__17421__$1 = ((cljs.core.seq_QMARK_.call(null,map__17421))?cljs.core.apply.call(null,cljs.core.hash_map,map__17421):map__17421);var controls = cljs.core.get.call(null,map__17421__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17422 = cljs.core.get.call(null,map__17421__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17422__$1 = ((cljs.core.seq_QMARK_.call(null,map__17422))?cljs.core.apply.call(null,cljs.core.hash_map,map__17422):map__17422);var table_data = map__17422__$1;var count = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t17423 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17423 = (function (p__17404,owner,paginate,table_data,map__17422,controls,size,from,map__17421,count,opts,meta17424){
this.p__17404 = p__17404;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__17422 = map__17422;
this.controls = controls;
this.size = size;
this.from = from;
this.map__17421 = map__17421;
this.count = count;
this.opts = opts;
this.meta17424 = meta17424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17423.cljs$lang$type = true;
clustermap.components.table.t17423.cljs$lang$ctorStr = "clustermap.components.table/t17423";
clustermap.components.table.t17423.cljs$lang$ctorPrWriter = ((function (map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17423");
});})(map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size))
;
clustermap.components.table.t17423.prototype.om$core$IRender$ = true;
clustermap.components.table.t17423.prototype.om$core$IRender$render$arity$1 = ((function (map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs17426 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17426))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs17426)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17426))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs17427 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs17427))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs17427)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17427))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17427)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17426,this__9504__auto____$1,map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs17426,this__9504__auto____$1,map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17426),(function (){var attrs17428 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs17428))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs17428)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17428))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17428)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17426,this__9504__auto____$1,map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs17426,this__9504__auto____$1,map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size))
;
clustermap.components.table.t17423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size){
return (function (_17425){var self__ = this;
var _17425__$1 = this;return self__.meta17424;
});})(map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size))
;
clustermap.components.table.t17423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size){
return (function (_17425,meta17424__$1){var self__ = this;
var _17425__$1 = this;return (new clustermap.components.table.t17423(self__.p__17404,self__.owner,self__.paginate,self__.table_data,self__.map__17422,self__.controls,self__.size,self__.from,self__.map__17421,self__.count,self__.opts,meta17424__$1));
});})(map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t17423 = ((function (map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size){
return (function __GT_t17423(p__17404__$1,owner__$1,paginate__$1,table_data__$1,map__17422__$2,controls__$1,size__$1,from__$1,map__17421__$2,count__$1,opts__$1,meta17424){return (new clustermap.components.table.t17423(p__17404__$1,owner__$1,paginate__$1,table_data__$1,map__17422__$2,controls__$1,size__$1,from__$1,map__17421__$2,count__$1,opts__$1,meta17424));
});})(map__17421,map__17421__$1,controls,map__17422,map__17422__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t17423(p__17404,owner,paginate,table_data,map__17422__$1,controls,size,from,map__17421__$1,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__17437){var map__17450 = p__17437;var map__17450__$1 = ((cljs.core.seq_QMARK_.call(null,map__17450))?cljs.core.apply.call(null,cljs.core.hash_map,map__17450):map__17450);var record = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t17451 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17451 = (function (columns,record,map__17450,p__17437,render_table_row,meta17452){
this.columns = columns;
this.record = record;
this.map__17450 = map__17450;
this.p__17437 = p__17437;
this.render_table_row = render_table_row;
this.meta17452 = meta17452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17451.cljs$lang$type = true;
clustermap.components.table.t17451.cljs$lang$ctorStr = "clustermap.components.table/t17451";
clustermap.components.table.t17451.cljs$lang$ctorPrWriter = ((function (map__17450,map__17450__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17451");
});})(map__17450,map__17450__$1,record,columns))
;
clustermap.components.table.t17451.prototype.om$core$IRender$ = true;
clustermap.components.table.t17451.prototype.om$core$IRender$render$arity$1 = ((function (map__17450,map__17450__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__17450,map__17450__$1,record,columns){
return (function iter__17454(s__17455){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__17450,map__17450__$1,record,columns){
return (function (){var s__17455__$1 = s__17455;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17455__$1);if(temp__4126__auto__)
{var s__17455__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17455__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17455__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17457 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17456 = (0);while(true){
if((i__17456 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17456);cljs.core.chunk_append.call(null,b__17457,(function (){var vec__17460 = col;var col_key = cljs.core.nth.call(null,vec__17460,(0),null);var col_name = cljs.core.nth.call(null,vec__17460,(1),null);var formatter = cljs.core.nth.call(null,vec__17460,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__17462 = (i__17456 + (1));
i__17456 = G__17462;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17457),iter__17454.call(null,cljs.core.chunk_rest.call(null,s__17455__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17457),null);
}
} else
{var col = cljs.core.first.call(null,s__17455__$2);return cljs.core.cons.call(null,(function (){var vec__17461 = col;var col_key = cljs.core.nth.call(null,vec__17461,(0),null);var col_name = cljs.core.nth.call(null,vec__17461,(1),null);var formatter = cljs.core.nth.call(null,vec__17461,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__17454.call(null,cljs.core.rest.call(null,s__17455__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__17450,map__17450__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__17450,map__17450__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__17450,map__17450__$1,record,columns))
;
clustermap.components.table.t17451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17450,map__17450__$1,record,columns){
return (function (_17453){var self__ = this;
var _17453__$1 = this;return self__.meta17452;
});})(map__17450,map__17450__$1,record,columns))
;
clustermap.components.table.t17451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17450,map__17450__$1,record,columns){
return (function (_17453,meta17452__$1){var self__ = this;
var _17453__$1 = this;return (new clustermap.components.table.t17451(self__.columns,self__.record,self__.map__17450,self__.p__17437,self__.render_table_row,meta17452__$1));
});})(map__17450,map__17450__$1,record,columns))
;
clustermap.components.table.__GT_t17451 = ((function (map__17450,map__17450__$1,record,columns){
return (function __GT_t17451(columns__$1,record__$1,map__17450__$2,p__17437__$1,render_table_row__$1,meta17452){return (new clustermap.components.table.t17451(columns__$1,record__$1,map__17450__$2,p__17437__$1,render_table_row__$1,meta17452));
});})(map__17450,map__17450__$1,record,columns))
;
}
return (new clustermap.components.table.t17451(columns,record,map__17450__$1,p__17437,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__17463,owner,opts){var map__17487 = p__17463;var map__17487__$1 = ((cljs.core.seq_QMARK_.call(null,map__17487))?cljs.core.apply.call(null,cljs.core.hash_map,map__17487):map__17487);var props = map__17487__$1;var table_data = cljs.core.get.call(null,map__17487__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17488 = cljs.core.get.call(null,map__17487__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17488__$1 = ((cljs.core.seq_QMARK_.call(null,map__17488))?cljs.core.apply.call(null,cljs.core.hash_map,map__17488):map__17488);var controls = map__17488__$1;var columns = cljs.core.get.call(null,map__17488__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__17488__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs17489 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17489))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs17489)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17489))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs17490 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view){
return (function iter__17494(s__17495){return (new cljs.core.LazySeq(null,((function (attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view){
return (function (){var s__17495__$1 = s__17495;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17495__$1);if(temp__4126__auto__)
{var s__17495__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17495__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17495__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17497 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17496 = (0);while(true){
if((i__17496 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17496);cljs.core.chunk_append.call(null,b__17497,(function (){var vec__17500 = col;var col_key = cljs.core.nth.call(null,vec__17500,(0),null);var col_name = cljs.core.nth.call(null,vec__17500,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__17510 = (i__17496 + (1));
i__17496 = G__17510;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17497),iter__17494.call(null,cljs.core.chunk_rest.call(null,s__17495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17497),null);
}
} else
{var col = cljs.core.first.call(null,s__17495__$2);return cljs.core.cons.call(null,(function (){var vec__17501 = col;var col_key = cljs.core.nth.call(null,vec__17501,(0),null);var col_name = cljs.core.nth.call(null,vec__17501,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__17494.call(null,cljs.core.rest.call(null,s__17495__$2)));
}
} else
{return null;
}
break;
}
});})(attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs17490))?sablono.interpreter.attributes.call(null,attrs17490):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17490))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17490)], null))));
})(),(function (){var attrs17491 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs17491))?sablono.interpreter.attributes.call(null,attrs17491):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17491))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17491)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17489),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs17492 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view){
return (function iter__17502(s__17503){return (new cljs.core.LazySeq(null,((function (attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view){
return (function (){var s__17503__$1 = s__17503;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17503__$1);if(temp__4126__auto__)
{var s__17503__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17503__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17503__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17505 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17504 = (0);while(true){
if((i__17504 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17504);cljs.core.chunk_append.call(null,b__17505,(function (){var vec__17508 = col;var col_key = cljs.core.nth.call(null,vec__17508,(0),null);var col_name = cljs.core.nth.call(null,vec__17508,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__17511 = (i__17504 + (1));
i__17504 = G__17511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17505),iter__17502.call(null,cljs.core.chunk_rest.call(null,s__17503__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17505),null);
}
} else
{var col = cljs.core.first.call(null,s__17503__$2);return cljs.core.cons.call(null,(function (){var vec__17509 = col;var col_key = cljs.core.nth.call(null,vec__17509,(0),null);var col_name = cljs.core.nth.call(null,vec__17509,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__17502.call(null,cljs.core.rest.call(null,s__17503__$2)));
}
} else
{return null;
}
break;
}
});})(attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs17492))?sablono.interpreter.attributes.call(null,attrs17492):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17492))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17492)], null))));
})(),(function (){var attrs17493 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs17489,map__17487,map__17487__$1,props,table_data,map__17488,map__17488__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs17493))?sablono.interpreter.attributes.call(null,attrs17493):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17493))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17493)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__17512,owner){var map__17527 = p__17512;var map__17527__$1 = ((cljs.core.seq_QMARK_.call(null,map__17527))?cljs.core.apply.call(null,cljs.core.hash_map,map__17527):map__17527);var props = map__17527__$1;var map__17528 = cljs.core.get.call(null,map__17527__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__17528__$1 = ((cljs.core.seq_QMARK_.call(null,map__17528))?cljs.core.apply.call(null,cljs.core.hash_map,map__17528):map__17528);var table_state = map__17528__$1;var table_data = cljs.core.get.call(null,map__17528__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17529 = cljs.core.get.call(null,map__17528__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17529__$1 = ((cljs.core.seq_QMARK_.call(null,map__17529))?cljs.core.apply.call(null,cljs.core.hash_map,map__17529):map__17529);var controls = map__17529__$1;var index = cljs.core.get.call(null,map__17529__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__17529__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__17529__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__17529__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__17529__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__17530 = cljs.core.get.call(null,map__17527__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__17530__$1 = ((cljs.core.seq_QMARK_.call(null,map__17530))?cljs.core.apply.call(null,cljs.core.hash_map,map__17530):map__17530);var filter_by_view = cljs.core.get.call(null,map__17530__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__17530__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__17527__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t17531 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17531 = (function (map__17528,sort_spec,table_component,owner,map__17530,filter_by_view,props,table_data,index,filter_spec,columns,table_state,map__17529,p__17512,controls,bounds,size,map__17527,from,meta17532){
this.map__17528 = map__17528;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.map__17530 = map__17530;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.map__17529 = map__17529;
this.p__17512 = p__17512;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__17527 = map__17527;
this.from = from;
this.meta17532 = meta17532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17531.cljs$lang$type = true;
clustermap.components.table.t17531.cljs$lang$ctorStr = "clustermap.components.table/t17531";
clustermap.components.table.t17531.cljs$lang$ctorPrWriter = ((function (map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17531");
});})(map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17531.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t17531.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__17534,p__17535){var self__ = this;
var map__17536 = p__17534;var map__17536__$1 = ((cljs.core.seq_QMARK_.call(null,map__17536))?cljs.core.apply.call(null,cljs.core.hash_map,map__17536):map__17536);var next_props = map__17536__$1;var map__17537 = cljs.core.get.call(null,map__17536__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__17537__$1 = ((cljs.core.seq_QMARK_.call(null,map__17537))?cljs.core.apply.call(null,cljs.core.hash_map,map__17537):map__17537);var next_table_state = map__17537__$1;var next_table_data = cljs.core.get.call(null,map__17537__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17538 = cljs.core.get.call(null,map__17537__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17538__$1 = ((cljs.core.seq_QMARK_.call(null,map__17538))?cljs.core.apply.call(null,cljs.core.hash_map,map__17538):map__17538);var next_controls = map__17538__$1;var next_index = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__17539 = cljs.core.get.call(null,map__17536__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__17539__$1 = ((cljs.core.seq_QMARK_.call(null,map__17539))?cljs.core.apply.call(null,cljs.core.hash_map,map__17539):map__17539);var next_filter_by_view = cljs.core.get.call(null,map__17539__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__17539__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__17536__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__17540 = p__17535;var map__17540__$1 = ((cljs.core.seq_QMARK_.call(null,map__17540))?cljs.core.apply.call(null,cljs.core.hash_map,map__17540):map__17540);var next_state = map__17540__$1;var table_data_resource = cljs.core.get.call(null,map__17540__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17531.prototype.om$core$IRender$ = true;
clustermap.components.table.t17531.prototype.om$core$IRender$render$arity$1 = ((function (map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17531.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t17531.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds))
);
});})(map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds){
return (function (_17533){var self__ = this;
var _17533__$1 = this;return self__.meta17532;
});})(map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds){
return (function (_17533,meta17532__$1){var self__ = this;
var _17533__$1 = this;return (new clustermap.components.table.t17531(self__.map__17528,self__.sort_spec,self__.table_component,self__.owner,self__.map__17530,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.map__17529,self__.p__17512,self__.controls,self__.bounds,self__.size,self__.map__17527,self__.from,meta17532__$1));
});})(map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t17531 = ((function (map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t17531(map__17528__$2,sort_spec__$1,table_component__$1,owner__$1,map__17530__$2,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__17529__$2,p__17512__$1,controls__$1,bounds__$1,size__$1,map__17527__$2,from__$1,meta17532){return (new clustermap.components.table.t17531(map__17528__$2,sort_spec__$1,table_component__$1,owner__$1,map__17530__$2,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__17529__$2,p__17512__$1,controls__$1,bounds__$1,size__$1,map__17527__$2,from__$1,meta17532));
});})(map__17527,map__17527__$1,props,map__17528,map__17528__$1,table_state,table_data,map__17529,map__17529__$1,controls,index,sort_spec,from,size,columns,map__17530,map__17530__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t17531(map__17528__$1,sort_spec,table_component,owner,map__17530__$1,filter_by_view,props,table_data,index,filter_spec,columns,table_state,map__17529__$1,p__17512,controls,bounds,size,map__17527__$1,from,null));
});
