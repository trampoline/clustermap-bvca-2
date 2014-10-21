// Compiled by ClojureScript 0.0-2356
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
clustermap.components.table.order_col = (function order_col(controls,p__56469,col_key,col_name){var map__56489 = p__56469;var map__56489__$1 = ((cljs.core.seq_QMARK_(map__56489))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56489):map__56489);var table_data = map__56489__$1;var current_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56489__$1,cljs.core.constant$keyword$1397);var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_(current_sort_spec))?cljs.core.first(current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__56490 = current_sort_spec__$1;var G__56490__$1 = (((G__56490 == null))?null:cljs.core.keys(G__56490));var G__56490__$2 = (((G__56490__$1 == null))?null:cljs.core.first(G__56490__$1));return G__56490__$2;
})();var current_sort_dir = (function (){var G__56491 = current_sort_spec__$1;var G__56491__$1 = (((G__56491 == null))?null:(function (){var G__56492 = G__56491;return (current_sort_key.cljs$core$IFn$_invoke$arity$1 ? current_sort_key.cljs$core$IFn$_invoke$arity$1(G__56492) : current_sort_key.call(null,G__56492));
})());var G__56491__$2 = (((G__56491__$1 == null))?null:cljs.core.constant$keyword$1398.cljs$core$IFn$_invoke$arity$1(G__56491__$1));return G__56491__$2;
})();var G__56493 = {"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__56489,map__56489__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__56496 = cljs.core._EQ_;var expr__56497 = current_sort_dir;if(cljs.core.truth_((function (){var G__56499 = "asc";var G__56500 = expr__56497;return (pred__56496.cljs$core$IFn$_invoke$arity$2 ? pred__56496.cljs$core$IFn$_invoke$arity$2(G__56499,G__56500) : pred__56496.call(null,G__56499,G__56500));
})()))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1397,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1398,cljs.core.constant$keyword$1399], null)], true, false));
} else
{if(cljs.core.truth_((function (){var G__56501 = "desc";var G__56502 = expr__56497;return (pred__56496.cljs$core$IFn$_invoke$arity$2 ? pred__56496.cljs$core$IFn$_invoke$arity$2(G__56501,G__56502) : pred__56496.call(null,G__56501,G__56502));
})()))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1397,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1398,cljs.core.constant$keyword$1400], null)], true, false));
} else
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1397,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1398,cljs.core.constant$keyword$1399], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__56489,map__56489__$1,table_data,current_sort_spec))
};var G__56494 = sablono.interpreter.interpret(col_name);var G__56495 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_sort_key,col_key))?sablono.interpreter.interpret((function (){var pred__56503 = cljs.core._EQ_;var expr__56504 = current_sort_dir;if(cljs.core.truth_((function (){var G__56506 = "asc";var G__56507 = expr__56504;return (pred__56503.cljs$core$IFn$_invoke$arity$2 ? pred__56503.cljs$core$IFn$_invoke$arity$2(G__56506,G__56507) : pred__56503.call(null,G__56506,G__56507));
})()))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1401], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1402], null);
}
})()):null);return React.DOM.a(G__56493,G__56494,G__56495);
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__56508,owner,opts){var map__56541 = p__56508;var map__56541__$1 = ((cljs.core.seq_QMARK_(map__56541))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56541):map__56541);var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,cljs.core.constant$keyword$1384);var map__56542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,cljs.core.constant$keyword$1403);var map__56542__$1 = ((cljs.core.seq_QMARK_(map__56542))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56542):map__56542);var table_data = map__56542__$1;var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,cljs.core.constant$keyword$1404);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,cljs.core.constant$keyword$1148);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,cljs.core.constant$keyword$1149);if(typeof clustermap.components.table.t56543 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t56543 = (function (owner,map__56542,paginate,table_data,controls,p__56508,size,map__56541,from,count,opts,meta56544){
this.owner = owner;
this.map__56542 = map__56542;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.p__56508 = p__56508;
this.size = size;
this.map__56541 = map__56541;
this.from = from;
this.count = count;
this.opts = opts;
this.meta56544 = meta56544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t56543.cljs$lang$type = true;
clustermap.components.table.t56543.cljs$lang$ctorStr = "clustermap.components.table/t56543";
clustermap.components.table.t56543.cljs$lang$ctorPrWriter = ((function (map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.table/t56543");
});})(map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size))
;
clustermap.components.table.t56543.prototype.om$core$IRender$ = true;
clustermap.components.table.t56543.prototype.om$core$IRender$render$arity$1 = ((function (map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs56546 = (cljs.core.truth_((function (){var and__3625__auto__ = self__.from;if(cljs.core.truth_(and__3625__auto__))
{return (self__.from > (0));
} else
{return and__3625__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1405,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1265,"#",cljs.core.constant$keyword$1406,((function (this__10071__auto____$1,map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1148,(function (){var x__3944__auto__ = (0);var y__3945__auto__ = (self__.from - self__.size);return ((x__3944__auto__ > y__3945__auto__) ? x__3944__auto__ : y__3945__auto__);
})());
});})(this__10071__auto____$1,map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1407], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1407], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs56546))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs56546], 0))):{"className": "paginate"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56546))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs56547 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs56547))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs56547], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56547))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56547)], null))));
})(),((((self__.from + self__.size) < self__.count))?(function (){var G__56553 = {"className": "next"};var G__56554 = (function (){var G__56555 = {"href": "#", "onClick": ((function (G__56553,attrs56546,this__10071__auto____$1,map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1148,(self__.from + self__.size));
});})(G__56553,attrs56546,this__10071__auto____$1,map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size))
};var G__56556 = (function (){var G__56557 = {"className": "icon-arrow-right"};return React.DOM.i(G__56557);
})();return React.DOM.a(G__56555,G__56556);
})();return React.DOM.span(G__56553,G__56554);
})():(function (){var G__56558 = {"className": "next"};var G__56559 = (function (){var G__56560 = {"className": "icon-arrow-right"};return React.DOM.i(G__56560);
})();return React.DOM.span(G__56558,G__56559);
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56546),(function (){var attrs56548 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs56548))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs56548], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56548))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56548)], null))));
})(),((((self__.from + self__.size) < self__.count))?(function (){var G__56565 = {"className": "next"};var G__56566 = (function (){var G__56567 = {"href": "#", "onClick": ((function (G__56565,attrs56546,this__10071__auto____$1,map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1148,(self__.from + self__.size));
});})(G__56565,attrs56546,this__10071__auto____$1,map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size))
};var G__56568 = (function (){var G__56569 = {"className": "icon-arrow-right"};return React.DOM.i(G__56569);
})();return React.DOM.a(G__56567,G__56568);
})();return React.DOM.span(G__56565,G__56566);
})():(function (){var G__56570 = {"className": "next"};var G__56571 = (function (){var G__56572 = {"className": "icon-arrow-right"};return React.DOM.i(G__56572);
})();return React.DOM.span(G__56570,G__56571);
})())], null))));
});})(map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size))
;
clustermap.components.table.t56543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size){
return (function (_56545){var self__ = this;
var _56545__$1 = this;return self__.meta56544;
});})(map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size))
;
clustermap.components.table.t56543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size){
return (function (_56545,meta56544__$1){var self__ = this;
var _56545__$1 = this;return (new clustermap.components.table.t56543(self__.owner,self__.map__56542,self__.paginate,self__.table_data,self__.controls,self__.p__56508,self__.size,self__.map__56541,self__.from,self__.count,self__.opts,meta56544__$1));
});})(map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t56543 = ((function (map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size){
return (function __GT_t56543(owner__$1,map__56542__$2,paginate__$1,table_data__$1,controls__$1,p__56508__$1,size__$1,map__56541__$2,from__$1,count__$1,opts__$1,meta56544){return (new clustermap.components.table.t56543(owner__$1,map__56542__$2,paginate__$1,table_data__$1,controls__$1,p__56508__$1,size__$1,map__56541__$2,from__$1,count__$1,opts__$1,meta56544));
});})(map__56541,map__56541__$1,controls,map__56542,map__56542__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t56543(owner,map__56542__$1,paginate,table_data,controls,p__56508,size,map__56541__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__56573){var map__56592 = p__56573;var map__56592__$1 = ((cljs.core.seq_QMARK_(map__56592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56592):map__56592);var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56592__$1,cljs.core.constant$keyword$1408);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56592__$1,cljs.core.constant$keyword$1409);if(typeof clustermap.components.table.t56593 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t56593 = (function (columns,record,map__56592,p__56573,render_table_row,meta56594){
this.columns = columns;
this.record = record;
this.map__56592 = map__56592;
this.p__56573 = p__56573;
this.render_table_row = render_table_row;
this.meta56594 = meta56594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t56593.cljs$lang$type = true;
clustermap.components.table.t56593.cljs$lang$ctorStr = "clustermap.components.table/t56593";
clustermap.components.table.t56593.cljs$lang$ctorPrWriter = ((function (map__56592,map__56592__$1,record,columns){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.table/t56593");
});})(map__56592,map__56592__$1,record,columns))
;
clustermap.components.table.t56593.prototype.om$core$IRender$ = true;
clustermap.components.table.t56593.prototype.om$core$IRender$render$arity$1 = ((function (map__56592,map__56592__$1,record,columns){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return sablono.interpreter.interpret((function (){var row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1410], null),(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__56592,map__56592__$1,record,columns){
return (function iter__56596(s__56597){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__56592,map__56592__$1,record,columns){
return (function (){var s__56597__$1 = s__56597;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56597__$1);if(temp__4126__auto__)
{var s__56597__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56597__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56597__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56599 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56598 = (0);while(true){
if((i__56598 < size__4374__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56598);cljs.core.chunk_append(b__56599,(function (){var vec__56606 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56606,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56606,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56606,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1411,(function (){var G__56607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key);return (formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(G__56607) : formatter__$1.call(null,G__56607));
})()], null);
})());
{
var G__56610 = (i__56598 + (1));
i__56598 = G__56610;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56599),iter__56596(cljs.core.chunk_rest(s__56597__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56599),null);
}
} else
{var col = cljs.core.first(s__56597__$2);return cljs.core.cons((function (){var vec__56608 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56608,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56608,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56608,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1411,(function (){var G__56609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key);return (formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(G__56609) : formatter__$1.call(null,G__56609));
})()], null);
})(),iter__56596(cljs.core.rest(s__56597__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__56592,map__56592__$1,record,columns))
,null,null));
});})(this__10071__auto____$1,map__56592,map__56592__$1,record,columns))
;return iter__4375__auto__(self__.columns);
})());return row;
})());
});})(map__56592,map__56592__$1,record,columns))
;
clustermap.components.table.t56593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56592,map__56592__$1,record,columns){
return (function (_56595){var self__ = this;
var _56595__$1 = this;return self__.meta56594;
});})(map__56592,map__56592__$1,record,columns))
;
clustermap.components.table.t56593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56592,map__56592__$1,record,columns){
return (function (_56595,meta56594__$1){var self__ = this;
var _56595__$1 = this;return (new clustermap.components.table.t56593(self__.columns,self__.record,self__.map__56592,self__.p__56573,self__.render_table_row,meta56594__$1));
});})(map__56592,map__56592__$1,record,columns))
;
clustermap.components.table.__GT_t56593 = ((function (map__56592,map__56592__$1,record,columns){
return (function __GT_t56593(columns__$1,record__$1,map__56592__$2,p__56573__$1,render_table_row__$1,meta56594){return (new clustermap.components.table.t56593(columns__$1,record__$1,map__56592__$2,p__56573__$1,render_table_row__$1,meta56594));
});})(map__56592,map__56592__$1,record,columns))
;
}
return (new clustermap.components.table.t56593(columns,record,map__56592__$1,p__56573,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__56611,owner,opts){var map__56649 = p__56611;var map__56649__$1 = ((cljs.core.seq_QMARK_(map__56649))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56649):map__56649);var props = map__56649__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56649__$1,cljs.core.constant$keyword$1403);var map__56650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56649__$1,cljs.core.constant$keyword$1384);var map__56650__$1 = ((cljs.core.seq_QMARK_(map__56650))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56650):map__56650);var controls = map__56650__$1;var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56650__$1,cljs.core.constant$keyword$1409);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56650__$1,cljs.core.constant$keyword$1319);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs56651 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1384,controls,cljs.core.constant$keyword$1403,table_data], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs56651))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs56651], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56651))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56656 = {"className": "table-responsive"};var G__56657 = (function (){var G__56658 = {"className": "table"};var G__56659 = (function (){var attrs56652 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1410], null),(function (){var iter__4375__auto__ = ((function (G__56658,G__56656,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view){
return (function iter__56661(s__56662){return (new cljs.core.LazySeq(null,((function (G__56658,G__56656,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view){
return (function (){var s__56662__$1 = s__56662;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56662__$1);if(temp__4126__auto__)
{var s__56662__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56662__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56662__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56664 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56663 = (0);while(true){
if((i__56663 < size__4374__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56663);cljs.core.chunk_append(b__56664,(function (){var vec__56669 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56669,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56669,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1412,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__56686 = (i__56663 + (1));
i__56663 = G__56686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56664),iter__56661(cljs.core.chunk_rest(s__56662__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56664),null);
}
} else
{var col = cljs.core.first(s__56662__$2);return cljs.core.cons((function (){var vec__56670 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56670,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56670,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1412,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__56661(cljs.core.rest(s__56662__$2)));
}
} else
{return null;
}
break;
}
});})(G__56658,G__56656,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view))
,null,null));
});})(G__56658,G__56656,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view))
;return iter__4375__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs56652))?sablono.interpreter.attributes(attrs56652):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56652))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56652)], null))));
})();var G__56660 = (function (){var attrs56653 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1305.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1240,((function (G__56658,G__56659,G__56656,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1409,columns,cljs.core.constant$keyword$1408,r,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1413.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(G__56658,G__56659,G__56656,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs56653))?sablono.interpreter.attributes(attrs56653):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56653))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56653)], null))));
})();return React.DOM.table(G__56658,G__56659,G__56660);
})();return React.DOM.div(G__56656,G__56657);
})(),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1384,controls,cljs.core.constant$keyword$1403,table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56651),(function (){var G__56671 = {"className": "table-responsive"};var G__56672 = (function (){var G__56673 = {"className": "table"};var G__56674 = (function (){var attrs56654 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1410], null),(function (){var iter__4375__auto__ = ((function (G__56673,G__56671,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view){
return (function iter__56676(s__56677){return (new cljs.core.LazySeq(null,((function (G__56673,G__56671,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view){
return (function (){var s__56677__$1 = s__56677;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56677__$1);if(temp__4126__auto__)
{var s__56677__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56677__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56677__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56679 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56678 = (0);while(true){
if((i__56678 < size__4374__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56678);cljs.core.chunk_append(b__56679,(function (){var vec__56684 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56684,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56684,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1412,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__56687 = (i__56678 + (1));
i__56678 = G__56687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56679),iter__56676(cljs.core.chunk_rest(s__56677__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56679),null);
}
} else
{var col = cljs.core.first(s__56677__$2);return cljs.core.cons((function (){var vec__56685 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56685,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56685,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1412,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__56676(cljs.core.rest(s__56677__$2)));
}
} else
{return null;
}
break;
}
});})(G__56673,G__56671,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view))
,null,null));
});})(G__56673,G__56671,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view))
;return iter__4375__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs56654))?sablono.interpreter.attributes(attrs56654):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56654))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56654)], null))));
})();var G__56675 = (function (){var attrs56655 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1305.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1240,((function (G__56673,G__56674,G__56671,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1409,columns,cljs.core.constant$keyword$1408,r,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1413.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(G__56673,G__56674,G__56671,attrs56651,map__56649,map__56649__$1,props,table_data,map__56650,map__56650__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs56655))?sablono.interpreter.attributes(attrs56655):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56655))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56655)], null))));
})();return React.DOM.table(G__56673,G__56674,G__56675);
})();return React.DOM.div(G__56671,G__56672);
})(),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1384,controls,cljs.core.constant$keyword$1403,table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.simple_table,cljs.core.array_seq([index,index_type,filter_spec,bounds,sort_spec,from,size], 0));
});
clustermap.components.table.table_component = (function table_component(p__56688,owner){var map__56703 = p__56688;var map__56703__$1 = ((cljs.core.seq_QMARK_(map__56703))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56703):map__56703);var props = map__56703__$1;var map__56704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,cljs.core.constant$keyword$1414);var map__56704__$1 = ((cljs.core.seq_QMARK_(map__56704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56704):map__56704);var table_state = map__56704__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56704__$1,cljs.core.constant$keyword$1403);var map__56705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56704__$1,cljs.core.constant$keyword$1384);var map__56705__$1 = ((cljs.core.seq_QMARK_(map__56705))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56705):map__56705);var controls = map__56705__$1;var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56705__$1,cljs.core.constant$keyword$1158);var sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56705__$1,cljs.core.constant$keyword$1397);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56705__$1,cljs.core.constant$keyword$1148);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56705__$1,cljs.core.constant$keyword$1149);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56705__$1,cljs.core.constant$keyword$1409);var map__56706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,cljs.core.constant$keyword$1150);var map__56706__$1 = ((cljs.core.seq_QMARK_(map__56706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56706):map__56706);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706__$1,cljs.core.constant$keyword$1319);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706__$1,cljs.core.constant$keyword$1334);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,cljs.core.constant$keyword$1142);if(typeof clustermap.components.table.t56707 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t56707 = (function (sort_spec,table_component,owner,filter_by_view,props,map__56705,map__56704,p__56688,table_data,map__56703,index,filter_spec,columns,table_state,controls,map__56706,bounds,size,from,meta56708){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__56705 = map__56705;
this.map__56704 = map__56704;
this.p__56688 = p__56688;
this.table_data = table_data;
this.map__56703 = map__56703;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__56706 = map__56706;
this.bounds = bounds;
this.size = size;
this.from = from;
this.meta56708 = meta56708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t56707.cljs$lang$type = true;
clustermap.components.table.t56707.cljs$lang$ctorStr = "clustermap.components.table/t56707";
clustermap.components.table.t56707.cljs$lang$ctorPrWriter = ((function (map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.table/t56707");
});})(map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t56707.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t56707.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__56710,p__56711){var self__ = this;
var map__56712 = p__56710;var map__56712__$1 = ((cljs.core.seq_QMARK_(map__56712))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56712):map__56712);var next_props = map__56712__$1;var map__56713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56712__$1,cljs.core.constant$keyword$1414);var map__56713__$1 = ((cljs.core.seq_QMARK_(map__56713))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56713):map__56713);var next_table_state = map__56713__$1;var next_table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56713__$1,cljs.core.constant$keyword$1403);var map__56714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56713__$1,cljs.core.constant$keyword$1384);var map__56714__$1 = ((cljs.core.seq_QMARK_(map__56714))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56714):map__56714);var next_controls = map__56714__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,cljs.core.constant$keyword$1158);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,cljs.core.constant$keyword$1385);var next_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,cljs.core.constant$keyword$1397);var next_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,cljs.core.constant$keyword$1148);var next_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,cljs.core.constant$keyword$1149);var map__56715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56712__$1,cljs.core.constant$keyword$1150);var map__56715__$1 = ((cljs.core.seq_QMARK_(map__56715))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56715):map__56715);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56715__$1,cljs.core.constant$keyword$1319);var next_filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56715__$1,cljs.core.constant$keyword$1334);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56712__$1,cljs.core.constant$keyword$1142);var map__56716 = p__56711;var map__56716__$1 = ((cljs.core.seq_QMARK_(map__56716))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56716):map__56716);var next_state = map__56716__$1;var table_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,cljs.core.constant$keyword$1415);var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not(next_table_data);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_controls,self__.controls);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{var or__3637__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_sort_spec,self__.sort_spec);if(or__3637__auto____$2)
{return or__3637__auto____$2;
} else
{var or__3637__auto____$3 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_spec,self__.filter_spec);if(or__3637__auto____$3)
{return or__3637__auto____$3;
} else
{var or__3637__auto____$4 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3637__auto____$4)
{return or__3637__auto____$4;
} else
{var and__3625__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3625__auto__;
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
});})(map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t56707.prototype.om$core$IRender$ = true;
clustermap.components.table.t56707.prototype.om$core$IRender$render$arity$1 = ((function (map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1403,self__.table_data,cljs.core.constant$keyword$1384,self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t56707.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t56707.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource("table-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1415,tdr);
return clustermap.ordered_resource.retrieve_responses(tdr,((function (tdr,___$1,map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1403], null),data);
});})(tdr,___$1,map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds))
);
});})(map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t56707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds){
return (function (_56709){var self__ = this;
var _56709__$1 = this;return self__.meta56708;
});})(map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t56707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds){
return (function (_56709,meta56708__$1){var self__ = this;
var _56709__$1 = this;return (new clustermap.components.table.t56707(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__56705,self__.map__56704,self__.p__56688,self__.table_data,self__.map__56703,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__56706,self__.bounds,self__.size,self__.from,meta56708__$1));
});})(map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t56707 = ((function (map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t56707(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__56705__$2,map__56704__$2,p__56688__$1,table_data__$1,map__56703__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__56706__$2,bounds__$1,size__$1,from__$1,meta56708){return (new clustermap.components.table.t56707(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__56705__$2,map__56704__$2,p__56688__$1,table_data__$1,map__56703__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__56706__$2,bounds__$1,size__$1,from__$1,meta56708));
});})(map__56703,map__56703__$1,props,map__56704,map__56704__$1,table_state,table_data,map__56705,map__56705__$1,controls,index,sort_spec,from,size,columns,map__56706,map__56706__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t56707(sort_spec,table_component,owner,filter_by_view,props,map__56705__$1,map__56704__$1,p__56688,table_data,map__56703__$1,index,filter_spec,columns,table_state,controls,map__56706__$1,bounds,size,from,null));
});
