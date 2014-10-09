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
clustermap.components.table.order_col = (function order_col(controls,p__17382,col_key,col_name){var map__17392 = p__17382;var map__17392__$1 = ((cljs.core.seq_QMARK_.call(null,map__17392))?cljs.core.apply.call(null,cljs.core.hash_map,map__17392):map__17392);var table_data = map__17392__$1;var current_sort_spec = cljs.core.get.call(null,map__17392__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__17393 = current_sort_spec__$1;var G__17393__$1 = (((G__17393 == null))?null:cljs.core.keys.call(null,G__17393));var G__17393__$2 = (((G__17393__$1 == null))?null:cljs.core.first.call(null,G__17393__$1));return G__17393__$2;
})();var current_sort_dir = (function (){var G__17394 = current_sort_spec__$1;var G__17394__$1 = (((G__17394 == null))?null:current_sort_key.call(null,G__17394));var G__17394__$2 = (((G__17394__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__17394__$1));return G__17394__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__17392,map__17392__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__17395 = cljs.core._EQ_;var expr__17396 = current_sort_dir;if(cljs.core.truth_(pred__17395.call(null,"asc",expr__17396)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__17395.call(null,"desc",expr__17396)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__17392,map__17392__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__17398 = cljs.core._EQ_;var expr__17399 = current_sort_dir;if(cljs.core.truth_(pred__17398.call(null,"asc",expr__17399)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__17401,owner,opts){var map__17418 = p__17401;var map__17418__$1 = ((cljs.core.seq_QMARK_.call(null,map__17418))?cljs.core.apply.call(null,cljs.core.hash_map,map__17418):map__17418);var controls = cljs.core.get.call(null,map__17418__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17419 = cljs.core.get.call(null,map__17418__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17419__$1 = ((cljs.core.seq_QMARK_.call(null,map__17419))?cljs.core.apply.call(null,cljs.core.hash_map,map__17419):map__17419);var table_data = map__17419__$1;var count = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t17420 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17420 = (function (map__17418,owner,paginate,table_data,controls,size,map__17419,p__17401,from,count,opts,meta17421){
this.map__17418 = map__17418;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.map__17419 = map__17419;
this.p__17401 = p__17401;
this.from = from;
this.count = count;
this.opts = opts;
this.meta17421 = meta17421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17420.cljs$lang$type = true;
clustermap.components.table.t17420.cljs$lang$ctorStr = "clustermap.components.table/t17420";
clustermap.components.table.t17420.cljs$lang$ctorPrWriter = ((function (map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17420");
});})(map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size))
;
clustermap.components.table.t17420.prototype.om$core$IRender$ = true;
clustermap.components.table.t17420.prototype.om$core$IRender$render$arity$1 = ((function (map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs17423 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17423))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs17423)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17423))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs17424 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs17424))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs17424)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17424))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17424)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17423,this__9504__auto____$1,map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs17423,this__9504__auto____$1,map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17423),(function (){var attrs17425 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs17425))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs17425)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17425))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17425)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17423,this__9504__auto____$1,map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs17423,this__9504__auto____$1,map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size))
;
clustermap.components.table.t17420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size){
return (function (_17422){var self__ = this;
var _17422__$1 = this;return self__.meta17421;
});})(map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size))
;
clustermap.components.table.t17420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size){
return (function (_17422,meta17421__$1){var self__ = this;
var _17422__$1 = this;return (new clustermap.components.table.t17420(self__.map__17418,self__.owner,self__.paginate,self__.table_data,self__.controls,self__.size,self__.map__17419,self__.p__17401,self__.from,self__.count,self__.opts,meta17421__$1));
});})(map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t17420 = ((function (map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size){
return (function __GT_t17420(map__17418__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__17419__$2,p__17401__$1,from__$1,count__$1,opts__$1,meta17421){return (new clustermap.components.table.t17420(map__17418__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__17419__$2,p__17401__$1,from__$1,count__$1,opts__$1,meta17421));
});})(map__17418,map__17418__$1,controls,map__17419,map__17419__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t17420(map__17418__$1,owner,paginate,table_data,controls,size,map__17419__$1,p__17401,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__17434){var map__17447 = p__17434;var map__17447__$1 = ((cljs.core.seq_QMARK_.call(null,map__17447))?cljs.core.apply.call(null,cljs.core.hash_map,map__17447):map__17447);var record = cljs.core.get.call(null,map__17447__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__17447__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t17448 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17448 = (function (columns,record,map__17447,p__17434,render_table_row,meta17449){
this.columns = columns;
this.record = record;
this.map__17447 = map__17447;
this.p__17434 = p__17434;
this.render_table_row = render_table_row;
this.meta17449 = meta17449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17448.cljs$lang$type = true;
clustermap.components.table.t17448.cljs$lang$ctorStr = "clustermap.components.table/t17448";
clustermap.components.table.t17448.cljs$lang$ctorPrWriter = ((function (map__17447,map__17447__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17448");
});})(map__17447,map__17447__$1,record,columns))
;
clustermap.components.table.t17448.prototype.om$core$IRender$ = true;
clustermap.components.table.t17448.prototype.om$core$IRender$render$arity$1 = ((function (map__17447,map__17447__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__17447,map__17447__$1,record,columns){
return (function iter__17451(s__17452){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__17447,map__17447__$1,record,columns){
return (function (){var s__17452__$1 = s__17452;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17452__$1);if(temp__4126__auto__)
{var s__17452__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17452__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17452__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17454 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17453 = (0);while(true){
if((i__17453 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17453);cljs.core.chunk_append.call(null,b__17454,(function (){var vec__17457 = col;var col_key = cljs.core.nth.call(null,vec__17457,(0),null);var col_name = cljs.core.nth.call(null,vec__17457,(1),null);var formatter = cljs.core.nth.call(null,vec__17457,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__17459 = (i__17453 + (1));
i__17453 = G__17459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17454),iter__17451.call(null,cljs.core.chunk_rest.call(null,s__17452__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17454),null);
}
} else
{var col = cljs.core.first.call(null,s__17452__$2);return cljs.core.cons.call(null,(function (){var vec__17458 = col;var col_key = cljs.core.nth.call(null,vec__17458,(0),null);var col_name = cljs.core.nth.call(null,vec__17458,(1),null);var formatter = cljs.core.nth.call(null,vec__17458,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__17451.call(null,cljs.core.rest.call(null,s__17452__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__17447,map__17447__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__17447,map__17447__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__17447,map__17447__$1,record,columns))
;
clustermap.components.table.t17448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17447,map__17447__$1,record,columns){
return (function (_17450){var self__ = this;
var _17450__$1 = this;return self__.meta17449;
});})(map__17447,map__17447__$1,record,columns))
;
clustermap.components.table.t17448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17447,map__17447__$1,record,columns){
return (function (_17450,meta17449__$1){var self__ = this;
var _17450__$1 = this;return (new clustermap.components.table.t17448(self__.columns,self__.record,self__.map__17447,self__.p__17434,self__.render_table_row,meta17449__$1));
});})(map__17447,map__17447__$1,record,columns))
;
clustermap.components.table.__GT_t17448 = ((function (map__17447,map__17447__$1,record,columns){
return (function __GT_t17448(columns__$1,record__$1,map__17447__$2,p__17434__$1,render_table_row__$1,meta17449){return (new clustermap.components.table.t17448(columns__$1,record__$1,map__17447__$2,p__17434__$1,render_table_row__$1,meta17449));
});})(map__17447,map__17447__$1,record,columns))
;
}
return (new clustermap.components.table.t17448(columns,record,map__17447__$1,p__17434,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__17460,owner,opts){var map__17484 = p__17460;var map__17484__$1 = ((cljs.core.seq_QMARK_.call(null,map__17484))?cljs.core.apply.call(null,cljs.core.hash_map,map__17484):map__17484);var props = map__17484__$1;var table_data = cljs.core.get.call(null,map__17484__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17485 = cljs.core.get.call(null,map__17484__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17485__$1 = ((cljs.core.seq_QMARK_.call(null,map__17485))?cljs.core.apply.call(null,cljs.core.hash_map,map__17485):map__17485);var controls = map__17485__$1;var columns = cljs.core.get.call(null,map__17485__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__17485__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs17486 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17486))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs17486)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17486))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs17487 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view){
return (function iter__17491(s__17492){return (new cljs.core.LazySeq(null,((function (attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view){
return (function (){var s__17492__$1 = s__17492;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17492__$1);if(temp__4126__auto__)
{var s__17492__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17492__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17492__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17494 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17493 = (0);while(true){
if((i__17493 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17493);cljs.core.chunk_append.call(null,b__17494,(function (){var vec__17497 = col;var col_key = cljs.core.nth.call(null,vec__17497,(0),null);var col_name = cljs.core.nth.call(null,vec__17497,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__17507 = (i__17493 + (1));
i__17493 = G__17507;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17494),iter__17491.call(null,cljs.core.chunk_rest.call(null,s__17492__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17494),null);
}
} else
{var col = cljs.core.first.call(null,s__17492__$2);return cljs.core.cons.call(null,(function (){var vec__17498 = col;var col_key = cljs.core.nth.call(null,vec__17498,(0),null);var col_name = cljs.core.nth.call(null,vec__17498,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__17491.call(null,cljs.core.rest.call(null,s__17492__$2)));
}
} else
{return null;
}
break;
}
});})(attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs17487))?sablono.interpreter.attributes.call(null,attrs17487):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17487))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17487)], null))));
})(),(function (){var attrs17488 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs17488))?sablono.interpreter.attributes.call(null,attrs17488):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17488))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17488)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17486),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs17489 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view){
return (function iter__17499(s__17500){return (new cljs.core.LazySeq(null,((function (attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view){
return (function (){var s__17500__$1 = s__17500;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17500__$1);if(temp__4126__auto__)
{var s__17500__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17500__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__17500__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__17502 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__17501 = (0);while(true){
if((i__17501 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__17501);cljs.core.chunk_append.call(null,b__17502,(function (){var vec__17505 = col;var col_key = cljs.core.nth.call(null,vec__17505,(0),null);var col_name = cljs.core.nth.call(null,vec__17505,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__17508 = (i__17501 + (1));
i__17501 = G__17508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17502),iter__17499.call(null,cljs.core.chunk_rest.call(null,s__17500__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17502),null);
}
} else
{var col = cljs.core.first.call(null,s__17500__$2);return cljs.core.cons.call(null,(function (){var vec__17506 = col;var col_key = cljs.core.nth.call(null,vec__17506,(0),null);var col_name = cljs.core.nth.call(null,vec__17506,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__17499.call(null,cljs.core.rest.call(null,s__17500__$2)));
}
} else
{return null;
}
break;
}
});})(attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs17489))?sablono.interpreter.attributes.call(null,attrs17489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17489))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17489)], null))));
})(),(function (){var attrs17490 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs17486,map__17484,map__17484__$1,props,table_data,map__17485,map__17485__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs17490))?sablono.interpreter.attributes.call(null,attrs17490):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17490))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17490)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__17509,owner){var map__17524 = p__17509;var map__17524__$1 = ((cljs.core.seq_QMARK_.call(null,map__17524))?cljs.core.apply.call(null,cljs.core.hash_map,map__17524):map__17524);var props = map__17524__$1;var map__17525 = cljs.core.get.call(null,map__17524__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__17525__$1 = ((cljs.core.seq_QMARK_.call(null,map__17525))?cljs.core.apply.call(null,cljs.core.hash_map,map__17525):map__17525);var table_state = map__17525__$1;var table_data = cljs.core.get.call(null,map__17525__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17526 = cljs.core.get.call(null,map__17525__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17526__$1 = ((cljs.core.seq_QMARK_.call(null,map__17526))?cljs.core.apply.call(null,cljs.core.hash_map,map__17526):map__17526);var controls = map__17526__$1;var index = cljs.core.get.call(null,map__17526__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__17526__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__17526__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__17526__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__17526__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__17527 = cljs.core.get.call(null,map__17524__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__17527__$1 = ((cljs.core.seq_QMARK_.call(null,map__17527))?cljs.core.apply.call(null,cljs.core.hash_map,map__17527):map__17527);var filter_by_view = cljs.core.get.call(null,map__17527__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__17527__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__17524__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t17528 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17528 = (function (sort_spec,table_component,owner,filter_by_view,props,table_data,index,filter_spec,columns,map__17525,table_state,p__17509,map__17526,controls,bounds,size,map__17527,map__17524,from,meta17529){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__17525 = map__17525;
this.table_state = table_state;
this.p__17509 = p__17509;
this.map__17526 = map__17526;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__17527 = map__17527;
this.map__17524 = map__17524;
this.from = from;
this.meta17529 = meta17529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17528.cljs$lang$type = true;
clustermap.components.table.t17528.cljs$lang$ctorStr = "clustermap.components.table/t17528";
clustermap.components.table.t17528.cljs$lang$ctorPrWriter = ((function (map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t17528");
});})(map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17528.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t17528.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__17531,p__17532){var self__ = this;
var map__17533 = p__17531;var map__17533__$1 = ((cljs.core.seq_QMARK_.call(null,map__17533))?cljs.core.apply.call(null,cljs.core.hash_map,map__17533):map__17533);var next_props = map__17533__$1;var map__17534 = cljs.core.get.call(null,map__17533__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__17534__$1 = ((cljs.core.seq_QMARK_.call(null,map__17534))?cljs.core.apply.call(null,cljs.core.hash_map,map__17534):map__17534);var next_table_state = map__17534__$1;var next_table_data = cljs.core.get.call(null,map__17534__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17535 = cljs.core.get.call(null,map__17534__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17535__$1 = ((cljs.core.seq_QMARK_.call(null,map__17535))?cljs.core.apply.call(null,cljs.core.hash_map,map__17535):map__17535);var next_controls = map__17535__$1;var next_index = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__17536 = cljs.core.get.call(null,map__17533__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__17536__$1 = ((cljs.core.seq_QMARK_.call(null,map__17536))?cljs.core.apply.call(null,cljs.core.hash_map,map__17536):map__17536);var next_filter_by_view = cljs.core.get.call(null,map__17536__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__17536__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__17533__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__17537 = p__17532;var map__17537__$1 = ((cljs.core.seq_QMARK_.call(null,map__17537))?cljs.core.apply.call(null,cljs.core.hash_map,map__17537):map__17537);var next_state = map__17537__$1;var table_data_resource = cljs.core.get.call(null,map__17537__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17528.prototype.om$core$IRender$ = true;
clustermap.components.table.t17528.prototype.om$core$IRender$render$arity$1 = ((function (map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17528.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t17528.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds))
);
});})(map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds){
return (function (_17530){var self__ = this;
var _17530__$1 = this;return self__.meta17529;
});})(map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds){
return (function (_17530,meta17529__$1){var self__ = this;
var _17530__$1 = this;return (new clustermap.components.table.t17528(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.map__17525,self__.table_state,self__.p__17509,self__.map__17526,self__.controls,self__.bounds,self__.size,self__.map__17527,self__.map__17524,self__.from,meta17529__$1));
});})(map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t17528 = ((function (map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t17528(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__17525__$2,table_state__$1,p__17509__$1,map__17526__$2,controls__$1,bounds__$1,size__$1,map__17527__$2,map__17524__$2,from__$1,meta17529){return (new clustermap.components.table.t17528(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__17525__$2,table_state__$1,p__17509__$1,map__17526__$2,controls__$1,bounds__$1,size__$1,map__17527__$2,map__17524__$2,from__$1,meta17529));
});})(map__17524,map__17524__$1,props,map__17525,map__17525__$1,table_state,table_data,map__17526,map__17526__$1,controls,index,sort_spec,from,size,columns,map__17527,map__17527__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t17528(sort_spec,table_component,owner,filter_by_view,props,table_data,index,filter_spec,columns,map__17525__$1,table_state,p__17509,map__17526__$1,controls,bounds,size,map__17527__$1,map__17524__$1,from,null));
});
