// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = cljs.core.constant$keyword$802.cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_(current_order))?cljs.core.first(current_order):current_order);var current_order_key = cljs.core.first(cljs.core.keys(current_order__$1));var current_order_dir = cljs.core.first(cljs.core.vals(current_order__$1));return React.DOM.a({"href": "#", "onClick": ((function (current_order,current_order__$1,current_order_key,current_order_dir){
return (function (e){e.preventDefault();
var pred__38452 = cljs.core._EQ_;var expr__38453 = current_order_dir;if(cljs.core.truth_((pred__38452.cljs$core$IFn$_invoke$arity$2 ? pred__38452.cljs$core$IFn$_invoke$arity$2("asc",expr__38453) : pred__38452.call(null,"asc",expr__38453))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$802,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$853], true, false)], null)], null));
} else
{if(cljs.core.truth_((pred__38452.cljs$core$IFn$_invoke$arity$2 ? pred__38452.cljs$core$IFn$_invoke$arity$2("desc",expr__38453) : pred__38452.call(null,"desc",expr__38453))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$802,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$854], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$802,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$853], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret(title),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_order_key,col))?sablono.interpreter.interpret((function (){var pred__38455 = cljs.core._EQ_;var expr__38456 = current_order_dir;if(cljs.core.truth_((pred__38455.cljs$core$IFn$_invoke$arity$2 ? pred__38455.cljs$core$IFn$_invoke$arity$2("asc",expr__38456) : pred__38455.call(null,"asc",expr__38456))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$855], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$856], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__38458,view_update_key){var map__38471 = p__38458;var map__38471__$1 = ((cljs.core.seq_QMARK_(map__38471))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38471):map__38471);var collection = map__38471__$1;var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38471__$1,cljs.core.constant$keyword$799);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38471__$1,cljs.core.constant$keyword$857);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38471__$1,cljs.core.constant$keyword$858);var attrs38472 = (((from > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$859,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$831,"#",cljs.core.constant$keyword$860,((function (map__38471,map__38471__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$857,(function (){var x__3850__auto__ = (from - size);var y__3851__auto__ = (0);return ((x__3850__auto__ > y__3851__auto__) ? x__3850__auto__ : y__3851__auto__);
})()], null)], null));
});})(map__38471,map__38471__$1,collection,size,from,count))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$861], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$859,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$861], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38472))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs38472], 0))):{"className": "paginate"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38472))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38473 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3857__auto__ = (from + size);var y__3858__auto__ = count;return ((x__3857__auto__ < y__3858__auto__) ? x__3857__auto__ : y__3858__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38473))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs38473], 0))):{"className": "page"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38473))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38473)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs38472,map__38471,map__38471__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$857,(from + size)], null)], null));
});})(attrs38472,map__38471,map__38471__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38472),(function (){var attrs38474 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3857__auto__ = (from + size);var y__3858__auto__ = count;return ((x__3857__auto__ < y__3858__auto__) ? x__3857__auto__ : y__3858__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38474))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs38474], 0))):{"className": "page"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38474))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38474)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs38472,map__38471,map__38471__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$857,(from + size)], null)], null));
});})(attrs38472,map__38471,map__38471__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});
