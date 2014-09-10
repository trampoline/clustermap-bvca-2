// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__51217){var vec__51219 = p__51217;var irreg = cljs.core.nth.call(null,vec__51219,(0),null);if((n === (1)))
{return word;
} else
{var or__3541__auto__ = irreg;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__51217 = null;if (arguments.length > 2) {
  p__51217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__51217);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__51220){
var n = cljs.core.first(arglist__51220);
arglist__51220 = cljs.core.next(arglist__51220);
var word = cljs.core.first(arglist__51220);
var p__51217 = cljs.core.rest(arglist__51220);
return pluralize__delegate(n,word,p__51217);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;

//# sourceMappingURL=string.js.map