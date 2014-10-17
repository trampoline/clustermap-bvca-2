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
clustermap.components.table.order_col = (function order_col(controls,p__32322,col_key,col_name){var map__32332 = p__32322;var map__32332__$1 = ((cljs.core.seq_QMARK_.call(null,map__32332))?cljs.core.apply.call(null,cljs.core.hash_map,map__32332):map__32332);var table_data = map__32332__$1;var current_sort_spec = cljs.core.get.call(null,map__32332__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__32333 = current_sort_spec__$1;var G__32333__$1 = (((G__32333 == null))?null:cljs.core.keys.call(null,G__32333));var G__32333__$2 = (((G__32333__$1 == null))?null:cljs.core.first.call(null,G__32333__$1));return G__32333__$2;
})();var current_sort_dir = (function (){var G__32334 = current_sort_spec__$1;var G__32334__$1 = (((G__32334 == null))?null:current_sort_key.call(null,G__32334));var G__32334__$2 = (((G__32334__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__32334__$1));return G__32334__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__32332,map__32332__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__32335 = cljs.core._EQ_;var expr__32336 = current_sort_dir;if(cljs.core.truth_(pred__32335.call(null,"asc",expr__32336)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__32335.call(null,"desc",expr__32336)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__32332,map__32332__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__32338 = cljs.core._EQ_;var expr__32339 = current_sort_dir;if(cljs.core.truth_(pred__32338.call(null,"asc",expr__32339)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__32341,owner,opts){var map__32358 = p__32341;var map__32358__$1 = ((cljs.core.seq_QMARK_.call(null,map__32358))?cljs.core.apply.call(null,cljs.core.hash_map,map__32358):map__32358);var controls = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32359 = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32359__$1 = ((cljs.core.seq_QMARK_.call(null,map__32359))?cljs.core.apply.call(null,cljs.core.hash_map,map__32359):map__32359);var table_data = map__32359__$1;var count = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t32360 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32360 = (function (owner,map__32358,map__32359,paginate,table_data,controls,size,p__32341,from,count,opts,meta32361){
this.owner = owner;
this.map__32358 = map__32358;
this.map__32359 = map__32359;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.p__32341 = p__32341;
this.from = from;
this.count = count;
this.opts = opts;
this.meta32361 = meta32361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32360.cljs$lang$type = true;
clustermap.components.table.t32360.cljs$lang$ctorStr = "clustermap.components.table/t32360";
clustermap.components.table.t32360.cljs$lang$ctorPrWriter = ((function (map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32360");
});})(map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size))
;
clustermap.components.table.t32360.prototype.om$core$IRender$ = true;
clustermap.components.table.t32360.prototype.om$core$IRender$render$arity$1 = ((function (map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs32363 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32363))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs32363)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32363))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs32364 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32364))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs32364)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32364))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32364)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs32363,this__9504__auto____$1,map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs32363,this__9504__auto____$1,map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32363),(function (){var attrs32365 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32365))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs32365)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32365))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32365)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs32363,this__9504__auto____$1,map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs32363,this__9504__auto____$1,map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size))
;
clustermap.components.table.t32360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size){
return (function (_32362){var self__ = this;
var _32362__$1 = this;return self__.meta32361;
});})(map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size))
;
clustermap.components.table.t32360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size){
return (function (_32362,meta32361__$1){var self__ = this;
var _32362__$1 = this;return (new clustermap.components.table.t32360(self__.owner,self__.map__32358,self__.map__32359,self__.paginate,self__.table_data,self__.controls,self__.size,self__.p__32341,self__.from,self__.count,self__.opts,meta32361__$1));
});})(map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t32360 = ((function (map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size){
return (function __GT_t32360(owner__$1,map__32358__$2,map__32359__$2,paginate__$1,table_data__$1,controls__$1,size__$1,p__32341__$1,from__$1,count__$1,opts__$1,meta32361){return (new clustermap.components.table.t32360(owner__$1,map__32358__$2,map__32359__$2,paginate__$1,table_data__$1,controls__$1,size__$1,p__32341__$1,from__$1,count__$1,opts__$1,meta32361));
});})(map__32358,map__32358__$1,controls,map__32359,map__32359__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t32360(owner,map__32358__$1,map__32359__$1,paginate,table_data,controls,size,p__32341,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__32374){var map__32387 = p__32374;var map__32387__$1 = ((cljs.core.seq_QMARK_.call(null,map__32387))?cljs.core.apply.call(null,cljs.core.hash_map,map__32387):map__32387);var record = cljs.core.get.call(null,map__32387__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__32387__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t32388 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32388 = (function (columns,record,map__32387,p__32374,render_table_row,meta32389){
this.columns = columns;
this.record = record;
this.map__32387 = map__32387;
this.p__32374 = p__32374;
this.render_table_row = render_table_row;
this.meta32389 = meta32389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32388.cljs$lang$type = true;
clustermap.components.table.t32388.cljs$lang$ctorStr = "clustermap.components.table/t32388";
clustermap.components.table.t32388.cljs$lang$ctorPrWriter = ((function (map__32387,map__32387__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32388");
});})(map__32387,map__32387__$1,record,columns))
;
clustermap.components.table.t32388.prototype.om$core$IRender$ = true;
clustermap.components.table.t32388.prototype.om$core$IRender$render$arity$1 = ((function (map__32387,map__32387__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__32387,map__32387__$1,record,columns){
return (function iter__32391(s__32392){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__32387,map__32387__$1,record,columns){
return (function (){var s__32392__$1 = s__32392;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32392__$1);if(temp__4126__auto__)
{var s__32392__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32392__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32392__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32394 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32393 = (0);while(true){
if((i__32393 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32393);cljs.core.chunk_append.call(null,b__32394,(function (){var vec__32397 = col;var col_key = cljs.core.nth.call(null,vec__32397,(0),null);var col_name = cljs.core.nth.call(null,vec__32397,(1),null);var formatter = cljs.core.nth.call(null,vec__32397,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__32399 = (i__32393 + (1));
i__32393 = G__32399;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32394),iter__32391.call(null,cljs.core.chunk_rest.call(null,s__32392__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32394),null);
}
} else
{var col = cljs.core.first.call(null,s__32392__$2);return cljs.core.cons.call(null,(function (){var vec__32398 = col;var col_key = cljs.core.nth.call(null,vec__32398,(0),null);var col_name = cljs.core.nth.call(null,vec__32398,(1),null);var formatter = cljs.core.nth.call(null,vec__32398,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__32391.call(null,cljs.core.rest.call(null,s__32392__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__32387,map__32387__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__32387,map__32387__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__32387,map__32387__$1,record,columns))
;
clustermap.components.table.t32388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32387,map__32387__$1,record,columns){
return (function (_32390){var self__ = this;
var _32390__$1 = this;return self__.meta32389;
});})(map__32387,map__32387__$1,record,columns))
;
clustermap.components.table.t32388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32387,map__32387__$1,record,columns){
return (function (_32390,meta32389__$1){var self__ = this;
var _32390__$1 = this;return (new clustermap.components.table.t32388(self__.columns,self__.record,self__.map__32387,self__.p__32374,self__.render_table_row,meta32389__$1));
});})(map__32387,map__32387__$1,record,columns))
;
clustermap.components.table.__GT_t32388 = ((function (map__32387,map__32387__$1,record,columns){
return (function __GT_t32388(columns__$1,record__$1,map__32387__$2,p__32374__$1,render_table_row__$1,meta32389){return (new clustermap.components.table.t32388(columns__$1,record__$1,map__32387__$2,p__32374__$1,render_table_row__$1,meta32389));
});})(map__32387,map__32387__$1,record,columns))
;
}
return (new clustermap.components.table.t32388(columns,record,map__32387__$1,p__32374,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__32400,owner,opts){var map__32424 = p__32400;var map__32424__$1 = ((cljs.core.seq_QMARK_.call(null,map__32424))?cljs.core.apply.call(null,cljs.core.hash_map,map__32424):map__32424);var props = map__32424__$1;var table_data = cljs.core.get.call(null,map__32424__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32425 = cljs.core.get.call(null,map__32424__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32425__$1 = ((cljs.core.seq_QMARK_.call(null,map__32425))?cljs.core.apply.call(null,cljs.core.hash_map,map__32425):map__32425);var controls = map__32425__$1;var columns = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs32426 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32426))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs32426)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32426))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32427 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view){
return (function iter__32431(s__32432){return (new cljs.core.LazySeq(null,((function (attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view){
return (function (){var s__32432__$1 = s__32432;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32432__$1);if(temp__4126__auto__)
{var s__32432__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32432__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32432__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32434 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32433 = (0);while(true){
if((i__32433 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32433);cljs.core.chunk_append.call(null,b__32434,(function (){var vec__32437 = col;var col_key = cljs.core.nth.call(null,vec__32437,(0),null);var col_name = cljs.core.nth.call(null,vec__32437,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__32447 = (i__32433 + (1));
i__32433 = G__32447;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32434),iter__32431.call(null,cljs.core.chunk_rest.call(null,s__32432__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32434),null);
}
} else
{var col = cljs.core.first.call(null,s__32432__$2);return cljs.core.cons.call(null,(function (){var vec__32438 = col;var col_key = cljs.core.nth.call(null,vec__32438,(0),null);var col_name = cljs.core.nth.call(null,vec__32438,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__32431.call(null,cljs.core.rest.call(null,s__32432__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32427))?sablono.interpreter.attributes.call(null,attrs32427):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32427))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32427)], null))));
})(),(function (){var attrs32428 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32428))?sablono.interpreter.attributes.call(null,attrs32428):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32428))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32428)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32426),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32429 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view){
return (function iter__32439(s__32440){return (new cljs.core.LazySeq(null,((function (attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view){
return (function (){var s__32440__$1 = s__32440;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32440__$1);if(temp__4126__auto__)
{var s__32440__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32440__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32440__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32442 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32441 = (0);while(true){
if((i__32441 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__32441);cljs.core.chunk_append.call(null,b__32442,(function (){var vec__32445 = col;var col_key = cljs.core.nth.call(null,vec__32445,(0),null);var col_name = cljs.core.nth.call(null,vec__32445,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__32448 = (i__32441 + (1));
i__32441 = G__32448;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32442),iter__32439.call(null,cljs.core.chunk_rest.call(null,s__32440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32442),null);
}
} else
{var col = cljs.core.first.call(null,s__32440__$2);return cljs.core.cons.call(null,(function (){var vec__32446 = col;var col_key = cljs.core.nth.call(null,vec__32446,(0),null);var col_name = cljs.core.nth.call(null,vec__32446,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__32439.call(null,cljs.core.rest.call(null,s__32440__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32429))?sablono.interpreter.attributes.call(null,attrs32429):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32429))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32429)], null))));
})(),(function (){var attrs32430 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32426,map__32424,map__32424__$1,props,table_data,map__32425,map__32425__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32430))?sablono.interpreter.attributes.call(null,attrs32430):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32430))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32430)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__32449,owner){var map__32464 = p__32449;var map__32464__$1 = ((cljs.core.seq_QMARK_.call(null,map__32464))?cljs.core.apply.call(null,cljs.core.hash_map,map__32464):map__32464);var props = map__32464__$1;var map__32465 = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32465__$1 = ((cljs.core.seq_QMARK_.call(null,map__32465))?cljs.core.apply.call(null,cljs.core.hash_map,map__32465):map__32465);var table_state = map__32465__$1;var table_data = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32466 = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32466__$1 = ((cljs.core.seq_QMARK_.call(null,map__32466))?cljs.core.apply.call(null,cljs.core.hash_map,map__32466):map__32466);var controls = map__32466__$1;var index = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__32467 = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32467__$1 = ((cljs.core.seq_QMARK_.call(null,map__32467))?cljs.core.apply.call(null,cljs.core.hash_map,map__32467):map__32467);var filter_by_view = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t32468 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32468 = (function (sort_spec,map__32466,table_component,owner,p__32449,filter_by_view,props,map__32467,table_data,map__32464,index,filter_spec,columns,table_state,controls,bounds,size,map__32465,from,meta32469){
this.sort_spec = sort_spec;
this.map__32466 = map__32466;
this.table_component = table_component;
this.owner = owner;
this.p__32449 = p__32449;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__32467 = map__32467;
this.table_data = table_data;
this.map__32464 = map__32464;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__32465 = map__32465;
this.from = from;
this.meta32469 = meta32469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32468.cljs$lang$type = true;
clustermap.components.table.t32468.cljs$lang$ctorStr = "clustermap.components.table/t32468";
clustermap.components.table.t32468.cljs$lang$ctorPrWriter = ((function (map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t32468");
});})(map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32468.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t32468.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__32471,p__32472){var self__ = this;
var map__32473 = p__32471;var map__32473__$1 = ((cljs.core.seq_QMARK_.call(null,map__32473))?cljs.core.apply.call(null,cljs.core.hash_map,map__32473):map__32473);var next_props = map__32473__$1;var map__32474 = cljs.core.get.call(null,map__32473__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32474__$1 = ((cljs.core.seq_QMARK_.call(null,map__32474))?cljs.core.apply.call(null,cljs.core.hash_map,map__32474):map__32474);var next_table_state = map__32474__$1;var next_table_data = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32475 = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32475__$1 = ((cljs.core.seq_QMARK_.call(null,map__32475))?cljs.core.apply.call(null,cljs.core.hash_map,map__32475):map__32475);var next_controls = map__32475__$1;var next_index = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__32476 = cljs.core.get.call(null,map__32473__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32476__$1 = ((cljs.core.seq_QMARK_.call(null,map__32476))?cljs.core.apply.call(null,cljs.core.hash_map,map__32476):map__32476);var next_filter_by_view = cljs.core.get.call(null,map__32476__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__32476__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__32473__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__32477 = p__32472;var map__32477__$1 = ((cljs.core.seq_QMARK_.call(null,map__32477))?cljs.core.apply.call(null,cljs.core.hash_map,map__32477):map__32477);var next_state = map__32477__$1;var table_data_resource = cljs.core.get.call(null,map__32477__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32468.prototype.om$core$IRender$ = true;
clustermap.components.table.t32468.prototype.om$core$IRender$render$arity$1 = ((function (map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32468.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t32468.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds))
);
});})(map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds){
return (function (_32470){var self__ = this;
var _32470__$1 = this;return self__.meta32469;
});})(map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds){
return (function (_32470,meta32469__$1){var self__ = this;
var _32470__$1 = this;return (new clustermap.components.table.t32468(self__.sort_spec,self__.map__32466,self__.table_component,self__.owner,self__.p__32449,self__.filter_by_view,self__.props,self__.map__32467,self__.table_data,self__.map__32464,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.bounds,self__.size,self__.map__32465,self__.from,meta32469__$1));
});})(map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t32468 = ((function (map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t32468(sort_spec__$1,map__32466__$2,table_component__$1,owner__$1,p__32449__$1,filter_by_view__$1,props__$1,map__32467__$2,table_data__$1,map__32464__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__32465__$2,from__$1,meta32469){return (new clustermap.components.table.t32468(sort_spec__$1,map__32466__$2,table_component__$1,owner__$1,p__32449__$1,filter_by_view__$1,props__$1,map__32467__$2,table_data__$1,map__32464__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__32465__$2,from__$1,meta32469));
});})(map__32464,map__32464__$1,props,map__32465,map__32465__$1,table_state,table_data,map__32466,map__32466__$1,controls,index,sort_spec,from,size,columns,map__32467,map__32467__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t32468(sort_spec,map__32466__$1,table_component,owner,p__32449,filter_by_view,props,map__32467__$1,table_data,map__32464__$1,index,filter_spec,columns,table_state,controls,bounds,size,map__32465__$1,from,null));
});
