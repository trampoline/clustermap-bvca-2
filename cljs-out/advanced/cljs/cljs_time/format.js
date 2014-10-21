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
cljs_time.format.date_formatters = (function (){var d = (function (p1__71153_SHARP_){return p1__71153_SHARP_.getDate();
});var M = ((function (d){
return (function (p1__71154_SHARP_){return (p1__71154_SHARP_.getMonth() + (1));
});})(d))
;var y = ((function (d,M){
return (function (p1__71155_SHARP_){return p1__71155_SHARP_.getYear();
});})(d,M))
;var h = ((function (d,M,y){
return (function (p1__71156_SHARP_){var hr = cljs.core.mod(p1__71156_SHARP_.getHours(),(12));if((hr === (0)))
{return (12);
} else
{return hr;
}
});})(d,M,y))
;var a = ((function (d,M,y,h){
return (function (p1__71157_SHARP_){if((p1__71157_SHARP_.getHours() < (12)))
{return "am";
} else
{return "pm";
}
});})(d,M,y,h))
;var A = ((function (d,M,y,h,a){
return (function (p1__71158_SHARP_){if((p1__71158_SHARP_.getHours() < (12)))
{return "AM";
} else
{return "PM";
}
});})(d,M,y,h,a))
;var H = ((function (d,M,y,h,a,A){
return (function (p1__71159_SHARP_){return p1__71159_SHARP_.getHours();
});})(d,M,y,h,a,A))
;var m = ((function (d,M,y,h,a,A,H){
return (function (p1__71160_SHARP_){return p1__71160_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__71161_SHARP_){return p1__71161_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__71162_SHARP_){return p1__71162_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__71163_SHARP_){return p1__71163_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__71164_SHARP_){return p1__71164_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__71165_SHARP_){return p1__71165_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","e","ss","DDD","SSS","dow","M","mm","S","MM","EEE","Z","H","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71176_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__71176_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71180_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((function (){var G__71181 = (doy(p1__71180_SHARP_) / (7));return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__71181) : Math.ceil.call(null,G__71181));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71172_SHARP_){return cljs_time.format.abbreviate((3),(function (){var G__71182 = (M(p1__71172_SHARP_) - (1));return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__71182) : cljs_time.format.months.call(null,G__71182));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71178_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__71178_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71179_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__71179_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71168_SHARP_){var G__71183 = dow(p1__71168_SHARP_);return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__71183) : cljs_time.format.days.call(null,G__71183));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71177_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__71177_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71171_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__71171_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71169_SHARP_){return cljs_time.format.abbreviate((3),(function (){var G__71184 = dow(p1__71169_SHARP_);return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__71184) : cljs_time.format.days.call(null,G__71184));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71166_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__71166_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71175_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__71175_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71167_SHARP_){var d__$1 = d(p1__71167_SHARP_);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__71185 = d__$1;switch (G__71185) {
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
return (function (p1__71170_SHARP_){var G__71186 = dow(p1__71170_SHARP_);return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__71186) : cljs_time.format.days.call(null,G__71186));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71174_SHARP_){return cljs.core.mod(y(p1__71174_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__71173_SHARP_){var G__71187 = (M(p1__71173_SHARP_) - (1));return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__71187) : cljs_time.format.months.call(null,G__71187));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function timezone_adjustment(d,timezone_string){var vec__71198 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71198,(0),null);var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71198,(1),null);var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71198,(2),null);var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71198,(3),null);if(cljs.core.truth_((function (){var and__3625__auto__ = sign;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = hh;if(cljs.core.truth_(and__3625__auto____$1))
{return mm;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var sign_71206__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));var vec__71199_71207 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_71206__$1,vec__71198,_,sign,hh,mm){
return (function (p1__71189_SHARP_){var G__71200 = p1__71189_SHARP_;var G__71201 = (10);return parseInt(G__71200,G__71201);
});})(sign_71206__$1,vec__71198,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));var hh_71208__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71199_71207,(0),null);var mm_71209__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71199_71207,(1),null);var adjusted_71210 = (function (){var G__71202 = (function (){var G__71204 = d;var G__71205 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_71208__$1);return (sign_71206__$1.cljs$core$IFn$_invoke$arity$2 ? sign_71206__$1.cljs$core$IFn$_invoke$arity$2(G__71204,G__71205) : sign_71206__$1.call(null,G__71204,G__71205));
})();var G__71203 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_71209__$1);return (sign_71206__$1.cljs$core$IFn$_invoke$arity$2 ? sign_71206__$1.cljs$core$IFn$_invoke$arity$2(G__71202,G__71203) : sign_71206__$1.call(null,G__71202,G__71203));
})();d.setTime(adjusted_71210.getTime());
} else
{}
return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__71211_SHARP_){var G__71224 = p1__71211_SHARP_;var G__71225 = (10);return parseInt(G__71224,G__71225);
});var assoc_fn = ((function (parse_int){
return (function (kw){return ((function (parse_int){
return (function (p1__71212_SHARP_,p2__71213_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71212_SHARP_,kw,parse_int(p2__71213_SHARP_));
});
;})(parse_int))
});})(parse_int))
;var y = assoc_fn(cljs.core.constant$keyword$1422);var d = assoc_fn(cljs.core.constant$keyword$1420);var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__71214_SHARP_,p2__71215_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71214_SHARP_,cljs.core.constant$keyword$1421,(parse_int(p2__71215_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__71216_SHARP_,p2__71217_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71216_SHARP_,cljs.core.constant$keyword$1419,cljs.core.mod(parse_int(p2__71217_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__71226,x){var map__71227 = p__71226;var map__71227__$1 = ((cljs.core.seq_QMARK_(map__71227))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71227):map__71227);var date = map__71227__$1;var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71227__$1,cljs.core.constant$keyword$1419);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case(x))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.constant$keyword$1419,(function (){var hours__$1 = ((12) + hours);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24)))
{return (0);
} else
{return hours__$1;
}
})());
} else
{return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;var H = assoc_fn(cljs.core.constant$keyword$1419);var m = assoc_fn(cljs.core.constant$keyword$1418);var s = assoc_fn(cljs.core.constant$keyword$1417);var S = assoc_fn(cljs.core.constant$keyword$1416);var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__71219_SHARP_,p2__71218_SHARP_){var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){return cljs.core.re_seq(cljs.core.re_pattern(("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__71218_SHARP_))),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));return M(p1__71219_SHARP_,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__71220_SHARP_,p2__71221_SHARP_){return M(p1__71220_SHARP_,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,p2__71221_SHARP_) + (1)))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__71228__delegate = function (x,args){return x;
};
var G__71228 = function (x,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__71228__delegate.call(this,x,args);};
G__71228.cljs$lang$maxFixedArity = 1;
G__71228.cljs$lang$applyTo = (function (arglist__71229){
var x = cljs.core.first(arglist__71229);
var args = cljs.core.rest(arglist__71229);
return G__71228__delegate(x,args);
});
G__71228.cljs$core$IFn$_invoke$arity$variadic = G__71228__delegate;
return G__71228;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__71222_SHARP_,p2__71223_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71222_SHARP_,cljs.core.constant$keyword$1438,p2__71223_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","ss","SSS","dow","M","mm","S","MM","EEE","Z","H","E","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months)))+")"),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months))+")"),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1422,(function (p1__71230_SHARP_,p2__71231_SHARP_){return p1__71230_SHARP_.setYear(p2__71231_SHARP_);
}),cljs.core.constant$keyword$1421,(function (p1__71232_SHARP_,p2__71233_SHARP_){return p1__71232_SHARP_.setMonth(p2__71233_SHARP_);
}),cljs.core.constant$keyword$1420,(function (p1__71234_SHARP_,p2__71235_SHARP_){return p1__71234_SHARP_.setDate(p2__71235_SHARP_);
}),cljs.core.constant$keyword$1419,(function (p1__71236_SHARP_,p2__71237_SHARP_){return p1__71236_SHARP_.setHours(p2__71237_SHARP_);
}),cljs.core.constant$keyword$1418,(function (p1__71238_SHARP_,p2__71239_SHARP_){return p1__71238_SHARP_.setMinutes(p2__71239_SHARP_);
}),cljs.core.constant$keyword$1417,(function (p1__71240_SHARP_,p2__71241_SHARP_){return p1__71240_SHARP_.setSeconds(p2__71241_SHARP_);
}),cljs.core.constant$keyword$1416,(function (p1__71242_SHARP_,p2__71243_SHARP_){return p1__71242_SHARP_.setMilliseconds(p2__71243_SHARP_);
}),cljs.core.constant$keyword$1438,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function parser_sort_order_pred(parser){return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yyyy","yy","y","d","dd","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern(("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters)))))+")"));
cljs_time.format.date_parse_pattern = (function date_parse_pattern(formatter){return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__71244_SHARP_){return cljs.core.first((function (){var G__71246 = p1__71244_SHARP_;return (cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(G__71246) : cljs_time.format.date_parsers.call(null,G__71246));
})());
})));
});
cljs_time.format.parser_fn = (function parser_fn(fmts){return (function (s){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function formatter_fn(fmts,formatters){return (function() { 
var G__71252__delegate = function (date,p__71250){var vec__71251 = p__71250;var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71251,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(fmts,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,((function (vec__71251,formatter_overrides){
return (function (p1__71247_SHARP_){return (function (){var or__3637__auto__ = formatter_overrides;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return formatters;
}
})().call(null,p1__71247_SHARP_).call(null,date);
});})(vec__71251,formatter_overrides))
], null);
};
var G__71252 = function (date,var_args){
var p__71250 = null;if (arguments.length > 1) {
  p__71250 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__71252__delegate.call(this,date,p__71250);};
G__71252.cljs$lang$maxFixedArity = 1;
G__71252.cljs$lang$applyTo = (function (arglist__71253){
var date = cljs.core.first(arglist__71253);
var p__71250 = cljs.core.rest(arglist__71253);
return G__71252__delegate(date,p__71250);
});
G__71252.cljs$core$IFn$_invoke$arity$variadic = G__71252__delegate;
return G__71252;
})()
;
});
cljs_time.format.formatter = (function() {
var formatter = null;
var formatter__1 = (function (fmts){return formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});
var formatter__2 = (function (fmts,dtz){return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1439,cljs_time.format.parser_fn(fmts),cljs.core.constant$keyword$1382,cljs_time.format.formatter_fn(fmts,cljs_time.format.date_formatters)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1440], null));
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
cljs_time.format.formatter_local = (function formatter_local(fmts){return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1439,cljs_time.format.parser_fn(fmts),cljs.core.constant$keyword$1382,cljs_time.format.formatter_fn(fmts,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1440], null));
});
cljs_time.format.not_implemented = (function not_implemented(sym){return (function (){throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1442,cljs.core.constant$keyword$1441,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.array_seq([cljs.core.name(sym)], 0))], null));
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
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1443,cljs.core.constant$keyword$1444,cljs.core.constant$keyword$1445,cljs.core.constant$keyword$1446,cljs.core.constant$keyword$1423,cljs.core.constant$keyword$1447,cljs.core.constant$keyword$1448,cljs.core.constant$keyword$1449,cljs.core.constant$keyword$1450,cljs.core.constant$keyword$1451,cljs.core.constant$keyword$1452,cljs.core.constant$keyword$1453,cljs.core.constant$keyword$1454,cljs.core.constant$keyword$1455,cljs.core.constant$keyword$1456,cljs.core.constant$keyword$1457,cljs.core.constant$keyword$1458,cljs.core.constant$keyword$1459,cljs.core.constant$keyword$1460,cljs.core.constant$keyword$1461,cljs.core.constant$keyword$1462,cljs.core.constant$keyword$1463,cljs.core.constant$keyword$1464,cljs.core.constant$keyword$1465,cljs.core.constant$keyword$1466,cljs.core.constant$keyword$1467,cljs.core.constant$keyword$1468,cljs.core.constant$keyword$1469,cljs.core.constant$keyword$1470,cljs.core.constant$keyword$1471,cljs.core.constant$keyword$1472,cljs.core.constant$keyword$1473,cljs.core.constant$keyword$1474,cljs.core.constant$keyword$1475,cljs.core.constant$keyword$1476,cljs.core.constant$keyword$1477,cljs.core.constant$keyword$1478,cljs.core.constant$keyword$1479,cljs.core.constant$keyword$1480,cljs.core.constant$keyword$1481,cljs.core.constant$keyword$1482,cljs.core.constant$keyword$1483,cljs.core.constant$keyword$1484,cljs.core.constant$keyword$1485,cljs.core.constant$keyword$1486,cljs.core.constant$keyword$1487,cljs.core.constant$keyword$1488,cljs.core.constant$keyword$1489,cljs.core.constant$keyword$1490,cljs.core.constant$keyword$1491,cljs.core.constant$keyword$1492,cljs.core.constant$keyword$1493,cljs.core.constant$keyword$1494],[cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$1443,null,cljs.core.constant$keyword$1455,null,cljs.core.constant$keyword$1458,null,cljs.core.constant$keyword$1461,null,cljs.core.constant$keyword$1476,null,cljs.core.constant$keyword$1477,null,cljs.core.constant$keyword$1483,null,cljs.core.constant$keyword$1486,null,cljs.core.constant$keyword$1489,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;
cljs_time.format.date_map = (function (){var method_table__4516__auto__ = (function (){var G__71256 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__71256) : cljs.core.atom.call(null,G__71256));
})();var prefer_table__4517__auto__ = (function (){var G__71257 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__71257) : cljs.core.atom.call(null,G__71257));
})();var method_cache__4518__auto__ = (function (){var G__71258 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__71258) : cljs.core.atom.call(null,G__71258));
})();var cached_hierarchy__4519__auto__ = (function (){var G__71259 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__71259) : cljs.core.atom.call(null,G__71259));
})();var hierarchy__4520__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1292,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("date-map",cljs.core.type,cljs.core.constant$keyword$1111,hierarchy__4520__auto__,method_table__4516__auto__,prefer_table__4517__auto__,method_cache__4518__auto__,cached_hierarchy__4519__auto__));
})();
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (d){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1422,(0),cljs.core.constant$keyword$1421,(0),cljs.core.constant$keyword$1420,(1)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.DateTime,(function (d){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1422,(0),cljs.core.constant$keyword$1421,(0),cljs.core.constant$keyword$1420,(1),cljs.core.constant$keyword$1419,(0),cljs.core.constant$keyword$1418,(0),cljs.core.constant$keyword$1417,(0),cljs.core.constant$keyword$1416,(0)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (d){return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1422,(0),cljs.core.constant$keyword$1421,(0),cljs.core.constant$keyword$1420,(1),cljs.core.constant$keyword$1419,(0),cljs.core.constant$keyword$1418,(0),cljs.core.constant$keyword$1417,(0),cljs.core.constant$keyword$1416,(0),cljs.core.constant$keyword$1438,null], null);
}));
cljs_time.format.parse_STAR_ = (function parse_STAR_(constructor,p__71262,s){var map__71275 = p__71262;var map__71275__$1 = ((cljs.core.seq_QMARK_(map__71275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71275):map__71275);var fmt = map__71275__$1;var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71275__$1,cljs.core.constant$keyword$1439);if(cljs.core.seq(s))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"s","s",-948495851,null))], 0))))));
}
var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (min_parts,map__71275,map__71275__$1,fmt,parser){
return (function (p__71276){var vec__71277 = p__71276;var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71277,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71277,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((function (){var G__71278 = b;return (cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(G__71278) : cljs_time.format.date_parsers.call(null,G__71278));
})())], null);
});})(min_parts,map__71275,map__71275__$1,fmt,parser))
,(function (){var G__71279 = s;return (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(G__71279) : parser.call(null,G__71279));
})()));if((cljs.core.count(parse_seq) >= min_parts))
{var d = (new constructor((0),(0),(0),(0),(0),(0),(0)));var empty = (function (){var G__71280 = d;return (cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1(G__71280) : cljs_time.format.date_map.call(null,G__71280));
})();var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_seq,min_parts,map__71275,map__71275__$1,fmt,parser){
return (function (p1__71260_SHARP_,p2__71261_SHARP_){var G__71281 = d;var G__71282 = p2__71261_SHARP_;return (p1__71260_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__71260_SHARP_.cljs$core$IFn$_invoke$arity$2(G__71281,G__71282) : p1__71260_SHARP_.call(null,G__71281,G__71282));
});})(d,empty,setters,parse_seq,min_parts,map__71275,map__71275__$1,fmt,parser))
,cljs.core.array_seq([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_seq,min_parts,map__71275,map__71275__$1,fmt,parser){
return (function (date,p__71283){var vec__71284 = p__71283;var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71284,(0),null);var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71284,(1),null);var G__71285 = date;var G__71286 = part;return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(G__71285,G__71286) : do_parse.call(null,G__71285,G__71286));
});})(d,empty,setters,parse_seq,min_parts,map__71275,map__71275__$1,fmt,parser))
,empty,parse_seq))], 0));
return d;
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1495], null));
}
});
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function() {
var parse = null;
var parse__1 = (function (s){return cljs.core.first((function (){var iter__4375__auto__ = (function iter__71305(s__71306){return (new cljs.core.LazySeq(null,(function (){var s__71306__$1 = s__71306;while(true){
var temp__4126__auto__ = cljs.core.seq(s__71306__$1);if(temp__4126__auto__)
{var s__71306__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__71306__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__71306__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__71308 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__71307 = (0);while(true){
if((i__71307 < size__4374__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__71307);var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e71313){if((e71313 instanceof Error))
{var _ = e71313;return null;
} else
{throw e71313;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__71308,d);
{
var G__71315 = (i__71307 + (1));
i__71307 = G__71315;
continue;
}
} else
{{
var G__71316 = (i__71307 + (1));
i__71307 = G__71316;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__71308),iter__71305(cljs.core.chunk_rest(s__71306__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__71308),null);
}
} else
{var f = cljs.core.first(s__71306__$2);var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e71314){if((e71314 instanceof Error))
{var _ = e71314;return null;
} else
{throw e71314;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__71305(cljs.core.rest(s__71306__$2)));
} else
{{
var G__71317 = cljs.core.rest(s__71306__$2);
s__71306__$1 = G__71317;
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
var parse_local__1 = (function (s){return cljs.core.first((function (){var iter__4375__auto__ = (function iter__71336(s__71337){return (new cljs.core.LazySeq(null,(function (){var s__71337__$1 = s__71337;while(true){
var temp__4126__auto__ = cljs.core.seq(s__71337__$1);if(temp__4126__auto__)
{var s__71337__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__71337__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__71337__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__71339 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__71338 = (0);while(true){
if((i__71338 < size__4374__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__71338);var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e71344){if((e71344 instanceof Error))
{var _ = e71344;return null;
} else
{throw e71344;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__71339,d);
{
var G__71346 = (i__71338 + (1));
i__71338 = G__71346;
continue;
}
} else
{{
var G__71347 = (i__71338 + (1));
i__71338 = G__71347;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__71339),iter__71336(cljs.core.chunk_rest(s__71337__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__71339),null);
}
} else
{var f = cljs.core.first(s__71337__$2);var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e71345){if((e71345 instanceof Error))
{var _ = e71345;return null;
} else
{throw e71345;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__71336(cljs.core.rest(s__71337__$2)));
} else
{{
var G__71348 = cljs.core.rest(s__71337__$2);
s__71337__$1 = G__71348;
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
var parse_local_date__1 = (function (s){return cljs.core.first((function (){var iter__4375__auto__ = (function iter__71367(s__71368){return (new cljs.core.LazySeq(null,(function (){var s__71368__$1 = s__71368;while(true){
var temp__4126__auto__ = cljs.core.seq(s__71368__$1);if(temp__4126__auto__)
{var s__71368__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__71368__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__71368__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__71370 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__71369 = (0);while(true){
if((i__71369 < size__4374__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__71369);var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e71375){if((e71375 instanceof Error))
{var _ = e71375;return null;
} else
{throw e71375;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__71370,d);
{
var G__71377 = (i__71369 + (1));
i__71369 = G__71377;
continue;
}
} else
{{
var G__71378 = (i__71369 + (1));
i__71369 = G__71378;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__71370),iter__71367(cljs.core.chunk_rest(s__71368__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__71370),null);
}
} else
{var f = cljs.core.first(s__71368__$2);var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e71376){if((e71376 instanceof Error))
{var _ = e71376;return null;
} else
{throw e71376;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__71367(cljs.core.rest(s__71368__$2)));
} else
{{
var G__71379 = cljs.core.rest(s__71368__$2);
s__71368__$1 = G__71379;
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
cljs_time.format.unparse = (function unparse(p__71380,dt){var map__71383 = p__71380;var map__71383__$1 = ((cljs.core.seq_QMARK_(map__71383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71383):map__71383);var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71383__$1,cljs.core.constant$keyword$1382);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.DateTime))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(function (){var G__71384 = dt;return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__71384) : formatter.call(null,G__71384));
})());
});
/**
* Returns a string representing the given LocalDateTime instance in the
* form determined by the given formatter.
*/
cljs_time.format.unparse_local = (function unparse_local(p__71385,dt){var map__71389 = p__71385;var map__71389__$1 = ((cljs.core.seq_QMARK_(map__71389))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71389):map__71389);var fmt = map__71389__$1;var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71389__$1,cljs.core.constant$keyword$1382);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.DateTime))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(function (){var G__71390 = dt;var G__71391 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0));return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(G__71390,G__71391) : formatter.call(null,G__71390,G__71391));
})());
});
/**
* Returns a string representing the given LocalDate instance in the form
* determined by the given formatter.
*/
cljs_time.format.unparse_local_date = (function unparse_local_date(p__71392,dt){var map__71396 = p__71392;var map__71396__$1 = ((cljs.core.seq_QMARK_(map__71396))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71396):map__71396);var fmt = map__71396__$1;var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71396__$1,cljs.core.constant$keyword$1382);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.Date))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.Date","goog.date.Date",-1613361125,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(function (){var G__71397 = dt;var G__71398 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0));return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(G__71397,G__71398) : formatter.call(null,G__71397,G__71398));
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
var show_formatters__1 = (function (dt){var seq__71406 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));var chunk__71407 = null;var count__71408 = (0);var i__71409 = (0);while(true){
if((i__71409 < count__71408))
{var p = chunk__71407.cljs$core$IIndexed$_nth$arity$2(null,i__71409);var fmt_71412 = (function (){var G__71410 = p;return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__71410) : cljs_time.format.formatters.call(null,G__71410));
})();cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_71412,dt)], 0))], 0));
{
var G__71413 = seq__71406;
var G__71414 = chunk__71407;
var G__71415 = count__71408;
var G__71416 = (i__71409 + (1));
seq__71406 = G__71413;
chunk__71407 = G__71414;
count__71408 = G__71415;
i__71409 = G__71416;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__71406);if(temp__4126__auto__)
{var seq__71406__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__71406__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__71406__$1);{
var G__71417 = cljs.core.chunk_rest(seq__71406__$1);
var G__71418 = c__4406__auto__;
var G__71419 = cljs.core.count(c__4406__auto__);
var G__71420 = (0);
seq__71406 = G__71417;
chunk__71407 = G__71418;
count__71408 = G__71419;
i__71409 = G__71420;
continue;
}
} else
{var p = cljs.core.first(seq__71406__$1);var fmt_71421 = (function (){var G__71411 = p;return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__71411) : cljs_time.format.formatters.call(null,G__71411));
})();cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_71421,dt)], 0))], 0));
{
var G__71422 = cljs.core.next(seq__71406__$1);
var G__71423 = null;
var G__71424 = (0);
var G__71425 = (0);
seq__71406 = G__71422;
chunk__71407 = G__71423;
count__71408 = G__71424;
i__71409 = G__71425;
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
cljs_time.format.Mappable = (function (){var obj71427 = {};return obj71427;
})();
cljs_time.format.instant__GT_map = (function instant__GT_map(instant){if((function (){var and__3625__auto__ = instant;if(and__3625__auto__)
{return instant.cljs_time$format$Mappable$instant__GT_map$arity$1;
} else
{return and__3625__auto__;
}
})())
{return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else
{var x__4273__auto__ = (((instant == null))?null:instant);return (function (){var or__3637__auto__ = (cljs_time.format.instant__GT_map[(function (){var G__71431 = x__4273__auto__;return goog.typeOf(G__71431);
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
cljs_time.format.to_map = (function to_map(years,months,days,hours,minutes,seconds,millis){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1422,years,cljs.core.constant$keyword$1421,months,cljs.core.constant$keyword$1420,days,cljs.core.constant$keyword$1419,hours,cljs.core.constant$keyword$1418,minutes,cljs.core.constant$keyword$1417,seconds,cljs.core.constant$keyword$1416,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){var dt__$1 = this;return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var m__$1 = this;var G__71432 = (((cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);switch (G__71432) {
case "cljs-time.core/interval":
var G__71433 = m__$1;return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__71433) : cljs_time.core.__GT_period.call(null,G__71433));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1))))));

}
});
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var m__$1 = this;var G__71435 = (((cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);switch (G__71435) {
case "cljs-time.core/interval":
var G__71436 = m__$1;return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__71436) : cljs_time.core.__GT_period.call(null,G__71436));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1))))));

}
});
