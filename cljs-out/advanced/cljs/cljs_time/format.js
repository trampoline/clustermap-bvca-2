// Compiled by ClojureScript 0.0-2356
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs_time.internal.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.date');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.core');
goog.require('cljs_time.internal.core');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.date');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function abbreviate(n,s){return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
* **Note: not all formatters have been implemented yet.**
* 
* The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
* time zone names cannot be parsed and a few more symbols are supported. All
* ASCII letters are reserved as pattern letters, which are defined as follows:
* 
* Symbol  Meaning                      Presentation  Examples
* ------  -------                      ------------  -------
* G       era                          text          AD
* C       century of era (>=0)         number        20
* Y       year of era (>=0)            year          1996
* 
* x       weekyear                     year          1996
* w       week of weekyear             number        27
* e       day of week                  number        2
* E       day of week                  text          Tuesday; Tue
* 
* y       year                         year          1996
* D       day of year                  number        189
* M       month of year                month         July; Jul; 07
* d       day of month                 number        10
* 
* a       halfday of day               text          PM
* K       hour of halfday (0~11)       number        0
* h       clockhour of halfday (1~12)  number        12
* 
* H       hour of day (0~23)           number        0
* k       clockhour of day (1~24)      number        24
* m       minute of hour               number        30
* s       second of minute             number        55
* S       fraction of second           number        978
* a       meridiem                     text          am; pm
* A       meridiem                     text          AM; PM
* 
* z       time zone                    text          Pacific Standard Time; PST
* Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
* 
* '       escape for text              delimiter
* ''      single quote                 literal       '
* 
* The count of pattern letters determine the format.
* 
* **Text:** If the number of pattern letters is 4 or more, the full form is used;
* otherwise a short or abbreviated form is used if available.
* 
* **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
* amount.
* 
* **Year:** Numeric presentation for year and weekyear fields are handled
* specially. For example, if the count of 'y' is 2, the year will be displayed
* as the zero-based year of the century, which is two digits.
* 
* **Month:** 3 or over, use text, otherwise use number.
* 
* **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
* colon, 'ZZZ' or more outputs the zone id.
* 
* **Zone names:** Time zone names ('z') cannot be parsed.
* 
* Any characters in the pattern that are not in the ranges of ['a'..'z'] and
* ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
* '.', ' ', '#' and '?' will appear in the resulting time text even they are
* not embraced within single quotes.
*/
cljs_time.format.date_formatters = (function (){var d = (function (p1__73569_SHARP_){return p1__73569_SHARP_.getDate();
});var M = ((function (d){
return (function (p1__73570_SHARP_){return (p1__73570_SHARP_.getMonth() + (1));
});})(d))
;var y = ((function (d,M){
return (function (p1__73571_SHARP_){return p1__73571_SHARP_.getYear();
});})(d,M))
;var h = ((function (d,M,y){
return (function (p1__73572_SHARP_){var hr = cljs.core.mod(p1__73572_SHARP_.getHours(),(12));if((hr === (0)))
{return (12);
} else
{return hr;
}
});})(d,M,y))
;var a = ((function (d,M,y,h){
return (function (p1__73573_SHARP_){if((p1__73573_SHARP_.getHours() < (12)))
{return "am";
} else
{return "pm";
}
});})(d,M,y,h))
;var A = ((function (d,M,y,h,a){
return (function (p1__73574_SHARP_){if((p1__73574_SHARP_.getHours() < (12)))
{return "AM";
} else
{return "PM";
}
});})(d,M,y,h,a))
;var H = ((function (d,M,y,h,a,A){
return (function (p1__73575_SHARP_){return p1__73575_SHARP_.getHours();
});})(d,M,y,h,a,A))
;var m = ((function (d,M,y,h,a,A,H){
return (function (p1__73576_SHARP_){return p1__73576_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__73577_SHARP_){return p1__73577_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__73578_SHARP_){return p1__73578_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__73579_SHARP_){return p1__73579_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__73580_SHARP_){return p1__73580_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__73581_SHARP_){return p1__73581_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","e","ss","DDD","SSS","dow","M","mm","S","MM","EEE","Z","H","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73592_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__73592_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73596_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((function (){var G__73597 = (doy(p1__73596_SHARP_) / (7));return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__73597) : Math.ceil.call(null,G__73597));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73588_SHARP_){return cljs_time.format.abbreviate((3),(function (){var G__73598 = (M(p1__73588_SHARP_) - (1));return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__73598) : cljs_time.format.months.call(null,G__73598));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73594_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__73594_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73595_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__73595_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73584_SHARP_){var G__73599 = dow(p1__73584_SHARP_);return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__73599) : cljs_time.format.days.call(null,G__73599));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73593_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__73593_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73587_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__73587_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73585_SHARP_){return cljs_time.format.abbreviate((3),(function (){var G__73600 = dow(p1__73585_SHARP_);return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__73600) : cljs_time.format.days.call(null,G__73600));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73582_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__73582_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73591_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__73591_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73583_SHARP_){var d__$1 = d(p1__73583_SHARP_);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__73601 = d__$1;switch (G__73601) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
default:
return "th";

}
})()));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73586_SHARP_){var G__73602 = dow(p1__73586_SHARP_);return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__73602) : cljs_time.format.days.call(null,G__73602));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73590_SHARP_){return cljs.core.mod(y(p1__73590_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__73589_SHARP_){var G__73603 = (M(p1__73589_SHARP_) - (1));return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__73603) : cljs_time.format.months.call(null,G__73603));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function timezone_adjustment(d,timezone_string){var vec__73614 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73614,(0),null);var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73614,(1),null);var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73614,(2),null);var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73614,(3),null);if(cljs.core.truth_((function (){var and__3625__auto__ = sign;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = hh;if(cljs.core.truth_(and__3625__auto____$1))
{return mm;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var sign_73622__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));var vec__73615_73623 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_73622__$1,vec__73614,_,sign,hh,mm){
return (function (p1__73605_SHARP_){var G__73616 = p1__73605_SHARP_;var G__73617 = (10);return parseInt(G__73616,G__73617);
});})(sign_73622__$1,vec__73614,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));var hh_73624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73615_73623,(0),null);var mm_73625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73615_73623,(1),null);var adjusted_73626 = (function (){var G__73618 = (function (){var G__73620 = d;var G__73621 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_73624__$1);return (sign_73622__$1.cljs$core$IFn$_invoke$arity$2 ? sign_73622__$1.cljs$core$IFn$_invoke$arity$2(G__73620,G__73621) : sign_73622__$1.call(null,G__73620,G__73621));
})();var G__73619 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_73625__$1);return (sign_73622__$1.cljs$core$IFn$_invoke$arity$2 ? sign_73622__$1.cljs$core$IFn$_invoke$arity$2(G__73618,G__73619) : sign_73622__$1.call(null,G__73618,G__73619));
})();d.setTime(adjusted_73626.getTime());
} else
{}
return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__73627_SHARP_){var G__73640 = p1__73627_SHARP_;var G__73641 = (10);return parseInt(G__73640,G__73641);
});var assoc_fn = ((function (parse_int){
return (function (kw){return ((function (parse_int){
return (function (p1__73628_SHARP_,p2__73629_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__73628_SHARP_,kw,parse_int(p2__73629_SHARP_));
});
;})(parse_int))
});})(parse_int))
;var y = assoc_fn(cljs.core.constant$keyword$1418);var d = assoc_fn(cljs.core.constant$keyword$1416);var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__73630_SHARP_,p2__73631_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__73630_SHARP_,cljs.core.constant$keyword$1417,(parse_int(p2__73631_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__73632_SHARP_,p2__73633_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__73632_SHARP_,cljs.core.constant$keyword$1415,cljs.core.mod(parse_int(p2__73633_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__73642,x){var map__73643 = p__73642;var map__73643__$1 = ((cljs.core.seq_QMARK_(map__73643))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73643):map__73643);var date = map__73643__$1;var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73643__$1,cljs.core.constant$keyword$1415);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case(x))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.constant$keyword$1415,(function (){var hours__$1 = ((12) + hours);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24)))
{return (0);
} else
{return hours__$1;
}
})());
} else
{return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;var H = assoc_fn(cljs.core.constant$keyword$1415);var m = assoc_fn(cljs.core.constant$keyword$1414);var s = assoc_fn(cljs.core.constant$keyword$1413);var S = assoc_fn(cljs.core.constant$keyword$1412);var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__73635_SHARP_,p2__73634_SHARP_){var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){return cljs.core.re_seq(cljs.core.re_pattern(("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73634_SHARP_))),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));return M(p1__73635_SHARP_,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__73636_SHARP_,p2__73637_SHARP_){return M(p1__73636_SHARP_,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,p2__73637_SHARP_) + (1)))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__73644__delegate = function (x,args){return x;
};
var G__73644 = function (x,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__73644__delegate.call(this,x,args);};
G__73644.cljs$lang$maxFixedArity = 1;
G__73644.cljs$lang$applyTo = (function (arglist__73645){
var x = cljs.core.first(arglist__73645);
var args = cljs.core.rest(arglist__73645);
return G__73644__delegate(x,args);
});
G__73644.cljs$core$IFn$_invoke$arity$variadic = G__73644__delegate;
return G__73644;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__73638_SHARP_,p2__73639_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__73638_SHARP_,cljs.core.constant$keyword$1434,p2__73639_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","ss","SSS","dow","M","mm","S","MM","EEE","Z","H","E","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months)))+")"),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months))+")"),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1418,(function (p1__73646_SHARP_,p2__73647_SHARP_){return p1__73646_SHARP_.setYear(p2__73647_SHARP_);
}),cljs.core.constant$keyword$1417,(function (p1__73648_SHARP_,p2__73649_SHARP_){return p1__73648_SHARP_.setMonth(p2__73649_SHARP_);
}),cljs.core.constant$keyword$1416,(function (p1__73650_SHARP_,p2__73651_SHARP_){return p1__73650_SHARP_.setDate(p2__73651_SHARP_);
}),cljs.core.constant$keyword$1415,(function (p1__73652_SHARP_,p2__73653_SHARP_){return p1__73652_SHARP_.setHours(p2__73653_SHARP_);
}),cljs.core.constant$keyword$1414,(function (p1__73654_SHARP_,p2__73655_SHARP_){return p1__73654_SHARP_.setMinutes(p2__73655_SHARP_);
}),cljs.core.constant$keyword$1413,(function (p1__73656_SHARP_,p2__73657_SHARP_){return p1__73656_SHARP_.setSeconds(p2__73657_SHARP_);
}),cljs.core.constant$keyword$1412,(function (p1__73658_SHARP_,p2__73659_SHARP_){return p1__73658_SHARP_.setMilliseconds(p2__73659_SHARP_);
}),cljs.core.constant$keyword$1434,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function parser_sort_order_pred(parser){return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yyyy","yy","y","d","dd","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern(("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters)))))+")"));
cljs_time.format.date_parse_pattern = (function date_parse_pattern(formatter){return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__73660_SHARP_){return cljs.core.first((function (){var G__73662 = p1__73660_SHARP_;return (cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(G__73662) : cljs_time.format.date_parsers.call(null,G__73662));
})());
})));
});
cljs_time.format.parser_fn = (function parser_fn(fmts){return (function (s){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function formatter_fn(fmts,formatters){return (function() { 
var G__73668__delegate = function (date,p__73666){var vec__73667 = p__73666;var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73667,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(fmts,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,((function (vec__73667,formatter_overrides){
return (function (p1__73663_SHARP_){return (function (){var or__3637__auto__ = formatter_overrides;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return formatters;
}
})().call(null,p1__73663_SHARP_).call(null,date);
});})(vec__73667,formatter_overrides))
], null);
};
var G__73668 = function (date,var_args){
var p__73666 = null;if (arguments.length > 1) {
  p__73666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__73668__delegate.call(this,date,p__73666);};
G__73668.cljs$lang$maxFixedArity = 1;
G__73668.cljs$lang$applyTo = (function (arglist__73669){
var date = cljs.core.first(arglist__73669);
var p__73666 = cljs.core.rest(arglist__73669);
return G__73668__delegate(date,p__73666);
});
G__73668.cljs$core$IFn$_invoke$arity$variadic = G__73668__delegate;
return G__73668;
})()
;
});
cljs_time.format.formatter = (function() {
var formatter = null;
var formatter__1 = (function (fmts){return formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});
var formatter__2 = (function (fmts,dtz){return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1435,cljs_time.format.parser_fn(fmts),cljs.core.constant$keyword$1366,cljs_time.format.formatter_fn(fmts,cljs_time.format.date_formatters)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1436], null));
});
formatter = function(fmts,dtz){
switch(arguments.length){
case 1:
return formatter__1.call(this,fmts);
case 2:
return formatter__2.call(this,fmts,dtz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
formatter.cljs$core$IFn$_invoke$arity$1 = formatter__1;
formatter.cljs$core$IFn$_invoke$arity$2 = formatter__2;
return formatter;
})()
;
cljs_time.format.formatter_local = (function formatter_local(fmts){return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1435,cljs_time.format.parser_fn(fmts),cljs.core.constant$keyword$1366,cljs_time.format.formatter_fn(fmts,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1436], null));
});
cljs_time.format.not_implemented = (function not_implemented(sym){return (function (){throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1437,cljs.core.constant$keyword$1391,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.array_seq([cljs.core.name(sym)], 0))], null));
});
});
/**
* Map of ISO 8601 and a single RFC 822 formatters that can be used
* for parsing and, in most cases, printing.
* 
* Note: due to current implementation limitations, timezone information
* cannot be kept. Although the correct offset will be applied to UTC
* time if supplied.
*/
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1438,cljs.core.constant$keyword$1439,cljs.core.constant$keyword$1440,cljs.core.constant$keyword$1441,cljs.core.constant$keyword$1419,cljs.core.constant$keyword$1442,cljs.core.constant$keyword$1443,cljs.core.constant$keyword$1444,cljs.core.constant$keyword$1445,cljs.core.constant$keyword$1446,cljs.core.constant$keyword$1447,cljs.core.constant$keyword$1448,cljs.core.constant$keyword$1449,cljs.core.constant$keyword$1450,cljs.core.constant$keyword$1451,cljs.core.constant$keyword$1452,cljs.core.constant$keyword$1453,cljs.core.constant$keyword$1454,cljs.core.constant$keyword$1455,cljs.core.constant$keyword$1456,cljs.core.constant$keyword$1457,cljs.core.constant$keyword$1458,cljs.core.constant$keyword$1459,cljs.core.constant$keyword$1460,cljs.core.constant$keyword$1461,cljs.core.constant$keyword$1462,cljs.core.constant$keyword$1463,cljs.core.constant$keyword$1464,cljs.core.constant$keyword$1465,cljs.core.constant$keyword$1466,cljs.core.constant$keyword$1467,cljs.core.constant$keyword$1468,cljs.core.constant$keyword$1469,cljs.core.constant$keyword$1470,cljs.core.constant$keyword$1471,cljs.core.constant$keyword$1472,cljs.core.constant$keyword$1473,cljs.core.constant$keyword$1474,cljs.core.constant$keyword$1475,cljs.core.constant$keyword$1476,cljs.core.constant$keyword$1477,cljs.core.constant$keyword$1478,cljs.core.constant$keyword$1479,cljs.core.constant$keyword$1480,cljs.core.constant$keyword$1481,cljs.core.constant$keyword$1482,cljs.core.constant$keyword$1483,cljs.core.constant$keyword$1484,cljs.core.constant$keyword$1485,cljs.core.constant$keyword$1486,cljs.core.constant$keyword$1487,cljs.core.constant$keyword$1488,cljs.core.constant$keyword$1489],[cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$1438,null,cljs.core.constant$keyword$1450,null,cljs.core.constant$keyword$1453,null,cljs.core.constant$keyword$1456,null,cljs.core.constant$keyword$1471,null,cljs.core.constant$keyword$1472,null,cljs.core.constant$keyword$1478,null,cljs.core.constant$keyword$1481,null,cljs.core.constant$keyword$1484,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;
cljs_time.format.date_map = (function (){var method_table__4516__auto__ = (function (){var G__73672 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__73672) : cljs.core.atom.call(null,G__73672));
})();var prefer_table__4517__auto__ = (function (){var G__73673 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__73673) : cljs.core.atom.call(null,G__73673));
})();var method_cache__4518__auto__ = (function (){var G__73674 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__73674) : cljs.core.atom.call(null,G__73674));
})();var cached_hierarchy__4519__auto__ = (function (){var G__73675 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__73675) : cljs.core.atom.call(null,G__73675));
})();var hierarchy__4520__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1292,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("date-map",cljs.core.type,cljs.core.constant$keyword$1111,hierarchy__4520__auto__,method_table__4516__auto__,prefer_table__4517__auto__,method_cache__4518__auto__,cached_hierarchy__4519__auto__));
})();
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (d){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1418,(0),cljs.core.constant$keyword$1417,(0),cljs.core.constant$keyword$1416,(1)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.DateTime,(function (d){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1418,(0),cljs.core.constant$keyword$1417,(0),cljs.core.constant$keyword$1416,(1),cljs.core.constant$keyword$1415,(0),cljs.core.constant$keyword$1414,(0),cljs.core.constant$keyword$1413,(0),cljs.core.constant$keyword$1412,(0)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (d){return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1418,(0),cljs.core.constant$keyword$1417,(0),cljs.core.constant$keyword$1416,(1),cljs.core.constant$keyword$1415,(0),cljs.core.constant$keyword$1414,(0),cljs.core.constant$keyword$1413,(0),cljs.core.constant$keyword$1412,(0),cljs.core.constant$keyword$1434,null], null);
}));
cljs_time.format.parse_STAR_ = (function parse_STAR_(constructor,p__73678,s){var map__73691 = p__73678;var map__73691__$1 = ((cljs.core.seq_QMARK_(map__73691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73691):map__73691);var fmt = map__73691__$1;var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73691__$1,cljs.core.constant$keyword$1435);if(cljs.core.seq(s))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"s","s",-948495851,null))], 0))))));
}
var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (min_parts,map__73691,map__73691__$1,fmt,parser){
return (function (p__73692){var vec__73693 = p__73692;var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73693,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73693,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((function (){var G__73694 = b;return (cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(G__73694) : cljs_time.format.date_parsers.call(null,G__73694));
})())], null);
});})(min_parts,map__73691,map__73691__$1,fmt,parser))
,(function (){var G__73695 = s;return (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(G__73695) : parser.call(null,G__73695));
})()));if((cljs.core.count(parse_seq) >= min_parts))
{var d = (new constructor((0),(0),(0),(0),(0),(0),(0)));var empty = (function (){var G__73696 = d;return (cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1(G__73696) : cljs_time.format.date_map.call(null,G__73696));
})();var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_seq,min_parts,map__73691,map__73691__$1,fmt,parser){
return (function (p1__73676_SHARP_,p2__73677_SHARP_){var G__73697 = d;var G__73698 = p2__73677_SHARP_;return (p1__73676_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__73676_SHARP_.cljs$core$IFn$_invoke$arity$2(G__73697,G__73698) : p1__73676_SHARP_.call(null,G__73697,G__73698));
});})(d,empty,setters,parse_seq,min_parts,map__73691,map__73691__$1,fmt,parser))
,cljs.core.array_seq([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_seq,min_parts,map__73691,map__73691__$1,fmt,parser){
return (function (date,p__73699){var vec__73700 = p__73699;var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73700,(0),null);var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73700,(1),null);var G__73701 = date;var G__73702 = part;return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(G__73701,G__73702) : do_parse.call(null,G__73701,G__73702));
});})(d,empty,setters,parse_seq,min_parts,map__73691,map__73691__$1,fmt,parser))
,empty,parse_seq))], 0));
return d;
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1490], null));
}
});
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function() {
var parse = null;
var parse__1 = (function (s){return cljs.core.first((function (){var iter__4375__auto__ = (function iter__73721(s__73722){return (new cljs.core.LazySeq(null,(function (){var s__73722__$1 = s__73722;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73722__$1);if(temp__4126__auto__)
{var s__73722__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73722__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__73722__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__73724 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__73723 = (0);while(true){
if((i__73723 < size__4374__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__73723);var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e73729){if((e73729 instanceof Error))
{var _ = e73729;return null;
} else
{throw e73729;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__73724,d);
{
var G__73731 = (i__73723 + (1));
i__73723 = G__73731;
continue;
}
} else
{{
var G__73732 = (i__73723 + (1));
i__73723 = G__73732;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73724),iter__73721(cljs.core.chunk_rest(s__73722__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73724),null);
}
} else
{var f = cljs.core.first(s__73722__$2);var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e73730){if((e73730 instanceof Error))
{var _ = e73730;return null;
} else
{throw e73730;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__73721(cljs.core.rest(s__73722__$2)));
} else
{{
var G__73733 = cljs.core.rest(s__73722__$2);
s__73722__$1 = G__73733;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse__2 = (function (fmt,s){return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
});
parse = function(fmt,s){
switch(arguments.length){
case 1:
return parse__1.call(this,fmt);
case 2:
return parse__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse.cljs$core$IFn$_invoke$arity$1 = parse__1;
parse.cljs$core$IFn$_invoke$arity$2 = parse__2;
return parse;
})()
;
/**
* Returns a LocalDateTime instance obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse_local = (function() {
var parse_local = null;
var parse_local__1 = (function (s){return cljs.core.first((function (){var iter__4375__auto__ = (function iter__73752(s__73753){return (new cljs.core.LazySeq(null,(function (){var s__73753__$1 = s__73753;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73753__$1);if(temp__4126__auto__)
{var s__73753__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73753__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__73753__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__73755 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__73754 = (0);while(true){
if((i__73754 < size__4374__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__73754);var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e73760){if((e73760 instanceof Error))
{var _ = e73760;return null;
} else
{throw e73760;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__73755,d);
{
var G__73762 = (i__73754 + (1));
i__73754 = G__73762;
continue;
}
} else
{{
var G__73763 = (i__73754 + (1));
i__73754 = G__73763;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73755),iter__73752(cljs.core.chunk_rest(s__73753__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73755),null);
}
} else
{var f = cljs.core.first(s__73753__$2);var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e73761){if((e73761 instanceof Error))
{var _ = e73761;return null;
} else
{throw e73761;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__73752(cljs.core.rest(s__73753__$2)));
} else
{{
var G__73764 = cljs.core.rest(s__73753__$2);
s__73753__$1 = G__73764;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse_local__2 = (function (fmt,s){return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
});
parse_local = function(fmt,s){
switch(arguments.length){
case 1:
return parse_local__1.call(this,fmt);
case 2:
return parse_local__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_local.cljs$core$IFn$_invoke$arity$1 = parse_local__1;
parse_local.cljs$core$IFn$_invoke$arity$2 = parse_local__2;
return parse_local;
})()
;
/**
* Returns a LocalDate instance obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse_local_date = (function() {
var parse_local_date = null;
var parse_local_date__1 = (function (s){return cljs.core.first((function (){var iter__4375__auto__ = (function iter__73783(s__73784){return (new cljs.core.LazySeq(null,(function (){var s__73784__$1 = s__73784;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73784__$1);if(temp__4126__auto__)
{var s__73784__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73784__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__73784__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__73786 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__73785 = (0);while(true){
if((i__73785 < size__4374__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__73785);var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e73791){if((e73791 instanceof Error))
{var _ = e73791;return null;
} else
{throw e73791;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__73786,d);
{
var G__73793 = (i__73785 + (1));
i__73785 = G__73793;
continue;
}
} else
{{
var G__73794 = (i__73785 + (1));
i__73785 = G__73794;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73786),iter__73783(cljs.core.chunk_rest(s__73784__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73786),null);
}
} else
{var f = cljs.core.first(s__73784__$2);var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e73792){if((e73792 instanceof Error))
{var _ = e73792;return null;
} else
{throw e73792;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__73783(cljs.core.rest(s__73784__$2)));
} else
{{
var G__73795 = cljs.core.rest(s__73784__$2);
s__73784__$1 = G__73795;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse_local_date__2 = (function (fmt,s){return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
});
parse_local_date = function(fmt,s){
switch(arguments.length){
case 1:
return parse_local_date__1.call(this,fmt);
case 2:
return parse_local_date__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_local_date.cljs$core$IFn$_invoke$arity$1 = parse_local_date__1;
parse_local_date.cljs$core$IFn$_invoke$arity$2 = parse_local_date__2;
return parse_local_date;
})()
;
/**
* Returns a string representing the given DateTime instance in UTC and in the
* form determined by the given formatter.
*/
cljs_time.format.unparse = (function unparse(p__73796,dt){var map__73799 = p__73796;var map__73799__$1 = ((cljs.core.seq_QMARK_(map__73799))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73799):map__73799);var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73799__$1,cljs.core.constant$keyword$1366);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.DateTime))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(function (){var G__73800 = dt;return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__73800) : formatter.call(null,G__73800));
})());
});
/**
* Returns a string representing the given LocalDateTime instance in the
* form determined by the given formatter.
*/
cljs_time.format.unparse_local = (function unparse_local(p__73801,dt){var map__73805 = p__73801;var map__73805__$1 = ((cljs.core.seq_QMARK_(map__73805))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73805):map__73805);var fmt = map__73805__$1;var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73805__$1,cljs.core.constant$keyword$1366);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.DateTime))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(function (){var G__73806 = dt;var G__73807 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0));return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(G__73806,G__73807) : formatter.call(null,G__73806,G__73807));
})());
});
/**
* Returns a string representing the given LocalDate instance in the form
* determined by the given formatter.
*/
cljs_time.format.unparse_local_date = (function unparse_local_date(p__73808,dt){var map__73812 = p__73808;var map__73812__$1 = ((cljs.core.seq_QMARK_(map__73812))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73812):map__73812);var fmt = map__73812__$1;var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73812__$1,cljs.core.constant$keyword$1366);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.Date))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.Date","goog.date.Date",-1613361125,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(function (){var G__73813 = dt;var G__73814 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0));return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(G__73813,G__73814) : formatter.call(null,G__73813,G__73814));
})());
});
/**
* Shows how a given DateTime, or by default the current time, would be
* formatted with each of the available printing formatters.
*/
cljs_time.format.show_formatters = (function() {
var show_formatters = null;
var show_formatters__0 = (function (){return show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});
var show_formatters__1 = (function (dt){var seq__73822 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));var chunk__73823 = null;var count__73824 = (0);var i__73825 = (0);while(true){
if((i__73825 < count__73824))
{var p = chunk__73823.cljs$core$IIndexed$_nth$arity$2(null,i__73825);var fmt_73828 = (function (){var G__73826 = p;return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__73826) : cljs_time.format.formatters.call(null,G__73826));
})();cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_73828,dt)], 0))], 0));
{
var G__73829 = seq__73822;
var G__73830 = chunk__73823;
var G__73831 = count__73824;
var G__73832 = (i__73825 + (1));
seq__73822 = G__73829;
chunk__73823 = G__73830;
count__73824 = G__73831;
i__73825 = G__73832;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__73822);if(temp__4126__auto__)
{var seq__73822__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__73822__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__73822__$1);{
var G__73833 = cljs.core.chunk_rest(seq__73822__$1);
var G__73834 = c__4406__auto__;
var G__73835 = cljs.core.count(c__4406__auto__);
var G__73836 = (0);
seq__73822 = G__73833;
chunk__73823 = G__73834;
count__73824 = G__73835;
i__73825 = G__73836;
continue;
}
} else
{var p = cljs.core.first(seq__73822__$1);var fmt_73837 = (function (){var G__73827 = p;return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__73827) : cljs_time.format.formatters.call(null,G__73827));
})();cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_73837,dt)], 0))], 0));
{
var G__73838 = cljs.core.next(seq__73822__$1);
var G__73839 = null;
var G__73840 = (0);
var G__73841 = (0);
seq__73822 = G__73838;
chunk__73823 = G__73839;
count__73824 = G__73840;
i__73825 = G__73841;
continue;
}
}
} else
{return null;
}
}
break;
}
});
show_formatters = function(dt){
switch(arguments.length){
case 0:
return show_formatters__0.call(this);
case 1:
return show_formatters__1.call(this,dt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
show_formatters.cljs$core$IFn$_invoke$arity$0 = show_formatters__0;
show_formatters.cljs$core$IFn$_invoke$arity$1 = show_formatters__1;
return show_formatters;
})()
;
cljs_time.format.Mappable = (function (){var obj73843 = {};return obj73843;
})();
cljs_time.format.instant__GT_map = (function instant__GT_map(instant){if((function (){var and__3625__auto__ = instant;if(and__3625__auto__)
{return instant.cljs_time$format$Mappable$instant__GT_map$arity$1;
} else
{return and__3625__auto__;
}
})())
{return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else
{var x__4273__auto__ = (((instant == null))?null:instant);return (function (){var or__3637__auto__ = (cljs_time.format.instant__GT_map[(function (){var G__73847 = x__4273__auto__;return goog.typeOf(G__73847);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs_time.format.instant__GT_map["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
})().call(null,instant);
}
});
cljs_time.format.to_map = (function to_map(years,months,days,hours,minutes,seconds,millis){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1418,years,cljs.core.constant$keyword$1417,months,cljs.core.constant$keyword$1416,days,cljs.core.constant$keyword$1415,hours,cljs.core.constant$keyword$1414,minutes,cljs.core.constant$keyword$1413,seconds,cljs.core.constant$keyword$1412,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){var dt__$1 = this;return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var m__$1 = this;var G__73848 = (((cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);switch (G__73848) {
case "cljs-time.core/interval":
var G__73849 = m__$1;return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__73849) : cljs_time.core.__GT_period.call(null,G__73849));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1))))));

}
});
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var m__$1 = this;var G__73851 = (((cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);switch (G__73851) {
case "cljs-time.core/interval":
var G__73852 = m__$1;return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__73852) : cljs_time.core.__GT_period.call(null,G__73852));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1))))));

}
});
