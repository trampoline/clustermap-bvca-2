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
clustermap.components.table.order_col = (function order_col(controls,p__71118,col_key,col_name){var map__71138 = p__71118;var map__71138__$1 = ((cljs.core.seq_QMARK_(map__71138))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71138):map__71138);var table_data = map__71138__$1;var current_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71138__$1,cljs.core.constant$keyword$1393);var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_(current_sort_spec))?cljs.core.first(current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__71139 = current_sort_spec__$1;var G__71139__$1 = (((G__71139 == null))?null:cljs.core.keys(G__71139));var G__71139__$2 = (((G__71139__$1 == null))?null:cljs.core.first(G__71139__$1));return G__71139__$2;
})();var current_sort_dir = (function (){var G__71140 = current_sort_spec__$1;var G__71140__$1 = (((G__71140 == null))?null:(function (){var G__71141 = G__71140;return (current_sort_key.cljs$core$IFn$_invoke$arity$1 ? current_sort_key.cljs$core$IFn$_invoke$arity$1(G__71141) : current_sort_key.call(null,G__71141));
})());var G__71140__$2 = (((G__71140__$1 == null))?null:cljs.core.constant$keyword$1394.cljs$core$IFn$_invoke$arity$1(G__71140__$1));return G__71140__$2;
})();var G__71142 = {"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__71138,map__71138__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__71145 = cljs.core._EQ_;var expr__71146 = current_sort_dir;if(cljs.core.truth_((function (){var G__71148 = "asc";var G__71149 = expr__71146;return (pred__71145.cljs$core$IFn$_invoke$arity$2 ? pred__71145.cljs$core$IFn$_invoke$arity$2(G__71148,G__71149) : pred__71145.call(null,G__71148,G__71149));
})()))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1393,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1394,cljs.core.constant$keyword$1395], null)], true, false));
} else
{if(cljs.core.truth_((function (){var G__71150 = "desc";var G__71151 = expr__71146;return (pred__71145.cljs$core$IFn$_invoke$arity$2 ? pred__71145.cljs$core$IFn$_invoke$arity$2(G__71150,G__71151) : pred__71145.call(null,G__71150,G__71151));
})()))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1393,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1394,cljs.core.constant$keyword$1396], null)], true, false));
} else
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1393,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1394,cljs.core.constant$keyword$1395], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__71138,map__71138__$1,table_data,current_sort_spec))
};var G__71143 = sablono.interpreter.interpret(col_name);var G__71144 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_sort_key,col_key))?sablono.interpreter.interpret((function (){var pred__71152 = cljs.core._EQ_;var expr__71153 = current_sort_dir;if(cljs.core.truth_((function (){var G__71155 = "asc";var G__71156 = expr__71153;return (pred__71152.cljs$core$IFn$_invoke$arity$2 ? pred__71152.cljs$core$IFn$_invoke$arity$2(G__71155,G__71156) : pred__71152.call(null,G__71155,G__71156));
})()))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1397], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1398], null);
}
})()):null);return React.DOM.a(G__71142,G__71143,G__71144);
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__71157,owner,opts){var map__71190 = p__71157;var map__71190__$1 = ((cljs.core.seq_QMARK_(map__71190))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71190):map__71190);var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71190__$1,cljs.core.constant$keyword$1368);var map__71191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71190__$1,cljs.core.constant$keyword$1399);var map__71191__$1 = ((cljs.core.seq_QMARK_(map__71191))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71191):map__71191);var table_data = map__71191__$1;var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71191__$1,cljs.core.constant$keyword$1400);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71191__$1,cljs.core.constant$keyword$1148);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71191__$1,cljs.core.constant$keyword$1149);if(typeof clustermap.components.table.t71192 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t71192 = (function (map__71190,map__71191,owner,p__71157,paginate,table_data,controls,size,from,count,opts,meta71193){
this.map__71190 = map__71190;
this.map__71191 = map__71191;
this.owner = owner;
this.p__71157 = p__71157;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta71193 = meta71193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t71192.cljs$lang$type = true;
clustermap.components.table.t71192.cljs$lang$ctorStr = "clustermap.components.table/t71192";
clustermap.components.table.t71192.cljs$lang$ctorPrWriter = ((function (map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.table/t71192");
});})(map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size))
;
clustermap.components.table.t71192.prototype.om$core$IRender$ = true;
clustermap.components.table.t71192.prototype.om$core$IRender$render$arity$1 = ((function (map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs71195 = (cljs.core.truth_((function (){var and__3625__auto__ = self__.from;if(cljs.core.truth_(and__3625__auto__))
{return (self__.from > (0));
} else
{return and__3625__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1401,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1265,"#",cljs.core.constant$keyword$1402,((function (this__10071__auto____$1,map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1148,(function (){var x__3944__auto__ = (0);var y__3945__auto__ = (self__.from - self__.size);return ((x__3944__auto__ > y__3945__auto__) ? x__3944__auto__ : y__3945__auto__);
})());
});})(this__10071__auto____$1,map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1403], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1401,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1403], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs71195))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs71195], 0))):{"className": "paginate"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71195))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs71196 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs71196))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs71196], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71196))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71196)], null))));
})(),((((self__.from + self__.size) < self__.count))?(function (){var G__71202 = {"className": "next"};var G__71203 = (function (){var G__71204 = {"href": "#", "onClick": ((function (G__71202,attrs71195,this__10071__auto____$1,map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1148,(self__.from + self__.size));
});})(G__71202,attrs71195,this__10071__auto____$1,map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size))
};var G__71205 = (function (){var G__71206 = {"className": "icon-arrow-right"};return React.DOM.i(G__71206);
})();return React.DOM.a(G__71204,G__71205);
})();return React.DOM.span(G__71202,G__71203);
})():(function (){var G__71207 = {"className": "next"};var G__71208 = (function (){var G__71209 = {"className": "icon-arrow-right"};return React.DOM.i(G__71209);
})();return React.DOM.span(G__71207,G__71208);
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71195),(function (){var attrs71197 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs71197))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs71197], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71197))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71197)], null))));
})(),((((self__.from + self__.size) < self__.count))?(function (){var G__71214 = {"className": "next"};var G__71215 = (function (){var G__71216 = {"href": "#", "onClick": ((function (G__71214,attrs71195,this__10071__auto____$1,map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1148,(self__.from + self__.size));
});})(G__71214,attrs71195,this__10071__auto____$1,map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size))
};var G__71217 = (function (){var G__71218 = {"className": "icon-arrow-right"};return React.DOM.i(G__71218);
})();return React.DOM.a(G__71216,G__71217);
})();return React.DOM.span(G__71214,G__71215);
})():(function (){var G__71219 = {"className": "next"};var G__71220 = (function (){var G__71221 = {"className": "icon-arrow-right"};return React.DOM.i(G__71221);
})();return React.DOM.span(G__71219,G__71220);
})())], null))));
});})(map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size))
;
clustermap.components.table.t71192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size){
return (function (_71194){var self__ = this;
var _71194__$1 = this;return self__.meta71193;
});})(map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size))
;
clustermap.components.table.t71192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size){
return (function (_71194,meta71193__$1){var self__ = this;
var _71194__$1 = this;return (new clustermap.components.table.t71192(self__.map__71190,self__.map__71191,self__.owner,self__.p__71157,self__.paginate,self__.table_data,self__.controls,self__.size,self__.from,self__.count,self__.opts,meta71193__$1));
});})(map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t71192 = ((function (map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size){
return (function __GT_t71192(map__71190__$2,map__71191__$2,owner__$1,p__71157__$1,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta71193){return (new clustermap.components.table.t71192(map__71190__$2,map__71191__$2,owner__$1,p__71157__$1,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta71193));
});})(map__71190,map__71190__$1,controls,map__71191,map__71191__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t71192(map__71190__$1,map__71191__$1,owner,p__71157,paginate,table_data,controls,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__71222){var map__71241 = p__71222;var map__71241__$1 = ((cljs.core.seq_QMARK_(map__71241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71241):map__71241);var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71241__$1,cljs.core.constant$keyword$1404);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71241__$1,cljs.core.constant$keyword$1405);if(typeof clustermap.components.table.t71242 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t71242 = (function (columns,record,map__71241,p__71222,render_table_row,meta71243){
this.columns = columns;
this.record = record;
this.map__71241 = map__71241;
this.p__71222 = p__71222;
this.render_table_row = render_table_row;
this.meta71243 = meta71243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t71242.cljs$lang$type = true;
clustermap.components.table.t71242.cljs$lang$ctorStr = "clustermap.components.table/t71242";
clustermap.components.table.t71242.cljs$lang$ctorPrWriter = ((function (map__71241,map__71241__$1,record,columns){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.table/t71242");
});})(map__71241,map__71241__$1,record,columns))
;
clustermap.components.table.t71242.prototype.om$core$IRender$ = true;
clustermap.components.table.t71242.prototype.om$core$IRender$render$arity$1 = ((function (map__71241,map__71241__$1,record,columns){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return sablono.interpreter.interpret((function (){var row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1406], null),(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__71241,map__71241__$1,record,columns){
return (function iter__71245(s__71246){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__71241,map__71241__$1,record,columns){
return (function (){var s__71246__$1 = s__71246;while(true){
var temp__4126__auto__ = cljs.core.seq(s__71246__$1);if(temp__4126__auto__)
{var s__71246__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__71246__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__71246__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__71248 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__71247 = (0);while(true){
if((i__71247 < size__4374__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__71247);cljs.core.chunk_append(b__71248,(function (){var vec__71255 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71255,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71255,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71255,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1407,(function (){var G__71256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key);return (formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(G__71256) : formatter__$1.call(null,G__71256));
})()], null);
})());
{
var G__71259 = (i__71247 + (1));
i__71247 = G__71259;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__71248),iter__71245(cljs.core.chunk_rest(s__71246__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__71248),null);
}
} else
{var col = cljs.core.first(s__71246__$2);return cljs.core.cons((function (){var vec__71257 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71257,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71257,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71257,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1407,(function (){var G__71258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key);return (formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(G__71258) : formatter__$1.call(null,G__71258));
})()], null);
})(),iter__71245(cljs.core.rest(s__71246__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__71241,map__71241__$1,record,columns))
,null,null));
});})(this__10071__auto____$1,map__71241,map__71241__$1,record,columns))
;return iter__4375__auto__(self__.columns);
})());return row;
})());
});})(map__71241,map__71241__$1,record,columns))
;
clustermap.components.table.t71242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__71241,map__71241__$1,record,columns){
return (function (_71244){var self__ = this;
var _71244__$1 = this;return self__.meta71243;
});})(map__71241,map__71241__$1,record,columns))
;
clustermap.components.table.t71242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__71241,map__71241__$1,record,columns){
return (function (_71244,meta71243__$1){var self__ = this;
var _71244__$1 = this;return (new clustermap.components.table.t71242(self__.columns,self__.record,self__.map__71241,self__.p__71222,self__.render_table_row,meta71243__$1));
});})(map__71241,map__71241__$1,record,columns))
;
clustermap.components.table.__GT_t71242 = ((function (map__71241,map__71241__$1,record,columns){
return (function __GT_t71242(columns__$1,record__$1,map__71241__$2,p__71222__$1,render_table_row__$1,meta71243){return (new clustermap.components.table.t71242(columns__$1,record__$1,map__71241__$2,p__71222__$1,render_table_row__$1,meta71243));
});})(map__71241,map__71241__$1,record,columns))
;
}
return (new clustermap.components.table.t71242(columns,record,map__71241__$1,p__71222,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__71260,owner,opts){var map__71298 = p__71260;var map__71298__$1 = ((cljs.core.seq_QMARK_(map__71298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71298):map__71298);var props = map__71298__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71298__$1,cljs.core.constant$keyword$1399);var map__71299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71298__$1,cljs.core.constant$keyword$1368);var map__71299__$1 = ((cljs.core.seq_QMARK_(map__71299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71299):map__71299);var controls = map__71299__$1;var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71299__$1,cljs.core.constant$keyword$1405);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71299__$1,cljs.core.constant$keyword$1372);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs71300 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1368,controls,cljs.core.constant$keyword$1399,table_data], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs71300))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs71300], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71300))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71305 = {"className": "table-responsive"};var G__71306 = (function (){var G__71307 = {"className": "table"};var G__71308 = (function (){var attrs71301 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1406], null),(function (){var iter__4375__auto__ = ((function (G__71307,G__71305,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view){
return (function iter__71310(s__71311){return (new cljs.core.LazySeq(null,((function (G__71307,G__71305,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view){
return (function (){var s__71311__$1 = s__71311;while(true){
var temp__4126__auto__ = cljs.core.seq(s__71311__$1);if(temp__4126__auto__)
{var s__71311__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__71311__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__71311__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__71313 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__71312 = (0);while(true){
if((i__71312 < size__4374__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__71312);cljs.core.chunk_append(b__71313,(function (){var vec__71318 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71318,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71318,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1408,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__71335 = (i__71312 + (1));
i__71312 = G__71335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__71313),iter__71310(cljs.core.chunk_rest(s__71311__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__71313),null);
}
} else
{var col = cljs.core.first(s__71311__$2);return cljs.core.cons((function (){var vec__71319 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71319,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71319,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1408,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__71310(cljs.core.rest(s__71311__$2)));
}
} else
{return null;
}
break;
}
});})(G__71307,G__71305,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view))
,null,null));
});})(G__71307,G__71305,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view))
;return iter__4375__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs71301))?sablono.interpreter.attributes(attrs71301):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71301))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71301)], null))));
})();var G__71309 = (function (){var attrs71302 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1305.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1240,((function (G__71307,G__71308,G__71305,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1405,columns,cljs.core.constant$keyword$1404,r,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1409.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(G__71307,G__71308,G__71305,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs71302))?sablono.interpreter.attributes(attrs71302):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71302))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71302)], null))));
})();return React.DOM.table(G__71307,G__71308,G__71309);
})();return React.DOM.div(G__71305,G__71306);
})(),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1368,controls,cljs.core.constant$keyword$1399,table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71300),(function (){var G__71320 = {"className": "table-responsive"};var G__71321 = (function (){var G__71322 = {"className": "table"};var G__71323 = (function (){var attrs71303 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1406], null),(function (){var iter__4375__auto__ = ((function (G__71322,G__71320,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view){
return (function iter__71325(s__71326){return (new cljs.core.LazySeq(null,((function (G__71322,G__71320,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view){
return (function (){var s__71326__$1 = s__71326;while(true){
var temp__4126__auto__ = cljs.core.seq(s__71326__$1);if(temp__4126__auto__)
{var s__71326__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__71326__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__71326__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__71328 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__71327 = (0);while(true){
if((i__71327 < size__4374__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__71327);cljs.core.chunk_append(b__71328,(function (){var vec__71333 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71333,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71333,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1408,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__71336 = (i__71327 + (1));
i__71327 = G__71336;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__71328),iter__71325(cljs.core.chunk_rest(s__71326__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__71328),null);
}
} else
{var col = cljs.core.first(s__71326__$2);return cljs.core.cons((function (){var vec__71334 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71334,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71334,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1408,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__71325(cljs.core.rest(s__71326__$2)));
}
} else
{return null;
}
break;
}
});})(G__71322,G__71320,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view))
,null,null));
});})(G__71322,G__71320,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view))
;return iter__4375__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs71303))?sablono.interpreter.attributes(attrs71303):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71303))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71303)], null))));
})();var G__71324 = (function (){var attrs71304 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1305.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1240,((function (G__71322,G__71323,G__71320,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1405,columns,cljs.core.constant$keyword$1404,r,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1409.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(G__71322,G__71323,G__71320,attrs71300,map__71298,map__71298__$1,props,table_data,map__71299,map__71299__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs71304))?sablono.interpreter.attributes(attrs71304):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs71304))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs71304)], null))));
})();return React.DOM.table(G__71322,G__71323,G__71324);
})();return React.DOM.div(G__71320,G__71321);
})(),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1368,controls,cljs.core.constant$keyword$1399,table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.simple_table,cljs.core.array_seq([index,index_type,filter_spec,bounds,sort_spec,from,size], 0));
});
clustermap.components.table.table_component = (function table_component(p__71337,owner){var map__71352 = p__71337;var map__71352__$1 = ((cljs.core.seq_QMARK_(map__71352))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71352):map__71352);var props = map__71352__$1;var map__71353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71352__$1,cljs.core.constant$keyword$1410);var map__71353__$1 = ((cljs.core.seq_QMARK_(map__71353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71353):map__71353);var table_state = map__71353__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71353__$1,cljs.core.constant$keyword$1399);var map__71354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71353__$1,cljs.core.constant$keyword$1368);var map__71354__$1 = ((cljs.core.seq_QMARK_(map__71354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71354):map__71354);var controls = map__71354__$1;var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71354__$1,cljs.core.constant$keyword$1158);var sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71354__$1,cljs.core.constant$keyword$1393);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71354__$1,cljs.core.constant$keyword$1148);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71354__$1,cljs.core.constant$keyword$1149);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71354__$1,cljs.core.constant$keyword$1405);var map__71355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71352__$1,cljs.core.constant$keyword$1150);var map__71355__$1 = ((cljs.core.seq_QMARK_(map__71355))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71355):map__71355);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71355__$1,cljs.core.constant$keyword$1372);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71355__$1,cljs.core.constant$keyword$1373);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71352__$1,cljs.core.constant$keyword$1142);if(typeof clustermap.components.table.t71356 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t71356 = (function (map__71352,sort_spec,table_component,owner,filter_by_view,props,map__71353,table_data,p__71337,index,filter_spec,columns,table_state,map__71355,controls,bounds,size,map__71354,from,meta71357){
this.map__71352 = map__71352;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__71353 = map__71353;
this.table_data = table_data;
this.p__71337 = p__71337;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.map__71355 = map__71355;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__71354 = map__71354;
this.from = from;
this.meta71357 = meta71357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t71356.cljs$lang$type = true;
clustermap.components.table.t71356.cljs$lang$ctorStr = "clustermap.components.table/t71356";
clustermap.components.table.t71356.cljs$lang$ctorPrWriter = ((function (map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.table/t71356");
});})(map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t71356.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t71356.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__71359,p__71360){var self__ = this;
var map__71361 = p__71359;var map__71361__$1 = ((cljs.core.seq_QMARK_(map__71361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71361):map__71361);var next_props = map__71361__$1;var map__71362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71361__$1,cljs.core.constant$keyword$1410);var map__71362__$1 = ((cljs.core.seq_QMARK_(map__71362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71362):map__71362);var next_table_state = map__71362__$1;var next_table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71362__$1,cljs.core.constant$keyword$1399);var map__71363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71362__$1,cljs.core.constant$keyword$1368);var map__71363__$1 = ((cljs.core.seq_QMARK_(map__71363))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71363):map__71363);var next_controls = map__71363__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71363__$1,cljs.core.constant$keyword$1158);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71363__$1,cljs.core.constant$keyword$1369);var next_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71363__$1,cljs.core.constant$keyword$1393);var next_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71363__$1,cljs.core.constant$keyword$1148);var next_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71363__$1,cljs.core.constant$keyword$1149);var map__71364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71361__$1,cljs.core.constant$keyword$1150);var map__71364__$1 = ((cljs.core.seq_QMARK_(map__71364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71364):map__71364);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71364__$1,cljs.core.constant$keyword$1372);var next_filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71364__$1,cljs.core.constant$keyword$1373);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71361__$1,cljs.core.constant$keyword$1142);var map__71365 = p__71360;var map__71365__$1 = ((cljs.core.seq_QMARK_(map__71365))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71365):map__71365);var next_state = map__71365__$1;var table_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71365__$1,cljs.core.constant$keyword$1411);var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not(next_table_data);if(or__3637__auto__)
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
});})(map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t71356.prototype.om$core$IRender$ = true;
clustermap.components.table.t71356.prototype.om$core$IRender$render$arity$1 = ((function (map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1399,self__.table_data,cljs.core.constant$keyword$1368,self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t71356.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t71356.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource("table-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1411,tdr);
return clustermap.ordered_resource.retrieve_responses(tdr,((function (tdr,___$1,map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1399], null),data);
});})(tdr,___$1,map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds))
);
});})(map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t71356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds){
return (function (_71358){var self__ = this;
var _71358__$1 = this;return self__.meta71357;
});})(map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t71356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds){
return (function (_71358,meta71357__$1){var self__ = this;
var _71358__$1 = this;return (new clustermap.components.table.t71356(self__.map__71352,self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__71353,self__.table_data,self__.p__71337,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.map__71355,self__.controls,self__.bounds,self__.size,self__.map__71354,self__.from,meta71357__$1));
});})(map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t71356 = ((function (map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t71356(map__71352__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__71353__$2,table_data__$1,p__71337__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__71355__$2,controls__$1,bounds__$1,size__$1,map__71354__$2,from__$1,meta71357){return (new clustermap.components.table.t71356(map__71352__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__71353__$2,table_data__$1,p__71337__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__71355__$2,controls__$1,bounds__$1,size__$1,map__71354__$2,from__$1,meta71357));
});})(map__71352,map__71352__$1,props,map__71353,map__71353__$1,table_state,table_data,map__71354,map__71354__$1,controls,index,sort_spec,from,size,columns,map__71355,map__71355__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t71356(map__71352__$1,sort_spec,table_component,owner,filter_by_view,props,map__71353__$1,table_data,p__71337,index,filter_spec,columns,table_state,map__71355__$1,controls,bounds,size,map__71354__$1,from,null));
});
