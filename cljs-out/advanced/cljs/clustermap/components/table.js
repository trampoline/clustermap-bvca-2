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
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_(current_order))?cljs.core.first(current_order):current_order);var current_order_key = cljs.core.first(cljs.core.keys(current_order__$1));var current_order_dir = cljs.core.first(cljs.core.vals(current_order__$1));return React.DOM.a({"href": "#", "onClick": ((function (current_order,current_order__$1,current_order_key,current_order_dir){
return (function (e){e.preventDefault();
var pred__39948 = cljs.core._EQ_;var expr__39949 = current_order_dir;if(cljs.core.truth_((pred__39948.cljs$core$IFn$_invoke$arity$2 ? pred__39948.cljs$core$IFn$_invoke$arity$2("asc",expr__39949) : pred__39948.call(null,"asc",expr__39949))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$983,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$984], true, false)], null)], null));
} else
{if(cljs.core.truth_((pred__39948.cljs$core$IFn$_invoke$arity$2 ? pred__39948.cljs$core$IFn$_invoke$arity$2("desc",expr__39949) : pred__39948.call(null,"desc",expr__39949))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$983,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$985], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$983,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$984], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret(title),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_order_key,col))?sablono.interpreter.interpret((function (){var pred__39951 = cljs.core._EQ_;var expr__39952 = current_order_dir;if(cljs.core.truth_((pred__39951.cljs$core$IFn$_invoke$arity$2 ? pred__39951.cljs$core$IFn$_invoke$arity$2("asc",expr__39952) : pred__39951.call(null,"asc",expr__39952))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$986], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$987], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__39954,view_update_key){var map__39967 = p__39954;var map__39967__$1 = ((cljs.core.seq_QMARK_(map__39967))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39967):map__39967);var collection = map__39967__$1;var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39967__$1,cljs.core.constant$keyword$988);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39967__$1,cljs.core.constant$keyword$989);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39967__$1,cljs.core.constant$keyword$990);var attrs39968 = (((from > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$934,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$932,"#",cljs.core.constant$keyword$992,((function (map__39967,map__39967__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$989,(function (){var x__3865__auto__ = (from - size);var y__3866__auto__ = (0);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})()], null)], null));
});})(map__39967,map__39967__$1,collection,size,from,count))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$993], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$993], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs39968))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs39968], 0))):{"className": "paginate"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39968))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39969 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (from + size);var y__3873__auto__ = count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39969))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs39969], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39969))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39969)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs39968,map__39967,map__39967__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$989,(from + size)], null)], null));
});})(attrs39968,map__39967,map__39967__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39968),(function (){var attrs39970 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (from + size);var y__3873__auto__ = count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39970))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs39970], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39970))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39970)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs39968,map__39967,map__39967__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$989,(from + size)], null)], null));
});})(attrs39968,map__39967,map__39967__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});
clustermap.components.table.render_table_row = (function render_table_row(p__39979){var map__40020 = p__39979;var map__40020__$1 = ((cljs.core.seq_QMARK_(map__40020))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40020):map__40020);var data = map__40020__$1;var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40020__$1,cljs.core.constant$keyword$994);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40020__$1,cljs.core.constant$keyword$995);if(typeof clustermap.components.table.t40021 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t40021 = (function (columns,record,data,map__40020,p__39979,render_table_row,meta40022){
this.columns = columns;
this.record = record;
this.data = data;
this.map__40020 = map__40020;
this.p__39979 = p__39979;
this.render_table_row = render_table_row;
this.meta40022 = meta40022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t40021.cljs$lang$type = true;
clustermap.components.table.t40021.cljs$lang$ctorStr = "clustermap.components.table/t40021";
clustermap.components.table.t40021.cljs$lang$ctorPrWriter = ((function (map__40020,map__40020__$1,data,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t40021");
});})(map__40020,map__40020__$1,data,record,columns))
;
clustermap.components.table.t40021.prototype.om$core$IRender$ = true;
clustermap.components.table.t40021.prototype.om$core$IRender$render$arity$1 = ((function (map__40020,map__40020__$1,data,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret((function (){var row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$996], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns){
return (function iter__40024(s__40025){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns){
return (function (){var s__40025__$1 = s__40025;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40025__$1);if(temp__4126__auto__)
{var s__40025__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40025__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40025__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40027 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40026 = (0);while(true){
if((i__40026 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40026);cljs.core.chunk_append(b__40027,(function (){var iter__4283__auto__ = ((function (i__40026,col,c__4281__auto__,size__4282__auto__,b__40027,s__40025__$2,temp__4126__auto__,this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns){
return (function iter__40044(s__40045){return (new cljs.core.LazySeq(null,((function (i__40026,col,c__4281__auto__,size__4282__auto__,b__40027,s__40025__$2,temp__4126__auto__,this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns){
return (function (){var s__40045__$1 = s__40045;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40045__$1);if(temp__4126__auto____$1)
{var s__40045__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40045__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__40045__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__40047 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__40046 = (0);while(true){
if((i__40046 < size__4282__auto____$1))
{var vec__40050 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__40046);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40050,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40050,(1),null);cljs.core.chunk_append(b__40047,(function (){console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type(col_key),col_name,cljs.core.type(col_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$997,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null);
})());
{
var G__40060 = (i__40046 + (1));
i__40046 = G__40060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40047),iter__40044(cljs.core.chunk_rest(s__40045__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40047),null);
}
} else
{var vec__40051 = cljs.core.first(s__40045__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40051,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40051,(1),null);return cljs.core.cons((function (){console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type(col_key),col_name,cljs.core.type(col_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$997,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null);
})(),iter__40044(cljs.core.rest(s__40045__$2)));
}
} else
{return null;
}
break;
}
});})(i__40026,col,c__4281__auto__,size__4282__auto__,b__40027,s__40025__$2,temp__4126__auto__,this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns))
,null,null));
});})(i__40026,col,c__4281__auto__,size__4282__auto__,b__40027,s__40025__$2,temp__4126__auto__,this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns))
;return iter__4283__auto__(col);
})());
{
var G__40061 = (i__40026 + (1));
i__40026 = G__40061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40027),iter__40024(cljs.core.chunk_rest(s__40025__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40027),null);
}
} else
{var col = cljs.core.first(s__40025__$2);return cljs.core.cons((function (){var iter__4283__auto__ = ((function (col,s__40025__$2,temp__4126__auto__,this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns){
return (function iter__40052(s__40053){return (new cljs.core.LazySeq(null,((function (col,s__40025__$2,temp__4126__auto__,this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns){
return (function (){var s__40053__$1 = s__40053;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40053__$1);if(temp__4126__auto____$1)
{var s__40053__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40053__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40053__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40055 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40054 = (0);while(true){
if((i__40054 < size__4282__auto__))
{var vec__40058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40054);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40058,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40058,(1),null);cljs.core.chunk_append(b__40055,(function (){console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type(col_key),col_name,cljs.core.type(col_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$997,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null);
})());
{
var G__40062 = (i__40054 + (1));
i__40054 = G__40062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40055),iter__40052(cljs.core.chunk_rest(s__40053__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40055),null);
}
} else
{var vec__40059 = cljs.core.first(s__40053__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40059,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40059,(1),null);return cljs.core.cons((function (){console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type(col_key),col_name,cljs.core.type(col_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$997,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null);
})(),iter__40052(cljs.core.rest(s__40053__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__40025__$2,temp__4126__auto__,this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns))
,null,null));
});})(col,s__40025__$2,temp__4126__auto__,this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns))
;return iter__4283__auto__(col);
})(),iter__40024(cljs.core.rest(s__40025__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns))
,null,null));
});})(this__9504__auto____$1,map__40020,map__40020__$1,data,record,columns))
;return iter__4283__auto__(self__.columns);
})()));var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ROW",self__.columns,self__.record,row], null)));return row;
})());
});})(map__40020,map__40020__$1,data,record,columns))
;
clustermap.components.table.t40021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40020,map__40020__$1,data,record,columns){
return (function (_40023){var self__ = this;
var _40023__$1 = this;return self__.meta40022;
});})(map__40020,map__40020__$1,data,record,columns))
;
clustermap.components.table.t40021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40020,map__40020__$1,data,record,columns){
return (function (_40023,meta40022__$1){var self__ = this;
var _40023__$1 = this;return (new clustermap.components.table.t40021(self__.columns,self__.record,self__.data,self__.map__40020,self__.p__39979,self__.render_table_row,meta40022__$1));
});})(map__40020,map__40020__$1,data,record,columns))
;
clustermap.components.table.__GT_t40021 = ((function (map__40020,map__40020__$1,data,record,columns){
return (function __GT_t40021(columns__$1,record__$1,data__$1,map__40020__$2,p__39979__$1,render_table_row__$1,meta40022){return (new clustermap.components.table.t40021(columns__$1,record__$1,data__$1,map__40020__$2,p__39979__$1,render_table_row__$1,meta40022));
});})(map__40020,map__40020__$1,data,record,columns))
;
}
return (new clustermap.components.table.t40021(columns,record,data,map__40020__$1,p__39979,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(columns,table_data,opts){return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs40101 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$996], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4283__auto__ = (function iter__40103(s__40104){return (new cljs.core.LazySeq(null,(function (){var s__40104__$1 = s__40104;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40104__$1);if(temp__4126__auto__)
{var s__40104__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40104__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40104__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40106 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40105 = (0);while(true){
if((i__40105 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40105);cljs.core.chunk_append(b__40106,(function (){var iter__4283__auto__ = ((function (i__40105,col,c__4281__auto__,size__4282__auto__,b__40106,s__40104__$2,temp__4126__auto__){
return (function iter__40123(s__40124){return (new cljs.core.LazySeq(null,((function (i__40105,col,c__4281__auto__,size__4282__auto__,b__40106,s__40104__$2,temp__4126__auto__){
return (function (){var s__40124__$1 = s__40124;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40124__$1);if(temp__4126__auto____$1)
{var s__40124__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40124__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__40124__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__40126 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__40125 = (0);while(true){
if((i__40125 < size__4282__auto____$1))
{var vec__40129 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__40125);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40129,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40129,(1),null);cljs.core.chunk_append(b__40126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$998,col_name], null));
{
var G__40139 = (i__40125 + (1));
i__40125 = G__40139;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40126),iter__40123(cljs.core.chunk_rest(s__40124__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40126),null);
}
} else
{var vec__40130 = cljs.core.first(s__40124__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40130,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40130,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$998,col_name], null),iter__40123(cljs.core.rest(s__40124__$2)));
}
} else
{return null;
}
break;
}
});})(i__40105,col,c__4281__auto__,size__4282__auto__,b__40106,s__40104__$2,temp__4126__auto__))
,null,null));
});})(i__40105,col,c__4281__auto__,size__4282__auto__,b__40106,s__40104__$2,temp__4126__auto__))
;return iter__4283__auto__(col);
})());
{
var G__40140 = (i__40105 + (1));
i__40105 = G__40140;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40106),iter__40103(cljs.core.chunk_rest(s__40104__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40106),null);
}
} else
{var col = cljs.core.first(s__40104__$2);return cljs.core.cons((function (){var iter__4283__auto__ = ((function (col,s__40104__$2,temp__4126__auto__){
return (function iter__40131(s__40132){return (new cljs.core.LazySeq(null,((function (col,s__40104__$2,temp__4126__auto__){
return (function (){var s__40132__$1 = s__40132;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40132__$1);if(temp__4126__auto____$1)
{var s__40132__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40132__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40132__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40134 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40133 = (0);while(true){
if((i__40133 < size__4282__auto__))
{var vec__40137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40133);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137,(1),null);cljs.core.chunk_append(b__40134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$998,col_name], null));
{
var G__40141 = (i__40133 + (1));
i__40133 = G__40141;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40134),iter__40131(cljs.core.chunk_rest(s__40132__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40134),null);
}
} else
{var vec__40138 = cljs.core.first(s__40132__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40138,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40138,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$998,col_name], null),iter__40131(cljs.core.rest(s__40132__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__40104__$2,temp__4126__auto__))
,null,null));
});})(col,s__40104__$2,temp__4126__auto__))
;return iter__4283__auto__(col);
})(),iter__40103(cljs.core.rest(s__40104__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(columns);
})()));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs40101))?sablono.interpreter.attributes(attrs40101):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40101))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40101)], null))));
})(),(function (){var attrs40102 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$999.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$974,cljs.core.constant$keyword$971,(function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$995,columns,cljs.core.constant$keyword$994,r,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1000.cljs$core$IFn$_invoke$arity$1(r)], null);
})], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs40102))?sablono.interpreter.attributes(attrs40102):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40102))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40102)], null))));
})())));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,offset,limit){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.simple_table,cljs.core.array_seq([index,index_type,filter_spec,bounds,sort_spec,offset,limit], 0));
});
clustermap.components.table.table_component = (function table_component(p__40142,owner){var map__40155 = p__40142;var map__40155__$1 = ((cljs.core.seq_QMARK_(map__40155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40155):map__40155);var props = map__40155__$1;var map__40156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,cljs.core.constant$keyword$1001);var map__40156__$1 = ((cljs.core.seq_QMARK_(map__40156))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40156):map__40156);var table_state = map__40156__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40156__$1,cljs.core.constant$keyword$1002);var map__40157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40156__$1,cljs.core.constant$keyword$1003);var map__40157__$1 = ((cljs.core.seq_QMARK_(map__40157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40157):map__40157);var controls = map__40157__$1;var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,cljs.core.constant$keyword$910);var sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,cljs.core.constant$keyword$1004);var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,cljs.core.constant$keyword$906);var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,cljs.core.constant$keyword$907);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,cljs.core.constant$keyword$1005);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157__$1,cljs.core.constant$keyword$995);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,cljs.core.constant$keyword$901);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,cljs.core.constant$keyword$900);if(typeof clustermap.components.table.t40158 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t40158 = (function (sort_spec,map__40155,table_component,owner,filter_by_view,props,table_data,p__40142,limit,index,offset,filter_spec,columns,map__40156,table_state,controls,bounds,map__40157,meta40159){
this.sort_spec = sort_spec;
this.map__40155 = map__40155;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.p__40142 = p__40142;
this.limit = limit;
this.index = index;
this.offset = offset;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__40156 = map__40156;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.map__40157 = map__40157;
this.meta40159 = meta40159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t40158.cljs$lang$type = true;
clustermap.components.table.t40158.cljs$lang$ctorStr = "clustermap.components.table/t40158";
clustermap.components.table.t40158.cljs$lang$ctorPrWriter = ((function (map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t40158");
});})(map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t40158.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t40158.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_,p__40161,p__40162){var self__ = this;
var map__40163 = p__40161;var map__40163__$1 = ((cljs.core.seq_QMARK_(map__40163))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40163):map__40163);var next_props = map__40163__$1;var map__40164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40163__$1,cljs.core.constant$keyword$1001);var map__40164__$1 = ((cljs.core.seq_QMARK_(map__40164))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40164):map__40164);var next_table_state = map__40164__$1;var next_table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40164__$1,cljs.core.constant$keyword$1002);var map__40165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40164__$1,cljs.core.constant$keyword$1003);var map__40165__$1 = ((cljs.core.seq_QMARK_(map__40165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40165):map__40165);var next_controls = map__40165__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$910);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$1006);var next_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$1004);var next_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$906);var next_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$907);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$1005);var next_filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40163__$1,cljs.core.constant$keyword$901);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40163__$1,cljs.core.constant$keyword$900);var map__40166 = p__40162;var map__40166__$1 = ((cljs.core.seq_QMARK_(map__40166))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40166):map__40166);var next_state = map__40166__$1;var table_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,cljs.core.constant$keyword$1007);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_spec,self__.filter_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not(self__.filter_by_view)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds));
} else
{return and__3546__auto__;
}
}
}
}
})()))
{return clustermap.components.table.request_table_data(table_data_resource,next_index,next_index_type,next_filter_spec,next_bounds,next_sort_spec,next_offset,next_limit);
} else
{return null;
}
});})(map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t40158.prototype.om$core$IRender$ = true;
clustermap.components.table.t40158.prototype.om$core$IRender$render$arity$1 = ((function (map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table(self__.columns,self__.table_data,cljs.core.PersistentArrayMap.EMPTY);
});})(map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t40158.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t40158.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource("table-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1007,tdr);
return clustermap.ordered_resource.retrieve_responses(tdr,((function (tdr,___$1,map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1002], null),data);
});})(tdr,___$1,map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
);
});})(map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t40158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_40160){var self__ = this;
var _40160__$1 = this;return self__.meta40159;
});})(map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t40158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_40160,meta40159__$1){var self__ = this;
var _40160__$1 = this;return (new clustermap.components.table.t40158(self__.sort_spec,self__.map__40155,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.p__40142,self__.limit,self__.index,self__.offset,self__.filter_spec,self__.columns,self__.map__40156,self__.table_state,self__.controls,self__.bounds,self__.map__40157,meta40159__$1));
});})(map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.__GT_t40158 = ((function (map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function __GT_t40158(sort_spec__$1,map__40155__$2,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,p__40142__$1,limit__$1,index__$1,offset__$1,filter_spec__$1,columns__$1,map__40156__$2,table_state__$1,controls__$1,bounds__$1,map__40157__$2,meta40159){return (new clustermap.components.table.t40158(sort_spec__$1,map__40155__$2,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,p__40142__$1,limit__$1,index__$1,offset__$1,filter_spec__$1,columns__$1,map__40156__$2,table_state__$1,controls__$1,bounds__$1,map__40157__$2,meta40159));
});})(map__40155,map__40155__$1,props,map__40156,map__40156__$1,table_state,table_data,map__40157,map__40157__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
}
return (new clustermap.components.table.t40158(sort_spec,map__40155__$1,table_component,owner,filter_by_view,props,table_data,p__40142,limit,index,offset,filter_spec,columns,map__40156__$1,table_state,controls,bounds,map__40157__$1,null));
});
