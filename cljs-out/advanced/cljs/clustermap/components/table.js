// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_(current_order))?cljs.core.first(current_order):current_order);var current_order_key = cljs.core.first(cljs.core.keys(current_order__$1));var current_order_dir = cljs.core.first(cljs.core.vals(current_order__$1));return React.DOM.a({"href": "#", "onClick": (function (e){e.preventDefault();
var pred__23574 = cljs.core._EQ_;var expr__23575 = current_order_dir;if(cljs.core.truth_((pred__23574.cljs$core$IFn$_invoke$arity$2 ? pred__23574.cljs$core$IFn$_invoke$arity$2("asc",expr__23575) : pred__23574.call(null,"asc",expr__23575))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$349], true, false)], null)], null));
} else
{if(cljs.core.truth_((pred__23574.cljs$core$IFn$_invoke$arity$2 ? pred__23574.cljs$core$IFn$_invoke$arity$2("desc",expr__23575) : pred__23574.call(null,"desc",expr__23575))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$350], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$349], true, false)], null)], null));
}
}
})},sablono.interpreter.interpret(title),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_order_key,col))?sablono.interpreter.interpret((function (){var pred__23577 = cljs.core._EQ_;var expr__23578 = current_order_dir;if(cljs.core.truth_((pred__23577.cljs$core$IFn$_invoke$arity$2 ? pred__23577.cljs$core$IFn$_invoke$arity$2("asc",expr__23578) : pred__23577.call(null,"asc",expr__23578))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$351], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$352], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__23580,view_update_key){var map__23593 = p__23580;var map__23593__$1 = ((cljs.core.seq_QMARK_(map__23593))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23593):map__23593);var collection = map__23593__$1;var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23593__$1,cljs.core.constant$keyword$287);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23593__$1,cljs.core.constant$keyword$353);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23593__$1,cljs.core.constant$keyword$354);var attrs23594 = (((from > 0))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$355,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,"#",cljs.core.constant$keyword$356,(function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$353,(function (){var x__3713__auto__ = (from - size);var y__3714__auto__ = 0;return ((x__3713__auto__ > y__3714__auto__) ? x__3713__auto__ : y__3714__auto__);
})()], null)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$357], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$355,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$357], null)], null));if(cljs.core.map_QMARK_(attrs23594))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs23594], 0))),(function (){var attrs23595 = [cljs.core.str((from + 1)),cljs.core.str("-"),cljs.core.str((function (){var x__3720__auto__ = (from + size);var y__3721__auto__ = count;return ((x__3720__auto__ < y__3721__auto__) ? x__3720__auto__ : y__3721__auto__);
})()),cljs.core.str(" of "),cljs.core.str(count)].join('');if(cljs.core.map_QMARK_(attrs23595))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs23595], 0))),null);
} else
{return React.DOM.span({"className": "page"},sablono.interpreter.interpret(attrs23595));
}
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$353,(from + size)], null)], null));
})},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"}))));
} else
{return React.DOM.div({"className": "paginate"},sablono.interpreter.interpret(attrs23594),(function (){var attrs23596 = [cljs.core.str((from + 1)),cljs.core.str("-"),cljs.core.str((function (){var x__3720__auto__ = (from + size);var y__3721__auto__ = count;return ((x__3720__auto__ < y__3721__auto__) ? x__3720__auto__ : y__3721__auto__);
})()),cljs.core.str(" of "),cljs.core.str(count)].join('');if(cljs.core.map_QMARK_(attrs23596))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs23596], 0))),null);
} else
{return React.DOM.span({"className": "page"},sablono.interpreter.interpret(attrs23596));
}
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$353,(from + size)], null)], null));
})},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"}))));
}
});
