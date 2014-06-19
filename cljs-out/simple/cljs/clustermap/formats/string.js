// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__13106){var vec__13108 = p__13106;var irreg = cljs.core.nth.call(null,vec__13108,0,null);if((n === 1))
{return word;
} else
{var or__3539__auto__ = irreg;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__13106 = null;if (arguments.length > 2) {
  p__13106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__13106);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__13109){
var n = cljs.core.first(arglist__13109);
arglist__13109 = cljs.core.next(arglist__13109);
var word = cljs.core.first(arglist__13109);
var p__13106 = cljs.core.rest(arglist__13109);
return pluralize__delegate(n,word,p__13106);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
