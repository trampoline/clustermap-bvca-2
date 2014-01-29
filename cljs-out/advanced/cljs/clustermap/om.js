// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.om');
goog.require('cljs.core');
/**
* wraps a component constructor function so that
* the components state is found at path korks in
* the app-state
*/
clustermap.om.burrow = (function burrow(component_fn,korks){var use_korks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return (function() { 
var G__22008__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(component_fn,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(args),use_korks),cljs.core.rest(args));
};
var G__22008 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22008__delegate.call(this,args);};
G__22008.cljs$lang$maxFixedArity = 0;
G__22008.cljs$lang$applyTo = (function (arglist__22009){
var args = cljs.core.seq(arglist__22009);
return G__22008__delegate(args);
});
G__22008.cljs$core$IFn$_invoke$arity$variadic = G__22008__delegate;
return G__22008;
})()
;
});
