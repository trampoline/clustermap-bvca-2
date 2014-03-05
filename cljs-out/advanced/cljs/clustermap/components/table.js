// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = cljs.core.constant$keyword$573.cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_(current_order))?cljs.core.first(current_order):current_order);var current_order_key = cljs.core.first(cljs.core.keys(current_order__$1));var current_order_dir = cljs.core.first(cljs.core.vals(current_order__$1));return React.DOM.a({"href": "#", "onClick": (function (e){e.preventDefault();
var pred__34795 = cljs.core._EQ_;var expr__34796 = current_order_dir;if(cljs.core.truth_((pred__34795.cljs$core$IFn$_invoke$arity$2 ? pred__34795.cljs$core$IFn$_invoke$arity$2("asc",expr__34796) : pred__34795.call(null,"asc",expr__34796))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$573,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$644], true, false)], null)], null));
} else
{if(cljs.core.truth_((pred__34795.cljs$core$IFn$_invoke$arity$2 ? pred__34795.cljs$core$IFn$_invoke$arity$2("desc",expr__34796) : pred__34795.call(null,"desc",expr__34796))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$573,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$645], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$573,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$644], true, false)], null)], null));
}
}
})},sablono.interpreter.interpret(title),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_order_key,col))?sablono.interpreter.interpret((function (){var pred__34798 = cljs.core._EQ_;var expr__34799 = current_order_dir;if(cljs.core.truth_((pred__34798.cljs$core$IFn$_invoke$arity$2 ? pred__34798.cljs$core$IFn$_invoke$arity$2("asc",expr__34799) : pred__34798.call(null,"asc",expr__34799))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$646], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$647], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__34801,view_update_key){var map__34814 = p__34801;var map__34814__$1 = ((cljs.core.seq_QMARK_(map__34814))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34814):map__34814);var collection = map__34814__$1;var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34814__$1,cljs.core.constant$keyword$570);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34814__$1,cljs.core.constant$keyword$648);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34814__$1,cljs.core.constant$keyword$649);var attrs34815 = (((from > 0))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$589,"#",cljs.core.constant$keyword$651,(function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,(function (){var x__3748__auto__ = (from - size);var y__3749__auto__ = 0;return ((x__3748__auto__ > y__3749__auto__) ? x__3748__auto__ : y__3749__auto__);
})()], null)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$652], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$650,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$652], null)], null));if(cljs.core.map_QMARK_(attrs34815))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs34815], 0))),(function (){var attrs34816 = [cljs.core.str((from + 1)),cljs.core.str("-"),cljs.core.str((function (){var x__3755__auto__ = (from + size);var y__3756__auto__ = count;return ((x__3755__auto__ < y__3756__auto__) ? x__3755__auto__ : y__3756__auto__);
})()),cljs.core.str(" of "),cljs.core.str(count)].join('');if(cljs.core.map_QMARK_(attrs34816))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs34816], 0))),null);
} else
{return React.DOM.span({"className": "page"},sablono.interpreter.interpret(attrs34816));
}
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,(from + size)], null)], null));
})},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"}))));
} else
{return React.DOM.div({"className": "paginate"},sablono.interpreter.interpret(attrs34815),(function (){var attrs34817 = [cljs.core.str((from + 1)),cljs.core.str("-"),cljs.core.str((function (){var x__3755__auto__ = (from + size);var y__3756__auto__ = count;return ((x__3755__auto__ < y__3756__auto__) ? x__3755__auto__ : y__3756__auto__);
})()),cljs.core.str(" of "),cljs.core.str(count)].join('');if(cljs.core.map_QMARK_(attrs34817))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs34817], 0))),null);
} else
{return React.DOM.span({"className": "page"},sablono.interpreter.interpret(attrs34817));
}
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,(from + size)], null)], null));
})},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"}))));
}
});
