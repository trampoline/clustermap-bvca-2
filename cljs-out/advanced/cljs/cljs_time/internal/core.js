// Compiled by ClojureScript 0.0-2322
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
cljs_time.internal.core._EQ_ = (function() { 
var _EQ___delegate = function (args){if(cljs.core.every_QMARK_((function (p1__53999_SHARP_){return (p1__53999_SHARP_ instanceof goog.date.Date);
}),args))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54000_SHARP_){return p1__54000_SHARP_.getTime();
}),args));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,args);

}
};
var _EQ_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _EQ___delegate.call(this,args);};
_EQ_.cljs$lang$maxFixedArity = 0;
_EQ_.cljs$lang$applyTo = (function (arglist__54001){
var args = cljs.core.seq(arglist__54001);
return _EQ___delegate(args);
});
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___delegate;
return _EQ_;
})()
;
cljs_time.internal.core.leap_year_QMARK_ = (function leap_year_QMARK_(y){if((cljs.core.mod(y,(400)) === (0)))
{return true;
} else
{if((cljs.core.mod(y,(100)) === (0)))
{return false;
} else
{if((cljs.core.mod(y,(4)) === (0)))
{return true;
} else
{return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.year_corrected_dim = (function year_corrected_dim(year,month){var G__54003 = (cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1 ? cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(1)], 0)))?(11):(month - (1)))) : cljs_time.internal.core.days_in_month.call(null,(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(1)], 0)))?(11):(month - (1)))));var G__54003__$1 = (cljs.core.truth_((function (){var and__3546__auto__ = cljs_time.internal.core.leap_year_QMARK_(year);if(and__3546__auto__)
{return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(2)], 0));
} else
{return and__3546__auto__;
}
})())?(G__54003 + (1)):G__54003);return G__54003__$1;
});
cljs_time.internal.core.valid_date_QMARK_ = (function valid_date_QMARK_(p__54004){var map__54006 = p__54004;var map__54006__$1 = ((cljs.core.seq_QMARK_(map__54006))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54006):map__54006);var d = map__54006__$1;var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,cljs.core.constant$keyword$1293);var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,cljs.core.constant$keyword$1294);var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,cljs.core.constant$keyword$1295);var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,cljs.core.constant$keyword$1296);var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,cljs.core.constant$keyword$1297);var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,cljs.core.constant$keyword$1298);var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,cljs.core.constant$keyword$1299);var months__$1 = (months + (1));var _GT__LT_ = ((function (months__$1,map__54006,map__54006__$1,d,millis,seconds,minutes,hours,days,months,years){
return (function _GT__LT_(a,b,x){return ((x >= a)) && ((x <= b));
});})(months__$1,map__54006,map__54006__$1,d,millis,seconds,minutes,hours,days,months,years))
;
if(cljs.core.truth_((function (){var and__3546__auto__ = years;if(cljs.core.truth_(and__3546__auto__))
{return (_GT__LT_((1),(12),months__$1)) && (_GT__LT_((1),cljs_time.internal.core.year_corrected_dim(years,months__$1),days)) && (_GT__LT_((0),(23),hours)) && (_GT__LT_((0),(59),minutes)) && (_GT__LT_((0),(60),seconds)) && (_GT__LT_((0),(999),millis));
} else
{return and__3546__auto__;
}
})()))
{return d;
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1301,cljs.core.constant$keyword$1300,d], null));
}
});
cljs_time.internal.core.index_of = (function index_of(coll,x){return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__54008_SHARP_,p2__54007_SHARP_){if(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__54007_SHARP_,x], 0))))
{return p1__54008_SHARP_;
} else
{return null;
}
}),coll));
});
/**
* @param {...*} var_args
*/
cljs_time.internal.core.period = (function() {
var period = null;
var period__2 = (function (period__$1,value){return cljs.core.with_meta(new cljs.core.PersistentArrayMap.fromArray([period__$1,value], true, false),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1302], null));
});
var period__3 = (function() { 
var G__54009__delegate = function (p1,v1,kvs){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
};
var G__54009 = function (p1,v1,var_args){
var kvs = null;if (arguments.length > 2) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__54009__delegate.call(this,p1,v1,kvs);};
G__54009.cljs$lang$maxFixedArity = 2;
G__54009.cljs$lang$applyTo = (function (arglist__54010){
var p1 = cljs.core.first(arglist__54010);
arglist__54010 = cljs.core.next(arglist__54010);
var v1 = cljs.core.first(arglist__54010);
var kvs = cljs.core.rest(arglist__54010);
return G__54009__delegate(p1,v1,kvs);
});
G__54009.cljs$core$IFn$_invoke$arity$variadic = G__54009__delegate;
return G__54009;
})()
;
period = function(p1,v1,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return period__2.call(this,p1,v1);
default:
return period__3.cljs$core$IFn$_invoke$arity$variadic(p1,v1, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
period.cljs$lang$maxFixedArity = 2;
period.cljs$lang$applyTo = period__3.cljs$lang$applyTo;
period.cljs$core$IFn$_invoke$arity$2 = period__2;
period.cljs$core$IFn$_invoke$arity$variadic = period__3.cljs$core$IFn$_invoke$arity$variadic;
return period;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs_time.internal.core.format = (function() { 
var format__delegate = function (fmt,args){var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else
{return x;
}
}),args);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__54011){
var fmt = cljs.core.first(arglist__54011);
var args = cljs.core.rest(arglist__54011);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Remove the need to pull in gstring/format code in advanced compilation
*/
cljs_time.internal.core.zero_pad = (function() {
var zero_pad = null;
var zero_pad__1 = (function (n){if((((0) <= n)) && ((n <= (9))))
{return ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
}
});
var zero_pad__2 = (function (n,zeros){if(((1) > zeros))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((zeros - cljs.core.count((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
}
});
zero_pad = function(n,zeros){
switch(arguments.length){
case 1:
return zero_pad__1.call(this,n);
case 2:
return zero_pad__2.call(this,n,zeros);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
zero_pad.cljs$core$IFn$_invoke$arity$1 = zero_pad__1;
zero_pad.cljs$core$IFn$_invoke$arity$2 = zero_pad__2;
return zero_pad;
})()
;
