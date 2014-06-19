// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__24240){var vec__24242 = p__24240;var irreg = cljs.core.nth.call(null,vec__24242,0,null);if((n === 1))
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
var p__24240 = null;if (arguments.length > 2) {
  p__24240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__24240);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__24243){
var n = cljs.core.first(arglist__24243);
arglist__24243 = cljs.core.next(arglist__24243);
var word = cljs.core.first(arglist__24243);
var p__24240 = cljs.core.rest(arglist__24243);
return pluralize__delegate(n,word,p__24240);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;

//# sourceMappingURL=string.js.map