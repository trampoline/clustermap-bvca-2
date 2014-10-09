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
clustermap.components.table.order_col = (function order_col(controls,p__47235,col_key,col_name){var map__47245 = p__47235;var map__47245__$1 = ((cljs.core.seq_QMARK_(map__47245))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47245):map__47245);var table_data = map__47245__$1;var current_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47245__$1,cljs.core.constant$keyword$1274);var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_(current_sort_spec))?cljs.core.first(current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__47246 = current_sort_spec__$1;var G__47246__$1 = (((G__47246 == null))?null:cljs.core.keys(G__47246));var G__47246__$2 = (((G__47246__$1 == null))?null:cljs.core.first(G__47246__$1));return G__47246__$2;
})();var current_sort_dir = (function (){var G__47247 = current_sort_spec__$1;var G__47247__$1 = (((G__47247 == null))?null:(current_sort_key.cljs$core$IFn$_invoke$arity$1 ? current_sort_key.cljs$core$IFn$_invoke$arity$1(G__47247) : current_sort_key.call(null,G__47247)));var G__47247__$2 = (((G__47247__$1 == null))?null:cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(G__47247__$1));return G__47247__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__47245,map__47245__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__47248 = cljs.core._EQ_;var expr__47249 = current_sort_dir;if(cljs.core.truth_((pred__47248.cljs$core$IFn$_invoke$arity$2 ? pred__47248.cljs$core$IFn$_invoke$arity$2("asc",expr__47249) : pred__47248.call(null,"asc",expr__47249))))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,cljs.core.constant$keyword$1276], null)], true, false));
} else
{if(cljs.core.truth_((pred__47248.cljs$core$IFn$_invoke$arity$2 ? pred__47248.cljs$core$IFn$_invoke$arity$2("desc",expr__47249) : pred__47248.call(null,"desc",expr__47249))))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,cljs.core.constant$keyword$1277], null)], true, false));
} else
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,cljs.core.constant$keyword$1276], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__47245,map__47245__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret(col_name),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_sort_key,col_key))?sablono.interpreter.interpret((function (){var pred__47251 = cljs.core._EQ_;var expr__47252 = current_sort_dir;if(cljs.core.truth_((pred__47251.cljs$core$IFn$_invoke$arity$2 ? pred__47251.cljs$core$IFn$_invoke$arity$2("asc",expr__47252) : pred__47251.call(null,"asc",expr__47252))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1278], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1279], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__47254,owner,opts){var map__47271 = p__47254;var map__47271__$1 = ((cljs.core.seq_QMARK_(map__47271))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47271):map__47271);var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47271__$1,cljs.core.constant$keyword$1267);var map__47272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47271__$1,cljs.core.constant$keyword$1280);var map__47272__$1 = ((cljs.core.seq_QMARK_(map__47272))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47272):map__47272);var table_data = map__47272__$1;var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47272__$1,cljs.core.constant$keyword$1281);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47272__$1,cljs.core.constant$keyword$1120);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47272__$1,cljs.core.constant$keyword$1121);if(typeof clustermap.components.table.t47273 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t47273 = (function (owner,map__47272,paginate,p__47254,table_data,controls,map__47271,size,from,count,opts,meta47274){
this.owner = owner;
this.map__47272 = map__47272;
this.paginate = paginate;
this.p__47254 = p__47254;
this.table_data = table_data;
this.controls = controls;
this.map__47271 = map__47271;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta47274 = meta47274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t47273.cljs$lang$type = true;
clustermap.components.table.t47273.cljs$lang$ctorStr = "clustermap.components.table/t47273";
clustermap.components.table.t47273.cljs$lang$ctorPrWriter = ((function (map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t47273");
});})(map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size))
;
clustermap.components.table.t47273.prototype.om$core$IRender$ = true;
clustermap.components.table.t47273.prototype.om$core$IRender$render$arity$1 = ((function (map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs47276 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1282,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1217,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1215,"#",cljs.core.constant$keyword$1283,((function (this__9504__auto____$1,map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1120,(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1284], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1282,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1284], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs47276))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs47276], 0))):{"className": "paginate"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47276))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47277 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs47277))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs47277], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47277))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47277)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs47276,this__9504__auto____$1,map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1120,(self__.from + self__.size));
});})(attrs47276,this__9504__auto____$1,map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47276),(function (){var attrs47278 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs47278))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs47278], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47278))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47278)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs47276,this__9504__auto____$1,map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1120,(self__.from + self__.size));
});})(attrs47276,this__9504__auto____$1,map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size))
;
clustermap.components.table.t47273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size){
return (function (_47275){var self__ = this;
var _47275__$1 = this;return self__.meta47274;
});})(map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size))
;
clustermap.components.table.t47273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size){
return (function (_47275,meta47274__$1){var self__ = this;
var _47275__$1 = this;return (new clustermap.components.table.t47273(self__.owner,self__.map__47272,self__.paginate,self__.p__47254,self__.table_data,self__.controls,self__.map__47271,self__.size,self__.from,self__.count,self__.opts,meta47274__$1));
});})(map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t47273 = ((function (map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size){
return (function __GT_t47273(owner__$1,map__47272__$2,paginate__$1,p__47254__$1,table_data__$1,controls__$1,map__47271__$2,size__$1,from__$1,count__$1,opts__$1,meta47274){return (new clustermap.components.table.t47273(owner__$1,map__47272__$2,paginate__$1,p__47254__$1,table_data__$1,controls__$1,map__47271__$2,size__$1,from__$1,count__$1,opts__$1,meta47274));
});})(map__47271,map__47271__$1,controls,map__47272,map__47272__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t47273(owner,map__47272__$1,paginate,p__47254,table_data,controls,map__47271__$1,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__47287){var map__47300 = p__47287;var map__47300__$1 = ((cljs.core.seq_QMARK_(map__47300))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47300):map__47300);var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47300__$1,cljs.core.constant$keyword$1285);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47300__$1,cljs.core.constant$keyword$1286);if(typeof clustermap.components.table.t47301 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t47301 = (function (columns,record,map__47300,p__47287,render_table_row,meta47302){
this.columns = columns;
this.record = record;
this.map__47300 = map__47300;
this.p__47287 = p__47287;
this.render_table_row = render_table_row;
this.meta47302 = meta47302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t47301.cljs$lang$type = true;
clustermap.components.table.t47301.cljs$lang$ctorStr = "clustermap.components.table/t47301";
clustermap.components.table.t47301.cljs$lang$ctorPrWriter = ((function (map__47300,map__47300__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t47301");
});})(map__47300,map__47300__$1,record,columns))
;
clustermap.components.table.t47301.prototype.om$core$IRender$ = true;
clustermap.components.table.t47301.prototype.om$core$IRender$render$arity$1 = ((function (map__47300,map__47300__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret((function (){var row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1287], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__47300,map__47300__$1,record,columns){
return (function iter__47304(s__47305){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__47300,map__47300__$1,record,columns){
return (function (){var s__47305__$1 = s__47305;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47305__$1);if(temp__4126__auto__)
{var s__47305__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47305__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47305__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47307 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47306 = (0);while(true){
if((i__47306 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47306);cljs.core.chunk_append(b__47307,(function (){var vec__47310 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47310,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47310,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47310,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,(formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)) : formatter__$1.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)))], null);
})());
{
var G__47312 = (i__47306 + (1));
i__47306 = G__47312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47307),iter__47304(cljs.core.chunk_rest(s__47305__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47307),null);
}
} else
{var col = cljs.core.first(s__47305__$2);return cljs.core.cons((function (){var vec__47311 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47311,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47311,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47311,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,(formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)) : formatter__$1.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)))], null);
})(),iter__47304(cljs.core.rest(s__47305__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__47300,map__47300__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__47300,map__47300__$1,record,columns))
;return iter__4283__auto__(self__.columns);
})());return row;
})());
});})(map__47300,map__47300__$1,record,columns))
;
clustermap.components.table.t47301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47300,map__47300__$1,record,columns){
return (function (_47303){var self__ = this;
var _47303__$1 = this;return self__.meta47302;
});})(map__47300,map__47300__$1,record,columns))
;
clustermap.components.table.t47301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47300,map__47300__$1,record,columns){
return (function (_47303,meta47302__$1){var self__ = this;
var _47303__$1 = this;return (new clustermap.components.table.t47301(self__.columns,self__.record,self__.map__47300,self__.p__47287,self__.render_table_row,meta47302__$1));
});})(map__47300,map__47300__$1,record,columns))
;
clustermap.components.table.__GT_t47301 = ((function (map__47300,map__47300__$1,record,columns){
return (function __GT_t47301(columns__$1,record__$1,map__47300__$2,p__47287__$1,render_table_row__$1,meta47302){return (new clustermap.components.table.t47301(columns__$1,record__$1,map__47300__$2,p__47287__$1,render_table_row__$1,meta47302));
});})(map__47300,map__47300__$1,record,columns))
;
}
return (new clustermap.components.table.t47301(columns,record,map__47300__$1,p__47287,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__47313,owner,opts){var map__47337 = p__47313;var map__47337__$1 = ((cljs.core.seq_QMARK_(map__47337))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47337):map__47337);var props = map__47337__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47337__$1,cljs.core.constant$keyword$1280);var map__47338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47337__$1,cljs.core.constant$keyword$1267);var map__47338__$1 = ((cljs.core.seq_QMARK_(map__47338))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47338):map__47338);var controls = map__47338__$1;var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47338__$1,cljs.core.constant$keyword$1286);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47338__$1,cljs.core.constant$keyword$1271);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs47339 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,controls,cljs.core.constant$keyword$1280,table_data], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs47339))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs47339], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47339))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs47340 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1287], null),(function (){var iter__4283__auto__ = ((function (attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view){
return (function iter__47344(s__47345){return (new cljs.core.LazySeq(null,((function (attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view){
return (function (){var s__47345__$1 = s__47345;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47345__$1);if(temp__4126__auto__)
{var s__47345__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47345__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47345__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47347 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47346 = (0);while(true){
if((i__47346 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47346);cljs.core.chunk_append(b__47347,(function (){var vec__47350 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__47360 = (i__47346 + (1));
i__47346 = G__47360;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47347),iter__47344(cljs.core.chunk_rest(s__47345__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47347),null);
}
} else
{var col = cljs.core.first(s__47345__$2);return cljs.core.cons((function (){var vec__47351 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47351,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47351,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__47344(cljs.core.rest(s__47345__$2)));
}
} else
{return null;
}
break;
}
});})(attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs47340))?sablono.interpreter.attributes(attrs47340):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47340))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47340)], null))));
})(),(function (){var attrs47341 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1240.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1195,((function (attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1286,columns,cljs.core.constant$keyword$1285,r,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1290.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs47341))?sablono.interpreter.attributes(attrs47341):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47341))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47341)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,controls,cljs.core.constant$keyword$1280,table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47339),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs47342 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1287], null),(function (){var iter__4283__auto__ = ((function (attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view){
return (function iter__47352(s__47353){return (new cljs.core.LazySeq(null,((function (attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view){
return (function (){var s__47353__$1 = s__47353;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47353__$1);if(temp__4126__auto__)
{var s__47353__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47353__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47353__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47355 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47354 = (0);while(true){
if((i__47354 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47354);cljs.core.chunk_append(b__47355,(function (){var vec__47358 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47358,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47358,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__47361 = (i__47354 + (1));
i__47354 = G__47361;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47355),iter__47352(cljs.core.chunk_rest(s__47353__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47355),null);
}
} else
{var col = cljs.core.first(s__47353__$2);return cljs.core.cons((function (){var vec__47359 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47359,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47359,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__47352(cljs.core.rest(s__47353__$2)));
}
} else
{return null;
}
break;
}
});})(attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs47342))?sablono.interpreter.attributes(attrs47342):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47342))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47342)], null))));
})(),(function (){var attrs47343 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1240.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1195,((function (attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1286,columns,cljs.core.constant$keyword$1285,r,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1290.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs47339,map__47337,map__47337__$1,props,table_data,map__47338,map__47338__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs47343))?sablono.interpreter.attributes(attrs47343):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47343))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47343)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,controls,cljs.core.constant$keyword$1280,table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.simple_table,cljs.core.array_seq([index,index_type,filter_spec,bounds,sort_spec,from,size], 0));
});
clustermap.components.table.table_component = (function table_component(p__47362,owner){var map__47377 = p__47362;var map__47377__$1 = ((cljs.core.seq_QMARK_(map__47377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47377):map__47377);var props = map__47377__$1;var map__47378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47377__$1,cljs.core.constant$keyword$1291);var map__47378__$1 = ((cljs.core.seq_QMARK_(map__47378))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47378):map__47378);var table_state = map__47378__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47378__$1,cljs.core.constant$keyword$1280);var map__47379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47378__$1,cljs.core.constant$keyword$1267);var map__47379__$1 = ((cljs.core.seq_QMARK_(map__47379))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47379):map__47379);var controls = map__47379__$1;var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47379__$1,cljs.core.constant$keyword$1133);var sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47379__$1,cljs.core.constant$keyword$1274);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47379__$1,cljs.core.constant$keyword$1120);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47379__$1,cljs.core.constant$keyword$1121);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47379__$1,cljs.core.constant$keyword$1286);var map__47380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47377__$1,cljs.core.constant$keyword$1122);var map__47380__$1 = ((cljs.core.seq_QMARK_(map__47380))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47380):map__47380);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47380__$1,cljs.core.constant$keyword$1271);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47380__$1,cljs.core.constant$keyword$1272);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47377__$1,cljs.core.constant$keyword$1114);if(typeof clustermap.components.table.t47381 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t47381 = (function (p__47362,sort_spec,map__47377,table_component,map__47380,owner,filter_by_view,props,table_data,index,filter_spec,columns,table_state,controls,map__47378,bounds,size,map__47379,from,meta47382){
this.p__47362 = p__47362;
this.sort_spec = sort_spec;
this.map__47377 = map__47377;
this.table_component = table_component;
this.map__47380 = map__47380;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__47378 = map__47378;
this.bounds = bounds;
this.size = size;
this.map__47379 = map__47379;
this.from = from;
this.meta47382 = meta47382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t47381.cljs$lang$type = true;
clustermap.components.table.t47381.cljs$lang$ctorStr = "clustermap.components.table/t47381";
clustermap.components.table.t47381.cljs$lang$ctorPrWriter = ((function (map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t47381");
});})(map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47381.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t47381.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__47384,p__47385){var self__ = this;
var map__47386 = p__47384;var map__47386__$1 = ((cljs.core.seq_QMARK_(map__47386))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47386):map__47386);var next_props = map__47386__$1;var map__47387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47386__$1,cljs.core.constant$keyword$1291);var map__47387__$1 = ((cljs.core.seq_QMARK_(map__47387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47387):map__47387);var next_table_state = map__47387__$1;var next_table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47387__$1,cljs.core.constant$keyword$1280);var map__47388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47387__$1,cljs.core.constant$keyword$1267);var map__47388__$1 = ((cljs.core.seq_QMARK_(map__47388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47388):map__47388);var next_controls = map__47388__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1133);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1268);var next_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1274);var next_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1120);var next_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,cljs.core.constant$keyword$1121);var map__47389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47386__$1,cljs.core.constant$keyword$1122);var map__47389__$1 = ((cljs.core.seq_QMARK_(map__47389))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47389):map__47389);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,cljs.core.constant$keyword$1271);var next_filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,cljs.core.constant$keyword$1272);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47386__$1,cljs.core.constant$keyword$1114);var map__47390 = p__47385;var map__47390__$1 = ((cljs.core.seq_QMARK_(map__47390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47390):map__47390);var next_state = map__47390__$1;var table_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47390__$1,cljs.core.constant$keyword$1292);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_table_data);if(or__3558__auto__)
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
});})(map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47381.prototype.om$core$IRender$ = true;
clustermap.components.table.t47381.prototype.om$core$IRender$render$arity$1 = ((function (map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1280,self__.table_data,cljs.core.constant$keyword$1267,self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47381.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t47381.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource("table-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1292,tdr);
return clustermap.ordered_resource.retrieve_responses(tdr,((function (tdr,___$1,map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1280], null),data);
});})(tdr,___$1,map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds))
);
});})(map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds){
return (function (_47383){var self__ = this;
var _47383__$1 = this;return self__.meta47382;
});})(map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t47381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds){
return (function (_47383,meta47382__$1){var self__ = this;
var _47383__$1 = this;return (new clustermap.components.table.t47381(self__.p__47362,self__.sort_spec,self__.map__47377,self__.table_component,self__.map__47380,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__47378,self__.bounds,self__.size,self__.map__47379,self__.from,meta47382__$1));
});})(map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t47381 = ((function (map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t47381(p__47362__$1,sort_spec__$1,map__47377__$2,table_component__$1,map__47380__$2,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__47378__$2,bounds__$1,size__$1,map__47379__$2,from__$1,meta47382){return (new clustermap.components.table.t47381(p__47362__$1,sort_spec__$1,map__47377__$2,table_component__$1,map__47380__$2,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__47378__$2,bounds__$1,size__$1,map__47379__$2,from__$1,meta47382));
});})(map__47377,map__47377__$1,props,map__47378,map__47378__$1,table_state,table_data,map__47379,map__47379__$1,controls,index,sort_spec,from,size,columns,map__47380,map__47380__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t47381(p__47362,sort_spec,map__47377__$1,table_component,map__47380__$1,owner,filter_by_view,props,table_data,index,filter_spec,columns,table_state,controls,map__47378__$1,bounds,size,map__47379__$1,from,null));
});
