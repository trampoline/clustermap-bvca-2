// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1153,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$1155,(function (p1__10547__10548__auto__){var G__52791 = p1__10547__10548__auto__;if(G__52791)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__52791.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__52791.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__52791);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__52791);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52792_SHARP_){return (cljs.core.val(p1__52792_SHARP_) > (1));
}),cljs.core.frequencies(things)));if(cljs.core.empty_QMARK_(repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_(m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}
var vec__52794 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52794,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52794,(1),null);var p = vec__52794;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1145,cljs.core.constant$keyword$1170,cljs.core.constant$keyword$1168,k,cljs.core.constant$keyword$1169,m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___52800 = schema.utils.use_fn_validation;var output_schema52795_52801 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema52796_52802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker52797_52803 = schema.core.checker(input_schema52796_52802);var output_checker52798_52804 = schema.core.checker(output_schema52795_52801);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___52800,output_schema52795_52801,input_schema52796_52802,input_checker52797_52803,output_checker52798_52804){
return (function unwrap_schema_form_key(G__52799){var validate__10517__auto__ = ufv___52800.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52799], null);var temp__4126__auto___52806 = (input_checker52797_52803.cljs$core$IFn$_invoke$arity$1 ? input_checker52797_52803.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52805) : input_checker52797_52803.call(null,args__10518__auto___52805));if(cljs.core.truth_(temp__4126__auto___52806))
{var error__10519__auto___52807 = temp__4126__auto___52806;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52807], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52796_52802,cljs.core.constant$keyword$1147,args__10518__auto___52805,cljs.core.constant$keyword$1145,error__10519__auto___52807], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__52799;while(true){
if(schema.core.specific_key_QMARK_(k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else
{if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52808 = (output_checker52798_52804.cljs$core$IFn$_invoke$arity$1 ? output_checker52798_52804.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52798_52804.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52808))
{var error__10519__auto___52809 = temp__4126__auto___52808;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52809], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52795_52801,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52809], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52800,output_schema52795_52801,input_schema52796_52802,input_checker52797_52803,output_checker52798_52804))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema52795_52801,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52796_52802], null)));
var ufv___52815 = schema.utils.use_fn_validation;var output_schema52810_52816 = schema.core.Any;var input_schema52811_52817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker52812_52818 = schema.core.checker(input_schema52811_52817);var output_checker52813_52819 = schema.core.checker(output_schema52810_52816);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___52815,output_schema52810_52816,input_schema52811_52817,input_checker52812_52818,output_checker52813_52819){
return (function explicit_schema_key_map(G__52814){var validate__10517__auto__ = ufv___52815.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52820 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52814], null);var temp__4126__auto___52821 = (input_checker52812_52818.cljs$core$IFn$_invoke$arity$1 ? input_checker52812_52818.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52820) : input_checker52812_52818.call(null,args__10518__auto___52820));if(cljs.core.truth_(temp__4126__auto___52821))
{var error__10519__auto___52822 = temp__4126__auto___52821;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52822], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52811_52817,cljs.core.constant$keyword$1147,args__10518__auto___52820,cljs.core.constant$keyword$1145,error__10519__auto___52822], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52814;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52823 = (output_checker52813_52819.cljs$core$IFn$_invoke$arity$1 ? output_checker52813_52819.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52813_52819.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52823))
{var error__10519__auto___52824 = temp__4126__auto___52823;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52824], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52810_52816,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52824], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52815,output_schema52810_52816,input_schema52811_52817,input_checker52812_52818,output_checker52813_52819))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema52810_52816,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52811_52817], null)));
var ufv___52830 = schema.utils.use_fn_validation;var output_schema52825_52831 = schema.core.Any;var input_schema52826_52832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker52827_52833 = schema.core.checker(input_schema52826_52832);var output_checker52828_52834 = schema.core.checker(output_schema52825_52831);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___52830,output_schema52825_52831,input_schema52826_52832,input_checker52827_52833,output_checker52828_52834){
return (function split_schema_keys(G__52829){var validate__10517__auto__ = ufv___52830.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52829], null);var temp__4126__auto___52836 = (input_checker52827_52833.cljs$core$IFn$_invoke$arity$1 ? input_checker52827_52833.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52835) : input_checker52827_52833.call(null,args__10518__auto___52835));if(cljs.core.truth_(temp__4126__auto___52836))
{var error__10519__auto___52837 = temp__4126__auto___52836;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52837], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52826_52832,cljs.core.constant$keyword$1147,args__10518__auto___52835,cljs.core.constant$keyword$1145,error__10519__auto___52837], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52829;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52838 = (output_checker52828_52834.cljs$core$IFn$_invoke$arity$1 ? output_checker52828_52834.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52828_52834.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52838))
{var error__10519__auto___52839 = temp__4126__auto___52838;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52839], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52825_52831,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52839], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52830,output_schema52825_52831,input_schema52826_52832,input_checker52827_52833,output_checker52828_52834))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema52825_52831,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52826_52832], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__52843){var vec__52844 = p__52843;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52844,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52844,(1),null);var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__52845 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52845,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52845,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__52846){
var key_project = cljs.core.first(arglist__52846);
arglist__52846 = cljs.core.next(arglist__52846);
var key_combine = cljs.core.first(arglist__52846);
arglist__52846 = cljs.core.next(arglist__52846);
var val_combine = cljs.core.first(arglist__52846);
var maps = cljs.core.rest(arglist__52846);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___52854 = schema.utils.use_fn_validation;var output_schema52848_52855 = plumbing.fnk.schema.InputSchema;var input_schema52849_52856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker52850_52857 = schema.core.checker(input_schema52849_52856);var output_checker52851_52858 = schema.core.checker(output_schema52848_52855);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___52854,output_schema52848_52855,input_schema52849_52856,input_checker52850_52857,output_checker52851_52858){
return (function union_input_schemata(G__52852,G__52853){var validate__10517__auto__ = ufv___52854.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52852,G__52853], null);var temp__4126__auto___52860 = (input_checker52850_52857.cljs$core$IFn$_invoke$arity$1 ? input_checker52850_52857.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52859) : input_checker52850_52857.call(null,args__10518__auto___52859));if(cljs.core.truth_(temp__4126__auto___52860))
{var error__10519__auto___52861 = temp__4126__auto___52860;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52861], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52849_52856,cljs.core.constant$keyword$1147,args__10518__auto___52859,cljs.core.constant$keyword$1145,error__10519__auto___52861], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__52852;var i2 = G__52853;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__10517__auto__,ufv___52854,output_schema52848_52855,input_schema52849_52856,input_checker52850_52857,output_checker52851_52858){
return (function (p1__52847_SHARP_){if(schema.core.specific_key_QMARK_(p1__52847_SHARP_))
{return schema.core.explicit_schema_key(p1__52847_SHARP_);
} else
{return cljs.core.constant$keyword$1172;
}
});})(validate__10517__auto__,ufv___52854,output_schema52848_52855,input_schema52849_52856,input_checker52850_52857,output_checker52851_52858))
,((function (validate__10517__auto__,ufv___52854,output_schema52848_52855,input_schema52849_52856,input_checker52850_52857,output_checker52851_52858){
return (function (k1,k2){if(schema.core.required_key_QMARK_(k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_(k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_(k1))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))], 0))))));
}
return k1;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__10517__auto__,ufv___52854,output_schema52848_52855,input_schema52849_52856,input_checker52850_52857,output_checker52851_52858))
,((function (validate__10517__auto__,ufv___52854,output_schema52848_52855,input_schema52849_52856,input_checker52850_52857,output_checker52851_52858){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__10517__auto__,ufv___52854,output_schema52848_52855,input_schema52849_52856,input_checker52850_52857,output_checker52851_52858))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52862 = (output_checker52851_52858.cljs$core$IFn$_invoke$arity$1 ? output_checker52851_52858.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52851_52858.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52862))
{var error__10519__auto___52863 = temp__4126__auto___52862;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52863], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52848_52855,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52863], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52854,output_schema52848_52855,input_schema52849_52856,input_checker52850_52857,output_checker52851_52858))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema52848_52855,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52849_52856], null)));
var ufv___52869 = schema.utils.use_fn_validation;var output_schema52864_52870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema52865_52871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker52866_52872 = schema.core.checker(input_schema52865_52871);var output_checker52867_52873 = schema.core.checker(output_schema52864_52870);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___52869,output_schema52864_52870,input_schema52865_52871,input_checker52866_52872,output_checker52867_52873){
return (function required_toplevel_keys(G__52868){var validate__10517__auto__ = ufv___52869.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___52874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52868], null);var temp__4126__auto___52875 = (input_checker52866_52872.cljs$core$IFn$_invoke$arity$1 ? input_checker52866_52872.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52874) : input_checker52866_52872.call(null,args__10518__auto___52874));if(cljs.core.truth_(temp__4126__auto___52875))
{var error__10519__auto___52876 = temp__4126__auto___52875;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52876], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52865_52871,cljs.core.constant$keyword$1147,args__10518__auto___52874,cljs.core.constant$keyword$1145,error__10519__auto___52876], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__52868;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10517__auto__,ufv___52869,output_schema52864_52870,input_schema52865_52871,input_checker52866_52872,output_checker52867_52873){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___52869,output_schema52864_52870,input_schema52865_52871,input_checker52866_52872,output_checker52867_52873))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___52877 = (output_checker52867_52873.cljs$core$IFn$_invoke$arity$1 ? output_checker52867_52873.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52867_52873.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52877))
{var error__10519__auto___52878 = temp__4126__auto___52877;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52878], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52864_52870,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52878], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52869,output_schema52864_52870,input_schema52865_52871,input_checker52866_52872,output_checker52867_52873))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema52864_52870,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52865_52871], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__52887(s__52888){return (new cljs.core.LazySeq(null,(function (){var s__52888__$1 = s__52888;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52888__$1);if(temp__4126__auto__)
{var s__52888__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52888__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52888__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52890 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52889 = (0);while(true){
if((i__52889 < size__4282__auto__))
{var vec__52893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52889);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52893,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52893,(1),null);cljs.core.chunk_append(b__52890,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__52895 = (i__52889 + (1));
i__52889 = G__52895;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52890),iter__52887(cljs.core.chunk_rest(s__52888__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52890),null);
}
} else
{var vec__52894 = cljs.core.first(s__52888__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52894,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52894,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__52887(cljs.core.rest(s__52888__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_(input_schema)))
{return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_(output_schema)))
{return schema.utils.error(schema.utils.__GT_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__52904(s__52905){return (new cljs.core.LazySeq(null,(function (){var s__52905__$1 = s__52905;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52905__$1);if(temp__4126__auto__)
{var s__52905__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52905__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52905__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52907 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52906 = (0);while(true){
if((i__52906 < size__4282__auto__))
{var vec__52910 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52906);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52910,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52910,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__52907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__52912 = (i__52906 + (1));
i__52906 = G__52912;
continue;
}
} else
{{
var G__52913 = (i__52906 + (1));
i__52906 = G__52913;
continue;
}
}
} else
{{
var G__52914 = (i__52906 + (1));
i__52906 = G__52914;
continue;
}
}
} else
{{
var G__52915 = (i__52906 + (1));
i__52906 = G__52915;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52907),iter__52904(cljs.core.chunk_rest(s__52905__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52907),null);
}
} else
{var vec__52911 = cljs.core.first(s__52905__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52911,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52911,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__52904(cljs.core.rest(s__52905__$2)));
} else
{{
var G__52916 = cljs.core.rest(s__52905__$2);
s__52905__$1 = G__52916;
continue;
}
}
} else
{{
var G__52917 = cljs.core.rest(s__52905__$2);
s__52905__$1 = G__52917;
continue;
}
}
} else
{{
var G__52918 = cljs.core.rest(s__52905__$2);
s__52905__$1 = G__52918;
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
});return iter__4283__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1145,cljs.core.constant$keyword$1174,cljs.core.constant$keyword$1173,fails], null));
} else
{return null;
}
});
var ufv___52941 = schema.utils.use_fn_validation;var output_schema52919_52942 = schema.core.Any;var input_schema52920_52943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker52921_52944 = schema.core.checker(input_schema52920_52943);var output_checker52922_52945 = schema.core.checker(output_schema52919_52942);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___52941,output_schema52919_52942,input_schema52920_52943,input_checker52921_52944,output_checker52922_52945){
return (function compose_schemata(G__52923,G__52924){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___52946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52923,G__52924], null);var temp__4126__auto___52947 = (input_checker52921_52944.cljs$core$IFn$_invoke$arity$1 ? input_checker52921_52944.cljs$core$IFn$_invoke$arity$1(args__10518__auto___52946) : input_checker52921_52944.call(null,args__10518__auto___52946));if(cljs.core.truth_(temp__4126__auto___52947))
{var error__10519__auto___52948 = temp__4126__auto___52947;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52948], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52920_52943,cljs.core.constant$keyword$1147,args__10518__auto___52946,cljs.core.constant$keyword$1145,error__10519__auto___52948], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__52935 = G__52923;var vec__52937 = G__52935;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52937,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52937,(1),null);var G__52936 = G__52924;var vec__52938 = G__52936;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52938,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52938,(1),null);var G__52935__$1 = G__52935;var G__52936__$1 = G__52936;while(true){
var vec__52939 = G__52935__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52939,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52939,(1),null);var vec__52940 = G__52936__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52940,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52940,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___52949 = (output_checker52922_52945.cljs$core$IFn$_invoke$arity$1 ? output_checker52922_52945.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52922_52945.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___52949))
{var error__10519__auto___52950 = temp__4126__auto___52949;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___52950], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52919_52942,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___52950], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___52941,output_schema52919_52942,input_schema52920_52943,input_checker52921_52944,output_checker52922_52945))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema52919_52942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52920_52943], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_(m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k)))
{return schema.core.optional_key(k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___53029 = schema.utils.use_fn_validation;var output_schema52951_53030 = schema.core.Any;var input_schema52952_53031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker52953_53032 = schema.core.checker(input_schema52952_53031);var output_checker52954_53033 = schema.core.checker(output_schema52951_53030);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033){
return (function split_schema(G__52955,G__52956){var validate__10517__auto__ = ufv___53029.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___53034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52955,G__52956], null);var temp__4126__auto___53035 = (input_checker52953_53032.cljs$core$IFn$_invoke$arity$1 ? input_checker52953_53032.cljs$core$IFn$_invoke$arity$1(args__10518__auto___53034) : input_checker52953_53032.call(null,args__10518__auto___53034));if(cljs.core.truth_(temp__4126__auto___53035))
{var error__10519__auto___53036 = temp__4126__auto___53035;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___53036], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema52952_53031,cljs.core.constant$keyword$1147,args__10518__auto___53034,cljs.core.constant$keyword$1145,error__10519__auto___53036], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__52955;var ks = G__52956;while(true){
var ks__$1 = cljs.core.set(ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033){
return (function iter__52993(s__52994){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033){
return (function (){var s__52994__$1 = s__52994;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52994__$1);if(temp__4126__auto__)
{var s__52994__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52994__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52994__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52996 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52995 = (0);while(true){
if((i__52995 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52995);cljs.core.chunk_append(b__52996,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__52995,in_QMARK_,c__4281__auto__,size__4282__auto__,b__52996,s__52994__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033){
return (function iter__53013(s__53014){return (new cljs.core.LazySeq(null,((function (i__52995,in_QMARK_,c__4281__auto__,size__4282__auto__,b__52996,s__52994__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033){
return (function (){var s__53014__$1 = s__53014;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__53014__$1);if(temp__4126__auto____$1)
{var s__53014__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__53014__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__53014__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__53016 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__53015 = (0);while(true){
if((i__53015 < size__4282__auto____$1))
{var vec__53019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__53015);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53019,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53019,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__53016,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53037 = (i__53015 + (1));
i__53015 = G__53037;
continue;
}
} else
{{
var G__53038 = (i__53015 + (1));
i__53015 = G__53038;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53016),iter__53013(cljs.core.chunk_rest(s__53014__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53016),null);
}
} else
{var vec__53020 = cljs.core.first(s__53014__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53020,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53020,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53013(cljs.core.rest(s__53014__$2)));
} else
{{
var G__53039 = cljs.core.rest(s__53014__$2);
s__53014__$1 = G__53039;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__52995,in_QMARK_,c__4281__auto__,size__4282__auto__,b__52996,s__52994__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033))
,null,null));
});})(i__52995,in_QMARK_,c__4281__auto__,size__4282__auto__,b__52996,s__52994__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033))
;return iter__4283__auto__(s);
})()));
{
var G__53040 = (i__52995 + (1));
i__52995 = G__53040;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52996),iter__52993(cljs.core.chunk_rest(s__52994__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52996),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__52994__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__52994__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033){
return (function iter__53021(s__53022){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__52994__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033){
return (function (){var s__53022__$1 = s__53022;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__53022__$1);if(temp__4126__auto____$1)
{var s__53022__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__53022__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53022__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53024 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53023 = (0);while(true){
if((i__53023 < size__4282__auto__))
{var vec__53027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53023);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53027,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53027,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__53024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53041 = (i__53023 + (1));
i__53023 = G__53041;
continue;
}
} else
{{
var G__53042 = (i__53023 + (1));
i__53023 = G__53042;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53024),iter__53021(cljs.core.chunk_rest(s__53022__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53024),null);
}
} else
{var vec__53028 = cljs.core.first(s__53022__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53028,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53028,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53021(cljs.core.rest(s__53022__$2)));
} else
{{
var G__53043 = cljs.core.rest(s__53022__$2);
s__53022__$1 = G__53043;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__52994__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033))
,null,null));
});})(in_QMARK_,s__52994__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033))
;return iter__4283__auto__(s);
})()),iter__52993(cljs.core.rest(s__52994__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033))
;return iter__4283__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___53044 = (output_checker52954_53033.cljs$core$IFn$_invoke$arity$1 ? output_checker52954_53033.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker52954_53033.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___53044))
{var error__10519__auto___53045 = temp__4126__auto___53044;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___53045], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema52951_53030,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___53045], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___53029,output_schema52951_53030,input_schema52952_53031,input_checker52953_53032,output_checker52954_53033))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema52951_53030,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52952_53031], null)));
var ufv___53076 = schema.utils.use_fn_validation;var output_schema53046_53077 = plumbing.fnk.schema.GraphIOSchemata;var input_schema53047_53078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker53048_53079 = schema.core.checker(input_schema53047_53078);var output_checker53049_53080 = schema.core.checker(output_schema53046_53077);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___53076,output_schema53046_53077,input_schema53047_53078,input_checker53048_53079,output_checker53049_53080){
return (function sequence_schemata(G__53050,G__53051){var validate__10517__auto__ = ufv___53076.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___53081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53050,G__53051], null);var temp__4126__auto___53082 = (input_checker53048_53079.cljs$core$IFn$_invoke$arity$1 ? input_checker53048_53079.cljs$core$IFn$_invoke$arity$1(args__10518__auto___53081) : input_checker53048_53079.call(null,args__10518__auto___53081));if(cljs.core.truth_(temp__4126__auto___53082))
{var error__10519__auto___53083 = temp__4126__auto___53082;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___53083], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,input_schema53047_53078,cljs.core.constant$keyword$1147,args__10518__auto___53081,cljs.core.constant$keyword$1145,error__10519__auto___53083], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__53067 = G__53050;var vec__53069 = G__53067;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53069,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53069,(1),null);var G__53068 = G__53051;var vec__53070 = G__53068;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(0),null);var vec__53071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53071,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53071,(1),null);var G__53067__$1 = G__53067;var G__53068__$1 = G__53068;while(true){
var vec__53072 = G__53067__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53072,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53072,(1),null);var vec__53073 = G__53068__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53073,(0),null);var vec__53074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53073,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53074,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53074,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}
var vec__53075 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53075,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53075,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___53084 = (output_checker53049_53080.cljs$core$IFn$_invoke$arity$1 ? output_checker53049_53080.cljs$core$IFn$_invoke$arity$1(o__10520__auto__) : output_checker53049_53080.call(null,o__10520__auto__));if(cljs.core.truth_(temp__4126__auto___53084))
{var error__10519__auto___53085 = temp__4126__auto___53084;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10519__auto___53085], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,output_schema53046_53077,cljs.core.constant$keyword$1147,o__10520__auto__,cljs.core.constant$keyword$1145,error__10519__auto___53085], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___53076,output_schema53046_53077,input_schema53047_53078,input_checker53048_53079,output_checker53049_53080))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema53046_53077,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53047_53078], null)));
