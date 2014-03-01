// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.om');
goog.require('cljs.core');
/**
* wraps a component constructor function so that
* the components state is found at path korks in
* the app-state
*/
clustermap.om.burrow = (function burrow(component_fn,korks){var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return (function() { 
var G__12890__delegate = function (args){return cljs.core.apply.call(null,component_fn,cljs.core.get_in.call(null,cljs.core.first.call(null,args),use_korks),cljs.core.rest.call(null,args));
};
var G__12890 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12890__delegate.call(this,args);};
G__12890.cljs$lang$maxFixedArity = 0;
G__12890.cljs$lang$applyTo = (function (arglist__12891){
var args = cljs.core.seq(arglist__12891);
return G__12890__delegate(args);
});
G__12890.cljs$core$IFn$_invoke$arity$variadic = G__12890__delegate;
return G__12890;
})()
;
});

//# sourceMappingURL=om.js.map