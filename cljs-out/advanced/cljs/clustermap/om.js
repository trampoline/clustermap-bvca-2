// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.om');
goog.require('cljs.core');
/**
* wraps a component constructor function so that
* the components state is found at path korks in
* the app-state
*/
clustermap.om.burrow = (function burrow(component_fn,korks){var use_korks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return ((function (use_korks){
return (function() { 
var G__58669__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(component_fn,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(args),use_korks),cljs.core.rest(args));
};
var G__58669 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__58669__delegate.call(this,args);};
G__58669.cljs$lang$maxFixedArity = 0;
G__58669.cljs$lang$applyTo = (function (arglist__58670){
var args = cljs.core.seq(arglist__58670);
return G__58669__delegate(args);
});
G__58669.cljs$core$IFn$_invoke$arity$variadic = G__58669__delegate;
return G__58669;
})()
;
;})(use_korks))
});
