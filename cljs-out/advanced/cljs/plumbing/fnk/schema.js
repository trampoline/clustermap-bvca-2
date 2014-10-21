// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1342,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$1344,(function (p1__13449__13450__auto__){var G__69063 = p1__13449__13450__auto__;if(G__69063)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__69063.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__69063.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__69063);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__69063);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69064_SHARP_){return (cljs.core.val(p1__69064_SHARP_) > (1));
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
var vec__69066 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69066,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69066,(1),null);var p = vec__69066;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1335,cljs.core.constant$keyword$1357,cljs.core.constant$keyword$1243,k,cljs.core.constant$keyword$1356,m], null));
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
var ufv___69076 = schema.utils.use_fn_validation;var output_schema69067_69077 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema69068_69078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker69069_69079 = schema.core.checker(input_schema69068_69078);var output_checker69070_69080 = schema.core.checker(output_schema69067_69077);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___69076,output_schema69067_69077,input_schema69068_69078,input_checker69069_69079,output_checker69070_69080){
return (function unwrap_schema_form_key(G__69071){var validate__13419__auto__ = ufv___69076.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___69081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69071], null);var temp__4126__auto___69082 = (function (){var G__69074 = args__13420__auto___69081;return (input_checker69069_69079.cljs$core$IFn$_invoke$arity$1 ? input_checker69069_69079.cljs$core$IFn$_invoke$arity$1(G__69074) : input_checker69069_69079.call(null,G__69074));
})();if(cljs.core.truth_(temp__4126__auto___69082))
{var error__13421__auto___69083 = temp__4126__auto___69082;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69083], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,input_schema69068_69078,cljs.core.constant$keyword$1275,args__13420__auto___69081,cljs.core.constant$keyword$1335,error__13421__auto___69083], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var k = G__69071;while(true){
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
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___69084 = (function (){var G__69075 = o__13422__auto__;return (output_checker69070_69080.cljs$core$IFn$_invoke$arity$1 ? output_checker69070_69080.cljs$core$IFn$_invoke$arity$1(G__69075) : output_checker69070_69080.call(null,G__69075));
})();if(cljs.core.truth_(temp__4126__auto___69084))
{var error__13421__auto___69085 = temp__4126__auto___69084;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69085], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,output_schema69067_69077,cljs.core.constant$keyword$1275,o__13422__auto__,cljs.core.constant$keyword$1335,error__13421__auto___69085], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___69076,output_schema69067_69077,input_schema69068_69078,input_checker69069_69079,output_checker69070_69080))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema69067_69077,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69068_69078], null)));
var ufv___69095 = schema.utils.use_fn_validation;var output_schema69086_69096 = schema.core.Any;var input_schema69087_69097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker69088_69098 = schema.core.checker(input_schema69087_69097);var output_checker69089_69099 = schema.core.checker(output_schema69086_69096);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___69095,output_schema69086_69096,input_schema69087_69097,input_checker69088_69098,output_checker69089_69099){
return (function explicit_schema_key_map(G__69090){var validate__13419__auto__ = ufv___69095.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___69100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69090], null);var temp__4126__auto___69101 = (function (){var G__69093 = args__13420__auto___69100;return (input_checker69088_69098.cljs$core$IFn$_invoke$arity$1 ? input_checker69088_69098.cljs$core$IFn$_invoke$arity$1(G__69093) : input_checker69088_69098.call(null,G__69093));
})();if(cljs.core.truth_(temp__4126__auto___69101))
{var error__13421__auto___69102 = temp__4126__auto___69101;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69102], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,input_schema69087_69097,cljs.core.constant$keyword$1275,args__13420__auto___69100,cljs.core.constant$keyword$1335,error__13421__auto___69102], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__69090;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___69103 = (function (){var G__69094 = o__13422__auto__;return (output_checker69089_69099.cljs$core$IFn$_invoke$arity$1 ? output_checker69089_69099.cljs$core$IFn$_invoke$arity$1(G__69094) : output_checker69089_69099.call(null,G__69094));
})();if(cljs.core.truth_(temp__4126__auto___69103))
{var error__13421__auto___69104 = temp__4126__auto___69103;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69104], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,output_schema69086_69096,cljs.core.constant$keyword$1275,o__13422__auto__,cljs.core.constant$keyword$1335,error__13421__auto___69104], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___69095,output_schema69086_69096,input_schema69087_69097,input_checker69088_69098,output_checker69089_69099))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema69086_69096,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69087_69097], null)));
var ufv___69114 = schema.utils.use_fn_validation;var output_schema69105_69115 = schema.core.Any;var input_schema69106_69116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker69107_69117 = schema.core.checker(input_schema69106_69116);var output_checker69108_69118 = schema.core.checker(output_schema69105_69115);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___69114,output_schema69105_69115,input_schema69106_69116,input_checker69107_69117,output_checker69108_69118){
return (function split_schema_keys(G__69109){var validate__13419__auto__ = ufv___69114.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___69119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69109], null);var temp__4126__auto___69120 = (function (){var G__69112 = args__13420__auto___69119;return (input_checker69107_69117.cljs$core$IFn$_invoke$arity$1 ? input_checker69107_69117.cljs$core$IFn$_invoke$arity$1(G__69112) : input_checker69107_69117.call(null,G__69112));
})();if(cljs.core.truth_(temp__4126__auto___69120))
{var error__13421__auto___69121 = temp__4126__auto___69120;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69121], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,input_schema69106_69116,cljs.core.constant$keyword$1275,args__13420__auto___69119,cljs.core.constant$keyword$1335,error__13421__auto___69121], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__69109;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___69122 = (function (){var G__69113 = o__13422__auto__;return (output_checker69108_69118.cljs$core$IFn$_invoke$arity$1 ? output_checker69108_69118.cljs$core$IFn$_invoke$arity$1(G__69113) : output_checker69108_69118.call(null,G__69113));
})();if(cljs.core.truth_(temp__4126__auto___69122))
{var error__13421__auto___69123 = temp__4126__auto___69122;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69123], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,output_schema69105_69115,cljs.core.constant$keyword$1275,o__13422__auto__,cljs.core.constant$keyword$1335,error__13421__auto___69123], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___69114,output_schema69105_69115,input_schema69106_69116,input_checker69107_69117,output_checker69108_69118))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema69105_69115,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69106_69116], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__69132){var vec__69133 = p__69132;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69133,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69133,(1),null);var pk = (function (){var G__69134 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__69134) : key_project.call(null,G__69134));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__69135 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69135,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69135,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69136 = ok;var G__69137 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__69136,G__69137) : key_combine.call(null,G__69136,G__69137));
})(),(function (){var G__69138 = ov;var G__69139 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__69138,G__69139) : val_combine.call(null,G__69138,G__69139));
})()], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__69140){
var key_project = cljs.core.first(arglist__69140);
arglist__69140 = cljs.core.next(arglist__69140);
var key_combine = cljs.core.first(arglist__69140);
arglist__69140 = cljs.core.next(arglist__69140);
var val_combine = cljs.core.first(arglist__69140);
var maps = cljs.core.rest(arglist__69140);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___69154 = schema.utils.use_fn_validation;var output_schema69142_69155 = plumbing.fnk.schema.InputSchema;var input_schema69143_69156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker69144_69157 = schema.core.checker(input_schema69143_69156);var output_checker69145_69158 = schema.core.checker(output_schema69142_69155);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___69154,output_schema69142_69155,input_schema69143_69156,input_checker69144_69157,output_checker69145_69158){
return (function union_input_schemata(G__69146,G__69147){var validate__13419__auto__ = ufv___69154.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___69159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69146,G__69147], null);var temp__4126__auto___69160 = (function (){var G__69152 = args__13420__auto___69159;return (input_checker69144_69157.cljs$core$IFn$_invoke$arity$1 ? input_checker69144_69157.cljs$core$IFn$_invoke$arity$1(G__69152) : input_checker69144_69157.call(null,G__69152));
})();if(cljs.core.truth_(temp__4126__auto___69160))
{var error__13421__auto___69161 = temp__4126__auto___69160;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69161], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,input_schema69143_69156,cljs.core.constant$keyword$1275,args__13420__auto___69159,cljs.core.constant$keyword$1335,error__13421__auto___69161], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var i1 = G__69146;var i2 = G__69147;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__13419__auto__,ufv___69154,output_schema69142_69155,input_schema69143_69156,input_checker69144_69157,output_checker69145_69158){
return (function (p1__69141_SHARP_){if(schema.core.specific_key_QMARK_(p1__69141_SHARP_))
{return schema.core.explicit_schema_key(p1__69141_SHARP_);
} else
{return cljs.core.constant$keyword$1359;
}
});})(validate__13419__auto__,ufv___69154,output_schema69142_69155,input_schema69143_69156,input_checker69144_69157,output_checker69145_69158))
,((function (validate__13419__auto__,ufv___69154,output_schema69142_69155,input_schema69143_69156,input_checker69144_69157,output_checker69145_69158){
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
});})(validate__13419__auto__,ufv___69154,output_schema69142_69155,input_schema69143_69156,input_checker69144_69157,output_checker69145_69158))
,((function (validate__13419__auto__,ufv___69154,output_schema69142_69155,input_schema69143_69156,input_checker69144_69157,output_checker69145_69158){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__13419__auto__,ufv___69154,output_schema69142_69155,input_schema69143_69156,input_checker69144_69157,output_checker69145_69158))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___69162 = (function (){var G__69153 = o__13422__auto__;return (output_checker69145_69158.cljs$core$IFn$_invoke$arity$1 ? output_checker69145_69158.cljs$core$IFn$_invoke$arity$1(G__69153) : output_checker69145_69158.call(null,G__69153));
})();if(cljs.core.truth_(temp__4126__auto___69162))
{var error__13421__auto___69163 = temp__4126__auto___69162;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69163], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,output_schema69142_69155,cljs.core.constant$keyword$1275,o__13422__auto__,cljs.core.constant$keyword$1335,error__13421__auto___69163], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___69154,output_schema69142_69155,input_schema69143_69156,input_checker69144_69157,output_checker69145_69158))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema69142_69155,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69143_69156], null)));
var ufv___69173 = schema.utils.use_fn_validation;var output_schema69164_69174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema69165_69175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker69166_69176 = schema.core.checker(input_schema69165_69175);var output_checker69167_69177 = schema.core.checker(output_schema69164_69174);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___69173,output_schema69164_69174,input_schema69165_69175,input_checker69166_69176,output_checker69167_69177){
return (function required_toplevel_keys(G__69168){var validate__13419__auto__ = ufv___69173.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___69178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69168], null);var temp__4126__auto___69179 = (function (){var G__69171 = args__13420__auto___69178;return (input_checker69166_69176.cljs$core$IFn$_invoke$arity$1 ? input_checker69166_69176.cljs$core$IFn$_invoke$arity$1(G__69171) : input_checker69166_69176.call(null,G__69171));
})();if(cljs.core.truth_(temp__4126__auto___69179))
{var error__13421__auto___69180 = temp__4126__auto___69179;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69180], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,input_schema69165_69175,cljs.core.constant$keyword$1275,args__13420__auto___69178,cljs.core.constant$keyword$1335,error__13421__auto___69180], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var input_schema = G__69168;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__13419__auto__,ufv___69173,output_schema69164_69174,input_schema69165_69175,input_checker69166_69176,output_checker69167_69177){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__13419__auto__,ufv___69173,output_schema69164_69174,input_schema69165_69175,input_checker69166_69176,output_checker69167_69177))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___69181 = (function (){var G__69172 = o__13422__auto__;return (output_checker69167_69177.cljs$core$IFn$_invoke$arity$1 ? output_checker69167_69177.cljs$core$IFn$_invoke$arity$1(G__69172) : output_checker69167_69177.call(null,G__69172));
})();if(cljs.core.truth_(temp__4126__auto___69181))
{var error__13421__auto___69182 = temp__4126__auto___69181;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69182], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,output_schema69164_69174,cljs.core.constant$keyword$1275,o__13422__auto__,cljs.core.constant$keyword$1335,error__13421__auto___69182], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___69173,output_schema69164_69174,input_schema69165_69175,input_checker69166_69176,output_checker69167_69177))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema69164_69174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69165_69175], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__69197(s__69198){return (new cljs.core.LazySeq(null,(function (){var s__69198__$1 = s__69198;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69198__$1);if(temp__4126__auto__)
{var s__69198__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69198__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69198__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69200 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69199 = (0);while(true){
if((i__69199 < size__4374__auto__))
{var vec__69205 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69199);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69205,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69205,(1),null);cljs.core.chunk_append(b__69200,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__69207 = (i__69199 + (1));
i__69199 = G__69207;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69200),iter__69197(cljs.core.chunk_rest(s__69198__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69200),null);
}
} else
{var vec__69206 = cljs.core.first(s__69198__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69206,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69206,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__69197(cljs.core.rest(s__69198__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__69226(s__69227){return (new cljs.core.LazySeq(null,(function (){var s__69227__$1 = s__69227;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69227__$1);if(temp__4126__auto__)
{var s__69227__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69227__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69227__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69229 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69228 = (0);while(true){
if((i__69228 < size__4374__auto__))
{var vec__69234 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69228);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69234,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69234,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__69229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__69236 = (i__69228 + (1));
i__69228 = G__69236;
continue;
}
} else
{{
var G__69237 = (i__69228 + (1));
i__69228 = G__69237;
continue;
}
}
} else
{{
var G__69238 = (i__69228 + (1));
i__69228 = G__69238;
continue;
}
}
} else
{{
var G__69239 = (i__69228 + (1));
i__69228 = G__69239;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69229),iter__69226(cljs.core.chunk_rest(s__69227__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69229),null);
}
} else
{var vec__69235 = cljs.core.first(s__69227__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69235,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69235,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__69226(cljs.core.rest(s__69227__$2)));
} else
{{
var G__69240 = cljs.core.rest(s__69227__$2);
s__69227__$1 = G__69240;
continue;
}
}
} else
{{
var G__69241 = cljs.core.rest(s__69227__$2);
s__69227__$1 = G__69241;
continue;
}
}
} else
{{
var G__69242 = cljs.core.rest(s__69227__$2);
s__69227__$1 = G__69242;
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
});return iter__4375__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1335,cljs.core.constant$keyword$1361,cljs.core.constant$keyword$1360,fails], null));
} else
{return null;
}
});
var ufv___69269 = schema.utils.use_fn_validation;var output_schema69243_69270 = schema.core.Any;var input_schema69244_69271 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker69245_69272 = schema.core.checker(input_schema69244_69271);var output_checker69246_69273 = schema.core.checker(output_schema69243_69270);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___69269,output_schema69243_69270,input_schema69244_69271,input_checker69245_69272,output_checker69246_69273){
return (function compose_schemata(G__69247,G__69248){var validate__13419__auto__ = true;if(validate__13419__auto__)
{var args__13420__auto___69274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69247,G__69248], null);var temp__4126__auto___69275 = (function (){var G__69259 = args__13420__auto___69274;return (input_checker69245_69272.cljs$core$IFn$_invoke$arity$1 ? input_checker69245_69272.cljs$core$IFn$_invoke$arity$1(G__69259) : input_checker69245_69272.call(null,G__69259));
})();if(cljs.core.truth_(temp__4126__auto___69275))
{var error__13421__auto___69276 = temp__4126__auto___69275;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69276], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,input_schema69244_69271,cljs.core.constant$keyword$1275,args__13420__auto___69274,cljs.core.constant$keyword$1335,error__13421__auto___69276], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var G__69262 = G__69247;var vec__69264 = G__69262;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69264,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69264,(1),null);var G__69263 = G__69248;var vec__69265 = G__69263;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69265,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69265,(1),null);var G__69262__$1 = G__69262;var G__69263__$1 = G__69263;while(true){
var vec__69266 = G__69262__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69266,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69266,(1),null);var vec__69267 = G__69263__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69267,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69267,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13419__auto__)
{var temp__4126__auto___69277 = (function (){var G__69268 = o__13422__auto__;return (output_checker69246_69273.cljs$core$IFn$_invoke$arity$1 ? output_checker69246_69273.cljs$core$IFn$_invoke$arity$1(G__69268) : output_checker69246_69273.call(null,G__69268));
})();if(cljs.core.truth_(temp__4126__auto___69277))
{var error__13421__auto___69278 = temp__4126__auto___69277;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69278], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,output_schema69243_69270,cljs.core.constant$keyword$1275,o__13422__auto__,cljs.core.constant$keyword$1335,error__13421__auto___69278], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___69269,output_schema69243_69270,input_schema69244_69271,input_checker69245_69272,output_checker69246_69273))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema69243_69270,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69244_69271], null)));
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
var ufv___69381 = schema.utils.use_fn_validation;var output_schema69279_69382 = schema.core.Any;var input_schema69280_69383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker69281_69384 = schema.core.checker(input_schema69280_69383);var output_checker69282_69385 = schema.core.checker(output_schema69279_69382);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385){
return (function split_schema(G__69283,G__69284){var validate__13419__auto__ = ufv___69381.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___69386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69283,G__69284], null);var temp__4126__auto___69387 = (function (){var G__69333 = args__13420__auto___69386;return (input_checker69281_69384.cljs$core$IFn$_invoke$arity$1 ? input_checker69281_69384.cljs$core$IFn$_invoke$arity$1(G__69333) : input_checker69281_69384.call(null,G__69333));
})();if(cljs.core.truth_(temp__4126__auto___69387))
{var error__13421__auto___69388 = temp__4126__auto___69387;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69388], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,input_schema69280_69383,cljs.core.constant$keyword$1275,args__13420__auto___69386,cljs.core.constant$keyword$1335,error__13421__auto___69388], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__69283;var ks = G__69284;while(true){
var ks__$1 = cljs.core.set(ks);var iter__4375__auto__ = ((function (ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385){
return (function iter__69334(s__69335){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385){
return (function (){var s__69335__$1 = s__69335;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69335__$1);if(temp__4126__auto__)
{var s__69335__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69335__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69335__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69337 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69336 = (0);while(true){
if((i__69336 < size__4374__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69336);cljs.core.chunk_append(b__69337,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (i__69336,in_QMARK_,c__4373__auto__,size__4374__auto__,b__69337,s__69335__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385){
return (function iter__69360(s__69361){return (new cljs.core.LazySeq(null,((function (i__69336,in_QMARK_,c__4373__auto__,size__4374__auto__,b__69337,s__69335__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385){
return (function (){var s__69361__$1 = s__69361;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__69361__$1);if(temp__4126__auto____$1)
{var s__69361__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__69361__$2))
{var c__4373__auto____$1 = cljs.core.chunk_first(s__69361__$2);var size__4374__auto____$1 = cljs.core.count(c__4373__auto____$1);var b__69363 = cljs.core.chunk_buffer(size__4374__auto____$1);if((function (){var i__69362 = (0);while(true){
if((i__69362 < size__4374__auto____$1))
{var vec__69368 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto____$1,i__69362);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69368,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69368,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__69363,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__69389 = (i__69362 + (1));
i__69362 = G__69389;
continue;
}
} else
{{
var G__69390 = (i__69362 + (1));
i__69362 = G__69390;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69363),iter__69360(cljs.core.chunk_rest(s__69361__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69363),null);
}
} else
{var vec__69369 = cljs.core.first(s__69361__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69369,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69369,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__69360(cljs.core.rest(s__69361__$2)));
} else
{{
var G__69391 = cljs.core.rest(s__69361__$2);
s__69361__$1 = G__69391;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__69336,in_QMARK_,c__4373__auto__,size__4374__auto__,b__69337,s__69335__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385))
,null,null));
});})(i__69336,in_QMARK_,c__4373__auto__,size__4374__auto__,b__69337,s__69335__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385))
;return iter__4375__auto__(s);
})()));
{
var G__69392 = (i__69336 + (1));
i__69336 = G__69392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69337),iter__69334(cljs.core.chunk_rest(s__69335__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69337),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__69335__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (in_QMARK_,s__69335__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385){
return (function iter__69370(s__69371){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__69335__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385){
return (function (){var s__69371__$1 = s__69371;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__69371__$1);if(temp__4126__auto____$1)
{var s__69371__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__69371__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69371__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69373 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69372 = (0);while(true){
if((i__69372 < size__4374__auto__))
{var vec__69378 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69372);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69378,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69378,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__69373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__69393 = (i__69372 + (1));
i__69372 = G__69393;
continue;
}
} else
{{
var G__69394 = (i__69372 + (1));
i__69372 = G__69394;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69373),iter__69370(cljs.core.chunk_rest(s__69371__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69373),null);
}
} else
{var vec__69379 = cljs.core.first(s__69371__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69379,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69379,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__69370(cljs.core.rest(s__69371__$2)));
} else
{{
var G__69395 = cljs.core.rest(s__69371__$2);
s__69371__$1 = G__69395;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__69335__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385))
,null,null));
});})(in_QMARK_,s__69335__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385))
;return iter__4375__auto__(s);
})()),iter__69334(cljs.core.rest(s__69335__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385))
,null,null));
});})(ks__$1,validate__13419__auto__,ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385))
;return iter__4375__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___69396 = (function (){var G__69380 = o__13422__auto__;return (output_checker69282_69385.cljs$core$IFn$_invoke$arity$1 ? output_checker69282_69385.cljs$core$IFn$_invoke$arity$1(G__69380) : output_checker69282_69385.call(null,G__69380));
})();if(cljs.core.truth_(temp__4126__auto___69396))
{var error__13421__auto___69397 = temp__4126__auto___69396;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69397], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,output_schema69279_69382,cljs.core.constant$keyword$1275,o__13422__auto__,cljs.core.constant$keyword$1335,error__13421__auto___69397], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___69381,output_schema69279_69382,input_schema69280_69383,input_checker69281_69384,output_checker69282_69385))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema69279_69382,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69280_69383], null)));
var ufv___69432 = schema.utils.use_fn_validation;var output_schema69398_69433 = plumbing.fnk.schema.GraphIOSchemata;var input_schema69399_69434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker69400_69435 = schema.core.checker(input_schema69399_69434);var output_checker69401_69436 = schema.core.checker(output_schema69398_69433);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___69432,output_schema69398_69433,input_schema69399_69434,input_checker69400_69435,output_checker69401_69436){
return (function sequence_schemata(G__69402,G__69403){var validate__13419__auto__ = ufv___69432.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___69437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69402,G__69403], null);var temp__4126__auto___69438 = (function (){var G__69418 = args__13420__auto___69437;return (input_checker69400_69435.cljs$core$IFn$_invoke$arity$1 ? input_checker69400_69435.cljs$core$IFn$_invoke$arity$1(G__69418) : input_checker69400_69435.call(null,G__69418));
})();if(cljs.core.truth_(temp__4126__auto___69438))
{var error__13421__auto___69439 = temp__4126__auto___69438;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69439], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,input_schema69399_69434,cljs.core.constant$keyword$1275,args__13420__auto___69437,cljs.core.constant$keyword$1335,error__13421__auto___69439], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var G__69422 = G__69402;var vec__69424 = G__69422;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69424,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69424,(1),null);var G__69423 = G__69403;var vec__69425 = G__69423;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69425,(0),null);var vec__69426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69425,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69426,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69426,(1),null);var G__69422__$1 = G__69422;var G__69423__$1 = G__69423;while(true){
var vec__69427 = G__69422__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69427,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69427,(1),null);var vec__69428 = G__69423__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69428,(0),null);var vec__69429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69428,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69429,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69429,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__69430 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69430,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69430,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___69440 = (function (){var G__69431 = o__13422__auto__;return (output_checker69401_69436.cljs$core$IFn$_invoke$arity$1 ? output_checker69401_69436.cljs$core$IFn$_invoke$arity$1(G__69431) : output_checker69401_69436.call(null,G__69431));
})();if(cljs.core.truth_(temp__4126__auto___69440))
{var error__13421__auto___69441 = temp__4126__auto___69440;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13421__auto___69441], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,output_schema69398_69433,cljs.core.constant$keyword$1275,o__13422__auto__,cljs.core.constant$keyword$1335,error__13421__auto___69441], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___69432,output_schema69398_69433,input_schema69399_69434,input_checker69400_69435,output_checker69401_69436))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema69398_69433,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69399_69434], null)));
