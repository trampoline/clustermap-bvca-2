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
clustermap.components.table.order_col = (function order_col(controls,p__47244,col_key,col_name){var map__47254 = p__47244;var map__47254__$1 = ((cljs.core.seq_QMARK_(map__47254))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47254):map__47254);var table_data = map__47254__$1;var current_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47254__$1,cljs.core.constant$keyword$1274);var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_(current_sort_spec))?cljs.core.first(current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__47255 = current_sort_spec__$1;var G__47255__$1 = (((G__47255 == null))?null:cljs.core.keys(G__47255));var G__47255__$2 = (((G__47255__$1 == null))?null:cljs.core.first(G__47255__$1));return G__47255__$2;
})();var current_sort_dir = (function (){var G__47256 = current_sort_spec__$1;var G__47256__$1 = (((G__47256 == null))?null:(current_sort_key.cljs$core$IFn$_invoke$arity$1 ? current_sort_key.cljs$core$IFn$_invoke$arity$1(G__47256) : current_sort_key.call(null,G__47256)));var G__47256__$2 = (((G__47256__$1 == null))?null:cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(G__47256__$1));return G__47256__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__47254,map__47254__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__47257 = cljs.core._EQ_;var expr__47258 = current_sort_dir;if(cljs.core.truth_((pred__47257.cljs$core$IFn$_invoke$arity$2 ? pred__47257.cljs$core$IFn$_invoke$arity$2("asc",expr__47258) : pred__47257.call(null,"asc",expr__47258))))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,cljs.core.constant$keyword$1276], null)], true, false));
} else
{if(cljs.core.truth_((pred__47257.cljs$core$IFn$_invoke$arity$2 ? pred__47257.cljs$core$IFn$_invoke$arity$2("desc",expr__47258) : pred__47257.call(null,"desc",expr__47258))))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,cljs.core.constant$keyword$1277], null)], true, false));
} else
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,cljs.core.constant$keyword$1276], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__47254,map__47254__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret(col_name),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_sort_key,col_key))?sablono.interpreter.interpret((function (){var pred__47260 = cljs.core._EQ_;var expr__47261 = current_sort_dir;if(cljs.core.truth_((pred__47260.cljs$core$IFn$_invoke$arity$2 ? pred__47260.cljs$core$IFn$_invoke$arity$2("asc",expr__47261) : pred__47260.call(null,"asc",expr__47261))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1278], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1279], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__47263,owner,opts){var map__47280 = p__47263;var map__47280__$1 = ((cljs.core.seq_QMARK_(map__47280))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47280):map__47280);var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47280__$1,cljs.core.constant$keyword$1267);var map__47281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47280__$1,cljs.core.constant$keyword$1280);var map__47281__$1 = ((cljs.core.seq_QMARK_(map__47281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47281):map__47281);var table_data = map__47281__$1;var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,cljs.core.constant$keyword$1281);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,cljs.core.constant$keyword$1120);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,cljs.core.constant$keyword$1121);if(typeof clustermap.components.table.t47282 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t47282 = (function (owner,p__47263,paginate,table_data,map__47280,map__47281,controls,size,from,count,opts,meta47283){
this.owner = owner;
this.p__47263 = p__47263;
this.paginate = paginate;
this.table_data = table_data;
this.map__47280 = map__47280;
this.map__47281 = map__47281;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta47283 = meta47283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t47282.cljs$lang$type = true;
clustermap.components.table.t47282.cljs$lang$ctorStr = "clustermap.components.table/t47282";
clustermap.components.table.t47282.cljs$lang$ctorPrWriter = ((function (map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t47282");
});})(map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size))
;
clustermap.components.table.t47282.prototype.om$core$IRender$ = true;
clustermap.components.table.t47282.prototype.om$core$IRender$render$arity$1 = ((function (map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs47285 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1282,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1217,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1215,"#",cljs.core.constant$keyword$1283,((function (this__9504__auto____$1,map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1120,(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1284], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1282,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1284], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs47285))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs47285], 0))):{"className": "paginate"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47285))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47286 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs47286))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs47286], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47286))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47286)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs47285,this__9504__auto____$1,map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1120,(self__.from + self__.size));
});})(attrs47285,this__9504__auto____$1,map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47285),(function (){var attrs47287 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs47287))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs47287], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47287))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47287)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs47285,this__9504__auto____$1,map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1120,(self__.from + self__.size));
});})(attrs47285,this__9504__auto____$1,map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size))
;
clustermap.components.table.t47282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size){
return (function (_47284){var self__ = this;
var _47284__$1 = this;return self__.meta47283;
});})(map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size))
;
clustermap.components.table.t47282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size){
return (function (_47284,meta47283__$1){var self__ = this;
var _47284__$1 = this;return (new clustermap.components.table.t47282(self__.owner,self__.p__47263,self__.paginate,self__.table_data,self__.map__47280,self__.map__47281,self__.controls,self__.size,self__.from,self__.count,self__.opts,meta47283__$1));
});})(map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t47282 = ((function (map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size){
return (function __GT_t47282(owner__$1,p__47263__$1,paginate__$1,table_data__$1,map__47280__$2,map__47281__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta47283){return (new clustermap.components.table.t47282(owner__$1,p__47263__$1,paginate__$1,table_data__$1,map__47280__$2,map__47281__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta47283));
});})(map__47280,map__47280__$1,controls,map__47281,map__47281__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t47282(owner,p__47263,paginate,table_data,map__47280__$1,map__47281__$1,controls,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__47296){var map__47309 = p__47296;var map__47309__$1 = ((cljs.core.seq_QMARK_(map__47309))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47309):map__47309);var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47309__$1,cljs.core.constant$keyword$1285);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47309__$1,cljs.core.constant$keyword$1286);if(typeof clustermap.components.table.t47310 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t47310 = (function (columns,record,map__47309,p__47296,render_table_row,meta47311){
this.columns = columns;
this.record = record;
this.map__47309 = map__47309;
this.p__47296 = p__47296;
this.render_table_row = render_table_row;
this.meta47311 = meta47311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t47310.cljs$lang$type = true;
clustermap.components.table.t47310.cljs$lang$ctorStr = "clustermap.components.table/t47310";
clustermap.components.table.t47310.cljs$lang$ctorPrWriter = ((function (map__47309,map__47309__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t47310");
});})(map__47309,map__47309__$1,record,columns))
;
clustermap.components.table.t47310.prototype.om$core$IRender$ = true;
clustermap.components.table.t47310.prototype.om$core$IRender$render$arity$1 = ((function (map__47309,map__47309__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret((function (){var row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1287], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__47309,map__47309__$1,record,columns){
return (function iter__47313(s__47314){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__47309,map__47309__$1,record,columns){
return (function (){var s__47314__$1 = s__47314;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47314__$1);if(temp__4126__auto__)
{var s__47314__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47314__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47314__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47316 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47315 = (0);while(true){
if((i__47315 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47315);cljs.core.chunk_append(b__47316,(function (){var vec__47319 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47319,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47319,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47319,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,(formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)) : formatter__$1.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)))], null);
})());
{
var G__47321 = (i__47315 + (1));
i__47315 = G__47321;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47316),iter__47313(cljs.core.chunk_rest(s__47314__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47316),null);
}
} else
{var col = cljs.core.first(s__47314__$2);return cljs.core.cons((function (){var vec__47320 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47320,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47320,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47320,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,(formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)) : formatter__$1.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)))], null);
})(),iter__47313(cljs.core.rest(s__47314__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__47309,map__47309__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__47309,map__47309__$1,record,columns))
;return iter__4283__auto__(self__.columns);
})());return row;
})());
});})(map__47309,map__47309__$1,record,columns))
;
clustermap.components.table.t47310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47309,map__47309__$1,record,columns){
return (function (_47312){var self__ = this;
var _47312__$1 = this;return self__.meta47311;
});})(map__47309,map__47309__$1,record,columns))
;
clustermap.components.table.t47310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47309,map__47309__$1,record,columns){
return (function (_47312,meta47311__$1){var self__ = this;
var _47312__$1 = this;return (new clustermap.components.table.t47310(self__.columns,self__.record,self__.map__47309,self__.p__47296,self__.render_table_row,meta47311__$1));
});})(map__47309,map__47309__$1,record,columns))
;
clustermap.components.table.__GT_t47310 = ((function (map__47309,map__47309__$1,record,columns){
return (function __GT_t47310(columns__$1,record__$1,map__47309__$2,p__47296__$1,render_table_row__$1,meta47311){return (new clustermap.components.table.t47310(columns__$1,record__$1,map__47309__$2,p__47296__$1,render_table_row__$1,meta47311));
});})(map__47309,map__47309__$1,record,columns))
;
}
return (new clustermap.components.table.t47310(columns,record,map__47309__$1,p__47296,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__47322,owner,opts){var map__47346 = p__47322;var map__47346__$1 = ((cljs.core.seq_QMARK_(map__47346))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47346):map__47346);var props = map__47346__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47346__$1,cljs.core.constant$keyword$1280);var map__47347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47346__$1,cljs.core.constant$keyword$1267);var map__47347__$1 = ((cljs.core.seq_QMARK_(map__47347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47347):map__47347);var controls = map__47347__$1;var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47347__$1,cljs.core.constant$keyword$1286);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47347__$1,cljs.core.constant$keyword$1271);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs47348 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,controls,cljs.core.constant$keyword$1280,table_data], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs47348))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs47348], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47348))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs47349 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1287], null),(function (){var iter__4283__auto__ = ((function (attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view){
return (function iter__47353(s__47354){return (new cljs.core.LazySeq(null,((function (attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view){
return (function (){var s__47354__$1 = s__47354;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47354__$1);if(temp__4126__auto__)
{var s__47354__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47354__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47354__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47356 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47355 = (0);while(true){
if((i__47355 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47355);cljs.core.chunk_append(b__47356,(function (){var vec__47359 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47359,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47359,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__47369 = (i__47355 + (1));
i__47355 = G__47369;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47356),iter__47353(cljs.core.chunk_rest(s__47354__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47356),null);
}
} else
{var col = cljs.core.first(s__47354__$2);return cljs.core.cons((function (){var vec__47360 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47360,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47360,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__47353(cljs.core.rest(s__47354__$2)));
}
} else
{return null;
}
break;
}
});})(attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs47349))?sablono.interpreter.attributes(attrs47349):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47349))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47349)], null))));
})(),(function (){var attrs47350 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1240.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1195,((function (attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1286,columns,cljs.core.constant$keyword$1285,r,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1290.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs47350))?sablono.interpreter.attributes(attrs47350):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47350))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47350)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,controls,cljs.core.constant$keyword$1280,table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47348),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs47351 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1287], null),(function (){var iter__4283__auto__ = ((function (attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view){
return (function iter__47361(s__47362){return (new cljs.core.LazySeq(null,((function (attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view){
return (function (){var s__47362__$1 = s__47362;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47362__$1);if(temp__4126__auto__)
{var s__47362__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47362__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47362__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47364 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47363 = (0);while(true){
if((i__47363 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47363);cljs.core.chunk_append(b__47364,(function (){var vec__47367 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47367,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47367,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__47370 = (i__47363 + (1));
i__47363 = G__47370;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47364),iter__47361(cljs.core.chunk_rest(s__47362__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47364),null);
}
} else
{var col = cljs.core.first(s__47362__$2);return cljs.core.cons((function (){var vec__47368 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47368,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47368,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__47361(cljs.core.rest(s__47362__$2)));
}
} else
{return null;
}
break;
}
});})(attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs47351))?sablono.interpreter.attributes(attrs47351):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47351))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47351)], null))));
})(),(function (){var attrs47352 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1240.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1195,((function (attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1286,columns,cljs.core.constant$keyword$1285,r,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1290.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs47348,map__47346,map__47346__$1,props,table_data,map__47347,map__47347__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs47352))?sablono.interpreter.attributes(attrs47352):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47352))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47352)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,controls,cljs.core.constant$keyword$1280,table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.simple_table,cljs.core.array_seq([index,index_type,filter_spec,bounds,sort_spec,from,size], 0));
});
clustermap.components.table.table_component = (function table_component(p__47371,owner){var map__47386 = p__47371;var map__47386__$1 = ((cljs.core.seq_QMARK_(map__47386))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47386):map__47386);var props = map__47386__$1;var map__47387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47386__$1,cljs.core.constant$keyword$1291);var map__47387__$1 = ((cljs.core.seq_QMARK_(map__47387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47387):map__47387);var table_state = map__47387__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47387__$1,cljs.core.constant$keyword$1280);var map__47388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47387__$1,cljs.core.constant$keyword$1267);var map__47388__$1 = ((cljs.core.seq_QMARK_(map__47388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47388):map__47388);var controls = map__47388__$1;var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1133);var sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1274);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1120);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1121);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1286);var map__47389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47386__$1,cljs.core.constant$keyword$1122);var map__47389__$1 = ((cljs.core.seq_QMARK_(map__47389))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47389):map__47389);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,cljs.core.constant$keyword$1271);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,cljs.core.constant$keyword$1272);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47386__$1,cljs.core.constant$keyword$1114);if(typeof clustermap.components.table.t47390 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t47390 = (function (sort_spec,p__47371,table_component,owner,map__47389,filter_by_view,props,map__47386,table_data,index,filter_spec,columns,table_state,controls,bounds,size,map__47387,from,map__47388,meta47391){
this.sort_spec = sort_spec;
this.p__47371 = p__47371;
this.table_component = table_component;
this.owner = owner;
this.map__47389 = map__47389;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__47386 = map__47386;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__47387 = map__47387;
this.from = from;
this.map__47388 = map__47388;
this.meta47391 = meta47391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t47390.cljs$lang$type = true;
clustermap.components.table.t47390.cljs$lang$ctorStr = "clustermap.components.table/t47390";
clustermap.components.table.t47390.cljs$lang$ctorPrWriter = ((function (map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t47390");
});})(map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47390.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t47390.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__47393,p__47394){var self__ = this;
var map__47395 = p__47393;var map__47395__$1 = ((cljs.core.seq_QMARK_(map__47395))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47395):map__47395);var next_props = map__47395__$1;var map__47396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47395__$1,cljs.core.constant$keyword$1291);var map__47396__$1 = ((cljs.core.seq_QMARK_(map__47396))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47396):map__47396);var next_table_state = map__47396__$1;var next_table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47396__$1,cljs.core.constant$keyword$1280);var map__47397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47396__$1,cljs.core.constant$keyword$1267);var map__47397__$1 = ((cljs.core.seq_QMARK_(map__47397))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47397):map__47397);var next_controls = map__47397__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47397__$1,cljs.core.constant$keyword$1133);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47397__$1,cljs.core.constant$keyword$1268);var next_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47397__$1,cljs.core.constant$keyword$1274);var next_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47397__$1,cljs.core.constant$keyword$1120);var next_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47397__$1,cljs.core.constant$keyword$1121);var map__47398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47395__$1,cljs.core.constant$keyword$1122);var map__47398__$1 = ((cljs.core.seq_QMARK_(map__47398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47398):map__47398);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47398__$1,cljs.core.constant$keyword$1271);var next_filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47398__$1,cljs.core.constant$keyword$1272);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47395__$1,cljs.core.constant$keyword$1114);var map__47399 = p__47394;var map__47399__$1 = ((cljs.core.seq_QMARK_(map__47399))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47399):map__47399);var next_state = map__47399__$1;var table_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47399__$1,cljs.core.constant$keyword$1292);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_sort_spec,self__.sort_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var or__3558__auto____$3 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_spec,self__.filter_spec);if(or__3558__auto____$3)
{return or__3558__auto____$3;
} else
{var or__3558__auto____$4 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$4)
{return or__3558__auto____$4;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
}
}
}
})()))
{return clustermap.components.table.request_table_data(table_data_resource,next_index,next_index_type,next_filter_spec,(cljs.core.truth_(next_filter_by_view)?next_bounds:null),next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47390.prototype.om$core$IRender$ = true;
clustermap.components.table.t47390.prototype.om$core$IRender$render$arity$1 = ((function (map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1280,self__.table_data,cljs.core.constant$keyword$1267,self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47390.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t47390.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource("table-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1292,tdr);
return clustermap.ordered_resource.retrieve_responses(tdr,((function (tdr,___$1,map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1280], null),data);
});})(tdr,___$1,map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds))
);
});})(map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds){
return (function (_47392){var self__ = this;
var _47392__$1 = this;return self__.meta47391;
});})(map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds){
return (function (_47392,meta47391__$1){var self__ = this;
var _47392__$1 = this;return (new clustermap.components.table.t47390(self__.sort_spec,self__.p__47371,self__.table_component,self__.owner,self__.map__47389,self__.filter_by_view,self__.props,self__.map__47386,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.bounds,self__.size,self__.map__47387,self__.from,self__.map__47388,meta47391__$1));
});})(map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t47390 = ((function (map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t47390(sort_spec__$1,p__47371__$1,table_component__$1,owner__$1,map__47389__$2,filter_by_view__$1,props__$1,map__47386__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__47387__$2,from__$1,map__47388__$2,meta47391){return (new clustermap.components.table.t47390(sort_spec__$1,p__47371__$1,table_component__$1,owner__$1,map__47389__$2,filter_by_view__$1,props__$1,map__47386__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__47387__$2,from__$1,map__47388__$2,meta47391));
});})(map__47386,map__47386__$1,props,map__47387,map__47387__$1,table_state,table_data,map__47388,map__47388__$1,controls,index,sort_spec,from,size,columns,map__47389,map__47389__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t47390(sort_spec,p__47371,table_component,owner,map__47389__$1,filter_by_view,props,map__47386__$1,table_data,index,filter_spec,columns,table_state,controls,bounds,size,map__47387__$1,from,map__47388__$1,null));
});
